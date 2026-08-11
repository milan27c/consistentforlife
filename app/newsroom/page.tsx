import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import NewsroomBrowser from "../components/news/NewsroomBrowser";

export const metadata: Metadata = {
  title: "Newsroom",
  description: "The latest announcements, launches, and milestones, all in one place.",
};

export default function NewsroomPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-warm-grey">
        <div className="section-px pb-16 pt-16 sm:pt-20">
          <div className="mt-4 md:mt-0">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Newsroom" }]} />
          </div>

          <h1 className="mt-6 font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Newsroom
          </h1>
          <p className="mt-3 max-w-xl font-body text-sm text-neutral-600 sm:text-base">
            Announcements, launches, and milestones from across the business.
          </p>

          <div className="mt-12">
            <Suspense fallback={null}>
              <NewsroomBrowser />
            </Suspense>
          </div>
        </div>
      </main>
    </>
  );
}
