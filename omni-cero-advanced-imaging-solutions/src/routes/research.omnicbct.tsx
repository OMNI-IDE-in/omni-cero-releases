import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Box,
  CheckCircle2,
  Cpu,
  Database,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, Eyebrow } from "@/components/cero-site";
import { buildBreadcrumbSchema, pageHead } from "@/lib/cero";

import vrtLumbosacral from "@/assets/research/vrt_v2_lumbosacral.png";
import vrtPureLumbar from "@/assets/research/vrt_v2_pure_lumbar_L1_L5.png";
import vrtThoracicRibs from "@/assets/research/vrt_v2_thoracic_ribs.png";
import vrtScrewScout from "@/assets/research/vrt_v2_screw_scout.png";

interface CinematicRender {
  id: string;
  region: string;
  badge: string;
  title: string;
  metrics: string;
  summary: string;
  image: string;
}

const CINEMATIC_RENDERS: CinematicRender[] = [
  {
    id: "lumbosacral",
    region: "L4 – L5 – S1 & Iliac Crests",
    badge: "3D Cinematic VRT · 01",
    title: "Lumbosacral Spine (120 Sagging Shots)",
    metrics: "PSNR: 32.69 dB (+13.74 dB) · SSIM: 0.7257 (5.6×)",
    summary:
      "Recovers crisp pedicle walls, facet joints, and sacral cortical boundaries from 120 orbital C-arm views under multi-axis gravity flex.",
    image: vrtLumbosacral,
  },
  {
    id: "pure-lumbar",
    region: "L1 – L5 (Zero Pelvis)",
    badge: "3D Cinematic VRT · 02",
    title: "Pure Lumbar Spine",
    metrics: "PSNR: 34.28 dB (+10.72 dB) · SSIM: 0.7025",
    summary:
      "Demonstrates anatomy-agnostic 3D reconstruction across isolated lumbar segments without anatomical shape memorization or per-region tuning.",
    image: vrtPureLumbar,
  },
  {
    id: "thoracic-ribs",
    region: "T3 – T10 & Posterior Ribcage",
    badge: "3D Cinematic VRT · 03",
    title: "Thoracic Spine & Ribcage",
    metrics: "PSNR: 30.36 dB (+16.92 dB) · SSIM: 0.7901",
    summary:
      "Resolves complex overlapping ribcage and thoracic vertebral anatomy with clean cortical bone separation at 1.11 mm isotropic resolution.",
    image: vrtThoracicRibs,
  },
  {
    id: "screw-scout",
    region: "Bilateral L5 Pedicle Screws",
    badge: "3D Screw-Scout · 04",
    title: "Titanium Implant & Canal Clarity",
    metrics: "Canal Clarity: +2.24 dB (13.65 → 15.90 dB)",
    summary:
      "Suppresses dense titanium starburst streaks across the spinal canal, enabling clear intraoperative verification of bilateral screw seating.",
    image: vrtScrewScout,
  },
];

const HEADLINE_KPIS = [
  {
    value: "0.1213 px",
    label: "9-DOF Calibration Precision",
    detail: "Sub-pixel tracking even at ±8.5 mm extreme sag",
  },
  {
    value: "5.6× Higher",
    label: "Structural Fidelity",
    detail: "SSIM 0.1288 → 0.7257 · PSNR 32.69 dB",
  },
  {
    value: "+2.24 dB",
    label: "Screw Canal Clarity",
    detail: "Clears titanium pedicle screw starburst streaks",
  },
  {
    value: "3 / 3 Regions",
    label: "Multi-Anatomy Proven",
    detail: "Lumbosacral, Pure Lumbar & Thoracic + Ribs",
  },
  {
    value: "< 0.5 s GPU",
    label: "144³ Isotropic Speed",
    detail: "5.26 s on standard CPU · 1.11 mm isotropic",
  },
];

const BARRIERS = [
  {
    num: "01",
    title: "Gravity-Induced Mechanical Flex (Up to ±8.5 mm)",
    desc: "Unlike closed CT rings, open mobile C-arms bend dynamically under gravity during orbital spin. Our 9-DOF multi-axis compensation eliminates double-contour bone smearing.",
  },
  {
    num: "02",
    title: "Non-360° Short-Scan Redundancy Shading",
    desc: "Surgical tables restrict C-arm arcs to ~198°. Standard backprojection double-counts redundant rays, creating shading artifacts that our engine resolves cleanly.",
  },
  {
    num: "03",
    title: "Lateral Torso & Abdomen Truncation",
    desc: "Patient shoulders, ribcages, and hips extend wider than flat-panel detectors. Uncompensated truncation induces cupping bias and degrades bone contrast.",
  },
  {
    num: "04",
    title: "Titanium Pedicle Screw Starbursts",
    desc: "Dense metal implants project dark starburst bands directly across the spinal canal. OmniCBCT restores canal visibility so surgeons can confirm pedicle wall integrity.",
  },
];

const STRESS_SCORECARD = [
  {
    scenario: "1. Extreme Gravity Sag (±8.5 mm, ±3°)",
    baseline: "18.67 dB | 0.1195 SSIM",
    peak: "32.58 dB | 0.7299 SSIM",
    outcome: "0.1165 px residual (3.199 mm 3D)",
  },
  {
    scenario: "2. Ultra-Low-Dose (3× Noise)",
    baseline: "23.93 dB | 0.4021 SSIM",
    peak: "26.24 dB | 0.5169 SSIM",
    outcome: "+2.31 dB | +0.115 SSIM",
  },
  {
    scenario: "3. Sparse-View Spin (44 Shots)",
    baseline: "18.76 dB | 0.0904 SSIM",
    peak: "27.83 dB | 0.6043 SSIM",
    outcome: "+9.07 dB (-63% Radiation Dose)",
  },
  {
    scenario: "4. Compact C-Arm (165° Arc)",
    baseline: "19.30 dB | 0.1001 SSIM",
    peak: "26.08 dB | 0.3852 SSIM",
    outcome: "+6.78 dB | +0.285 SSIM",
  },
  {
    scenario: "5. Mid-Spin Wobble (Unfixtured)",
    baseline: "0.5557 Raw SSIM",
    peak: "0.5850 Self-Calibrated",
    outcome: "+6.8% Edge Sharpness",
  },
];

export const Route = createFileRoute("/research/omnicbct")({
  component: ResearchOmniCbctPage,
  head: () =>
    pageHead(
      "OmniCBCT 3D Engine — 9-DOF 3D Spine CBCT for Mobile C-Arms | BABELL GROUP",
      "OmniCBCT 3D Engine by Omni Research Lab, BABELL GROUP: 0.1213 px 9-DOF calibration precision, 5.6x structural fidelity, +2.24 dB titanium screw canal clarity, and 3D Cinematic VRT across Lumbosacral, Lumbar, and Thoracic spine.",
      "/research/omnicbct",
      {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Research", path: "/research" },
            { name: "OmniCBCT 3D Engine", path: "/research/omnicbct" },
          ]),
          {
            "@type": "WebPage",
            name: "OmniCBCT 3D Spine Engine — Omni Research Lab",
            description:
              "Multi-dataset clinical validation and 3D Cinematic VRT showcase for the OmniCBCT 3D Spine Engine by BABELL GROUP.",
            url: "https://cero.omniide.com/research/omnicbct",
            publisher: {
              "@type": "Organization",
              name: "BABELL GROUP",
              url: "https://babellgroup.com/",
            },
          },
        ],
      },
      "OmniCBCT, 3D Spine CBCT, motorized mobile C-arm 3D, 9-DOF C-arm calibration, 3D Cinematic VRT, titanium screw metal artifact reduction, BABELL GROUP, Omni Research Lab"
    ),
});

function ResearchOmniCbctPage() {
  const [selectedId, setSelectedId] = useState<string>(CINEMATIC_RENDERS[0].id);
  const activeRender =
    CINEMATIC_RENDERS.find((r) => r.id === selectedId) ?? CINEMATIC_RENDERS[0];

  return (
    <>
      {/* Hero / Intro */}
      <section className="page-intro">
        <div className="site-width">
          <Link
            to="/research"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline mb-4"
          >
            <ArrowLeft className="size-3.5" /> Back to Omni Research Lab
          </Link>
          <Eyebrow>Omni Research Lab &middot; BABELL GROUP</Eyebrow>
          <h1>
            OmniCBCT 3D Engine.
            <br />
            3D Spine CBCT for Motorized Mobile C-Arms.
          </h1>
          <p>
            Drop-in 3D reconstruction software engineered at Omni Research Lab, BABELL GROUP.
            Unlocks crisp 1.11 mm isotropic 3D spine CT volumes and 3D Cinematic VRT directly from
            existing motorized mobile C-arm hardware &mdash; with 9-DOF multi-axis sag
            compensation and titanium screw artifact clearance.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="brand" asChild>
              <a href="#cinematic-vrt" className="flex items-center gap-2">
                Inspect 3D Cinematic VRT <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link
                to="/contact"
                search={{ product: "OmniCBCT 3D Engine Evaluation" }}
                className="flex items-center gap-2"
              >
                Request 48-Hour Blind OEM Proof <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Headline KPIs */}
      <section className="border-b border-border bg-muted/40 py-10">
        <div className="site-width">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {HEADLINE_KPIS.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-border bg-background p-4 sm:p-5 shadow-xs"
              >
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-primary">
                  {item.value}
                </div>
                <div className="mt-1.5 text-xs font-bold text-foreground uppercase tracking-wider">
                  {item.label}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 3D Cinematic VRT Showcase (Responsive Spotlight + 4-Card Grid) */}
      <section id="cinematic-vrt" className="section bg-background">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <Eyebrow>Multi-Anatomy 3D Validation</Eyebrow>
              <h2>
                4 Clinical 3D Cinematic
                <br />
                Volume Reconstructions
              </h2>
            </div>
            <p className="section-intro">
              Verified across 3 human spinal regions and titanium-instrumented vertebrae without
              anatomical tuning. Tap any 3D render below to inspect it in high resolution.
            </p>
          </div>

          {/* Interactive Spotlight Stage */}
          <div
            className="rounded-xl border border-border bg-card p-4 sm:p-6 md:p-8 shadow-sm"
            onContextMenu={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="relative w-full aspect-square sm:aspect-[4/3] bg-black rounded-xl overflow-hidden border border-border shadow-md">
                  <img
                    src={activeRender.image}
                    alt={activeRender.title}
                    className="w-full h-full object-contain pointer-events-none"
                    draggable={false}
                  />
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold border border-white/15">
                    {activeRender.badge}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-primary">
                  {activeRender.region}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {activeRender.title}
                </h3>
                <div className="inline-block rounded-md bg-secondary px-3 py-1.5 text-xs font-bold text-primary">
                  {activeRender.metrics}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {activeRender.summary}
                </p>

                <div className="pt-2 space-y-2 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-foreground font-medium">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    <span>144&times;144&times;144 isotropic volume @ 1.11 mm voxel spacing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground font-medium">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    <span>Standard DICOM CT export with calibrated Hounsfield Units</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4-Card Responsive Selector Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 pt-6 border-t border-border">
              {CINEMATIC_RENDERS.map((item) => {
                const active = item.id === activeRender.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedId(item.id)}
                    className={`group rounded-lg border text-left overflow-hidden transition-all cursor-pointer ${
                      active
                        ? "border-primary ring-2 ring-primary/25 bg-background shadow-sm"
                        : "border-border bg-background hover:border-primary/50"
                    }`}
                  >
                    <div className="aspect-[4/3] bg-black overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                    <div className="p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-primary">
                        {item.region}
                      </div>
                      <div className="text-xs font-bold text-foreground mt-0.5 line-clamp-1">
                        {item.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4 Physical Barriers Solved */}
      <section className="section bg-muted/30 border-t border-border">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <Eyebrow>9-DOF Physics &amp; Geometry</Eyebrow>
              <h2>
                Four Physical Barriers Solved
                <br />
                for Mobile C-Arms
              </h2>
            </div>
            <p className="section-intro">
              Conventional circular CBCT blurs spine anatomy on open C-arm frames. Our engine
              resolves the underlying physical distortions in software &mdash; with zero hardware
              modifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BARRIERS.map((b) => (
              <div
                key={b.num}
                className="rounded-xl border border-border bg-background p-6 sm:p-7 shadow-xs"
              >
                <div className="text-xs font-extrabold text-primary tracking-wider uppercase">
                  Barrier {b.num}
                </div>
                <h3 className="text-lg font-bold text-foreground mt-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Scenario Hard Stress-Test Scorecard */}
      <section className="section bg-background border-t border-border">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <Eyebrow>Degraded Hardware Resilience</Eyebrow>
              <h2>
                5-Scenario Clinical
                <br />
                Stress-Test Scorecard
              </h2>
            </div>
            <p className="section-intro">
              Verified resilience under extreme gantry sag, ultra-low radiation dose, sparse-view
              protocols, and compact C-arm arcs.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block rounded-xl border border-border overflow-hidden shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/60 border-b border-border text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  <th className="py-3.5 px-5">Extreme Hardware Stress Case</th>
                  <th className="py-3.5 px-5">Standard / Baseline</th>
                  <th className="py-3.5 px-5">OmniCBCT V2 Peak</th>
                  <th className="py-3.5 px-5">Verified Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background text-sm">
                {STRESS_SCORECARD.map((row) => (
                  <tr key={row.scenario} className="hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-5 font-semibold text-foreground">{row.scenario}</td>
                    <td className="py-4 px-5 text-muted-foreground">{row.baseline}</td>
                    <td className="py-4 px-5 font-semibold text-foreground">{row.peak}</td>
                    <td className="py-4 px-5 font-bold text-primary">{row.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Cards */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {STRESS_SCORECARD.map((row) => (
              <div
                key={row.scenario}
                className="rounded-lg border border-border bg-card p-4 space-y-2"
              >
                <div className="text-sm font-bold text-foreground">{row.scenario}</div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Baseline:</span>
                  <span className="text-muted-foreground">{row.baseline}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">OmniCBCT Peak:</span>
                  <span className="font-semibold text-foreground">{row.peak}</span>
                </div>
                <div className="flex justify-between text-xs pt-1 border-t border-border">
                  <span className="text-muted-foreground">Outcome:</span>
                  <span className="font-bold text-primary">{row.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM & Clinical 48-Hour Blind Proof CTA */}
      <section className="section bg-muted/30 border-t border-border">
        <div className="site-width">
          <div className="rounded-xl border border-border bg-background p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 shadow-xs">
            <div className="max-w-2xl">
              <Eyebrow>48-Hour Blind Hardware Evaluation</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2">
                Evaluate OmniCBCT 3D on your own C-arm spin data.
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                Under mutual NDA, medical device OEMs and hospital partners can submit a raw
                motorized C-arm spin to receive reconstructed 3D DICOM CT series, axial pedicle
                clarity benchmarks, and integration roadmaps within 48 hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button variant="brand" asChild>
                <Link
                  to="/contact"
                  search={{ product: "OmniCBCT 3D Engine Evaluation" }}
                  className="flex items-center gap-2"
                >
                  <Database className="size-4" /> Request 48-Hour Blind Proof
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/products/xvr" className="flex items-center gap-2">
                  Explore CERO XVR <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
