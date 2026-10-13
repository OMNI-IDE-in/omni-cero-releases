import { Link, useRouterState } from "@tanstack/react-router";
import { useState, createContext, useContext, useEffect } from "react";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  ShieldCheck,
  Layers3,
  Unplug,
  ArrowUpRight,
  Download,
  Play,
  Monitor,
  Copy,
  Check,
  CheckCircle2,
  Cpu,
  Lock,
  HardDrive,
  Laptop,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, type CeroProduct, logoImg, liveImg, xvrImg, workstationImg } from "@/lib/cero";

// Context for global Modals (Download picker & Video tour)
interface ModalContextType {
  openDownloadModal: (preselectedProduct?: string) => void;
  closeDownloadModal: () => void;
  openVideoModal: (videoSrc?: string) => void;
  closeVideoModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openDownloadModal: () => {},
  closeDownloadModal: () => {},
  openVideoModal: () => {},
  closeVideoModal: () => {},
});

export function useModals() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState("/assets/clinical.mp4");
  const [preselected, setPreselected] = useState<string | undefined>();

  const openDownloadModal = (p?: string) => {
    setPreselected(p);
    setDownloadOpen(true);
  };
  const closeDownloadModal = () => setDownloadOpen(false);

  const openVideoModal = (src = "/assets/clinical.mp4") => {
    setActiveVideo(src);
    setVideoOpen(true);
  };
  const closeVideoModal = () => setVideoOpen(false);

  return (
    <ModalContext.Provider
      value={{
        openDownloadModal,
        closeDownloadModal,
        openVideoModal,
        closeVideoModal,
      }}
    >
      {children}
      {downloadOpen && <DownloadModal onClose={closeDownloadModal} preselected={preselected} />}
      {videoOpen && <VideoModal onClose={closeVideoModal} videoSrc={activeVideo} />}
    </ModalContext.Provider>
  );
}

export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Omni Cero home">
      <img
        src={logoImg}
        alt="Omni Cero Medical Systems"
        className="brand-logo"
        style={{ height: "36px", width: "auto", objectFit: "contain" }}
      />
      <div>
        <div className="brand-name">
          Omni Cero<span className="text-primary">.</span>
        </div>
        <div className="brand-signature">BY OMNI IDE</div>
      </div>
    </Link>
  );
}

export function SiteHeader() {
  const [menu, setMenu] = useState(false);
  const [mobile, setMobile] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { openDownloadModal, openVideoModal } = useModals();

  return (
    <header className="site-header">
      <div className="site-width header-inner">
        <Brand />

        <nav className="desktop-nav" aria-label="Main navigation">
          <div
            className="relative"
            onMouseEnter={() => setMenu(true)}
            onMouseLeave={() => setMenu(false)}
          >
            <Button
              variant="navigation"
              onClick={() => setMenu(!menu)}
              aria-expanded={menu}
              className="flex items-center gap-1.5"
            >
              Our products <ChevronDown className="size-3" />
            </Button>
            {menu && (
              <div
                className="product-menu"
                onKeyDown={(e) => {
                  if (e.key === "Escape") setMenu(false);
                }}
              >
                {products.map((p) => (
                  <Link
                    to={p.path}
                    key={p.id}
                    onClick={() => setMenu(false)}
                    className="block p-3 rounded hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <strong className="text-sm font-semibold">{p.name}</strong>
                      <span className="text-[10px] text-primary uppercase font-bold tracking-wider">
                        {p.category.split(" ")[0]}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground block mt-1 line-clamp-1">
                      {p.short}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/compatibility"
            className="nav-link"
            data-active={pathname === "/compatibility"}
          >
            Compatibility
          </Link>
          <Link to="/about" className="nav-link" data-active={pathname === "/about"}>
            About Cero
          </Link>
          <Link to="/contact" className="nav-link" data-active={pathname === "/contact"}>
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => openVideoModal("/assets/clinical.mp4")}
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground"
          >
            <Play className="size-3 fill-current text-primary" /> Watch tour
          </Button>

          <Button
            variant="brand"
            size="sm"
            onClick={() => openDownloadModal()}
            className="header-demo flex items-center gap-1.5"
          >
            <Download className="size-3.5" /> Download Workstation
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu-button"
            aria-label={mobile ? "Close menu" : "Open menu"}
            aria-expanded={mobile}
            onClick={() => setMobile(!mobile)}
          >
            {mobile ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {mobile && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <div className="px-4 py-2 text-xs font-bold uppercase text-primary tracking-wider">
            Products
          </div>
          {products.map((p) => (
            <Link key={p.id} to={p.path} onClick={() => setMobile(false)} className="px-4 py-2 block">
              {p.name} — <span className="text-muted-foreground text-xs">{p.category}</span>
            </Link>
          ))}
          <div className="border-t my-2 border-border" />
          <Link to="/compatibility" onClick={() => setMobile(false)} className="px-4 py-2 block">
            Compatibility Matrix
          </Link>
          <Link to="/about" onClick={() => setMobile(false)} className="px-4 py-2 block">
            About Cero
          </Link>
          <Link to="/contact" onClick={() => setMobile(false)} className="px-4 py-2 block">
            Contact & Licensing
          </Link>
          <div className="p-4 pt-2">
            <Button
              variant="brand"
              className="w-full justify-center flex items-center gap-2"
              onClick={() => {
                setMobile(false);
                openDownloadModal();
              }}
            >
              <Download className="size-4" /> Download Workstation
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-dot" />
      {children}
    </div>
  );
}

export function ProductCards() {
  const { openDownloadModal } = useModals();

  return (
    <div className="product-grid">
      {products.map((p, i) => (
        <div className="product-card flex flex-col justify-between" key={p.id}>
          <div>
            <div className={`product-visual ${p.id}`}>
              <img
                src={p.image}
                width="960"
                height="600"
                loading="lazy"
                alt={`${p.name} clinical interface`}
              />
              <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-background/90 text-foreground border border-border">
                {p.badge}
              </span>
            </div>
            <div className="product-content">
              <div className="product-label">
                0{i + 1} / {p.category}
              </div>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
            </div>
          </div>

          <div className="px-6 pb-6 pt-0 bg-background flex items-center justify-between gap-3 border-t border-border mt-auto">
            <Link
              to={p.path}
              className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 py-3"
            >
              Explore details <ArrowRight className="size-3.5" />
            </Link>
            <Button
              size="sm"
              variant="outline"
              className="text-xs flex items-center gap-1.5"
              onClick={() => openDownloadModal(p.name)}
            >
              <Download className="size-3" /> Download
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CtaBand() {
  const { openDownloadModal } = useModals();

  return (
    <section className="cta-band">
      <div className="site-width cta-inner">
        <div>
          <h2>Deploy Omni Cero in your imaging room.</h2>
          <p>
            Fully offline workstation software for Windows 10/11. No cloud dependencies, zero
            telemetry, cryptographically node-locked.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="brand" onClick={() => openDownloadModal()} className="flex items-center gap-2">
            <Download className="size-4" /> Download Workstation
          </Button>
          <Button variant="outline" asChild>
            <Link to="/contact">
              Contact Licensing <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const { openDownloadModal } = useModals();

  return (
    <footer className="site-footer">
      <div className="site-width">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p className="footer-note">
              Intraoperative surgical navigation, digital radiography, and medical imaging workstations.
              Engineered in Bengaluru, India. Built for operating suites worldwide.
            </p>
          </div>
          <div className="footer-col">
            <h3>OUR PRODUCTS</h3>
            {products.map((p) => (
              <Link to={p.path} key={p.id}>
                {p.name}
              </Link>
            ))}
            <button
              onClick={() => openDownloadModal()}
              className="text-left text-[11px] text-primary font-semibold hover:underline mt-2 block"
            >
              Download Installers &rarr;
            </button>
          </div>
          <div className="footer-col">
            <h3>DISCOVER</h3>
            <Link to="/compatibility">Hardware Compatibility</Link>
            <Link to="/about">About Omni Cero</Link>
            <Link to="/contact">Contact & Licensing</Link>
            <span className="text-[11px] text-muted-foreground mt-2 block">
              Ed25519 Cryptographic Licensing
            </span>
          </div>
          <div className="footer-col">
            <h3>LET’S CONNECT</h3>
            <a href="mailto:contact@omniide.com">
              contact@omniide.com <ArrowUpRight className="inline size-3" />
            </a>
            <a href="tel:+919845325913">
              +91 98453 25913 <ArrowUpRight className="inline size-3" />
            </a>
            <a href="https://omniide.com" target="_blank" rel="noreferrer">
              Omni IDE Company <ArrowUpRight className="inline size-3" />
            </a>
            <p className="text-xs text-muted-foreground mt-2">
              B-Block, Devgere, Kumbalagodu, Kengeri
              <br />
              Bengaluru 560060, Karnataka, India
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Omni Cero Medical Systems. All rights reserved.</span>
          <span>A product of Omni IDE — omniide.com</span>
        </div>
      </div>
    </footer>
  );
}

export function ProductDetail({ product }: { product: CeroProduct }) {
  const { openDownloadModal } = useModals();

  return (
    <>
      <section className="hero detail-hero">
        <div className="site-width hero-content fade-in">
          <Eyebrow>{product.category}</Eyebrow>
          <h1>
            <span className="brand-headline">{product.name}</span>
            <br />
            {product.short}
          </h1>
          <p className="hero-copy">{product.description}</p>
          <div className="hero-actions flex flex-wrap gap-3 mt-6">
            <Button
              size="lg"
              variant="brand"
              asChild
            >
              <a href={product.download} download>
                <Download className="size-4" /> Download {product.filename}
              </a>
            </Button>
            <Button asChild variant="editorial" size="lg">
              <Link to="/contact" search={{ product: product.name }}>
                Book a demo <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground mt-4">
            <span className="flex items-center gap-1.5">
              <Laptop className="size-3.5 text-primary" /> Windows 10/11 64-bit
            </span>
            <span className="flex items-center gap-1.5">
              <HardDrive className="size-3.5 text-primary" /> {product.fileSize}
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="size-3.5 text-primary" /> 100% Offline Node-Locked
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <Eyebrow>Clinical Interface</Eyebrow>
              <h2>Engineered for the Operating Room</h2>
            </div>
            <p className="section-intro">
              High-fidelity visualization, zero dropped frames, and driverless hardware integration.
            </p>
          </div>

          <div className="detail-workspace shadow-xl border border-border">
            <img
              src={product.image}
              alt={`${product.name} workstation screenshot`}
              width="1440"
              height="900"
              loading="lazy"
              className="rounded"
            />
          </div>

          <div className="feature-grid mt-12">
            {product.features.map((feature, i) => (
              <div key={feature} className="p-6 rounded-lg border border-border bg-card">
                {i === 0 ? (
                  <Layers3 className="text-primary size-7" />
                ) : i === 1 ? (
                  <ShieldCheck className="text-primary size-7" />
                ) : (
                  <Unplug className="text-primary size-7" />
                )}
                <h3 className="text-lg font-bold mt-4">{feature}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  {product.featureDescriptions[i]}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-lg bg-secondary/50 border border-border">
            <h3 className="text-xl font-bold mb-6">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specs).map(([key, val]) => (
                <div key={key} className="flex flex-col py-2 border-b border-border/60">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {key}
                  </span>
                  <span className="text-sm font-medium text-foreground mt-0.5">{val}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground">
                Installer file: <strong>{product.filename}</strong> ({product.fileSize})
              </span>
              <Button variant="brand" asChild>
                <a href={product.download} download>
                  <Download className="size-4" /> Download Installer
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

// Download Modal
function DownloadModal({
  onClose,
  preselected,
}: {
  onClose: () => void;
  preselected?: string;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const mobileDevice = /iphone|ipad|ipod|android|blackberry|iemobile|opera mini/i.test(ua);
    setIsMobile(mobileDevice || window.innerWidth <= 768);
  }, []);

  const copyLinks = async () => {
    const text = products.map((p) => `${p.name}: ${p.download}`).join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const handleEmailSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSentMessage(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground p-1 rounded-full"
          aria-label="Close modal"
        >
          <X className="size-5" />
        </button>

        <div className="flex items-center gap-2.5 text-primary mb-2">
          <Download className="size-5" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Official Software Releases
          </span>
        </div>

        <h2 className="text-2xl font-bold">Choose your Omni Cero Workstation</h2>
        <p className="text-sm text-muted-foreground mt-1 mb-6">
          Self-contained offline Windows 10/11 64-bit installers. All applications operate 100% offline
          with Ed25519 node-locked licensing.
        </p>

        {isMobile && (
          <div className="mb-6 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200">
            <div className="flex items-center gap-2 font-bold text-sm">
              <Laptop className="size-4" /> Desktop Workstation Required
            </div>
            <p className="text-xs mt-1 text-muted-foreground">
              Omni Cero installs directly on hospital PC workstations (Windows 10/11 64-bit). You can copy
              or email the download links to open on your operating room machine.
            </p>
            {sentMessage ? (
              <p className="text-xs text-primary font-semibold mt-2">
                Download instructions prepared! Check your mail client.
              </p>
            ) : (
              <form onSubmit={handleEmailSend} className="mt-3 flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="doctor@hospital.org"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-xs px-3 py-1.5 rounded border border-border bg-background flex-1"
                />
                <Button size="sm" variant="brand" type="submit">
                  Send link
                </Button>
              </form>
            )}
          </div>
        )}

        <div className="space-y-3">
          {products.map((p) => {
            const isHighlight = preselected ? preselected.includes(p.name) : p.id === "droc";
            return (
              <a
                key={p.id}
                href={p.download}
                download
                className={`block p-4 rounded-lg border transition-all ${
                  isHighlight
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-base text-foreground">{p.name}</h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-secondary text-primary">
                        {p.badge}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {p.description}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] text-muted-foreground mt-2 font-mono">
                      <span>{p.filename}</span>
                      <span>·</span>
                      <span>{p.fileSize}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="brand" className="shrink-0 flex items-center gap-1.5">
                    <Download className="size-3.5" /> Download
                  </Button>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <button
            onClick={copyLinks}
            className="flex items-center gap-1.5 hover:text-foreground font-semibold"
          >
            {copied ? (
              <>
                <Check className="size-3.5 text-primary" /> Copied all links
              </>
            ) : (
              <>
                <Copy className="size-3.5" /> Copy download links
              </>
            )}
          </button>
          <span>Published by Omni IDE · Ed25519 node-locked</span>
        </div>
      </div>
    </div>
  );
}

// Video Modal
function VideoModal({
  onClose,
  videoSrc = "/assets/clinical.mp4",
}: {
  onClose: () => void;
  videoSrc?: string;
}) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="video-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-4 py-3 bg-neutral-900 text-white text-xs border-b border-neutral-800">
          <span className="font-semibold flex items-center gap-2">
            <Play className="size-3 text-primary fill-current" /> Omni Cero — Clinical Workflow Tour
          </span>
          <button onClick={onClose} className="p-1 hover:text-neutral-400" aria-label="Close video">
            <X className="size-4" />
          </button>
        </div>
        <div className="aspect-video bg-black flex items-center justify-center">
          <video
            controls
            autoPlay
            playsInline
            src={videoSrc}
            poster={workstationImg}
            className="w-full h-full object-contain"
          >
            Your browser does not support video playback.
          </video>
        </div>
      </div>
    </div>
  );
}