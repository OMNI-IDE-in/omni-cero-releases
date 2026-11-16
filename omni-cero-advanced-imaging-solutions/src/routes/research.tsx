import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Database,
  Eye,
  Gauge,
  Layers,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, Eyebrow } from "@/components/cero-site";
import { buildBreadcrumbSchema, pageHead } from "@/lib/cero";

import hold36Raw from "@/assets/research/hold36-raw.jpg";
import hold36Mono from "@/assets/research/hold36-mono.jpg";
import hold36Color from "@/assets/research/hold36-color.jpg";
import hold1Raw from "@/assets/research/hold1-raw.jpg";
import hold1Mono from "@/assets/research/hold1-mono.jpg";
import hold1Color from "@/assets/research/hold1-color.jpg";
import hold17Raw from "@/assets/research/hold17-raw.jpg";
import hold17Mono from "@/assets/research/hold17-mono.jpg";
import hold17Color from "@/assets/research/hold17-color.jpg";
import hold6Raw from "@/assets/research/hold6-raw.jpg";
import hold6Mono from "@/assets/research/hold6-mono.jpg";
import hold6Color from "@/assets/research/hold6-color.jpg";

interface ClinicalCase {
  id: string;
  title: string;
  anatomy: string;
  desc: string;
  raw: string;
  mono: string;
  color: string;
}

const CLINICAL_CASES: ClinicalCase[] = [
  {
    id: "Hold36",
    title: "AP Lumbar Instrumentation",
    anatomy: "Lumbar Spine · Pedicle Screws",
    desc: "Removes 2-row PAL scanlines and reveals crisp pedicle screws and vertebral trabeculae.",
    raw: hold36Raw,
    mono: hold36Mono,
    color: hold36Color,
  },
  {
    id: "Hold1",
    title: "Diagonal Grid Interference",
    anatomy: "Orthopedic · Anti-Scatter Grid",
    desc: "Eliminates anti-scatter grid moiré while preserving surgical pointer and screw geometry.",
    raw: hold1Raw,
    mono: hold1Mono,
    color: hold1Color,
  },
  {
    id: "Hold17",
    title: "AP Kyphoplasty Cannulas",
    anatomy: "Vertebral Augmentation · PMMA",
    desc: "Preserves 100% continuous straight needles, PMMA cement, and vertebral endplates.",
    raw: hold17Raw,
    mono: hold17Mono,
    color: hold17Color,
  },
  {
    id: "Hold6",
    title: "Iliac Crest & Lumbar Spine",
    anatomy: "Pelvic & Lumbar · Soft Tissue",
    desc: "Recovers deep trabecular architecture and clean soft-tissue separation.",
    raw: hold6Raw,
    mono: hold6Mono,
    color: hold6Color,
  },
];

const BENCHMARKS = [
  {
    value: "+33.5%",
    label: "SNR Improvement over V6",
    detail: "Verified across 36 real patient cases",
  },
  {
    value: "2×",
    label: "PAL Scanline Reduction",
    detail: "Suppresses 2-row interlaced artifacts",
  },
  {
    value: "94.5 FPS",
    label: "Real-Time CPU Speed",
    detail: "No specialized GPU required",
  },
  {
    value: "720×576",
    label: "Native Resolution",
    detail: "Zero downscaling or spatial cropping",
  },
  {
    value: "36 Cases",
    label: "Clinical Validation",
    detail: "Real intraoperative C-arm studies",
  },
];

export const Route = createFileRoute("/research")({
  component: ResearchPage,
  head: () =>
    pageHead(
      "Omni Research Lab — ClearView & TrueTissue V7 Clinical Fluoroscopy Engine | BABELL GROUP",
      "Built at Omni Research Lab, BABELL GROUP: V7 delivers a 33.5% SNR improvement over V6, 2x PAL scanline artifact reduction, and up to 94.5 FPS real-time CPU processing at native 720x576 resolution across 36 real patient cases.",
      "/research",
      {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Research", path: "/research" },
          ]),
          {
            "@type": "WebPage",
            name: "Omni Research Lab — ClearView & TrueTissue V7",
            description:
              "Clinical validation and interactive comparison of the V7 real-time C-arm fluoroscopy enhancement engine by Omni Research Lab, BABELL GROUP.",
            url: "https://cero.omniide.com/research",
            publisher: {
              "@type": "Organization",
              name: "Omni Research Lab · BABELL GROUP",
            },
          },
        ],
      },
      "Omni Research Lab, BABELL GROUP, ClearView v7, TrueTissue v7, C-arm image enhancement, fluoroscopy SNR improvement, PAL scanline reduction, real-time CPU fluoroscopy, LIVE CERO research"
    ),
});

function ResearchPage() {
  const [caseIdx, setCaseIdx] = useState(0);
  const [mode, setMode] = useState<"mono" | "color">("mono");
  const [splitPct, setSplitPct] = useState(50);
  const [dragging, setDragging] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  const activeCase = CLINICAL_CASES[caseIdx];

  function updateSplitFromClientX(clientX: number) {
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSplitPct(Math.max(2, Math.min(98, pct)));
  }

  return (
    <>
      {/* Hero / Intro */}
      <section className="page-intro">
        <div className="site-width">
          <Eyebrow>Omni Research Lab &middot; BABELL GROUP</Eyebrow>
          <h1>
            ClearView &amp; TrueTissue V7.
            <br />
            Measurable clarity from raw C-arm imaging.
          </h1>
          <p>
            At Omni Research Lab, BABELL GROUP, we engineered V7 for LIVE CERO to extract
            significantly more diagnostic information from standard 720&times;576 C-arm video
            feeds &mdash; achieving real-time CPU performance with no specialized GPU required.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="brand" asChild>
              <a href="#clinical-showcase" className="flex items-center gap-2">
                Inspect Clinical Cases <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link
                to="/contact"
                search={{ product: "Omni Research Lab V7 Dataset" }}
                className="flex items-center gap-2"
              >
                Request 36-Case Dataset <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Verified Benchmark Strip */}
      <section className="border-b border-border bg-muted/40 py-10">
        <div className="site-width">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {BENCHMARKS.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-border bg-background p-5 shadow-xs"
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

      {/* Interactive Clinical Showcase */}
      <section id="clinical-showcase" className="section bg-background">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <Eyebrow>Interactive Clinical Validation</Eyebrow>
              <h2>
                Standard Vendor LIH vs.
                <br />
                Omni Cero V7
              </h2>
            </div>
            <p className="section-intro">
              Showing 4 representative intraoperative patient cases from our 36-case validation
              study. Select a case, toggle ClearView (Mono) or TrueTissue (Color), and drag the
              slider to compare.
            </p>
          </div>

          <div
            className="rounded-xl border border-border bg-card p-4 sm:p-6 md:p-8 shadow-sm"
            onContextMenu={(e) => e.preventDefault()}
          >
            {/* Scrollable Case Selector */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-5 border-b border-border">
              <div
                className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0"
                role="tablist"
                aria-label="Clinical patient cases"
              >
                {CLINICAL_CASES.map((c, idx) => {
                  const active = idx === caseIdx;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setCaseIdx(idx)}
                      className={`shrink-0 rounded-lg border px-3.5 py-2 text-left transition-all cursor-pointer ${
                        active
                          ? "border-primary bg-primary text-primary-foreground shadow-xs"
                          : "border-border bg-background text-foreground hover:bg-secondary/60"
                      }`}
                    >
                      <div className="text-[11px] font-bold uppercase tracking-wider opacity-85">
                        {c.id}
                      </div>
                      <div className="text-xs font-semibold whitespace-nowrap">{c.title}</div>
                    </button>
                  );
                })}
              </div>

              {/* Mode Switch */}
              <div
                className="inline-flex self-start lg:self-auto rounded-lg bg-muted p-1 border border-border"
                role="group"
                aria-label="Enhancement mode"
              >
                <button
                  type="button"
                  onClick={() => setMode("mono")}
                  className={`rounded-md px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                    mode === "mono"
                      ? "bg-background text-foreground shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  ClearView v7 (Mono)
                </button>
                <button
                  type="button"
                  onClick={() => setMode("color")}
                  className={`rounded-md px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                    mode === "color"
                      ? "bg-background text-foreground shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  TrueTissue v7 (Color)
                </button>
              </div>
            </div>

            {/* Interactive Comparison Stage */}
            <div className="mt-6 max-w-4xl mx-auto">
              <div
                ref={stageRef}
                className="relative w-full aspect-[5/4] bg-black rounded-xl overflow-hidden select-none shadow-md cursor-ew-resize border border-border"
                onMouseDown={(e) => {
                  setDragging(true);
                  updateSplitFromClientX(e.clientX);
                }}
                onMouseMove={(e) => {
                  if (dragging) updateSplitFromClientX(e.clientX);
                }}
                onMouseUp={() => setDragging(false)}
                onMouseLeave={() => setDragging(false)}
                onTouchStart={(e) => {
                  setDragging(true);
                  if (e.touches[0]) updateSplitFromClientX(e.touches[0].clientX);
                }}
                onTouchMove={(e) => {
                  if (dragging && e.touches[0]) updateSplitFromClientX(e.touches[0].clientX);
                }}
                onTouchEnd={() => setDragging(false)}
              >
                <img
                  src={activeCase.raw}
                  alt={`Standard Vendor — ${activeCase.title}`}
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                  draggable={false}
                />
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 0 0 ${splitPct}%)` }}
                >
                  <img
                    src={mode === "mono" ? activeCase.mono : activeCase.color}
                    alt={`OmniCero V7 — ${activeCase.title}`}
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                    draggable={false}
                  />
                </div>

                {/* Split Divider & Handle */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white/90 pointer-events-none"
                  style={{ left: `${splitPct}%` }}
                >
                  <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-foreground shadow-lg flex items-center justify-center text-xs font-bold border border-black/10">
                    &harr;
                  </div>
                </div>

                {/* Pill Labels */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold pointer-events-none border border-white/15">
                  Standard Vendor
                </div>
                <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-md text-white text-[11px] font-semibold pointer-events-none border border-white/15">
                  {mode === "mono" ? "OmniCero ClearView v7" : "OmniCero TrueTissue v7"}
                </div>
              </div>

              {/* Caption Bar */}
              <div className="mt-4 pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      {activeCase.id}
                    </span>
                    <span className="text-xs text-muted-foreground">&middot;</span>
                    <span className="text-xs text-muted-foreground">{activeCase.anatomy}</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mt-0.5">
                    {activeCase.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    {activeCase.desc}
                  </p>
                </div>
                <div className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                  Drag left / right to compare &middot; {Math.round(splitPct)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual-Modality & Engineering Highlights */}
      <section className="section bg-muted/30 border-t border-border">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <Eyebrow>Engineered for Clinical Precision</Eyebrow>
              <h2>
                Pure signal fidelity.
                <br />
                Zero specialized hardware.
              </h2>
            </div>
            <p className="section-intro">
              Built for operating rooms that demand measurable diagnostic improvements at full
              real-time frame rates on standard workstation CPUs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-xl border border-border bg-background p-7 shadow-xs">
              <div className="flex items-center gap-2.5 text-primary font-bold text-xs uppercase tracking-wider">
                <Eye className="size-4" /> Monochrome Engine
              </div>
              <h3 className="text-xl font-bold text-foreground mt-3">ClearView v7</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                Designed for orthopedic, spine, and trauma fluoroscopy. Suppresses 2-row PAL
                scanlines and anti-scatter grid moiré while preserving crisp cortical bone margins,
                pedicle screws, and fine surgical instrumentation.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-7 shadow-xs">
              <div className="flex items-center gap-2.5 text-primary font-bold text-xs uppercase tracking-wider">
                <Layers className="size-4" /> Color Consistency Engine
              </div>
              <h3 className="text-xl font-bold text-foreground mt-3">TrueTissue v7</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                Delivers near-perfect color-to-mono structural consistency. Enhances soft-tissue
                separation and anatomical depth cues without introducing synthetic artifacts or
                sacrificing geometric accuracy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-border bg-background p-6">
              <Cpu className="size-5 text-primary" />
              <h4 className="text-sm font-bold text-foreground mt-3">Up to 94.5 FPS on CPU</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">
                Real-time intraoperative throughput achieved purely on standard workstation CPUs
                &mdash; no discrete or specialized GPU required.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-background p-6">
              <Gauge className="size-5 text-primary" />
              <h4 className="text-sm font-bold text-foreground mt-3">
                +33.5% SNR at Native 720&times;576
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">
                Measurable signal-to-noise gains over V6 alongside a 2&times; reduction in PAL
                scanline artifacts at the original C-arm resolution.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-background p-6">
              <Lock className="size-5 text-primary" />
              <h4 className="text-sm font-bold text-foreground mt-3">100% Offline Execution</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">
                Runs deterministically inside the LIVE CERO workstation in your operating suite
                with zero cloud dependency or external data transfer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 36-Patient Validation & Dataset Request Band */}
      <section className="section bg-background border-t border-border">
        <div className="site-width">
          <div className="rounded-xl border border-border bg-card p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <Eyebrow>36-Patient Clinical Cohort</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2">
                Need the full 36-patient clinical dataset or validation access?
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                The four interactive cases above represent a preview of our 36-patient clinical
                verification study at Omni Research Lab, BABELL GROUP. Hospitals, surgical teams,
                and institutional partners can request access to the complete 36-case validation
                package and LIVE CERO V7 evaluation builds through our contact team.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button variant="brand" asChild>
                <Link
                  to="/contact"
                  search={{ product: "Omni Research Lab V7 Dataset" }}
                  className="flex items-center gap-2"
                >
                  <Database className="size-4" /> Contact for Full Dataset
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/products/live-cero" className="flex items-center gap-2">
                  Explore LIVE CERO <ArrowRight className="size-4" />
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
