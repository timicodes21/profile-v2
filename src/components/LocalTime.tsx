"use client";

import { useSyncExternalStore } from "react";

import { site } from "@/data/site";

const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: site.timezone,
});

const subscribe = (notify: () => void) => {
  const id = window.setInterval(notify, 15_000);
  return () => window.clearInterval(id);
};
const getSnapshot = () => formatter.format(new Date());
const getServerSnapshot = () => null;

/** Live local time in Lagos. Renders a placeholder on the server to avoid hydration drift. */
export const LocalTime = ({ className }: { className?: string }) => {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return <time className={className}>{time ?? "--:--"}</time>;
};
