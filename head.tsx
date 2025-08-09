import { baseURL } from "./service.ts";

// Pre-render head HTML fragments. Extend this as needed.
export function prerenderHead(): string {
  // Only include a public stylesheet for now
  return `\n<link rel="stylesheet" href="${baseURL}/styles.css" />`;
}
