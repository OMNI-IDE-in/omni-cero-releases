import { createFileRoute } from "@tanstack/react-router";
import { ProductDetail } from "@/components/cero-site";
import { products, pageHead, buildBreadcrumbSchema } from "@/lib/cero";

export const Route = createFileRoute("/products/omni-cero-droc")({
  component: Droc,
  head: () =>
    pageHead(
      "OMNI CERO DROC — India's First Multi-Brand DROC Software for Worldwide Flat-Panel Detectors",
      "India's first multi-brand Digital Radiography Acquisition (DROC) software for flat-panel detectors. Supports iRay Technology, Varex Imaging, Vieworks, DRTECH, Rayence, Canon Medical, Carestream, and Teledyne DALSA. Sub-second AED preview, DICOM C-STORE, 100% offline Windows workstation.",
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
            "description": "India's first multi-brand Digital Radiography Acquisition (DROC) software compatible with iRay Technology, Varex Imaging, Vieworks, DRTECH, Rayence, Canon Medical, Carestream, and Teledyne DALSA flat-panel detectors. Features sub-second exposure preview, AED sync, complete DICOM PACS networking, and offline node-locked licensing.",
            "featureList": [
              "Universal compatibility with 8 leading flat-panel detector brands (wired & wireless)",
              "Sub-second exposure preview with Automatic Exposure Detection (AED) synchronization",
              "Full DICOM 3.0 conformance: C-STORE, Modality Worklist (MWL), Storage Commitment, and Print",
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
            "description": "Clinical workstation software interfacing hospital flat-panel digital radiography detectors with institutional PACS and DICOM archives.",
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What makes OMNI CERO DROC India's first multi-brand DROC?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "OMNI CERO DROC is the first digital radiography acquisition software engineered in India that natively interfaces with 8 top global flat-panel detector manufacturers (iRay, Varex, Vieworks, DRTECH, Rayence, Canon, Carestream, Teledyne DALSA) on a single unified platform.",
                },
              },
              {
                "@type": "Question",
                "name": "Does OMNI CERO DROC work with wireless detectors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, OMNI CERO DROC supports both tethered and wireless flat-panel detectors with hardware AED (Automatic Exposure Detection), Wi-Fi AP direct connection, and sub-second full-resolution image transfer.",
                },
              },
              {
                "@type": "Question",
                "name": "Can OMNI CERO DROC run on existing hospital computers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. It runs on any standard Windows 10 or Windows 11 64-bit PC with at least 4 GB RAM and an AVX2-compatible Intel or AMD processor, requiring no proprietary GPU hardware.",
                },
              },
            ],
          },
        ],
      },
      "Omni Cero DROC, India first DROC, Indian first DROC for worldwide, DROC software, flat panel detector software, digital radiography acquisition, iRay flat panel, Varex PaxScan DROC, Vieworks VIVIX acquisition, DRTECH EVS, Rayence 1717, Canon CXDI software, Carestream DRX workstation, Teledyne DALSA, AED sync, DICOM C-STORE PACS, offline medical workstation Windows",
      "https://cero.omniide.com/assets/omni-cero-droc.png"
    ),
});

function Droc() {
  return <ProductDetail product={products[0]} />;
}