import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Codecurate",
  tagline:
    "Know your media library. Transform it. Keep it clean.",
  favicon: "img/logo.svg",

  future: {
    v4: true,
  },

  url: "https://codecura.te.it",
  baseUrl: "/",

  organizationName: "Phalcode",
  projectName: "codecurate-docs",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Codecurate",
      logo: {
        alt: "Codecurate Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        {
          label: "GitHub",
          href: "https://github.com/phalcode",
          position: "right",
        },
        {
          label: "Discord",
          href: "https://discord.gg/NEdNen2dSu",
          position: "right",
        },
      ],
    },
    footer: {
      logo: {
        src: "img/phalcode-text-light.svg",
        srcDark: "img/phalcode-text-dark.svg",
        height: "30vh",
        href: "https://phalco.de",
      },
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/docs/intro",
            },
            {
              label: "Backend Overview",
              to: "/docs/backend/overview",
            },
          ],
        },
        {
          title: "Backend",
          items: [
            {
              label: "Getting Started",
              to: "/docs/backend/getting-started",
            },
            {
              label: "Media Library",
              to: "/docs/backend/media-library",
            },
            {
              label: "Automation and FFmpeg",
              to: "/docs/backend/automation-and-ffmpeg",
            },
          ],
        },
        {
          title: "Frontend",
          items: [
            {
              label: "Overview",
              to: "/docs/frontend/overview",
            },
            {
              label: "Integration Entry Points",
              to: "/docs/backend/authentication-and-access",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Codecurate - All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
