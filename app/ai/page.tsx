import type { Metadata } from "next";
import Header from "../components/Header";
import AiHero from "../components/ai/AiHero";
import AiStory from "../components/ai/AiStory";
import AiPillars from "../components/ai/AiPillars";
import AiFaq from "../components/ai/AiFaq";
import AiStories from "../components/ai/AiStories";

export const metadata: Metadata = {
  title: "Our AI",
  description: "Affectionate intelligence, built into every home, for you.",
};

export default function AiPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-warm-grey">
        <AiHero />
        <AiStory />
        <AiPillars />
        <AiFaq />
        <AiStories />
      </main>
    </>
  );
}
