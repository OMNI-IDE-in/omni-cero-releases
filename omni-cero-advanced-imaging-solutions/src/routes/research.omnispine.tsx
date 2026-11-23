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

import siemensAxialImg from "@/assets/research/omnispine-siemens-axial.png";
import planmecaAxialImg from "@/assets/research/omnispine-planmeca-axial.png";
import lumbar198AxialImg from "@/assets/research/omnispine-lumbar-198-axial.png";
import planmeca3dVrtImg from "@/assets/research/omnispine-planmeca-3d-vrt.png";

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
    id: "siemens-carm",
    badge: "Real Hospital C-Arm · 01",
    source: "Siemens Axiom Artis dFA (73 kVp · 216.5°)",
    title: "Real Hospital C-Arm → Axial Vertebra",
    metrics: "272 Raw 2D XA Shots · 19.3 s CPU (<1 s GPU) · 119,621 Starved Pixels Healed",
    summary:
      "Direct reconstruction from actual hospital 2D XA cine-loop shots with zero preoperative CT. Resolves the vertebral body, bilateral pedicles, circular spinal canal, and ribs while healing edge-on table-rail streaks.",
    image: siemensAxialImg,
  },
  {
    id: "planmeca-bone",
    badge: "Real 100 kV Physical Bone · 02",
    source: "100 kV / 80 mAs Clinical X-Ray Unit (210°)",
    title: "Sub-Millimeter (0.68 mm) Cortical & Trabecular Bone",
    metrics: "0.68 mm Axial Resolution · 16.2 s CPU · Zero Double-Edge Blurring",
    summary:
      "Even under real 100 kV Compton scatter and beam hardening, resolves crisp outer cortical bone shells, spongy trabecular marrow, articular joint gaps, and 2 mm micro-structures.",
    image: planmecaAxialImg,
  },
  {
    id: "lumbar-198",
    badge: "Lumbar Spine Axial Study · 03",
    source: "198° Short-Scan under AEC, Scatter & ±6.5 mm Sag",
    title: "Human Lumbar Pedicle & Canal Fidelity",
    metrics: "0.897 Structural SSIM (4.4× Gain) · 23.8 dB PSNR · 6.7 s CPU",
    summary:
      "Achieves a 4.4× clarity jump over uncompensated reconstruction, delivering crisp bilateral pedicle corridors and closed anterior vertebral walls directly from 2D X-ray projections.",
    image: lumbar198AxialImg,
  },
  {
    id: "bone-3d-vrt",
    badge: "Derived 3D Bone VRT · 04",
    source: "Emerges Automatically From Axial Volume",
    title: "Multiplanar MPR & 3D Cortical Bone VRT",
    metrics: "16-Bit PACS CT DICOM Export · Zero Extra Hardware",
    summary:
      "Once the true Axial volume is reconstructed from raw 2D X-rays, synchronized Sagittal/Coronal MPR crosshairs and rotatable 3D shaded cortical bone volume rendering emerge automatically.",
    image: planmeca3dVrtImg,
  },
];

const HEADLINE_KPIS = [
  {
    value: "ZERO CT",
    label: "100% 2D X-Ray Input",
    detail: "No preoperative CT scan needed",
  },
  {
    value: "0.68 mm",
    label: "Verified Axial Resolution",
    detail: "On real 100 kV physical bone",
  },
  {
    value: "4.4× Gain",
    label: "0.897 Structural SSIM",
    detail: "Vs. uncompensated reconstruction",
  },
  {
    value: "120°–216°",
    label: "Short-Scan & Limited-Arc",
    detail: "Motorized C-arm sweep support",
  },
  {
    value: "6–19 s CPU",
    label: "Offline Reconstruction",
    detail: "< 1 s on GPU · 16-bit CT DICOM",
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
    desc: "When a C-arm shoots edge-on through dense OT table rails, detector counts drop near zero. OmniSpine™ automatically detects and heals photon-starved projections (119,621 pixels healed on real Siemens spins).",
  },
  {
    num: "04",
    title: "Real Physical Compton Scatter & Polychromatic Beam Hardening",
    desc: "Wide cone-beam geometry generates heavy scatter haze and energy hardening through dense vertebrae. OmniSpine™ performs physics-based scatter suppression and linearization before Axial formation.",
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
    verdict: "4.4× clarity jump (6.7–7.8 s CPU)",
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
    verdict: "Closes missing anterior cortex cleanly",
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
      "OmniSpine™ Axial Engine — True Axial Spine CT From 2D C-Arm X-Rays | BABELL GROUP",
      "OmniSpine™ Axial Engine by Omni Research Lab, BABELL GROUP: converts rotating 2D motorized C-arm X-rays into 0.68 mm Axial spine CT slices and 16-bit DICOM series with zero preoperative CT.",
      "/research/omnispine",
      {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Research", path: "/research" },
            { name: "OmniSpine Axial Engine", path: "/research/omnispine" },
          ]),
          {
            "@type": "WebPage",
            name: "OmniSpine™ Axial Engine — Omni Research Lab",
            description:
              "Clinical validation of CT-free Axial spine reconstruction directly from 2D motorized C-arm X-rays by BABELL GROUP.",
            url: "https://cero.omniide.com/research/omnispine",
            publisher: {
              "@type": "Organization",
              name: "BABELL GROUP",
              url: "https://babellgroup.com/",
            },
          },
        ],
      },
      "OmniSpine Axial Engine, 2D C-arm to Axial CT, CT-free spine navigation, motorized C-arm CBCT, 0.68 mm axial bone, BABELL GROUP, Omni Research Lab"
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
            OmniSpine&trade; Axial Engine.
            <br />
            True Axial Spine CT From 2D C-Arm X-Rays.
          </h1>
          <p>
            An offline, software-only intraoperative 3D Cone-Beam CT reconstruction engine that
            converts standard rotating 2D mobile C-arm X-ray shots into crisp Axial spine slices,
            multiplanar reformats, and 3D bone models &mdash; requiring zero preoperative CT scan
            and zero hardware modification.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="brand" asChild>
              <a href="#clinical-proofs" className="flex items-center gap-2">
                Inspect Real-Machine Proofs <ArrowRight className="size-4" />
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

      {/* Interactive Real-Machine Clinical Proofs */}
      <section id="clinical-proofs" className="section bg-background">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <Eyebrow>Zero Simulation &middot; Zero CT Input</Eyebrow>
              <h2>
                Validated on Real Hospital
                <br />
                2D X-Ray Machines
              </h2>
            </div>
            <p className="section-intro">
              Verified on two independent physical clinical X-ray captures plus a 120&deg;&ndash;198&deg;
              human lumbar spine sweep study. Select any proof below to inspect.
            </p>
          </div>

          <div
            className="rounded-xl border border-border bg-card p-4 sm:p-6 md:p-8 shadow-sm"
            onContextMenu={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="relative w-full aspect-square sm:aspect-[4/3] bg-black rounded-xl overflow-hidden border border-border shadow-md">
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
                    <span>100% offline Windows execution &mdash; zero cloud transfer</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground font-medium">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    <span>Exports PACS-standard 16-bit CT DICOM series</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4-Card Responsive Selector Grid */}
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
