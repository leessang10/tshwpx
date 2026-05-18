import { HwpAutomationError } from "./com/errors";
import { eventDefinitions } from "./spec";
import type { HwpEventDefinition } from "./spec";

export type HwpEventHandler = (...args: readonly unknown[]) => void | Promise<void>;

export class EventsApi {
  private readonly eventMap = new Map(eventDefinitions.map((event) => [event.id, event]));
  private readonly listenerMap = new Map<string, Set<HwpEventHandler>>();

  list(): readonly HwpEventDefinition[] {
    return eventDefinitions;
  }

  get(eventId: string): HwpEventDefinition | undefined {
    return this.eventMap.get(eventId);
  }

  has(eventId: string): boolean {
    return this.eventMap.has(eventId);
  }

  on(eventId: string, handler: HwpEventHandler): () => void {
    this.requireEvent(eventId);

    const listeners = this.listenerMap.get(eventId) ?? new Set<HwpEventHandler>();
    listeners.add(handler);
    this.listenerMap.set(eventId, listeners);

    return () => this.off(eventId, handler);
  }

  off(eventId: string, handler: HwpEventHandler): void {
    const listeners = this.listenerMap.get(eventId);
    listeners?.delete(handler);
    if (listeners?.size === 0) {
      this.listenerMap.delete(eventId);
    }
  }

  listeners(eventId: string): readonly HwpEventHandler[] {
    this.requireEvent(eventId);
    return [...(this.listenerMap.get(eventId) ?? [])];
  }

  private requireEvent(eventId: string): HwpEventDefinition {
    const event = this.get(eventId);
    if (!event) {
      throw new HwpAutomationError("ACTION_FAILED", `Unknown HWP event: ${eventId}`);
    }

    return event;
  }
}
