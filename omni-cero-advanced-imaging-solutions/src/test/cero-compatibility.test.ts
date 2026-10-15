import { describe, expect, it } from "vitest";
import { detectors, filterDetectors } from "@/lib/cero";

describe("User-specified flat-panel compatibility", () => {
  const required = [
    ["iRay Technology", ["Venu 1717X", "Mars 1417V"]],
    ["Varex Imaging", ["PaxScan 4336Wv", "PaxScan 4343CB"]],
    ["Vieworks", ["VIVIX-S 1417N", "VIVIX-S 1717N"]],
    ["DRTECH", ["EVS 4343", "RoseM 2430 Mammo"]],
    ["Rayence", ["Rayence 1717SCC"]],
    ["Canon Medical", ["CXDI-701C Wireless"]],
    ["Carestream", ["DRX-Plus 3543"]],
    ["Teledyne DALSA", ["Rad-icon 2022 CMOS"]],
    ["PIXXGEN", ["PRUDENT Series 1717", "PRUDENT Series 1417"]],
  ] as const;

  for (const [manufacturer, models] of required) {
    it(`supports the requested ${manufacturer} detectors`, () => {
      const match = detectors.find((d) =>
        d.name.toLowerCase().includes(manufacturer.toLowerCase())
      );
      expect(match).toBeDefined();
      for (const model of models) {
        expect(match?.models).toContain(model);
      }
    });
  }

  it("finds a manufacturer by detector model case-insensitively", () => {
    expect(filterDetectors("  mars 1417v  ").map((d) => d.name)).toEqual(["iRay Technology"]);
    expect(filterDetectors("pixxgen").map((d) => d.name)).toEqual(["PIXXGEN Corporation (South Korea)"]);
    expect(filterDetectors("prudent 1717").map((d) => d.name)).toEqual(["PIXXGEN Corporation (South Korea)"]);
  });

  it("does not return unsupported models", () => {
    expect(filterDetectors("unknown-model-123")).toEqual([]);
  });
});