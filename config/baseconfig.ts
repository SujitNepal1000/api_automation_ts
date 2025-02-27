// /config/baseConfig.ts
import { authConfig } from "./credentials.js";
import { endpointsConfig } from "./endpoints.js";

export const baseConfig = {
  authConfig,
  endpointsConfig,
  // You can use the baseUrl from authConfig for consistency:
  baseURL: authConfig.baseUrl
};