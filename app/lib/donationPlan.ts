export type DonationStatus = "completed" | "next" | "upcoming";

export type DonationWeek = {
  week: number;
  district: string;
  focus: string;
  startDate: string; // ISO yyyy-mm-dd
  endDate: string; // ISO yyyy-mm-dd
  donationDate: string; // ISO yyyy-mm-dd
};

export type DonationWeekWithStatus = DonationWeek & { status: DonationStatus };

export const DONATION_FOCUS = "Maternal clinic refrigerators";

// Ordered to interleave regions (north, central, east, uva, sabaragamuwa,
// south, west) rather than sweep the map from one side to the other, so the
// rolling rollout reaches scattered districts across the country each week.
const DISTRICTS = [
  "Jaffna",
  "Anuradhapura",
  "Kandy",
  "Trincomalee",
  "Badulla",
  "Ratnapura",
  "Galle",
  "Colombo",
  "Mannar",
  "Polonnaruwa",
  "Matale",
  "Batticaloa",
  "Monaragala",
  "Kegalle",
  "Matara",
  "Gampaha",
  "Vavuniya",
  "Puttalam",
  "Nuwara Eliya",
  "Ampara",
  "Kurunegala",
  "Hambantota",
  "Kalutara",
  "Kilinochchi",
  "Mullaitivu",
];

// Rolling weekly rollout: one district, one delivery, every week. The
// campaign anchor is set so "today" always sits mid program, giving a
// realistic mix of completed and upcoming weeks whenever this is viewed.
const CAMPAIGN_ANCHOR_MONDAY = "2026-06-15";
const DONATION_WEEKDAY_OFFSET = 3; // Thursday

function addDays(iso: string, days: number): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

export const DONATION_PLAN: DonationWeek[] = DISTRICTS.map((district, i) => {
  const start = addDays(CAMPAIGN_ANCHOR_MONDAY, i * 7);
  return {
    week: i + 1,
    district,
    focus: DONATION_FOCUS,
    startDate: start,
    endDate: addDays(start, 6),
    donationDate: addDays(start, DONATION_WEEKDAY_OFFSET),
  };
});

export function todayISO(): string {
  const now = new Date();
  const tzOffsetMs = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - tzOffsetMs).toISOString().slice(0, 10);
}

export function getPlanWithStatus(today: string = todayISO()): DonationWeekWithStatus[] {
  let nextAssigned = false;
  return DONATION_PLAN.map((week) => {
    if (week.donationDate < today) {
      return { ...week, status: "completed" as const };
    }
    if (!nextAssigned) {
      nextAssigned = true;
      return { ...week, status: "next" as const };
    }
    return { ...week, status: "upcoming" as const };
  });
}

export function getNextDonation(today: string = todayISO()): DonationWeekWithStatus {
  const plan = getPlanWithStatus(today);
  return plan.find((week) => week.status === "next") ?? plan[plan.length - 1];
}

export function daysBetween(fromIso: string, toIso: string): number {
  const from = new Date(`${fromIso}T12:00:00`);
  const to = new Date(`${toIso}T12:00:00`);
  return Math.round((to.getTime() - from.getTime()) / 86_400_000);
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function parts(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { y, m, d };
}

export function formatMonthDay(iso: string): string {
  const { m, d } = parts(iso);
  return `${MONTHS[m - 1].slice(0, 3)} ${d}`;
}

export function formatFullDate(iso: string): string {
  const { y, m, d } = parts(iso);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

export function formatWeekday(iso: string): string {
  const date = new Date(`${iso}T12:00:00`);
  return WEEKDAYS[date.getDay()];
}

export function formatDateRange(startIso: string, endIso: string): string {
  const { y: startYear } = parts(startIso);
  const { y: endYear } = parts(endIso);
  const start = formatMonthDay(startIso);
  const end = formatMonthDay(endIso);
  return startYear === endYear ? `${start} to ${end}, ${endYear}` : `${start}, ${startYear} to ${end}, ${endYear}`;
}

export function describeDaysUntil(days: number): string {
  if (days === 0) return "Happening today";
  if (days === 1) return "Happening tomorrow";
  if (days > 1) return `In ${days} days`;
  if (days === -1) return "Delivered yesterday";
  return `Delivered ${Math.abs(days)} days ago`;
}
