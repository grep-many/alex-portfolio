import type { NextConfig } from "next";
import { basePath } from "./constants";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath,
};

export default nextConfig;
