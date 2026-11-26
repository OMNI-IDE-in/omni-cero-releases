import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, Eyebrow } from "@/components/cero-site";
import { buildBreadcrumbSchema, pageHead } from "@/lib/cero";

import lumbar512Img from "@/assets/research/omnispine-gpu-lumbar-512.png";
import lumbarScrewsImg from "@/assets/research/omnispine-gpu-lumbar-screws.png";
import knee512Img from "@/assets/research/omnispine-gpu-knee-512.png";
import kneeIvoryImg from "@/assets/research/omnispine-gpu-knee-ivory.png";

interface AxialProof {
  id: string;
  badge: string;
  source: string;
  title: string;
  metrics: string;
  summary: string;
  image: string;
}

const AXIAL_PROOFS: AxialProof[] = [
  {
    id: "lumbar-512",
    badge: "Lumbar Spine 3D · 01",
    source: "Motorized C-Arm Lumbar L1–L5 (198° Sweep)",
    title: "512³ Lumbar Spine Cinematic 3D",
    metrics: "512×512×320 Volume in 0.64 s · 106.8–134.3 FPS Interactive 3D · 0.897 SSIM",
    summary:
      "Full 512×512×320 lumbar spine reconstruction from 2D motorized C-arm X-rays with zero preoperative CT. Delivers photorealistic cortical bone and soft-tissue separation at over 120 FPS.",
    image: lumbar512Img,
  },
  {
    id: "lumbar-screws",
    badge: "Spine Pedicle Guidance · 02",
    source: "Lumbar L1–L5 Pedicle Screw Visualization",
    title: "Translucent Pedicle & Screw Guidance 3D",
    metrics: "0.064 mm Surface Accuracy · 339.8 FPS Surgical Mesh · Zero Pre-Op CT",
    summary:
      "Translucent cortical rendering reveals bilateral pedicle screw trajectories and vertebral canal clearance directly from 2D C-arm spins for intraoperative verification.",
    image: lumbarScrewsImg,
  },
  {
    id: "knee-512",
    badge: "Real 100 kV Knee 3D · 03",
    source: "Real 100 kV / 80 mAs Physical Bone Scanner (210°)",
    title: "512³ Real 100 kV Knee Joint Cinematic 3D",
    metrics: "512×512×320 Volume in 1.19 s · 124.6 FPS Interactive 3D · 0.50 mm Voxel",
    summary:
      "Direct 3D reconstruction from 500 raw 100 kV physical 2D X-ray projections of a human knee joint (femur, patella, tibia, fibula) with crisp articular margins and zero CT input.",
    image: knee512Img,
  },
  {
    id: "knee-ivory",
    badge: "Cortical Knee 3D · 04",
    source: "Real 100 kV Physical Bone · Pure Cortical Mode",
    title: "Pure Ivory Knee Cortical 3D",
    metrics: "0.68 mm Axial Resolution · 337.9 FPS Surgical Mesh · 0.064 mm Smoothness",
    summary:
      "High-contrast cortical bone surface extraction resolves fine joint anatomy, patella boundaries, and sub-millimeter bone contours without double-edge blurring.",
    image: kneeIvoryImg,
  },
];

const HEADLINE_KPIS = [
  {
    value: "ZERO CT",
    label: "100% 2D X-Ray Input",
    detail: "No preoperative CT scan needed",
  },
  {
    value: "0.64–1.19 s",
    label: "512³ GPU Reconstruction",
    detail: "512×512×320 high-res volume",
  },
  {
    value: "120–134 FPS",
    label: "Cinematic 3D Rendering",
    detail: "1024px real-time GPU viewport",
  },
  {
    value: "0.064 mm",
    label: "Surface Fidelity",
    detail: "Sub-0.1 mm geometric accuracy",
  },
  {
    value: "4.4× Gain",
    label: "0.897 Structural SSIM",
    detail: "120°–210° C-arm arc support",
  },
];

const BARRIERS = [
  {
    num: "01",
    title: "Non-Isocentric Orbit & Mechanical Gravity Sag (±6 to ±10 mm)",
    desc: "Open mobile C-arms flex under gravity during orbital rotation. OmniSpine™ locks each projection to sub-pixel calibrated 3D geometry so rays converge sharply on true cortical bone boundaries.",
  },
  {
    num: "02",
    title: "Automatic Exposure Control (AEC) & Truncated Lateral Torsos",
    desc: "As a C-arm sweeps from AP to Lateral, exposure jumps dynamically while the patient's abdomen fills the detector. OmniSpine™ tracks true beam reference without mistaking soft tissue for air.",
  },
  {
    num: "03",
    title: "Edge-On Operating Table Rail Photon Starvation",
    desc: "When a C-arm shoots edge-on through dense OT table rails, detector counts drop near zero. OmniSpine™ automatically detects and heals photon-starved projections prior to 3D volume formation.",
  },
  {
    num: "04",
    title: "Real Physical Compton Scatter & Polychromatic Beam Hardening",
    desc: "Wide cone-beam geometry generates heavy scatter haze and energy hardening through dense vertebrae and knee joints. OmniSpine™ performs physics-based scatter suppression and linearization.",
  },
  {
    num: "05",
    title: "Limited-Angle Table Clearance (120°–165° Arcs)",
    desc: "When OT table rails restrict orbital sweeps below the 190°–200° short-scan threshold, OmniSpine™ automatically engages an edge-preserving solver that closes missing cortical walls without AI hallucination.",
  },
];

const SWEEP_SCORECARD = [
  {
    mode: "Naive 198° (Uncompensated)",
    shots: "160",
    baseline: "0.204 / 14.6 dB",
    omnispine: "— (Baseline)",
    verdict: "Smeared double walls — unsafe",
  },
  {
    mode: "198° Complete Short-Scan",
    shots: "160",
    baseline: "0.897* / 23.8 dB",
    omnispine: "0.892–0.897 / 23.8 dB",
    verdict: "4.4× clarity jump (0.64 s GPU)",
  },
  {
    mode: "165° Compact C-Arm Arc",
    shots: "132",
    baseline: "0.736 / 22.3 dB",
    omnispine: "0.781 (+4.5% SSIM)",
    verdict: "Crisp pedicles & closed anterior wall",
  },
  {
    mode: "135° Limited-Angle Arc",
    shots: "108",
    baseline: "0.580 / 19.1 dB",
    omnispine: "0.718 (+13.8% SSIM)",
    verdict: "Closes missing anterior cortex (1.32 s GPU)",
  },
  {
    mode: "120° Severe Limited-Angle Arc",
    shots: "96",
    baseline: "0.535 / 18.6 dB",
    omnispine: "0.671 (+13.6% SSIM)",
    verdict: "Recovers vertebral ring & spinal canal",
  },
];

export const Route = createFileRoute("/research/omnispine")({
  component: ResearchOmniSpinePage,
  head: () =>
    pageHead(
      "OmniSpine™ Axial & 3D GPU Engine — Spine & Knee CBCT From 2D X-Rays | BABELL GROUP",
      "OmniSpine™ by Omni Research Lab, BABELL GROUP: converts rotating 2D C-arm X-rays into 512x512x320 Axial CT and 120+ FPS Cinematic 3D Spine & Knee reconstructions with zero preoperative CT.",
      "/research/omnispine",
      {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Research", path: "/research" },
            { name: "OmniSpine Axial & 3D GPU Engine", path: "/research/omnispine" },
          ]),
          {
            "@type": "WebPage",
            name: "OmniSpine™ Axial & 3D GPU Engine — Omni Research Lab",
            description:
              "Clinical validation of CT-free Axial & 3D Spine and Knee reconstruction directly from 2D motorized C-arm X-rays by BABELL GROUP.",
            url: "https://cero.omniide.com/research/omnispine",
            publisher: {
              "@type": "Organization",
              name: "BABELL GROUP",
              url: "https://babellgroup.com/",
            },
          },
        ],
      },
      "OmniSpine Axial Engine, 2D C-arm to Axial CT, 3D Spine CBCT, 3D Knee CBCT, CT-free spine navigation, BABELL GROUP, Omni Research Lab"
    ),
});

function ResearchOmniSpinePage() {
  const [selectedId, setSelectedId] = useState<string>(AXIAL_PROOFS[0].id);
  const activeProof =
    AXIAL_PROOFS.find((p) => p.id === selectedId) ?? AXIAL_PROOFS[0];

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
            OmniSpine&trade; Axial &amp; 3D Engine.
            <br />
            True 3D Spine &amp; Knee CT From 2D X-Rays.
          </h1>
          <p>
            An offline, GPU-accelerated intraoperative 3D Cone-Beam CT engine that converts
            standard rotating 2D X-ray shots into 512&times;512&times;320 Axial slices, multiplanar
            reformats, and 120+ FPS Cinematic 3D bone &amp; implant models &mdash; requiring zero
            preoperative CT scan and zero hardware modification.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="brand" asChild>
              <a href="#clinical-proofs" className="flex items-center gap-2">
                Inspect 3D Spine &amp; Knee Proofs <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link
                to="/contact"
                search={{ product: "OmniSpine Axial Engine Evaluation" }}
                className="flex items-center gap-2"
              >
                Request 48-Hour Blind Axial Proof <ArrowUpRight className="size-4" />
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

      {/* Interactive GPU 3D Spine & Knee Clinical Proofs */}
      <section id="clinical-proofs" className="section bg-background">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <Eyebrow>Zero Simulation &middot; Zero CT Input</Eyebrow>
              <h2>
                GPU Cinematic 3D Spine
                <br />
                &amp; Real 100 kV Knee Proofs
              </h2>
            </div>
            <p className="section-intro">
              Interactive 3D reconstructions generated directly from 2D X-ray projections across
              motorized C-arm Lumbar Spine (L1&ndash;L5) and Real 100 kV Knee Bone datasets.
            </p>
          </div>

          <div
            className="rounded-xl border border-border bg-card p-4 sm:p-6 md:p-8 shadow-sm"
            onContextMenu={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="relative w-full aspect-square sm:aspect-[4/3] bg-[#0d1829] rounded-xl overflow-hidden border border-border shadow-md">
                  <img
                    src={activeProof.image}
                    alt={activeProof.title}
                    className="w-full h-full object-contain pointer-events-none"
                    draggable={false}
                  />
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold border border-white/15">
                    {activeProof.badge}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-primary">
                  {activeProof.source}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {activeProof.title}
                </h3>
                <div className="inline-block rounded-md bg-secondary px-3 py-1.5 text-xs font-bold text-primary">
                  {activeProof.metrics}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {activeProof.summary}
                </p>

                <div className="pt-2 space-y-2 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-foreground font-medium">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    <span>100% offline Windows GPU execution &mdash; zero cloud transfer</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground font-medium">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    <span>Exports PACS-standard 16-bit CT DICOM &amp; 3D surgical meshes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4-Card Responsive Selector Grid (2 Spine + 2 Knee) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 pt-6 border-t border-border">
              {AXIAL_PROOFS.map((item) => {
                const active = item.id === activeProof.id;
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
                    <div className="aspect-[4/3] bg-[#0d1829] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                    <div className="p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-primary line-clamp-1">
                        {item.badge}
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

      {/* Five Real-World Hospital Barriers Solved */}
      <section className="section bg-muted/30 border-t border-border">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <Eyebrow>Real-World C-Arm Physics</Eyebrow>
              <h2>
                Five Hospital Barriers Solved
                <br />
                Purely in Software
              </h2>
            </div>
            <p className="section-intro">
              Standard mobile C-arms were never built for Axial CT. OmniSpine&trade; solves the
              five physical distortions in software &mdash; replacing INR 2.5&ndash;4 Crore
              imported 3D gantries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BARRIERS.map((b) => (
              <div
                key={b.num}
                className="rounded-xl border border-border bg-background p-6 shadow-xs"
              >
                <div className="text-xs font-extrabold text-primary tracking-wider uppercase">
                  Barrier {b.num}
                </div>
                <h3 className="text-base font-bold text-foreground mt-2">{b.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 120° to 198° Sweep-Angle Scorecard */}
      <section className="section bg-background border-t border-border">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <Eyebrow>120&deg; to 198&deg; Sweep Stress Study</Eyebrow>
              <h2>
                Quantitative Axial Lumbar
                <br />
                Vertebra Scorecard
              </h2>
            </div>
            <p className="section-intro">
              160 standalone 16-bit 2D lumbar spine X-rays with realistic AEC jumps, scatter, beam
              hardening, and &plusmn;6.5 mm mechanical sag (zero CT input).
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block rounded-xl border border-border overflow-hidden shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/60 border-b border-border text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  <th className="py-3.5 px-5">Motorized C-Arm Sweep Mode</th>
                  <th className="py-3.5 px-5">2D Shots</th>
                  <th className="py-3.5 px-5">Standard (SSIM / PSNR)</th>
                  <th className="py-3.5 px-5">OmniSpine&trade; Axial</th>
                  <th className="py-3.5 px-5">Clinical Pedicle Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background text-sm">
                {SWEEP_SCORECARD.map((row) => (
                  <tr key={row.mode} className="hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-5 font-semibold text-foreground">{row.mode}</td>
                    <td className="py-4 px-5 text-muted-foreground">{row.shots}</td>
                    <td className="py-4 px-5 text-muted-foreground">{row.baseline}</td>
                    <td className="py-4 px-5 font-semibold text-foreground">{row.omnispine}</td>
                    <td className="py-4 px-5 font-bold text-primary">{row.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {SWEEP_SCORECARD.map((row) => (
              <div
                key={row.mode}
                className="rounded-lg border border-border bg-card p-4 space-y-2"
              >
                <div className="text-sm font-bold text-foreground">
                  {row.mode} ({row.shots} shots)
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Standard:</span>
                  <span className="text-muted-foreground">{row.baseline}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">OmniSpine&trade;:</span>
                  <span className="font-semibold text-foreground">{row.omnispine}</span>
                </div>
                <div className="flex justify-between text-xs pt-1 border-t border-border">
                  <span className="text-muted-foreground">Verdict:</span>
                  <span className="font-bold text-primary">{row.verdict}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Pilot Validation Pathway CTA */}
      <section className="section bg-muted/30 border-t border-border">
        <div className="site-width">
          <div className="rounded-xl border border-border bg-background p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 shadow-xs">
            <div className="max-w-2xl">
              <Eyebrow>3-Step Clinical &amp; OEM Validation</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2">
                Test OmniSpine&trade; Axial directly on your own motorized C-arm.
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                Capture one motorized 2D X-ray sweep (100&ndash;200 shots across 135&deg;&ndash;198&deg;)
                with zero hardware modification. Under mutual NDA, we return crisp Axial slices,
                millimeter pedicle measurements, and a 16-bit CT DICOM series within 48 hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button variant="brand" asChild>
                <Link
                  to="/contact"
                  search={{ product: "OmniSpine Axial Engine Evaluation" }}
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
