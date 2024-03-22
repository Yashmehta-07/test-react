import { Box, ListItemButton, styled } from "@mui/material";

interface IStyleProps {
  open?: boolean;
}

interface IListStyleProps {
  isButtonActive?: boolean;
  isListIconActive?: boolean;
}

export const StyledAppbar = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<IStyleProps>(({ theme, open }) => ({
  display: "flex",
  ".app-bar": {
    position: "fixed",
  },
  ".drawer": {
    ".MuiPaper-root": {
      width: open ? 250 : 60,
      overflow: "hidden",
      transition: theme.transitions.create(["width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(open && {
        width: 250,
        transition: theme.transitions.create(["width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
    },
    ".drawer-header": {
      alignItems: "center",
      justifyContent: open ? "space-between" : "center",
      padding: theme.spacing(3.75, 3),
      ".logo-img": {
        height: 36,
        width: 136,
      },
      ".arrow-icon": {
        height: 18,
        width: 16,
      },
    },
  },
  ".tool-bar": {
    background: theme.palette.common.white,
    color: theme.palette.common.black,
    ".menu-icon-button": {
      marginRight: theme.spacing(0.625),
      display: open ? "none" : "inline-box",
    },
  },
  ".sidebar-item-container": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    background: theme.palette.neutral["50"],
    paddingBottom: theme.spacing(2.5),
    overflowY: "scroll",
    scrollbarWidth: "none",
    ".item-list": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      ".list-button": {
        height: 56,
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: theme.spacing(open ? 1 : 2),
      },
      ".arrow": {
        color: theme.palette.neutral["300"],
      },
      ".dummy-arrow": {
        height: theme.spacing(3.5),
        width: theme.spacing(3.5),
      },
      ".collapse": {
        width: "100%",
        ".children-list": {
          alignItems: "flex-start",
          width: "100%",
          ".child-item-text": {
            whiteSpace: "nowrap",
            opacity: open ? 1 : 0,
          },
          ".child-list-button": {
            height: 40,
            width: "100%",
            paddingLeft: theme.spacing(6),
            gap: theme.spacing(3),
          },
        },
      },
    },
    ".list-icon": {
      minWidth: 30,
      color: theme.palette.neutral["300"],
    },
    ".item-list-text": {
      whiteSpace: "nowrap",
      opacity: open ? 1 : 0,
    },
    ".bottom-list-button": {
      height: 56,
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(2.6),
      paddingLeft: theme.spacing(2),
      ".bottom-list-icon": {
        minWidth: theme.spacing(3),
        color: theme.palette.neutral["300"],
        ".MuiBadge-badge": {
          margin: theme.spacing(-0.4, -0.3, 0, 0),
        },
      },
    },
  },
  ".main-component": {
    padding: theme.spacing(3.75, 0),
    minHeight: "100vh",
    overflowX: "hidden",
    marginLeft: open ? 250 : 60,
    width: `calc( 100vw - ${open ? "270px" : "80px"} )`, // 270px = 250px + 20px (20px for scroll bar)
    flexGrow: 1,
  },
}));

export const StyledListButton = styled(ListItemButton, {
  shouldForwardProp: (prop) =>
    prop !== "isButtonActive" && prop !== "isListIconActive",
})<IListStyleProps>(({ theme, isButtonActive, isListIconActive }) => ({
  borderLeft: `${theme.spacing(0.25)} solid ${
    isButtonActive ? theme.palette.primary.main : theme.palette.common.white
  }`,
  ".roundIcon": {
    fontSize: 6,
    color: isButtonActive
      ? theme.palette.primary.main
      : theme.palette.neutral[500],
  },
  ".list-icon": {
    filter: isListIconActive
      ? "invert(43%) sepia(64%) saturate(1250%) hue-rotate(332deg) brightness(78%) contrast(99%)" // alternative filter for color #9D392B
      : theme.palette.neutral["300"],
  },
}));
