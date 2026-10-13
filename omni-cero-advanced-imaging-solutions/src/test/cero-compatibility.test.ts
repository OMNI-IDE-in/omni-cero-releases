import { describe, expect, it } from "vitest";
import { detectors, filterDetectors } from "@/lib/cero";
describe("User-specified flat-panel compatibility", () => {
  const required = [
    ["iRay Technology", ["Venu 1717X", "Mars 1417V Wireless"]],
    ["Varex Imaging", ["PaxScan 4336Wv", "PaxScan 4343CB"]],
    ["Vieworks", ["VIVIX-S 1417N", "VIVIX-S 1717N"]],
    ["DRTECH", ["EVS 4343 Dual AED", "RoseM 2430"]],
    ["Rayence", ["1717SCC"]], ["Canon Medical", ["CXDI-701C"]],
    ["Carestream", ["DRX-Plus 3543"]], ["Teledyne DALSA", ["Rad-icon CMOS"]],
  ] as const;
  for (const [manufacturer, models] of required) {
    it(`supports the requested ${manufacturer} detectors`, () => { expect(detectors.find(d => d.name === manufacturer)?.models).toEqual([...models]); });
  }
  it("finds a manufacturer by detector model case-insensitively", () => { expect(filterDetectors("  mars 1417v  ").map(d => d.name)).toEqual(["iRay Technology"]); });
  it("does not return unsupported models", () => { expect(filterDetectors("unknown-model-123")).toEqual([]); });
});