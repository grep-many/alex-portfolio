import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alex Portfolio",
    short_name: "Alex",
    description: "Alex – Developer Portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#00000000",
    theme_color: "#00000000",
    orientation: "portrait",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      // {
      //   src: "/icons/icon-192.png",
      //   sizes: "192x192",
      //   type: "image/png",
      // },
      // {
      //   src: "/icons/icon-512.png",
      //   sizes: "512x512",
      //   type: "image/png",
      // },
      // {
      //   src: "/icons/icon-512-maskable.png",
      //   sizes: "512x512",
      //   type: "image/png",
      //   purpose: "maskable",
      // },
    ],
  };
}
