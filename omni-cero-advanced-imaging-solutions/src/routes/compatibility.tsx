import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Search, ShieldCheck, MonitorPlay, Layers, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, CtaBand } from "@/components/cero-site";
import { filterDetectors, carmCompatibility, captureHardware, pageHead, buildBreadcrumbSchema } from "@/lib/cero";

export const Route = createFileRoute("/compatibility")({
  component: Compatibility,
  head: () =>
    pageHead(
      "Hardware Compatibility Matrix — 8 Detector Brands & Surgical C-Arms | Omni Cero",
      "Universal hardware compatibility matrix for Omni Cero: iRay Technology, Varex Imaging, Vieworks, DRTECH, Rayence, Canon Medical, Carestream, Teledyne DALSA flat-panel detectors, plus Siemens, GE, Philips, and Ziehm surgical C-arms.",
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
            "description": "Validated hardware specifications and interfaces for flat-panel digital radiography detectors and intraoperative surgical C-arms.",
            "url": "https://cero.omniide.com/compatibility",
          },
        ],
      },
      "Omni Cero hardware compatibility, iRay flat panel detector, Varex PaxScan, Vieworks VIVIX, DRTECH EVS, Rayence 1717, Canon CXDI, Carestream DRX, Teledyne DALSA CMOS, Siemens Cios C-arm, GE OEC 9900 C-arm, Philips Zenition C-arm, Ziehm Vision C-arm"
    ),
});

function Compatibility() {
  const [query, setQuery] = useState("");
  const filtered = filterDetectors(query);

  return (
    <>
      <section className="page-intro">
        <div className="site-width">
          <Eyebrow>Universal Hardware Ecosystem</Eyebrow>
          <h1>
            Built to connect.
            <br />
            Not to limit.
          </h1>
          <p>
            Omni Cero operates driver-free on standard Windows 10/11 hospital workstations. Explore
            our validated compatibility matrix across digital flat-panel detectors and surgical C-arms.
          </p>
        </div>
      </section>

      {/* Flat-Panel Detectors */}
      <section className="section bg-background">
        <div className="site-width">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <Eyebrow>Flat-Panel Detector (FPD) Compatibility</Eyebrow>
              <h2 className="text-3xl font-bold mt-2">OMNI CERO DROC Acquisition</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-xl">
                Direct SDK &amp; driver integration for wireless, tethered, cassette-sized, and CMOS
                detectors across leading global manufacturers.
              </p>
            </div>

            <label className="search-field shrink-0">
              <Search className="size-4 text-muted-foreground" />
              <input
                aria-label="Search manufacturers or detector models"
                placeholder="Search manufacturer or model (e.g. Venu, PaxScan, DRX)"
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
              <article className="detector bg-card shadow-sm" key={d.name}>
                <div className="detector-top">
                  <div>
                    <h2 className="text-xl font-bold">{d.name}</h2>
                    <span className="text-xs text-muted-foreground font-medium">{d.category}</span>
                  </div>
                  <span className="supported">
                    <Check className="size-3" /> Compatible
                  </span>
                </div>
                <ul>
                  {d.models.map((m) => (
                    <li key={m}>
                      <Check className="size-3.5 text-primary stroke-[2.5]" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-12 text-center border border-dashed rounded-lg bg-muted/20">
              <h2 className="text-xl font-semibold">No matching detectors found.</h2>
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

      {/* C-Arms Section */}
      <section className="section bg-muted/30 border-t border-border">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <Eyebrow>Surgical Fluoroscopy C-Arms</Eyebrow>
              <h2>LIVE CERO &amp; CERO XVR Compatibility</h2>
            </div>
            <p className="section-intro">
              Connect to any analog or digital C-arm via driverless USB UVC capture cards. No hardware
              modification required.
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

      {/* Capture Cards & Hardware */}
      <section className="section bg-background border-t border-border">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <Eyebrow>Plug &amp; Play Frame Grabbers</Eyebrow>
              <h2>Supported Video Capture Hardware</h2>
            </div>
            <p className="section-intro">
              Universal UVC capture standard ensures zero proprietary drivers, plug-and-play installation,
              and low presentation latency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {captureHardware.map((h) => (
              <div key={h.type} className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-lg font-bold text-foreground">{h.type}</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{h.specs}</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-xs font-bold text-foreground block mb-2">Input Interfaces</span>
                  <div className="flex flex-wrap gap-2">
                    {h.inputs.map((inp) => (
                      <span
                        key={inp}
                        className="text-xs px-2.5 py-1 rounded bg-secondary text-primary font-medium"
                      >
                        {inp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-lg bg-secondary/40 border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-base text-foreground">Need custom hardware verification?</h4>
              <p className="text-xs text-muted-foreground mt-0.5">
                Our Bengaluru engineering team can verify detector SDKs or specialized hospital capture cards.
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