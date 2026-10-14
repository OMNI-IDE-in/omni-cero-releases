import { createFileRoute } from "@tanstack/react-router";
import { ProductDetail } from "@/components/cero-site";
import { products, pageHead, buildBreadcrumbSchema } from "@/lib/cero";

export const Route = createFileRoute("/products/omni-cero-droc")({
  component: Droc,
  head: () =>
    pageHead(
      "OMNI CERO DROC — India's First Multi-Brand DROC Software for 10 Global Flat-Panel Detectors, Generators & Laser Imagers",
      "India's first multi-brand Digital Radiography Acquisition (DROC) software. Native SDK & DLL integration for 10 global detector manufacturers (Varex, iRay, Vieworks, DRTECH, Rayence, CareRay, Teledyne DALSA, Canon, Carestream, Thales), high-frequency X-ray generators (CPI, Sedecal, Gulmay, Poskom), and DICOM dry laser film imagers (Fuji, Carestream, Agfa, Sony).",
      "/products/omni-cero-droc",
      {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "OMNI CERO DROC", path: "/products/omni-cero-droc" },
          ]),
          {
            "@type": "SoftwareApplication",
            "@id": "https://cero.omniide.com/products/omni-cero-droc#software",
            "name": "OMNI CERO DROC",
            "alternateName": [
              "India's First Multi-Brand DROC Software",
              "Omni Cero DROC Acquisition Workstation",
              "Omni Cero Digital Radiography Software",
            ],
            "applicationCategory": "MedicalApplication",
            "applicationSubCategory": "Digital Radiography Acquisition (DROC)",
            "operatingSystem": "Windows 10, Windows 11 (64-bit)",
            "softwareVersion": "2.0.0",
            "downloadUrl": "https://github.com/OMNI-IDE-in/omni-cero-releases/releases/download/v2/OmniCero_DROC_Production_Setup.exe",
            "fileSize": "195MB",
            "publisher": {
              "@type": "MedicalOrganization",
              "name": "Omni Cero",
              "url": "https://cero.omniide.com/",
              "parentOrganization": {
                "@type": "Organization",
                "name": "Omni IDE",
                "url": "https://omniide.com/",
              },
            },
            "description": "India's first multi-brand Digital Radiography Acquisition (DROC) software compatible with 10 global flat-panel detector manufacturers: Varex Imaging, iRay Technology, Vieworks, DRTECH, Rayence, CareRay, Teledyne DALSA, Canon Medical, Carestream, and Thales Group (+ OmniRef Lab 1024 QA simulator). Features integrated high-frequency X-ray generator control (CPI, Sedecal, Gulmay, Poskom), DICOM dry laser print management SCU (Fuji, Carestream, Agfa, Sony), sub-second AED preview, and 100% offline node-locked licensing.",
            "featureList": [
              "Universal native integration with 10 leading flat-panel detector brands (wired & wireless)",
              "Integrated high-frequency X-ray generator exposure console (CPI, Sedecal, Gulmay, Poskom)",
              "DICOM Basic Grayscale Print Management SCU for Fuji, Carestream, Agfa, and Sony laser film imagers",
              "Sub-second exposure preview with Automatic Exposure Detection (AED) synchronization",
              "Full DICOM 3.0 conformance: C-STORE, Modality Worklist (MWL C-FIND), and PACS archive over Port 11112",
              "Advanced image processing: multi-scale frequency enhancement, grid suppression, and tissue equalization",
              "100% offline Windows workstation operation with Ed25519 hardware-locked licensing",
            ],
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "description": "Production setup available for hospital deployment and clinical evaluation.",
            },
          },
          {
            "@type": "MedicalDevice",
            "name": "OMNI CERO DROC Flat-Panel Acquisition Workstation",
            "manufacturer": {
              "@type": "Organization",
              "name": "Omni Cero by Omni IDE",
            },
            "description": "Clinical workstation software interfacing hospital flat-panel digital radiography detectors, X-ray generators, and laser film imagers with institutional PACS and DICOM archives.",
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What makes OMNI CERO DROC India's first multi-brand DROC?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "OMNI CERO DROC is the first digital radiography acquisition software engineered in India that natively interfaces with 10 top global flat-panel detector manufacturers (Varex, iRay, Vieworks, DRTECH, Rayence, CareRay, Teledyne DALSA, Canon Medical, Carestream, and Thales Group) on a single unified platform without proprietary manufacturer lock-in.",
                },
              },
              {
                "@type": "Question",
                "name": "Which X-ray generators and DICOM film printers are supported?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "OMNI CERO DROC integrates directly with high-frequency X-ray generators from CPI (Indico 100 / Rad-X), Sedecal (Neomed / SHF), Gulmay (CP), and Poskom (PXM / EcoTron) via RS-232, CAN bus, and TCP interlocks. For diagnostic film printing, it provides native DICOM Basic Grayscale Print Management SCU for Fuji Medical (DryPix), Carestream/Kodak (DryView), Agfa HealthCare (Drystar), and Sony Healthcare (FilmStation).",
                },
              },
              {
                "@type": "Question",
                "name": "Does OMNI CERO DROC work with wireless detectors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, OMNI CERO DROC supports both tethered and wireless flat-panel detectors with hardware AED (Automatic Exposure Detection), direct Wi-Fi AP connectivity, and sub-second full-resolution image transfer.",
                },
              },
              {
                "@type": "Question",
                "name": "Can OMNI CERO DROC run on existing hospital computers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. It runs on any standard Windows 10 or Windows 11 64-bit PC with at least 4 GB RAM and an AVX2-compatible Intel or AMD processor, requiring zero dedicated GPU hardware.",
                },
              },
            ],
          },
        ],
      },
      "Omni Cero DROC, India first DROC, Indian first DROC for worldwide, DROC software, flat panel detector software, digital radiography acquisition, Varex PaxScan DROC, iRay flat panel, Vieworks VIVIX acquisition, DRTECH EVS, Rayence 1717, CareRay CareView, Teledyne DALSA CMOS, Canon CXDI software, Carestream DRX workstation, Thales Pixium, CPI Indico generator, Sedecal SHF generator, Fuji DryPix, Carestream DryView, Agfa Drystar, Sony FilmStation, AED sync, DICOM C-STORE PACS, offline medical workstation Windows",
      "https://cero.omniide.com/assets/omni-cero-droc.png"
    ),
});

function Droc() {
  return <ProductDetail product={products[0]} />;
}