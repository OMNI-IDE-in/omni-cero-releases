import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Lock, Cpu, Globe, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, CtaBand } from "@/components/cero-site";
import { pageHead, buildBreadcrumbSchema } from "@/lib/cero";
import heroImage from "@/assets/cero-clinical-hero.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () =>
    pageHead(
      "About Omni Cero & Omni IDE — Indian Medical Imaging Innovation for Worldwide Hospitals",
      "Omni Cero by Omni IDE is an Indian medical technology pioneer based in Bengaluru, engineering India's first multi-brand DROC acquisition software, 30 FPS C-arm fluoroscopy capture, and 3D XVR surgical navigation. 100% offline Windows workstations.",
      "/about",
      {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          {
            "@type": "AboutPage",
            "name": "About Omni Cero Medical Systems",
            "description": "The mission, technology, and engineering behind Omni Cero: India's first multi-brand DROC, live C-arm fluoroscopy with DSA, and 3D navigation.",
            "url": "https://cero.omniide.com/about",
            "mainEntity": {
              "@type": "MedicalOrganization",
              "name": "Omni Cero",
              "parentOrganization": {
                "@type": "Organization",
                "name": "Omni IDE",
                "url": "https://omniide.com/",
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "B-Block, Devgere, Kumbalagodu, Kengeri",
                "addressLocality": "Bengaluru",
                "postalCode": "560060",
                "addressRegion": "Karnataka",
                "addressCountry": "IN",
              },
            },
          },
        ],
      },
      "About Omni Cero, Omni IDE, Indian medical imaging innovation, India first DROC company, Bengaluru medical software, offline DICOM workstation, intraoperative surgical software India"
    ),
});

function About() {
  return (
    <>
      <section className="page-intro">
        <div className="site-width">
          <Eyebrow>Omni Cero by Omni IDE</Eyebrow>
          <h1>
            Indian Ingenuity.
            <br />
            Global Precision.
          </h1>
          <p>
            We believe advanced intraoperative imaging and surgical navigation should begin with the
            equipment already in your operating room. Omni Cero turns that conviction into resilient,
            offline medical workstation software.
          </p>
        </div>
      </section>

      <section className="section bg-background">
        <div className="site-width">
          <img
            className="about-image border border-border shadow-md"
            src={heroImage}
            alt="Contemporary clinical operating suite with surgical C-arm"
            width="1920"
            height="1088"
            loading="lazy"
          />

          <div className="about-grid mt-12">
            <div>
              <Eyebrow>The Core Origin</Eyebrow>
              <h2 className="text-3xl font-bold mt-2">
                All Possibilities.
                <br />
                Zero Compromises.
              </h2>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                <strong>Omni Cero</strong> takes its name from Latin <em>omni</em> ("all") and Spanish{" "}
                <em>cero</em> ("zero"). Together, they express our design brief: unite the entire imaging suite
                — from flat-panel digital radiography (DROC) to live C-arm streaming and 3D navigation — while
                demanding zero cloud dependency, zero telemetry, and zero dropped frames.
              </p>
              <p>
                Operating suites cannot afford to pause because an external cloud activation server is
                unreachable or hospital Wi-Fi is intermittent. Omni Cero computes every algorithm, from
                Digital Subtraction Angiography to 6-DOF neural pose registration, right on the workstation in
                the room.
              </p>
              <p>
                Engineered in Bengaluru, India by Omni IDE, our platform is designed for orthopedic, spine, and
                vascular surgeons who demand sub-millimeter precision from standard clinical hardware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Cryptography Spotlight */}
      <section className="section bg-muted/30 border-t border-border">
        <div className="site-width">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Eyebrow>Security &amp; Licensing</Eyebrow>
              <h2 className="text-3xl font-bold">
                Cryptographically Node-Locked.
                <br />
                100% Offline.
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Omni Cero verifies workstation licenses mathematically on-device using asymmetric Ed25519
                cryptographic signatures. Each license binds directly to the workstation's motherboard, CPU,
                and system hardware UUID.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Zero Cloud Activation</h4>
                    <p className="text-xs text-muted-foreground">
                      No phone-home calls, no periodic re-activation pings. Once installed, it operates
                      indefinitely offline.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Lock className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Hospital Data Sovereignty</h4>
                    <p className="text-xs text-muted-foreground">
                      Patient DICOM studies, live fluoroscopy cine runs, and 3D CT volumes never leave your
                      hospital LAN.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Cpu className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-foreground">AVX2 CPU Optimized</h4>
                    <p className="text-xs text-muted-foreground">
                      High-throughput neural pose solver runs on standard Intel/AMD CPUs without requiring
                      dedicated GPU hardware.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cryptographic license card visual */}
            <div className="lg:col-span-6">
              <div className="rounded-xl border border-border bg-card p-6 shadow-xl font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-border text-[11px]">
                  <span className="font-bold text-primary flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5" /> ED25519 ASYMMETRIC LICENSE
                  </span>
                  <span className="text-muted-foreground">STATUS: VALIDATED (OFFLINE)</span>
                </div>

                <pre className="mt-4 p-4 rounded bg-neutral-950 text-neutral-300 text-[11px] overflow-x-auto leading-relaxed border border-neutral-800">
                  <code>{`-----BEGIN OMNI CERO LICENSE-----
ewogICJwYXlsb2FkIjogewogICAgInByb2R1Y3QiOiAiT01OSUNF
Uk9fU1VSR0lDQUxfU1VJVEUiLAogICAgImh3aWQiOiAiQ0VSTy1B
OEYyLTM5QzEtRDQ3RS04QjA0IiwKICAgICJjdXN0b21lciI6ICJB
cG9sbG8gU3VyZ2ljYWwgT1ItMSIsCiAgICAidGllciI6ICJDTElO
SUNBTF9QUk8iLAogICAgImlzc3VlZCI6ICIyMDI2LTA5LTI3IiwK
ICAgICJleHBpcnkiOiAiUEVSUEVUVUFMIiwKICAgICJmZWF0dXJl
cyI6IFsiRFJPQyIsICJDQVJNX0xJVkUiLCAiWFZSXzNEIl0KICB9
LAogICJzaWduYXR1cmUiOiAiY3J5cHRvLWFzeW1tZXRyaWMtc2ln...
-----END OMNI CERO LICENSE-----`}</code>
                </pre>

                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>Hardware UUID Bind: Verified</span>
                  <span>Tamper Protection: 0 Events</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}