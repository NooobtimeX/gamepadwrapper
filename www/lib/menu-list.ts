import { FileText, LucideIcon, Package, Settings } from "lucide-react"; // Replaced IoIosDocument

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "Getting Started",
      menus: [
        {
          href: "/docs/introduction",
          label: "Introduction",
          icon: FileText, // Updated to Lucide
          submenus: [],
        },
        {
          href: "/docs/installation",
          label: "Installation",
          icon: Package, // Updated to Lucide
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "API Reference",
      menus: [
        {
          href: "",
          label: "Setup",
          icon: Settings, // Updated to Lucide
          submenus: [
            {
              href: "/docs/setup",
              label: "Setup",
            },
            {
              href: "/docs/setup/nextjs",
              label: "NEXT JS",
            },
          ],
        },
        {
          href: "/docs/gamepadinformation",
          label: "Gamepad Information",
          icon: FileText, // Updated to Lucide
          submenus: [],
        },
        {
          href: "",
          label: "Event",
          icon: FileText, // Updated to Lucide
          submenus: [
            {
              href: "/docs/event",
              label: "Event",
            },
            {
              href: "/docs/event/button",
              label: "Button Event",
            },
            {
              href: "/docs/event/joystick",
              label: "Joystick Event",
            },
          ],
        },
        {
          href: "/docs/customnamemapping",
          label: "Custom Name Mapping",
          icon: FileText, // Updated to Lucide
          submenus: [],
        },
        {
          href: "/docs/browsercompatibility",
          label: "Browser Compatibility",
          icon: FileText, // Updated to Lucide
          submenus: [],
        },
      ],
    },
  ];
}
