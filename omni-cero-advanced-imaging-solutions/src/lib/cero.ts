import liveImg from "@/assets/livecarmstreamer.png";
import xvrImg from "@/assets/xvr.png";
import workstationImg from "@/assets/workstation_ui.png";
import drocImg from "@/assets/omni-cero-droc.png";
import logoImg from "@/assets/logo.png";

export { logoImg, liveImg, xvrImg, workstationImg, drocImg };

export const detectors = [
  {
    name: "iRay Technology",
    category: "Wireless & Tethered FPD",
    models: ["Venu 1717X", "Mars 1417V Wireless", "Venu 1417X", "Mars 1717X Wireless", "Jupi 1012X"],
  },
  {
    name: "Varex Imaging",
    category: "Amorphous Silicon & CMOS",
    models: ["PaxScan 4336Wv", "PaxScan 4343CB", "PaxScan 3030X", "PaxScan 2520DX", "PaxScan 4343RC"],
  },
  {
    name: "Vieworks",
    category: "Direct Deposited CsI",
    models: ["VIVIX-S 1417N", "VIVIX-S 1717N", "VIVIX-S 4343N", "VIVIX-S 2530VW Wireless"],
  },
  {
    name: "DRTECH",
    category: "Dual AED & Mammography",
    models: ["EVS 4343 Dual AED", "RoseM 2430", "Extremis 1012", "EVS 3643 Wireless", "EVS 2430"],
  },
  {
    name: "Rayence",
    category: "Carbon Fiber Cassette-Sized",
    models: ["1717SCC", "1417WCC Wireless", "1012WCC", "1417PCA", "1717SGC"],
  },
  {
    name: "Canon Medical",
    category: "Lightweight High-DQE",
    models: ["CXDI-701C Wireless", "CXDI-801C Wireless", "CXDI-401C Compact", "CXDI-710C Wireless"],
  },
  {
    name: "Carestream",
    category: "Cesium Iodide Wireless",
    models: ["DRX-Plus 3543", "DRX-Plus 4343", "DRX-Core 3543", "DRX-L Detector (Long Length)"],
  },
  {
    name: "Teledyne DALSA",
    category: "CMOS Intraoperative & NDT",
    models: ["Rad-icon 2055 CMOS", "Xineos-2329", "Shad-o-Box 6K HS", "Rad-icon 1520", "Xineos-1313"],
  },
];

export const carmCompatibility = [
  {
    name: "Siemens Healthineers",
    models: ["Cios Alpha (FD 30x30 / 20x20)", "Cios Select", "Cios Flow", "Siremobil Compact L", "Arcadis Orbic / Avantic"],
    interface: "HDMI / DVI / D-Sub / BNC Video Out",
  },
  {
    name: "GE Healthcare",
    models: ["OEC 9800 Plus", "OEC 9900 Elite (9-inch & 12-inch)", "OEC One CFD", "OEC Elite CFD", "Brivo OEC 850"],
    interface: "DVI-D / Composite / S-Video / BNC High-Res",
  },
  {
    name: "Philips Healthcare",
    models: ["Veradius Unity Flat Detector", "Zenition 50", "Zenition 70 Flat Detector", "BV Pulsera", "BV Endura"],
    interface: "DVI / HDMI / 1080p Medical Monitor Loop Out",
  },
  {
    name: "Ziehm Imaging",
    models: ["Ziehm Vision RFD (CMOS / Flat Panel)", "Ziehm Vision R", "Ziehm Solo FD", "Ziehm Vision FD"],
    interface: "DVI-I / HDMI / Medical Video Streaming Output",
  },
];

export const captureHardware = [
  {
    type: "USB 3.0 / 3.2 UVC Capture Cards",
    specs: "Zero-driver plug & play on Windows 10/11 64-bit; uncompressed 1080p60 / 1080p30 YUY2 / NV12 capture buffer.",
    inputs: ["HDMI 2.0 / 1.4", "DVI-D / DVI-I", "BNC (SDI / Composite)", "RCA Analog Video"],
  },
  {
    type: "PCIe Internal Frame Grabbers",
    specs: "Direct DMA hardware capture with sub-frame presentation latency (< 8 ms hardware frame acquisition).",
    inputs: ["3G-SDI / 12G-SDI", "Dual DVI", "HDMI Medical Isolator Pass-Through"],
  },
];

export function filterDetectors(query: string) {
  const search = query.trim().toLowerCase();
  if (!search) return detectors;
  return detectors.filter(
    (d) =>
      d.name.toLowerCase().includes(search) ||
      d.category.toLowerCase().includes(search) ||
      d.models.some((m) => m.toLowerCase().includes(search))
  );
}

export const products = [
  {
    id: "droc",
    name: "OMNI CERO DROC",
    category: "Digital Radiography Acquisition",
    path: "/products/omni-cero-droc",
    image: drocImg,
    badge: "India's First Multi-Brand DROC",
    filename: "OmniCero_DROC_Production_Setup.exe",
    fileSize: "~215 MB",
    download: "https://github.com/OMNI-IDE-in/omni-cero-releases/releases/download/v2/OmniCero_DROC_Production_Setup.exe",
    description:
      "One unified acquisition platform. A universe of flat-panel detectors. India's own DROC software, engineered to connect leading flat-panel detectors with intuitive clinical exposure controls and native DICOM PACS review.",
    short: "Digital radiography acquisition, completely unified.",
    highlights: [
      "Compatible with 8 major detector manufacturers",
      "Sub-second exposure preview & instant AED synchronization",
      "Native DICOM C-STORE, Modality Worklist (MWL) & local PACS archive",
      "Interactive image processing: edge enhancement, contrast LUT, bone presets",
      "100% offline workstation operation — zero cloud subscription",
    ],
    features: [
      "Multi-Brand Detector Compatibility",
      "Unified Acquisition & Exposure Console",
      "Integrated Intraoperative PACS & MPR",
    ],
    featureDescriptions: [
      "Direct driver and SDK integration for iRay, Varex, Vieworks, DRTECH, Rayence, Canon Medical, Carestream, and Teledyne DALSA detectors in a single unified UI.",
      "Accelerated clinical workflow with automatic exposure detection (AED), patient worklist management, anatomical presets, and real-time contrast correction.",
      "Embedded DICOM viewing engine with multi-planar reconstruction (axial, coronal, sagittal), Hounsfield measurement tools, and local LAN PACS archive.",
    ],
    specs: {
      "Supported Detectors": "iRay, Varex, Vieworks, DRTECH, Rayence, Canon, Carestream, Teledyne DALSA",
      "Platform": "Windows 10 / 11 (64-bit)",
      "Minimum Hardware": "4 GB RAM (8 GB recommended), Intel Core i3/i5 (AVX2 supported)",
      "Licensing": "Ed25519 node-locked hardware activation (offline)",
      "Connectivity": "100% Offline, DICOM C-STORE / Modality Worklist over Hospital LAN",
    },
  },
  {
    id: "live",
    name: "LIVE CERO",
    category: "Live Fluoroscopy & DSA Video Station",
    path: "/products/live-cero",
    image: liveImg,
    badge: "Real-Time 30 FPS Workstation",
    filename: "Live_Cero_Setup.exe",
    fileSize: "~195 MB",
    download: "https://github.com/OMNI-IDE-in/omni-cero-releases/releases/download/v2/Live_Cero_Setup.exe",
    description:
      "Bring any surgical C-arm to life. Seamless 30 FPS fluoroscopy capture via plug-and-play USB capture cards, equipped with real-time Digital Subtraction Angiography (DSA), vascular roadmapping, and sterile table-side tablet console.",
    short: "Every surgical frame. In real time at 30 FPS.",
    highlights: [
      "Real-time Digital Subtraction Angiography (DSA) with motion-corrected mask subtraction",
      "Vascular roadmapping with automatic peak opacification tracking",
      "Zero-install sterile table-side tablet console via QR code over private offline WebSocket",
      "Last-image hold, 30 FPS cine loop replay, and 16-bit DICOM Part 10 XA capture",
      "Universal C-arm compatibility (Siemens, GE, Philips, Ziehm)",
    ],
    features: [
      "Live C-Arm Capture & 30 FPS Cine",
      "Real-Time DSA & Vascular Roadmapping",
      "Sterile Table-Side Tablet Console",
    ],
    featureDescriptions: [
      "Plug-and-play USB 3.0 UVC driverless capture buffers intraoperative fluoroscopy at 30 FPS with sub-frame presentation latency.",
      "Instant subtraction angiograms with automated peak contrast tracing, ideal for vascular, endovascular, and interventional pain management.",
      "Scan a QR code on an iPad, iPhone, or Android tablet to control cine loops, playback, and presets sterilely over local LAN — zero app store or internet needed.",
    ],
    specs: {
      "Supported C-Arms": "Siemens Healthineers, GE Healthcare, Philips Healthcare, Ziehm Imaging",
      "Video Input": "USB 3.0 / 2.0 UVC via HDMI, DVI, BNC, RCA",
      "Stream Performance": "30 FPS steady-state, sub-frame latency",
      "Included Workstation": "Live C-Arm Streamer + Intraoperative PACS & 3D MPR + Bundled Weasis Viewer",
      "Licensing": "Ed25519 node-locked, perpetual, 100% offline",
    },
  },
  {
    id: "xvr",
    name: "CERO XVR",
    category: "3D XVR Surgical Navigation",
    path: "/products/xvr",
    image: xvrImg,
    badge: "Neural 2D/3D Registration",
    filename: "XVR_Cero_Setup.exe",
    fileSize: "~319 MB",
    download: "https://github.com/OMNI-IDE-in/omni-cero-releases/releases/download/v2/XVR_Cero_Setup.exe",
    description:
      "Connect the intraoperative image directly to the patient's 3D anatomy. X-ray Volume Registration (XVR) neural pose estimation aligns live 2D C-arm fluoroscopy frames with preoperative CT/MRI volumes for sub-millimeter surgical guidance without bulky optical tracking hardware.",
    short: "Sub-millimeter guidance from the C-arm you already own.",
    highlights: [
      "Neural 2D/3D registration fusing 2D fluoroscopy with 3D preoperative CT/MRI volumes",
      "Sub-millimeter target accuracy: Mean Target Registration Error (MTRE) < 0.8 mm",
      "Sub-18 ms deep anatomical pose estimation latency",
      "Tracker-free guidance: no optical navigation cameras, fiducial arrays, or line-of-sight blocks",
      "Automatic LAO/RAO and cranial/caudal gantry angle real-time readouts",
    ],
    features: [
      "Deep Anatomical Pose Solver",
      "Preoperative 3D Volume Fusion",
      "Sub-Millimeter Real-Time Guidance",
    ],
    featureDescriptions: [
      "Estimates the 6-DOF spatial transformation between the C-arm X-ray beam and 3D volumetric anatomy in under 18 ms.",
      "Loads DICOM CT/MRI series with cinematic volume rendering, multi-planar reconstruction, and automatic anatomical landmark matching.",
      "Guides pedicle screw placement, orthopedic trauma reduction, and joint reconstruction using standard fluoroscopy without expensive tracking carts.",
    ],
    specs: {
      "Target Accuracy": "< 0.8 mm MTRE (Mean Target Registration Error)",
      "Inference Latency": "< 18 ms per frame",
      "Registration Modality": "Neural 2D fluoroscopy to 3D CT/MRI volumetric registration (6-DOF)",
      "System Requirements": "Windows 10/11 64-bit, 16 GB RAM recommended for 3D CT volumes, AVX2 CPU",
      "Licensing": "Ed25519 node-locked on-device activation, zero cloud connection",
    },
  },
] as const;

export type CeroProduct = (typeof products)[number];

export const SEO_KEYWORDS =
  "Omni Cero, CERO, Omni IDE, DROC software, India first DROC, Indian first DROC, Indian first DROC for world wide, first DROC software in India, digital radiography acquisition, flat panel detector software, iRay Technology, Varex PaxScan, Vieworks VIVIX, DRTECH, Rayence, Canon Medical CXDI, Carestream DRX, Teledyne DALSA, Live Cero, C-arm fluoroscopy capture, digital subtraction angiography, DSA software, vascular roadmapping, surgical navigation, XVR, X-ray volume registration, 2D 3D registration, intraoperative PACS, DICOM viewer, offline medical workstation, Windows 10, Windows 11, medical imaging software Bengaluru India";

export function buildBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://cero.omniide.com${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function pageHead(
  title: string,
  description: string,
  path = "/",
  schemaJson?: Record<string, unknown>,
  customKeywords?: string,
  ogImage = "https://cero.omniide.com/assets/og-omni-cero.png"
) {
  const url = `https://cero.omniide.com${path === "/" ? "" : path}`;
  const fullTitle = `${title} | Omni Cero Medical Systems`;
  const keywords = customKeywords ? `${customKeywords}, ${SEO_KEYWORDS}` : SEO_KEYWORDS;

  const meta: Array<{ name?: string; property?: string; content: string }> = [
    { title: fullTitle },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "author", content: "Omni IDE" },
    { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
    { name: "googlebot", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
    { name: "bingbot", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
    { name: "application-name", content: "Omni Cero" },
    { name: "apple-mobile-web-app-title", content: "Omni Cero" },
    { name: "theme-color", content: "#1A6B6B" },
    { name: "format-detection", content: "telephone=no" },
    { property: "og:site_name", content: "Omni Cero by Omni IDE" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "Omni Cero — DROC, Live C-Arm Fluoroscopy & 3D Surgical Navigation" },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
    { name: "twitter:creator", content: "@omniide" },
  ];

  const links = [{ rel: "canonical", href: url }];

  const scripts = schemaJson
    ? [
        {
          type: "application/ld+json",
          children: JSON.stringify(schemaJson),
        },
      ]
    : [];

  return { meta, links, scripts };
}