import { createFileRoute } from "@tanstack/react-router";
import { ProductDetail } from "@/components/cero-site";
import { products, pageHead, buildBreadcrumbSchema } from "@/lib/cero";

export const Route = createFileRoute("/products/xvr")({
  component: Xvr,
  head: () =>
    pageHead(
      "CERO XVR — 3D Surgical Navigation Workstation (X-Ray Volume Registration)",
      "Tracker-free 3D surgical navigation using neural 2D/3D X-ray Volume Registration. Fuses live C-arm fluoroscopy with preoperative CT/MRI volumes for sub-millimeter target accuracy (<0.8 mm MTRE, <18 ms latency) without optical tracking cameras. 100% offline Windows workstation by Omni IDE.",
      "/products/xvr",
      {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "CERO XVR", path: "/products/xvr" },
          ]),
          {
            "@type": "SoftwareApplication",
            "@id": "https://cero.omniide.com/products/xvr#software",
            "name": "CERO XVR",
            "alternateName": [
              "Cero XVR 3D Surgical Navigation",
              "X-Ray Volume Registration Navigation",
              "Omni Cero XVR",
            ],
            "applicationCategory": "MedicalApplication",
            "applicationSubCategory": "3D Surgical Navigation",
            "operatingSystem": "Windows 10, Windows 11 (64-bit)",
            "softwareVersion": "2.0.0",
            "downloadUrl": "https://github.com/OMNI-IDE-in/omni-cero-releases/releases/download/v2/XVR_Cero_Setup.exe",
            "fileSize": "319MB",
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
            "description": "Tracker-free 3D surgical navigation utilizing neural 2D/3D registration aligning live fluoroscopy projections with preoperative 3D CT/MRI scans for sub-millimeter anatomical guidance (<0.8 mm MTRE) and <18 ms pose inference.",
            "featureList": [
              "Neural 2D fluoroscopy to 3D volumetric CT/MRI registration in 6 degrees of freedom",
              "Sub-millimeter target registration accuracy (< 0.8 mm MTRE)",
              "Sub-18 ms deep anatomical pose estimation latency per frame",
              "Tracker-free guidance eliminating line-of-sight optical camera carts and patient fiducials",
              "Automatic C-arm gantry angle readouts (LAO/RAO and cranial/caudal angles)",
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
            "name": "CERO XVR Surgical Guidance Workstation",
            "manufacturer": {
              "@type": "Organization",
              "name": "Omni Cero by Omni IDE",
            },
            "description": "Intraoperative 3D surgical navigation and anatomical volume registration system for orthopedic, spine, and trauma procedures.",
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How does CERO XVR navigate without optical tracking cameras?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CERO XVR uses neural 2D/3D registration algorithms that analyze the anatomical contours directly visible on standard X-ray fluoroscopy images and align them to the patient's preoperative 3D CT/MRI volume in real time.",
                },
              },
              {
                "@type": "Question",
                "name": "What accuracy does CERO XVR achieve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CERO XVR delivers sub-millimeter target accuracy with less than 0.8 mm Mean Target Registration Error (MTRE) and less than 18 ms inference latency.",
                },
              },
            ],
          },
        ],
      },
      "Cero XVR, 3D surgical navigation, X-ray volume registration, 2D 3D registration, tracker-free surgical navigation, spine pedicle screw navigation, orthopedic trauma navigation, fluoroscopy CT registration, offline surgical workstation Windows",
      "https://cero.omniide.com/assets/xvr.png"
    ),
});

function Xvr() {
  return <ProductDetail product={products[2]} />;
}