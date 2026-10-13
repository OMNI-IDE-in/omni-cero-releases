import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Unplug,
  Layers3,
  Check,
  Play,
  Download,
  ChevronDown,
  Cpu,
  MonitorPlay,
  Crosshair,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, ProductCards, CtaBand, useModals } from "@/components/cero-site";
import { pageHead, liveImg, xvrImg, workstationImg, drocImg } from "@/lib/cero";
import heroImage from "@/assets/cero-clinical-hero.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () =>
    pageHead(
      "Omni Cero — India's First DROC, Live C-Arm Fluoroscopy & 3D Surgical Navigation",
      "India's first multi-brand DROC acquisition software, 30 FPS C-arm fluoroscopy capture with DSA, and tracker-free 3D XVR surgical navigation. 100% offline Windows workstation by Omni IDE.",
      "/",
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "MedicalOrganization",
            "@id": "https://cero.omniide.com/#organization",
            "name": "Omni Cero",
            "alternateName": ["Omni Cero Medical Systems", "Omni IDE Medical Imaging"],
            "url": "https://cero.omniide.com/",
            "logo": {
              "@type": "ImageObject",
              "url": "https://cero.omniide.com/assets/logo.png",
              "width": 1010,
              "height": 790
            },
            "parentOrganization": {
              "@type": "Organization",
              "name": "Omni IDE",
              "url": "https://omniide.com/"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "B-Block, Devgere, Kumbalagodu, Kengeri",
              "addressLocality": "Bengaluru",
              "postalCode": "560060",
              "addressRegion": "Karnataka",
              "addressCountry": "IN"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "contactType": "sales",
                "email": "contact@omniide.com",
                "telephone": "+919845325913",
                "areaServed": "Worldwide"
              },
              {
                "@type": "ContactPoint",
                "contactType": "technical support",
                "email": "contact@omniide.com",
                "telephone": "+919845325913"
              }
            ],
            "description": "Omni Cero develops an offline intraoperative medical imaging and surgical navigation workstation for Windows: India's first multi-brand DROC acquisition, live 30 FPS C-arm fluoroscopy with DSA, and XVR sub-millimeter navigation."
          },
          {
            "@type": "WebSite",
            "@id": "https://cero.omniide.com/#website",
            "url": "https://cero.omniide.com/",
            "name": "Omni Cero",
            "alternateName": ["Omni Cero Medical Systems", "Omni IDE Medical Imaging"],
            "publisher": { "@id": "https://cero.omniide.com/#organization" },
            "inLanguage": "en",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://cero.omniide.com/compatibility?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@type": "SoftwareApplication",
            "@id": "https://cero.omniide.com/#droc",
            "name": "OMNI CERO DROC",
            "alternateName": "India's First Multi-Brand DROC Software",
            "applicationCategory": "MedicalApplication",
            "applicationSubCategory": "Digital Radiography Acquisition (DROC)",
            "operatingSystem": "Windows 10, Windows 11 (64-bit)",
            "downloadUrl": "https://github.com/OMNI-IDE-in/omni-cero-releases/releases/download/v2/OmniCero_DROC_Production_Setup.exe",
            "description": "India's first multi-brand Digital Radiography Acquisition (DROC) software compatible with iRay Technology, Varex Imaging, Vieworks, DRTECH, Rayence, Canon Medical, Carestream, and Teledyne DALSA flat-panel detectors.",
            "featureList": [
              "Multi-brand flat-panel detector compatibility (8 global manufacturers)",
              "Sub-second exposure preview and Automatic Exposure Detection (AED)",
              "Full DICOM C-STORE, Modality Worklist (MWL), and LAN archiving",
              "Intraoperative PACS review with bone enhancement and contrast LUT",
              "100% offline workstation operation with Ed25519 node-locked licensing"
            ]
          },
          {
            "@type": "SoftwareApplication",
            "@id": "https://cero.omniide.com/#livecarm",
            "name": "LIVE CERO",
            "applicationCategory": "MedicalApplication",
            "applicationSubCategory": "Live C-Arm Fluoroscopy Capture & DSA",
            "operatingSystem": "Windows 10, Windows 11 (64-bit)",
            "downloadUrl": "https://github.com/OMNI-IDE-in/omni-cero-releases/releases/download/v2/Live_Cero_Setup.exe",
            "description": "Real-time 30 FPS fluoroscopy capture from surgical C-arms with real-time Digital Subtraction Angiography (DSA), vascular roadmapping, and sterile table-side tablet console.",
            "featureList": [
              "Real-time 30 FPS live fluoroscopy capture via USB UVC",
              "Digital Subtraction Angiography (DSA) with motion-corrected mask subtraction",
              "Vascular roadmapping with automatic peak opacification lock",
              "Sterile table-side tablet console via offline QR-code WebSocket",
              "Universal C-arm compatibility: Siemens Healthineers, GE Healthcare, Philips, Ziehm"
            ]
          },
          {
            "@type": "SoftwareApplication",
            "@id": "https://cero.omniide.com/#xvr",
            "name": "CERO XVR",
            "applicationCategory": "MedicalApplication",
            "applicationSubCategory": "3D XVR Surgical Navigation",
            "operatingSystem": "Windows 10, Windows 11 (64-bit)",
            "downloadUrl": "https://github.com/OMNI-IDE-in/omni-cero-releases/releases/download/v2/XVR_Cero_Setup.exe",
            "description": "Tracker-free 3D surgical navigation using neural 2D/3D registration aligning live fluoroscopy with preoperative CT/MRI volumes for sub-millimeter target accuracy (<0.8 mm MTRE).",
            "featureList": [
              "Neural 2D/3D fluoroscopy to CT/MRI registration",
              "Sub-millimeter target error (< 0.8 mm MTRE)",
              "Sub-18 ms deep anatomical pose estimation latency",
              "Tracker-free guidance with no optical camera carts or fiducials",
              "Automatic LAO/RAO and cranial/caudal gantry angle readouts"
            ]
          },
          {
            "@type": "FAQPage",
            "@id": "https://cero.omniide.com/#faq",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Omni Cero?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Omni Cero is an offline Windows medical workstation developed by Omni IDE in Bengaluru. It brings together flat-panel digital radiography (OMNI CERO DROC), 30 FPS C-arm fluoroscopy capture with real-time DSA (LIVE CERO), and neural 2D/3D surgical navigation (CERO XVR)."
                }
              },
              {
                "@type": "Question",
                "name": "What is OMNI CERO DROC?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "OMNI CERO DROC is India's first multi-brand Digital Radiography Acquisition software, connecting flat-panel detectors from eight leading global manufacturers (iRay, Varex, Vieworks, DRTECH, Rayence, Canon Medical, Carestream, Teledyne DALSA) into a unified acquisition and DICOM PACS workflow."
                }
              },
              {
                "@type": "Question",
                "name": "What does XVR mean?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "XVR stands for X-ray Volume Registration. It is a neural 2D/3D registration algorithm that estimates the 6-DOF spatial alignment between live fluoroscopy frames and the patient's preoperative CT or MRI volume in under 18 ms for sub-millimeter guidance without optical tracking cameras."
                }
              },
              {
                "@type": "Question",
                "name": "Does Omni Cero require internet or cloud access in the OR?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Omni Cero operates 100% offline. Zero cloud telemetry, no activation servers, and no background network calls. Patient studies never leave your hospital LAN."
                }
              },
              {
                "@type": "Question",
                "name": "How is Omni Cero licensed?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Licenses are node-locked to the workstation's motherboard, CPU, and hardware UUID using Ed25519 cryptographic signatures and verified mathematically on-device."
                }
              }
            ]
          }
        ]
      }
    ),
});

function Home() {
  const { openDownloadModal, openVideoModal } = useModals();
  const [activeTab, setActiveTab] = useState<"carm" | "xvr" | "droc">("carm");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <img
          className="hero-image"
          src={heroImage}
          alt="Omni Cero C-arm fluoroscopy and digital radiography workstation in operating room"
          width="1920"
          height="1088"
          fetchPriority="high"
        />
        <div className="site-width hero-content fade-in">
          <Eyebrow>Indian innovation. Global precision.</Eyebrow>
          <h1>
            <span className="brand-headline">CERO.</span>
            <br />
            Imaging without
            <br />
            boundaries.
          </h1>
          <p className="hero-copy">
            From digital radiography to live fluoroscopy and 3D navigation. One connected vision.
            Built around you.
          </p>

          <div className="hero-actions">
            <Button asChild variant="brand">
              <Link to="/products">
                Explore our products <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="editorial">
              <Link to="/contact">
                Book a demo <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              onClick={() => openDownloadModal()}
              className="text-xs font-semibold flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
            >
              <Download className="size-3.5" /> Download Workstation
            </Button>
          </div>

          <div className="hero-note">
            <Check className="size-3 text-primary stroke-[3]" /> Engineered in India. Designed for
            your existing hardware.
          </div>
        </div>

        <div className="hero-caption">
          Your equipment. New possibilities.
          <br />
          <span>THE CERO IMAGING ECOSYSTEM</span>
        </div>
      </section>

      {/* Trust Strip: Detectors & Leading Brands */}
      <section className="trust-strip" aria-label="Compatible detector manufacturers">
        <div className="site-width trust-inner">
          <p className="trust-intro">
            ONE PLATFORM.
            <br />
            LEADING DETECTOR BRANDS.
          </p>
          <span className="manufacturer">iRay</span>
          <span className="manufacturer">VAREX</span>
          <span className="manufacturer">vieworks</span>
          <span className="manufacturer">DRTECH</span>
          <span className="manufacturer canon">Canon</span>
          <Link to="/compatibility" className="nav-link flex items-center gap-2">
            View all <ArrowRight className="size-3" />
          </Link>
        </div>
      </section>

      {/* Product Ecosystem Section */}
      <section className="section bg-background">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <Eyebrow>Our product ecosystem</Eyebrow>
              <h2>
                Three solutions.
                <br />
                One clearer picture.
              </h2>
            </div>
            <p className="section-intro">
              Powerful on their own. Better together.
              <br />
              Discover a new standard of connected imaging, from acquisition to navigation.
            </p>
          </div>

          <ProductCards />
        </div>
      </section>

      {/* Dedicated Clinical In-OR Demonstration Video Section (Shifted below products as requested) */}
      <section className="section bg-muted/30 border-y border-border">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <Eyebrow>Clinical Evaluation</Eyebrow>
              <h2>Live C-Arm Capture in the Operating Room</h2>
            </div>
            <p className="section-intro">
              Live fluoroscopy streaming directly from a surgical C-arm at 30 FPS with sub-frame presentation
              latency. Watch our intraoperative evaluation in an active clinical suite.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Real clinical video player */}
            <div className="lg:col-span-8">
              <div className="relative rounded-xl overflow-hidden border border-border bg-black shadow-2xl">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={liveImg}
                  src="/assets/clinical.mp4"
                  className="w-full aspect-video object-cover"
                >
                  Your browser does not support video playback.
                </video>
                <div className="px-4 py-2 bg-neutral-900 border-t border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-white font-medium">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    Intraoperative Live C-Arm Capture
                  </span>
                  <span className="font-mono text-[11px]">30 FPS Cine · Part 10 XA</span>
                </div>
              </div>
            </div>

            {/* Performance metrics side cards */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-5 rounded-lg bg-card border border-border">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                  Fluoroscopy Stream
                </span>
                <div className="text-3xl font-extrabold text-foreground mt-1">30 FPS</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Zero dropped frames via uncompressed USB UVC frame buffering.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-card border border-border">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                  Neural Registration Latency
                </span>
                <div className="text-3xl font-extrabold text-foreground mt-1">&lt; 18 ms</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Deep 6-DOF anatomical pose solver aligning 2D fluoroscopy with 3D CT/MRI.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-card border border-border">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                  Target Registration Accuracy
                </span>
                <div className="text-3xl font-extrabold text-foreground mt-1">&lt; 0.8 mm</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Sub-millimeter MTRE guidance without optical cameras or fiducials.
                </p>
              </div>

              <Button
                variant="brand"
                className="w-full justify-center flex items-center gap-2"
                onClick={() => openDownloadModal()}
              >
                <Download className="size-4" /> Download Workstation Installers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Clinical Viewport Tabs */}
      <section className="section bg-background">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <Eyebrow>Clinical Viewport Showcase</Eyebrow>
              <h2>Explore the Operating Suite Interfaces</h2>
            </div>
            <p className="section-intro">
              Toggle between views to inspect how Omni Cero handles digital radiography, live streaming,
              and 3D multi-planar reconstruction.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card overflow-hidden shadow-xl">
            <div className="bg-muted px-4 py-3 border-b border-border flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-amber-400" />
                <span className="size-3 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono text-muted-foreground ml-2">Omni Cero v2.0 Workstation</span>
              </div>

              <div className="flex items-center gap-1 bg-background/80 p-1 rounded-lg border border-border">
                <button
                  onClick={() => setActiveTab("carm")}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                    activeTab === "carm"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <MonitorPlay className="size-3.5" /> LIVE CERO
                </button>
                <button
                  onClick={() => setActiveTab("xvr")}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                    activeTab === "xvr"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Crosshair className="size-3.5" /> CERO XVR
                </button>
                <button
                  onClick={() => setActiveTab("droc")}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                    activeTab === "droc"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Layers className="size-3.5" /> OMNI CERO DROC
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-8 bg-neutral-950 flex flex-col items-center justify-center relative">
              {activeTab === "carm" && (
                <div className="relative w-full max-w-5xl rounded overflow-hidden shadow-2xl border border-neutral-800">
                  <img
                    src={liveImg}
                    alt="Omni Cero Live C-Arm fluoroscopy capture software interface"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur border border-primary/40 text-white px-3 py-1 rounded text-xs font-mono flex items-center gap-2">
                    <span className="size-2 rounded-full bg-red-500 animate-ping" />
                    30 FPS · REAL-TIME DSA &amp; ROADMAPPING
                  </div>
                </div>
              )}

              {activeTab === "xvr" && (
                <div className="relative w-full max-w-5xl rounded overflow-hidden shadow-2xl border border-neutral-800">
                  <img
                    src={xvrImg}
                    alt="Omni Cero 3D XVR surgical navigation software interface"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur border border-primary/40 text-white px-3 py-1 rounded text-xs font-mono flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500" />
                    6-DOF NEURAL REGISTRATION · MTRE 0.74 mm
                  </div>
                </div>
              )}

              {activeTab === "droc" && (
                <div className="relative w-full max-w-5xl rounded overflow-hidden shadow-2xl border border-neutral-800">
                  <img
                    src={drocImg}
                    alt="Omni Cero DROC flat-panel acquisition software interface"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur border border-primary/40 text-white px-3 py-1 rounded text-xs font-mono flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary" />
                    FLAT-PANEL DROC ACQUISITION · DICOM PACS
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="editorial">
        <div className="site-width editorial-grid">
          <div>
            <Eyebrow>Built differently. By design.</Eyebrow>
            <h2>
              Progress shouldn’t mean
              <br />
              starting over.
            </h2>
            <p>
              Your imaging equipment is an investment. CERO brings new capabilities to the hardware
              you already trust — with software that keeps your workflow, and your team, connected.
            </p>
            <Button asChild variant="link" className="mt-7 p-0 text-inverse">
              <Link to="/about">
                Meet the thinking behind CERO <ArrowUpRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
          <div>
            <div className="principle">
              <Layers3 size={22} />
              <div>
                <h3>Open to your world.</h3>
                <p>Multi-brand compatibility. One cohesive imaging experience.</p>
              </div>
            </div>
            <div className="principle">
              <Unplug size={22} />
              <div>
                <h3>Local by intention.</h3>
                <p>Live imaging and navigation run on your workstation, not in the cloud.</p>
              </div>
            </div>
            <div className="principle">
              <ShieldCheck size={22} />
              <div>
                <h3>Engineering with purpose.</h3>
                <p>Developed in India for the real needs of the imaging room.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Specs & FAQ */}
      <section className="section bg-muted/20 border-t border-border">
        <div className="site-width max-w-4xl">
          <div className="text-center mb-12">
            <Eyebrow>Frequently Asked Questions</Eyebrow>
            <h2 className="text-3xl font-bold mt-2">Everything Answered</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is Omni Cero?",
                a: "Omni Cero is an offline Windows medical workstation developed by Omni IDE in Bengaluru. It brings together flat-panel digital radiography (OMNI CERO DROC), 30 FPS C-arm fluoroscopy capture with real-time DSA and vascular roadmapping (LIVE CERO), and neural 2D/3D registration for tracker-free surgical navigation (CERO XVR). All computation occurs locally on the machine in the room.",
              },
              {
                q: "What does XVR mean?",
                a: "XVR stands for X-ray Volume Registration. It is a neural 2D/3D registration algorithm that estimates the 6-DOF spatial alignment between each live fluoroscopy frame and the patient's preoperative CT or MRI volume in under 18 ms. This gives sub-millimeter surgical navigation from the standard C-arm you already own.",
              },
              {
                q: "What is OMNI CERO DROC?",
                a: "OMNI CERO DROC is India's first multi-brand Digital Radiography Acquisition software. It connects flat-panel detectors from eight leading global manufacturers (iRay, Varex, Vieworks, DRTECH, Rayence, Canon Medical, Carestream, and Teledyne DALSA) into a single, cohesive clinical interface.",
              },
              {
                q: "Does Omni Cero require internet or cloud access?",
                a: "No. Omni Cero operates 100% offline. Zero cloud telemetry, no activation servers, and no background network calls. Even the sterile tablet console pairs over a local private WebSocket server without internet.",
              },
              {
                q: "How is Omni Cero licensed?",
                a: "Licenses are node-locked to the workstation's motherboard, CPU, and hardware UUID using Ed25519 cryptographic signatures. Activation is verified mathematically on-device.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border border-border rounded-lg bg-card overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between font-bold text-sm text-foreground hover:text-primary transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`size-4 text-muted-foreground transition-transform ${
                      openFaq === idx ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}