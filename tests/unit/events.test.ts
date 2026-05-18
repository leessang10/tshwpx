import { describe, expect, it, vi } from "vitest";
import { HwpAutomationError } from "../../src/com/errors";
import { EventsApi } from "../../src/events";

describe("EventsApi", () => {
  it("lists event metadata from the official automation event table", () => {
    const events = new EventsApi();

    expect(events.list().map((event) => event.id)).toContain("Quit");
    expect(events.list().map((event) => event.id)).toContain("DocumentAfterOpen");
    expect(events.get("DocumentAfterOpen")).toMatchObject({
      id: "DocumentAfterOpen",
      returnType: "long",
    });
  });

  it("stores and disposes local event listeners", () => {
    const events = new EventsApi();
    const handler = vi.fn();

    const dispose = events.on("DocumentAfterOpen", handler);

    expect(events.listeners("DocumentAfterOpen")).toEqual([handler]);
    dispose();
    expect(events.listeners("DocumentAfterOpen")).toEqual([]);
  });

  it("rejects unknown events", () => {
    const events = new EventsApi();

    expect(() => events.on("NotARealEvent", () => undefined)).toThrow(HwpAutomationError);
  });
});
