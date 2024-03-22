import admin from "../../assets/icons/admin.svg";
import artisan from "../../assets/icons/artisan-pro.svg";
import cSink from "../../assets/icons/c-sink.svg";
import farmers from "../../assets/icons/farmer.svg";
import home from "../../assets/icons/home.svg";
import bell from "../../assets/icons/bell.svg";
import production from "../../assets/icons/production.svg";
import arrowRight from "../../assets/icons/arrow-bar-right.svg";
import { Avatar, Badge, Box } from "@mui/material";

export const sideBarList = [
  {
    id: "home",
    label: "Home",
    icon: home,
    children: [],
    url: "home",
  },
  {
    id: "admin",
    label: "Admin",
    icon: admin,
    url: "admin",
    children: [
      {
        id: "training-content",
        label: "Training Content",
        url: "admin/training-content",
      },
      {
        id: "projects",
        label: "Projects",
        url: "admin/projects",
      },
      {
        id: "queries",
        label: "Queries",
        url: "admin/queries",
      },
      {
        id: "biomass-details",
        label: "Biomass Details",
        url: "admin/biomass-details",
      },
      {
        id: "certificate-generation",
        label: "Certificate Generation",
        url: "admin/certificate-generation",
      },
    ],
  },
  {
    id: "production",
    label: "Production",
    icon: production,
    url: "production",
    children: [
      {
        id: "biomass-collections",
        label: "Biomass Collections",
        url: "production/biomass-collections",
      },
      {
        id: "batches",
        label: "Batches",
        url: "production/batches",
      },
      {
        id: "application",
        label: "Application",
        url: "production/application",
      },
      {
        id: "inventory",
        label: "Inventory",
        url: "production/inventory",
      },
      {
        id: "c-sink-production",
        label: "C-Sink Production",
        url: "production/c-sink-production",
      },
    ],
  },
  {
    id: "c-sink-network",
    label: "C-Sink Network",
    icon: cSink,
    url: "c-sink-network",
    children: [
      { id: "networks", label: "Networks", url: "c-sink-network/networks" },
      { id: "credits", label: "Credits", url: "c-sink-network/credits" },
      {
        id: "certificates",
        label: "Certificates",
        url: "c-sink-network/certificates",
      },
    ],
  },
  {
    id: "artisan-pro-network",
    label: "Artisan Pro Network",
    icon: artisan,
    url: "artisan-pro-network",
    children: [
      {
        id: "network-list",
        label: "Network List",
        url: "artisan-pro-network/network-list",
      },
    ],
  },
  {
    id: "farmers",
    label: "Farmers",
    icon: farmers,
    url: "farmers",
    children: [
      { id: "crops", label: "Crops", url: "farmers/crops" },
      { id: "farms", label: "Farms", url: "farmers/farms" },
    ],
  },
];

export const bottomActionList = [
  {
    id: "notification",
    label: "",
    icon: (
      <Badge badgeContent={4} color="primary">
        <Box
          component="img"
          src={bell}
          height={20}
          width={20}
          className="arrow-icon"
        />
      </Badge>
    ),
    url: "/notification",
  },
  {
    id: "user",
    label: "User",
    icon: (
      <Avatar
        sx={{
          height: 24,
          width: 24,
        }}
      />
    ),
    url: "profile",
  },
  {
    id: "logout",
    label: "Logout",
    icon: (
      <Box
        component="img"
        src={arrowRight}
        height={20}
        width={20}
        className="arrow-icon"
      />
    ),
    url: "",
  },
];
