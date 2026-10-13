# Omni Cero — Intraoperative Medical Workstation

> An offline Windows workstation for intraoperative surgical navigation, multi-brand digital radiography (DROC), and live 30 FPS C-arm fluoroscopy with real-time Digital Subtraction Angiography (DSA).

Official site: [https://cero.omniide.com](https://cero.omniide.com)  
Published by: [Omni IDE](https://omniide.com), Bengaluru, Karnataka, India.

---

## Software Applications

Omni Cero ships as three specialized editions:

1. **OMNI CERO DROC** (`OmniCero_DROC_Production_Setup.exe`)
   - India's first multi-brand Digital Radiography Acquisition software.
   - Compatible with flat-panel detectors from 8 leading global manufacturers:
     - **iRay Technology** (Venu 1717X, Mars 1417V Wireless, Jupi 1012X)
     - **Varex Imaging** (PaxScan 4336Wv, PaxScan 4343CB, PaxScan 3030X)
     - **Vieworks** (VIVIX-S 1417N, VIVIX-S 1717N, VIVIX-S 4343N)
     - **DRTECH** (EVS 4343 Dual AED, RoseM 2430)
     - **Rayence** (1717SCC, 1417WCC Wireless)
     - **Canon Medical** (CXDI-701C Wireless, CXDI-801C)
     - **Carestream** (DRX-Plus 3543, DRX-Core)
     - **Teledyne DALSA** (Rad-icon CMOS, Xineos)
   - Features: Sub-second exposure preview, Automatic Exposure Detection (AED), DICOM Modality Worklist (MWL), integrated PACS viewing, 100% offline.
   - [Download OMNI CERO DROC Setup](https://github.com/OMNI-IDE-in/omni-cero-releases/releases/download/v2/OmniCero_DROC_Production_Setup.exe)

2. **LIVE CERO** (`Live_Cero_Setup.exe` · ~195 MB)
   - Real-time 30 FPS fluoroscopy capture from surgical C-arms via driverless USB 3.0/2.0 UVC capture cards.
   - Real-time Digital Subtraction Angiography (DSA) with motion-corrected mask subtraction.
   - Vascular roadmapping with automatic peak opacification lock.
   - Sterile table-side tablet console: zero-install web console on any iPad/Android browser paired via QR code over an offline local WebSocket server.
   - Last-image hold, 30 FPS cine replay, and 16-bit DICOM Part 10 XA capture.
   - Universal C-arm support: Siemens Healthineers, GE Healthcare, Philips Healthcare, Ziehm Imaging.
   - [Download LIVE CERO Setup](https://github.com/OMNI-IDE-in/omni-cero-releases/releases/download/v2/Live_Cero_Setup.exe)

3. **CERO XVR** (`XVR_Cero_Setup.exe` · ~319 MB)
   - 3D XVR Surgical Navigation: X-ray Volume Registration neural 2D/3D registration technique aligning live C-arm fluoroscopy frames with preoperative CT/MRI volumes.
   - Sub-millimeter target accuracy: Mean Target Registration Error (MTRE) < 0.8 mm.
   - Sub-18 ms deep anatomical pose estimation latency.
   - Tracker-free guidance: no optical navigation cameras, fiducial arrays, or line-of-sight obstruction.
   - Real-time LAO/RAO and cranial/caudal gantry angle readouts.
   - [Download CERO XVR Setup](https://github.com/OMNI-IDE-in/omni-cero-releases/releases/download/v2/XVR_Cero_Setup.exe)

---

## Architectural Ethos: "Cero" Means Zero

- **Zero Cloud**: 100% of computation executes locally on the hospital workstation in the room.
- **Zero Telemetry**: No phone-home requests, no analytics, no third-party servers.
- **Zero Data Egress**: Patient DICOM studies and fluoroscopy cine runs remain strictly within your hospital LAN.
- **Node-Locked Security**: Ed25519 cryptographic signatures bind licenses to motherboard, CPU, and hardware UUID.
- **No Dedicated GPU Required**: Optimized AVX2 CPU processing pipeline runs on standard hospital hardware.

---

## Website Development

Built with TanStack Router, React 19, Tailwind CSS v4, and Nitro.

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle with prerendered static HTML pages
npm run build

# Preview production build locally
npm run preview
```

## Deployment

The website automatically builds and deploys to **cero.omniide.com** via GitHub Actions on every push to the `main` branch.
