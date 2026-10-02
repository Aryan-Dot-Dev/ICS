/**
 * Meta Pixel (Facebook Pixel) Event Tracker
 */

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
    META_PIXEL_ID?: string;
  }
}

export function trackMetaPixelEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    try {
      if (params) {
        window.fbq("track", eventName, params);
      } else {
        window.fbq("track", eventName);
      }
      console.log(`[META PIXEL TRACK] Event '${eventName}' sent successfully.`, params || "");
    } catch (err) {
      console.warn("[META PIXEL TRACK] Failed to send pixel event:", err);
    }
  }
}

export function trackCustomMetaPixelEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    try {
      if (params) {
        window.fbq("trackCustom", eventName, params);
      } else {
        window.fbq("trackCustom", eventName);
      }
      console.log(`[META PIXEL TRACK CUSTOM] Event '${eventName}' sent successfully.`, params || "");
    } catch (err) {
      console.warn("[META PIXEL TRACK CUSTOM] Failed to send custom pixel event:", err);
    }
  }
}
