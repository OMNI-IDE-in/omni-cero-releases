import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Box,
  Cpu,
  Database,
  Layers,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, Eyebrow } from "@/components/cero-site";
import { buildBreadcrumbSchema, pageHead } from "@/lib/cero";

import hold36Mono from "@/assets/research/hold36-mono.jpg";
import vrtLumbosacral from "@/assets/research/vrt_v2_lumbosacral.png";
import lumbar512Img from "@/assets/research/omnispine-gpu-lumbar-512.png";

export const Route = createFileRoute("/research/")({
  component: ResearchHub,
  head: () =>
    pageHead(
      "Omni Research Lab — Clinical Fluoroscopy & 3D CBCT Innovation | BABELL GROUP",
      "Explore Omni Research Lab by BABELL GROUP: ClearView & TrueTissue V7 real-time C-arm enhancement and the OmniCBCT 3D Engine for motorized mobile C-arms.",
      "/research",
      {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Research", path: "/research" },
          ]),
          {
            "@type": "CollectionPage",
            name: "Omni Research Lab — BABELL GROUP",
            description:
              "Clinical imaging research and validation programs by Omni Research Lab, BABELL GROUP.",
            url: "https://cero.omniide.com/research",
            publisher: {
              "@type": "Organization",
              name: "BABELL GROUP",
              url: "https://babellgroup.com/",
            },
          },
        ],
      },
      "Omni Research Lab, BABELL GROUP, ClearView v7, TrueTissue v7, OmniCBCT 3D Engine, C-arm 3D CBCT, fluoroscopy enhancement, 9-DOF calibration"
    ),
});

function ResearchHub() {
  return (
    <>
      {/* Hub Hero */}
      <section className="page-intro">
        <div className="site-width">
          <Eyebrow>Omni Research Lab &middot; BABELL GROUP</Eyebrow>
          <h1>
            Advancing Intraoperative
            <br />
            Imaging Physics.
          </h1>
          <p>
            Inside Omni Research Lab, BABELL GROUP engineers foundational imaging engines that
            extract diagnostic-grade 2D and 3D clarity from standard hospital C-arms &mdash;
            validated on real clinical cohorts and deployed 100% offline.
          </p>
        </div>
      </section>

      {/* Two Flagship Research Programs */}
      <section className="section bg-background">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <Eyebrow>Research Programs</Eyebrow>
              <h2>
                Three Breakthrough Engines.
                <br />
                Measurable Clinical Proof.
              </h2>
            </div>
            <p className="section-intro">
              Select a research program below to inspect interactive clinical comparisons, true
              Axial CT proofs, 3D cinematic reconstructions, and verified scorecards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Program 01: ClearView & TrueTissue V7 */}
            <div className="rounded-xl border border-border bg-card overflow-hidden flex flex-col justify-between shadow-xs transition-all hover:shadow-md">
              <div>
                <div className="relative h-60 sm:h-64 bg-black overflow-hidden border-b border-border">
                  <img
                    src={hold36Mono}
                    alt="ClearView V7 Lumbar Spine Fluoroscopy"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-background/90 text-foreground text-[10px] font-bold uppercase tracking-wider border border-border">
                    01 / Live Fluoroscopy Engine
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">
                    For LIVE CERO &middot; 36 Real Patient Cases
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mt-2">
                    ClearView &amp; TrueTissue V7
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    Real-time C-arm image enhancement engine engineered to extract substantially more
                    diagnostic detail from native 720&times;576 PAL video feeds &mdash; with zero
                    specialized GPU required.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-border">
                    <div>
                      <div className="text-lg font-extrabold text-primary">+33.5%</div>
                      <div className="text-[11px] text-muted-foreground">SNR Gain over V6</div>
                    </div>
                    <div>
                      <div className="text-lg font-extrabold text-primary">2&times;</div>
                      <div className="text-[11px] text-muted-foreground">PAL Scanline Drop</div>
                    </div>
                    <div>
                      <div className="text-lg font-extrabold text-primary">94.5 FPS</div>
                      <div className="text-[11px] text-muted-foreground">CPU Real-Time</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 py-4 bg-background border-t border-border flex flex-wrap items-center justify-between gap-3">
                <Link
                  to="/research/v7"
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1.5"
                >
                  Inspect 4-Case Interactive Showcase <ArrowRight className="size-3.5" />
                </Link>
                <Button variant="brand" size="sm" asChild>
                  <Link to="/research/v7">Explore V7 Research</Link>
                </Button>
              </div>
            </div>

            {/* Program 02: OmniCBCT 3D Engine */}
            <div className="rounded-xl border border-border bg-card overflow-hidden flex flex-col justify-between shadow-xs transition-all hover:shadow-md">
              <div>
                <div className="relative h-60 sm:h-64 bg-black overflow-hidden border-b border-border">
                  <img
                    src={vrtLumbosacral}
                    alt="OmniCBCT 3D Cinematic Spine Volume Rendering"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-background/90 text-foreground text-[10px] font-bold uppercase tracking-wider border border-border">
                    02 / 3D Spine CBCT Engine
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">
                    9-DOF Motorized C-Arm Reconstruction &middot; 3 Spine Regions
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mt-2">
                    OmniCBCT 3D Engine
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    Drop-in 3D Spine CBCT reconstruction engine for motorized mobile C-arms.
                    Overcomes gantry gravity sag, short-scan shading, truncation, and titanium
                    screw starbursts.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-border">
                    <div>
                      <div className="text-lg font-extrabold text-primary">0.1213 px</div>
                      <div className="text-[11px] text-muted-foreground">9-DOF Precision</div>
                    </div>
                    <div>
                      <div className="text-lg font-extrabold text-primary">5.6&times;</div>
                      <div className="text-[11px] text-muted-foreground">Higher Fidelity (SSIM)</div>
                    </div>
                    <div>
                      <div className="text-lg font-extrabold text-primary">+2.24 dB</div>
                      <div className="text-[11px] text-muted-foreground">Screw Canal Clarity</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 py-4 bg-background border-t border-border flex flex-wrap items-center justify-between gap-3">
                <Link
                  to="/research/omnicbct"
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1.5"
                >
                  View 4 Cinematic 3D Renders &amp; Proofs <ArrowRight className="size-3.5" />
                </Link>
                <Button variant="brand" size="sm" asChild>
                  <Link to="/research/omnicbct">Explore OmniCBCT 3D</Link>
                </Button>
              </div>
            </div>

            {/* Program 03: OmniSpine Axial Engine */}
            <div className="rounded-xl border border-border bg-card overflow-hidden flex flex-col justify-between shadow-xs transition-all hover:shadow-md">
              <div>
                <div className="relative h-60 sm:h-64 bg-[#0d1829] overflow-hidden border-b border-border">
                  <img
                    src={lumbar512Img}
                    alt="OmniSpine GPU 512x512x320 Lumbar Spine 3D Reconstruction"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-background/90 text-foreground text-[10px] font-bold uppercase tracking-wider border border-border">
                    03 / CT-Free Axial Spine
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">
                    2D C-Arm X-Rays &rarr; True Axial CT &middot; Zero Pre-Op CT
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mt-2">
                    OmniSpine&trade; Axial Engine
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    Converts standard rotating 2D mobile C-arm X-rays into crisp Axial spine slices
                    and 16-bit CT DICOM series &mdash; validated on real hospital Siemens &amp;
                    100 kV bone scans.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-border">
                    <div>
                      <div className="text-lg font-extrabold text-primary">0.68 mm</div>
                      <div className="text-[11px] text-muted-foreground">Axial Resolution</div>
                    </div>
                    <div>
                      <div className="text-lg font-extrabold text-primary">4.4&times;</div>
                      <div className="text-[11px] text-muted-foreground">0.897 SSIM Gain</div>
                    </div>
                    <div>
                      <div className="text-lg font-extrabold text-primary">120&deg;&ndash;216&deg;</div>
                      <div className="text-[11px] text-muted-foreground">Arc Support</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 py-4 bg-background border-t border-border flex flex-wrap items-center justify-between gap-3">
                <Link
                  to="/research/omnispine"
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1.5"
                >
                  Inspect Real-Machine Axial Proofs <ArrowRight className="size-3.5" />
                </Link>
                <Button variant="brand" size="sm" asChild>
                  <Link to="/research/omnispine">Explore OmniSpine</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise R&D Standards */}
      <section className="section bg-muted/30 border-t border-border">
        <div className="site-width">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-lg border border-border bg-background p-6">
              <ShieldCheck className="size-5 text-primary" />
              <h4 className="text-sm font-bold text-foreground mt-3">Clinical Cohort Verified</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">
                Every engine is benchmarked against real human clinical datasets and extreme
                degraded-hardware stress scenarios.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <Cpu className="size-5 text-primary" />
              <h4 className="text-sm font-bold text-foreground mt-3">CPU-First Performance</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">
                Engineered for standard hospital workstations without requiring expensive external
                compute clusters.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <Lock className="size-5 text-primary" />
              <h4 className="text-sm font-bold text-foreground mt-3">100% Offline &amp; Private</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">
                Zero cloud round-trips, zero external telemetry. All processing stays inside the
                operating room.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <Database className="size-5 text-primary" />
              <h4 className="text-sm font-bold text-foreground mt-3">OEM &amp; NDA Evaluations</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">
                Institutional partners can request full validation datasets or 48-hour blind
                hardware proofs via our contact team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
