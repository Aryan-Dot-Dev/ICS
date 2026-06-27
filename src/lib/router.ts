import { useState, useEffect } from "react";

export type RoutePath = "landing" | "services" | "blog" | "assessment";

/**
 * Custom React hook to subscribe to browser pathname routing changes (popstate).
 * Helps build clean, optimized SPAs without pulling in bloated routing packages.
 */
export function usePathLocation(): RoutePath {
  const [route, setRoute] = useState<RoutePath>(() => {
    const path = window.location.pathname.replace(/^\//, "");
    return isValidRoute(path) ? path : "landing";
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\//, "");
      setRoute(isValidRoute(path) ? path : "landing");
      
      // Smooth scroll to top on page change, unless navigating to a section anchor
      const hasSectionHash = window.location.hash.includes("#");
      if (!hasSectionHash) {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return route;
}

function isValidRoute(path: string): path is RoutePath {
  return ["landing", "services", "blog", "assessment"].includes(path);
}

export function navigateTo(path: RoutePath) {
  const urlPath = path === "landing" ? "/" : `/${path}`;
  window.history.pushState(null, "", urlPath);
  // Dispatch custom popstate event so listeners/hooks update
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function navigateToDelayed(path: RoutePath, sparkDuration: number) {
  setTimeout(() => {
    navigateTo(path);
  }, sparkDuration + 50);
}

