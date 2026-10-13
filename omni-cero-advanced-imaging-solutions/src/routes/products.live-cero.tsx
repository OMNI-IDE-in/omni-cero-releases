import { createFileRoute } from "@tanstack/react-router";
import { ProductDetail } from "@/components/cero-site";
import { products, pageHead, buildBreadcrumbSchema } from "@/lib/cero";

export const Route = createFileRoute("/products/live-cero")({
  component: Live,
  head: () =>
    pageHead(
      "LIVE CERO — 30 FPS Live C-Arm Fluoroscopy Capture, Real-Time DSA & Vascular Roadmapping",
      "Connect any surgical C-arm (Siemens, GE, Philips, Ziehm) to LIVE CERO for real-time 30 FPS live fluoroscopy capture, motion-corrected Digital Subtraction Angiography (DSA), vascular roadmapping, and sterile table-side tablet console. 100% offline Windows workstation by Omni IDE.",
      "/products/live-cero",
      {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "LIVE CERO", path: "/products/live-cero" },
          ]),
          {
            "@type": "SoftwareApplication",
            "@id": "https://cero.omniide.com/products/live-cero#software",
            "name": "LIVE CERO",
            "alternateName": [
              "Live Cero C-Arm Video Station",
              "Live C-Arm Fluoroscopy Capture & DSA",
              "Omni Cero Live Fluoroscopy",
            ],
            "applicationCategory": "MedicalApplication",
            "applicationSubCategory": "Live Fluoroscopy Capture & DSA",
            "operatingSystem": "Windows 10, Windows 11 (64-bit)",
            "softwareVersion": "2.0.0",
            "downloadUrl": "https://github.com/OMNI-IDE-in/omni-cero-releases/releases/download/v2/Live_Cero_Setup.exe",
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
            "description": "Real-time 30 FPS intraoperative fluoroscopy capture from surgical C-arms with real-time Digital Subtraction Angiography (DSA), vascular roadmapping, and sterile table-side tablet console. Works with Siemens Healthineers, GE Healthcare, Philips, and Ziehm Imaging systems via standard UVC video capture.",
            "featureList": [
              "30 FPS uncompressed fluoroscopy capture via standard USB UVC or PCIe frame grabbers",
              "Real-time Digital Subtraction Angiography (DSA) with automatic motion compensation",
              "Vascular roadmapping overlay with peak opacification hold for catheter navigation",
              "Sterile table-side wireless tablet console via offline QR-code WebSocket pairing",
              "Full DICOM export, cine loop recording, and 100% offline node-locked licensing",
            ],
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
            },
          },
          {
            "@type": "MedicalDevice",
            "name": "LIVE CERO Fluoroscopy & DSA Video Station",
            "manufacturer": {
              "@type": "Organization",
              "name": "Omni Cero by Omni IDE",
            },
            "description": "Intraoperative C-arm video capture and digital subtraction angiography workstation interfacing hospital C-arms with surgical displays.",
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which C-arm models are compatible with LIVE CERO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "LIVE CERO is universally compatible with surgical C-arms from Siemens Healthineers (Cios Alpha, Cios Select, Arcadis), GE Healthcare (OEC 9800, 9900 Elite, OEC One CFD), Philips Healthcare (Veradius, Zenition, BV Pulsera), and Ziehm Imaging (Vision RFD, Vision R, Solo FD) via HDMI, DVI, SDI, or BNC video output.",
                },
              },
              {
                "@type": "Question",
                "name": "Does LIVE CERO require an internet connection in the OR?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. LIVE CERO is 100% offline. The sterile tablet console pairs over a local offline Wi-Fi hotspot using WebSocket and QR-code pairing, with zero cloud dependency.",
                },
              },
            ],
          },
        ],
      },
      "Live Cero, live c-arm fluoroscopy capture, digital subtraction angiography, real-time DSA software, vascular roadmapping, sterile tablet console, Siemens Cios capture, GE OEC fluoroscopy software, Philips Zenition C-arm, Ziehm Vision RFD, cine loop recording, intraoperative fluoroscopy workstation Windows",
      "https://cero.omniide.com/assets/livecarmstreamer.png"
    ),
});

function Live() {
  return <ProductDetail product={products[1]} />;
}