import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, ProductCards, CtaBand } from "@/components/cero-site";
import { pageHead, buildBreadcrumbSchema } from "@/lib/cero";

export const Route = createFileRoute("/products/")({
  component: Products,
  head: () =>
    pageHead(
      "Medical Imaging Software Suite — DROC, Live C-Arm & 3D Navigation",
      "Explore the Omni Cero workstation suite: OMNI CERO DROC (India's first multi-brand DROC software), LIVE CERO (30 FPS live fluoroscopy with DSA), and CERO XVR (3D tracker-free navigation). 100% offline Windows workstations by Omni IDE.",
      "/products",
      {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
          ]),
          {
            "@type": "ItemList",
            "name": "Omni Cero Medical Imaging Software Suites",
            "description": "Intraoperative and diagnostic imaging workstation software for Windows.",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "OMNI CERO DROC",
                "url": "https://cero.omniide.com/products/omni-cero-droc",
                "description": "India's first multi-brand Digital Radiography Acquisition (DROC) software supporting 8 detector brands.",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "LIVE CERO",
                "url": "https://cero.omniide.com/products/live-cero",
                "description": "Real-time 30 FPS C-arm fluoroscopy capture, digital subtraction angiography, and vascular roadmapping.",
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "CERO XVR",
                "url": "https://cero.omniide.com/products/xvr",
                "description": "Tracker-free 3D surgical navigation with neural 2D/3D registration and sub-millimeter guidance.",
              },
            ],
          },
        ],
      },
      "Omni Cero products, medical imaging software suite, DROC software, live c-arm fluoroscopy, 3d surgical navigation, offline medical workstation"
    ),
});

function Products() {
  return (
    <>
      <section className="page-intro">
        <div className="site-width">
          <Eyebrow>The Omni Cero Ecosystem</Eyebrow>
          <h1>
            Three Solutions.
            <br />
            One Connected Vision.
          </h1>
          <p>
            Purpose-built medical imaging software — from multi-brand flat-panel digital radiography to live C-arm
            fluoroscopy and 3D tracker-free surgical navigation. Engineered in India for hospitals worldwide.
          </p>
        </div>
      </section>

      <section className="section bg-background">
        <div className="site-width">
          <ProductCards />
        </div>
      </section>

      <CtaBand />
    </>
  );
}