import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check,
  Search,
  Zap,
  Printer,
  Radio,
  Tv,
  Network,
  Cpu,
  ArrowUpRight,
  ShieldCheck,
  Activity,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, CtaBand } from "@/components/cero-site";
import {
  detectors,
  filterDetectors,
  generators,
  filmImagers,
  videoGrabbers,
  pacsAndTracking,
  carmCompatibility,
  captureHardware,
  pageHead,
  buildBreadcrumbSchema,
} from "@/lib/cero";

export const Route = createFileRoute("/compatibility")({
  component: Compatibility,
  head: () =>
    pageHead(
      "Hardware Compatibility Matrix — 10 Detector Brands, Generators, Imagers & C-Arms | Omni Cero",
      "Universal hardware compatibility matrix for Omni Cero DROC & surgical workstations: 10 flat-panel detector manufacturers (Varex, iRay, Vieworks, DRTECH, Rayence, CareRay, Teledyne DALSA, Canon, Carestream, Thales), 4 high-frequency X-ray generators, 4 DICOM dry laser film imagers, and surgical C-arms.",
      "/compatibility",
      {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Hardware Compatibility", path: "/compatibility" },
          ]),
          {
            "@type": "MedicalWebPage",
            "name": "Omni Cero Universal Hardware Compatibility Matrix",
            "description": "Validated hardware specifications, manufacturer SDK DLLs, generator protocols, and DICOM interfaces for Omni Cero medical workstations.",
            "url": "https://cero.omniide.com/compatibility",
          },
        ],
      },
      "Omni Cero hardware compatibility, Varex PaxScan, iRay flat panel detector, Vieworks VIVIX, DRTECH EVS, Rayence 1717, CareRay CareView, Teledyne DALSA CMOS, Canon CXDI, Carestream DRX, Thales Pixium, CPI Indico generator, Sedecal SHF generator, Fuji DryPix, Carestream DryView, Agfa Drystar, Sony FilmStation, Siemens Cios, GE OEC 9900, Philips Zenition, Ziehm Vision"
    ),
});

export function Compatibility() {
  const [query, setQuery] = useState("");
  const filtered = filterDetectors(query);

  return (
    <>
      <section className="page-intro">
        <div className="site-width">
          <Eyebrow>Universal Clinical Hardware Ecosystem</Eyebrow>
          <h1>
            Built to connect.
            <br />
            Across every modality.
          </h1>
          <p>
            Omni Cero operates driver-free on standard Windows 10/11 hospital workstations. Direct
            native SDK, DLL, and driver-level integration across 10 flat-panel detector brands,
            high-frequency X-ray generators, DICOM dry laser film imagers, and intraoperative surgical
            C-arms.
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-6 pt-2">
            <span className="text-[11px] font-bold px-3 py-1 rounded bg-background border border-border text-foreground flex items-center gap-1.5 shadow-sm">
              <Layers className="size-3 text-primary" /> 10 Detector Brands
            </span>
            <span className="text-[11px] font-bold px-3 py-1 rounded bg-background border border-border text-foreground flex items-center gap-1.5 shadow-sm">
              <Zap className="size-3 text-primary" /> 4 Generator Controllers
            </span>
            <span className="text-[11px] font-bold px-3 py-1 rounded bg-background border border-border text-foreground flex items-center gap-1.5 shadow-sm">
              <Printer className="size-3 text-primary" /> 4 DICOM Film Imagers
            </span>
            <span className="text-[11px] font-bold px-3 py-1 rounded bg-background border border-border text-foreground flex items-center gap-1.5 shadow-sm">
              <Radio className="size-3 text-primary" /> 4 C-Arm Manufacturers
            </span>
            <span className="text-[11px] font-bold px-3 py-1 rounded bg-background border border-border text-foreground flex items-center gap-1.5 shadow-sm">
              <Tv className="size-3 text-primary" /> 4 Video Capture Chipsets
            </span>
            <span className="text-[11px] font-bold px-3 py-1 rounded bg-background border border-border text-foreground flex items-center gap-1.5 shadow-sm">
              <Network className="size-3 text-primary" /> Port 11112 DICOM PACS
            </span>
          </div>
        </div>
      </section>

      {/* 1. Flat-Panel Detectors */}
      <section className="section bg-background" id="detectors">
        <div className="site-width">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <Eyebrow>Flat-Panel Detector (FPD) Compatibility</Eyebrow>
              <h2 className="text-3xl font-bold mt-2">OMNI CERO DROC Acquisition</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-xl">
                Native manufacturer SDK &amp; DLL integration for wired, wireless, cassette-sized,
                and CMOS flat-panel detectors across 10 leading global manufacturers.
              </p>
            </div>

            <label className="search-field shrink-0">
              <Search className="size-4 text-muted-foreground" />
              <input
                aria-label="Search manufacturers, detector models, or DLLs"
                placeholder="Search brand, model, or DLL (e.g. Venu, PaxScan, XISL)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
          </div>

          <p className="form-note mb-6" aria-live="polite">
            Showing {filtered.length} supported manufacturer{filtered.length !== 1 ? "s" : ""}
          </p>

          <div className="detector-grid">
            {filtered.map((d) => (
              <article className="detector bg-card shadow-sm flex flex-col justify-between" key={d.name}>
                <div>
                  <div className="detector-top">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{d.name}</h3>
                      <span className="text-xs text-muted-foreground font-medium block mt-0.5">
                        {d.category}
                      </span>
                    </div>
                    <span className="supported shrink-0">
                      <Check className="size-3" /> Compatible
                    </span>
                  </div>

                  <div className="mt-4 p-2.5 rounded bg-muted/60 border border-border/80 text-[11px] font-mono text-foreground space-y-1">
                    <div className="flex items-center gap-1.5 text-primary font-semibold">
                      <Cpu className="size-3.5 shrink-0" />
                      <span>{d.integration}</span>
                    </div>
                    {d.protocol && (
                      <div className="text-[10px] text-muted-foreground flex items-center gap-1.5 pl-5">
                        <span>Protocol: {d.protocol}</span>
                      </div>
                    )}
                  </div>

                  <ul className="mt-4">
                    {d.models.map((m) => (
                      <li key={m} className="flex items-center gap-2">
                        <Check className="size-3.5 text-primary stroke-[2.5]" />
                        <span className="text-xs">{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-12 text-center border border-dashed rounded-lg bg-muted/20">
              <h3 className="text-xl font-semibold">No matching detectors found.</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We continuously validate new FPD models. Contact our team to confirm your specific
                detector configuration.
              </p>
              <Button asChild variant="brand" size="sm" className="mt-4">
                <Link to="/contact">Request Detector Verification</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* 2. High-Frequency X-Ray Generators */}
      <section className="section bg-muted/30 border-t border-border" id="generators">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <Eyebrow>Integrated Exposure Console</Eyebrow>
              <h2>High-Frequency X-Ray Generators</h2>
            </div>
            <p className="section-intro">
              Native serial RS-232, CAN bus, and TCP exposure parameter synchronization with automated
              exposure interlocks and real-time anode heat unit (HU) thermal tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generators.map((g) => (
              <div key={g.name} className="p-6 rounded-lg border border-border bg-card shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <h3 className="text-base font-bold text-foreground">{g.name}</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                      Validated
                    </span>
                  </div>
                  <div className="mt-4 space-y-2.5">
                    <div className="text-[11px] font-semibold uppercase text-muted-foreground">
                      Supported Series / Models
                    </div>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      {g.series.map((s) => (
                        <li key={s} className="flex items-center gap-2">
                          <Check className="size-3 text-primary stroke-[2.5]" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-border space-y-1.5">
                  <div className="text-[11px] font-mono text-primary font-semibold">
                    <strong>Interface:</strong> {g.interface}
                  </div>
                  <div className="text-[11px] text-muted-foreground leading-relaxed">
                    {g.notes}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DICOM Dry Laser Film Imagers */}
      <section className="section bg-background border-t border-border" id="printers">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <Eyebrow>DICOM Print Management SCU</Eyebrow>
              <h2>DICOM Dry Laser Film Imagers</h2>
            </div>
            <p className="section-intro">
              Direct connection to hospital dry laser film imagers via DICOM Basic Grayscale Print
              Management SCU. Print multi-format diagnostic films without external print servers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filmImagers.map((p) => (
              <div key={p.name} className="p-5 rounded-lg border border-border bg-card shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <h3 className="text-base font-bold text-foreground">{p.name}</h3>
                    <Printer className="size-4 text-primary" />
                  </div>
                  <div className="mt-3 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase text-muted-foreground block">
                      Supported Imagers
                    </span>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      {p.models.map((m) => (
                        <li key={m} className="flex items-center gap-1.5">
                          <Check className="size-3 text-primary stroke-[2.5]" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border space-y-2">
                  <span className="text-[10px] font-mono text-muted-foreground block">
                    {p.protocol}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {p.formats.map((fmt) => (
                      <span
                        key={fmt}
                        className="text-[10px] px-2 py-0.5 rounded bg-secondary text-primary font-medium"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Surgical Fluoroscopy C-Arms */}
      <section className="section bg-muted/30 border-t border-border" id="carms">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <Eyebrow>Surgical Fluoroscopy C-Arms</Eyebrow>
              <h2>LIVE CERO &amp; CERO XVR Compatibility</h2>
            </div>
            <p className="section-intro">
              Connect to any analog or digital C-arm via driverless USB UVC or SDI capture hardware.
              Zero hardware modifications required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {carmCompatibility.map((c) => (
              <div key={c.name} className="p-6 rounded-lg border border-border bg-card shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <h3 className="text-lg font-bold text-foreground">{c.name}</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                    Validated
                  </span>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="text-xs font-semibold uppercase text-muted-foreground">
                    Supported Systems
                  </div>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {c.models.map((m) => (
                      <li key={m} className="flex items-center gap-2">
                        <Check className="size-3 text-primary stroke-[2.5]" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 text-[11px] text-muted-foreground font-mono">
                    <strong>Interface:</strong> {c.interface}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Supported Video Capture Hardware & Chipsets */}
      <section className="section bg-background border-t border-border" id="grabbers">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <Eyebrow>Video Ingestion &amp; Digitization</Eyebrow>
              <h2>Supported Video Capture Hardware &amp; Chipsets</h2>
            </div>
            <p className="section-intro">
              From zero-driver USB 3.0 UVC grabbers to broadcast-grade Blackmagic SDI and legacy
              composite BNC digitizers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videoGrabbers.map((h) => (
              <div key={h.chipset} className="p-6 rounded-lg border border-border bg-card shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-border">
                    <h3 className="text-base font-bold text-foreground">{h.chipset}</h3>
                    <Tv className="size-4 text-primary" />
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      {h.useCase}
                    </div>
                    <div className="p-2 rounded bg-muted/60 border border-border/80 text-[11px] font-mono text-primary">
                      Driver: {h.driver}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border text-[11px] font-mono text-muted-foreground">
                  <strong>Interface:</strong> {h.interface}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Hospital PACS & Modality Worklist Integration */}
      <section className="section bg-muted/30 border-t border-border" id="pacs">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <Eyebrow>Hospital Enterprise Networking</Eyebrow>
              <h2>DICOM PACS, Modality Worklist &amp; Tracking</h2>
            </div>
            <p className="section-intro">
              100% standard DICOM 3.0 network protocol conformance on standard hospital port 11112.
              Seamlessly integrates with your existing HIS, RIS, and PACS archives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-border bg-card shadow-sm">
              <div className="flex items-center gap-2 text-primary pb-3 border-b border-border">
                <Network className="size-4" />
                <h3 className="text-sm font-bold text-foreground">PACS Archive Conformance</h3>
              </div>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                Natively validated for bidirectional DICOM C-STORE and C-MOVE against all major PACS vendors:
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground font-mono">
                {pacsAndTracking.pacsServers.map((p) => (
                  <li key={p.name} className="flex items-center justify-between">
                    <span>{p.name}</span>
                    <span className="text-[10px] text-primary">Port {p.port}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card shadow-sm">
              <div className="flex items-center gap-2 text-primary pb-3 border-b border-border">
                <Activity className="size-4" />
                <h3 className="text-sm font-bold text-foreground">Modality Worklist (MWL)</h3>
              </div>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                Eliminates manual patient demographic re-entry. Queries scheduled clinical procedures
                directly from your hospital RIS / HIS via standard DICOM C-FIND queries.
              </p>
              <div className="mt-4 p-3 rounded bg-secondary text-primary text-xs font-medium">
                {pacsAndTracking.modalityWorklist.integration}
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card shadow-sm">
              <div className="flex items-center gap-2 text-primary pb-3 border-b border-border">
                <ShieldCheck className="size-4" />
                <h3 className="text-sm font-bold text-foreground">Optical &amp; Neural Tracking</h3>
              </div>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                Integrated 60 Hz 6-DOF optical tracking engine supporting ArUco / ChArUco surgical markers
                for tool verification, alongside tracker-free neural 2D/3D registration.
              </p>
              <div className="mt-4 p-3 rounded bg-secondary text-primary text-xs font-medium">
                {pacsAndTracking.opticalTracking.markerFormats}
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-lg bg-card border border-border flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div>
              <h4 className="font-bold text-base text-foreground">Need custom hardware or SDK integration?</h4>
              <p className="text-xs text-muted-foreground mt-0.5">
                Our Bengaluru engineering team can integrate specialized FPD drivers, custom generator protocols, or hospital-specific PACS configurations.
              </p>
            </div>
            <Button asChild variant="brand" size="sm" className="shrink-0">
              <Link to="/contact">
                Consult with Engineering <ArrowUpRight className="size-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}