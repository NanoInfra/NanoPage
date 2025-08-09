import service from "./service.json" with { type: "json" };
export const baseURL = `/api/v2/${service.name}`;
export default service;
