"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import { hasSanityConfig } from "@/sanity/env";

export default function StudioPage() {
  if (!hasSanityConfig()) {
    return (
      <main className="mx-auto max-w-xl px-6 py-24">
        <h1 className="font-display text-3xl">Sanity Studio</h1>
        <p className="mt-4 text-muted">
          Add <code className="text-accent">NEXT_PUBLIC_SANITY_PROJECT_ID</code> and{" "}
          <code className="text-accent">NEXT_PUBLIC_SANITY_DATASET</code> to{" "}
          <code>.env.local</code> (see <code>.env.example</code>), then restart the
          dev server. The Free plan is enough for this blog.
        </p>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
