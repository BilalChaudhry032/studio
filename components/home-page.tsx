import { Footer } from "@/components/footer";
import { ProcessCanvas } from "@/components/process-canvas";
import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { InsightsSection } from "@/components/sections/insights";
import { PricingSection } from "@/components/sections/pricing";
import { ProcessSection } from "@/components/sections/process";
import { ResultsSection } from "@/components/sections/results";
import { ServicesSection } from "@/components/sections/services";
import { TeamSection } from "@/components/sections/team";
import { TrustedSection } from "@/components/sections/trusted";
import { ValueSection } from "@/components/sections/value";
import { WorkSection } from "@/components/sections/work";
import type { PostListItem } from "@/lib/posts";

export function HomePage({ posts }: { posts: PostListItem[] }) {
  return (
    <div id="story">
      <div className="lg:hidden sticky top-16 z-30 border-b border-white/10 bg-ink/90 px-4 py-3 backdrop-blur">
        <div className="h-40">
          <ProcessCanvas compact />
        </div>
      </div>

      <div className="mx-auto grid max-w-story lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-10 lg:px-8">
        <div>
          <HeroSection />
          <TrustedSection />
          <ValueSection />
          <ServicesSection />
          <WorkSection />
          <ProcessSection />
          <ResultsSection />
          <PricingSection />
          <TeamSection />
          <InsightsSection posts={posts} />
          <ContactSection />
          <Footer />
        </div>
        <aside className="hidden lg:block">
          <div className="sticky top-24 h-[calc(100vh-7rem)] py-8">
            <ProcessCanvas />
          </div>
        </aside>
      </div>
    </div>
  );
}
