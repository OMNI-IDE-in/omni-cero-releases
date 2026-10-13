import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, useModals } from "@/components/cero-site";
import { pageHead, products, buildBreadcrumbSchema } from "@/lib/cero";

export const Route = createFileRoute("/contact")({
  component: Contact,
  validateSearch: (s: Record<string, unknown>): { product?: string } =>
    typeof s["product"] === "string" ? { product: s["product"] } : {},
  head: () =>
    pageHead(
      "Contact Omni Cero — Book Clinical Demo & Workstation Licensing | Omni IDE",
      "Speak with Omni Cero by Omni IDE about in-hospital demonstrations, flat-panel detector integration, live C-arm trials, or node-locked workstation licensing. Located in Bengaluru, India.",
      "/contact",
      {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          {
            "@type": "ContactPage",
            "name": "Contact Omni Cero Medical Systems",
            "description": "Schedule a clinical demonstration, discuss detector compatibility, or request quotation for Omni Cero workstation licenses.",
            "url": "https://cero.omniide.com/contact",
            "mainEntity": {
              "@type": "MedicalOrganization",
              "name": "Omni Cero",
              "email": "contact@omniide.com",
              "telephone": "+919845325913",
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
      "Contact Omni Cero, Omni Cero demo, DROC licensing, medical workstation quotation, Omni IDE contact, Bengaluru medical systems, support contact"
    ),
});

function Contact() {
  const { product } = Route.useSearch();
  const { openDownloadModal } = useModals();
  const [draft, setDraft] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `Hello Omni Cero team,\n\nI would like to inquire about ${data.get("product")}.\n\nName: ${data.get("name")}\nWork Email: ${data.get("email")}\nHospital / Organization: ${data.get("organization")}\n\nRequirements / Questions:\n${data.get("message")}\n\nBest regards,\n${data.get("name")}`;
    setDraft(body);
  }

  return (
    <>
      <section className="page-intro">
        <div className="site-width">
          <Eyebrow>Software Access &amp; Support</Eyebrow>
          <h1>
            Your next chapter
            <br />
            in clinical imaging starts here.
          </h1>
          <p>
            Connect directly with the Omni Cero engineering and licensing team in Bengaluru. We assist
            hospitals and surgical suites with evaluation, hardware compatibility, and offline deployment.
          </p>
        </div>
      </section>

      <section className="section bg-background">
        <div className="site-width contact-grid">
          <div className="contact-info">
            <h2 className="text-2xl font-bold">Direct Access. Zero Intermediaries.</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Talk directly with our medical software engineers about flat-panel detector integration,
              C-arm video capture, or node-locked workstation deployment.
            </p>

            <div className="contact-item">
              <Mail className="size-5 text-primary shrink-0" />
              <div>
                <strong>EMAIL US</strong>
                <a href="mailto:contact@omniide.com">contact@omniide.com</a>
              </div>
            </div>

            <div className="contact-item">
              <Phone className="size-5 text-primary shrink-0" />
              <div>
                <strong>CALL US (WORLDWIDE)</strong>
                <a href="tel:+919845325913">+91 98453 25913</a>
              </div>
            </div>

            <div className="contact-item">
              <MapPin className="size-5 text-primary shrink-0" />
              <div>
                <strong>DEVELOPMENT HEADQUARTERS</strong>
                <span>
                  B-Block, Devgere, Kumbalagodu, Kengeri
                  <br />
                  Bengaluru 560060, Karnataka, India
                </span>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-lg bg-secondary/50 border border-border">
              <div className="text-xs font-bold text-foreground mb-1">Looking to install now?</div>
              <p className="text-xs text-muted-foreground mb-3">
                Download the offline Windows workstation installers directly from our repository.
              </p>
              <Button size="sm" variant="outline" onClick={() => openDownloadModal()} className="flex items-center gap-1.5 text-xs">
                <Download className="size-3.5" /> Download Workstation Installers
              </Button>
            </div>
          </div>

          {draft ? (
            <div aria-live="polite" className="p-8 rounded-lg border border-border bg-card shadow-sm">
              <Check className="size-8 text-primary mb-4" />
              <h2 className="text-2xl font-bold">Your enquiry is ready.</h2>
              <p className="text-xs text-muted-foreground mt-2 mb-6">
                We've prepared your inquiry text. Click below to launch your email client, or copy the
                message to send via webmail.
              </p>
              <Button asChild variant="brand" className="w-full justify-center">
                <a
                  href={`mailto:contact@omniide.com?subject=${encodeURIComponent(
                    "Omni Cero Product Demonstration & Licensing Inquiry"
                  )}&body=${encodeURIComponent(draft)}`}
                >
                  Open Email Client <ArrowUpRight className="ml-1 size-4" />
                </a>
              </Button>
              <div className="mt-4 flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(draft);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    } catch {
                      setCopied(false);
                    }
                  }}
                >
                  {copied ? "Copied to clipboard!" : "Copy inquiry message"}
                </Button>
                <Button variant="ghost" onClick={() => setDraft(null)}>
                  Edit
                </Button>
              </div>
            </div>
          ) : (
            <form className="contact-form bg-card p-8 rounded-lg border border-border shadow-sm" onSubmit={submit}>
              <label>
                Your Full Name
                <input required name="name" autoComplete="name" placeholder="Dr. Jane Smith" />
              </label>

              <label>
                Work Email
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="doctor@hospital.org"
                />
              </label>

              <label className="full">
                Hospital / Organization
                <input
                  required
                  name="organization"
                  autoComplete="organization"
                  placeholder="Apollo Hospitals / Surgical Suite OR-1"
                />
              </label>

              <label className="full">
                Product Interest
                <select name="product" defaultValue={product || "Help me choose"}>
                  {products.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.category})
                    </option>
                  ))}
                  <option value="Complete Omni Cero Suite">Complete Omni Cero Workstation Suite</option>
                  <option value="General Licensing & Hardware Compatibility">
                    General Licensing &amp; Hardware Compatibility
                  </option>
                </select>
              </label>

              <label className="full">
                Requirements &amp; Existing Equipment
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Specify your C-arm models (Siemens, GE, etc.), flat-panel detector models (iRay, Varex, etc.), or clinical navigation needs..."
                />
              </label>

              <div className="full pt-2">
                <Button type="submit" variant="brand" className="w-full justify-center">
                  Prepare Demonstration Enquiry <ArrowUpRight className="ml-1 size-4" />
                </Button>
                <p className="form-note mt-3 text-center">
                  Direct reply within 24 business hours from our Bengaluru engineering team.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}