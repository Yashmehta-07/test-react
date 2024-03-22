import {
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
  useTheme,
} from "@mui/material";
import { FC, Fragment, ReactNode, useCallback, useState } from "react";
import logoText from "../../assets/icons/logoText.svg";
import logo from "../../assets/icons/logo.svg";
import arrowLeft from "../../assets/icons/arrow-bar-left.svg";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import {
  StyledAppbar,
  StyledListButton,
  bottomActionList,
  sideBarList,
} from ".";
import { useAuthContext } from "../../contexts";

const Content = ({ open }: { open: boolean }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const activePanel = location.pathname.split("/");
  const { logout } = useAuthContext();
  const sidePanelItemClick = useCallback(
    ({ url }: { url: string }) => {
      navigate(url);
    },
    [navigate]
  );

  return (
    <List className="sidebar-item-container">
      <Box>
        {sideBarList.map(({ id, label, icon, url, children }) => (
          <ListItem key={id} disablePadding className="item-list">
            <StyledListButton
              isButtonActive={!activePanel[3] && activePanel[2] === id}
              isListIconActive={activePanel[2] === id}
              className="list-button"
              onClick={() => sidePanelItemClick({ url })}
            >
              {!!open &&
                (children?.length > 0 ? (
                  activePanel[1] === id ? (
                    <ArrowDropDownRoundedIcon className="arrow" />
                  ) : (
                    <ArrowRightRoundedIcon className="arrow" />
                  )
                ) : (
                  <Box className="dummy-arrow" />
                ))}

              {open ? (
                <ListItemIcon className="list-icon">
                  <Box
                    className="icon"
                    component="img"
                    src={icon}
                    height={20}
                    width={20}
                  />
                </ListItemIcon>
              ) : (
                <Tooltip title={label} placement="right" arrow>
                  <ListItemIcon className="list-icon">
                    <Box
                      className="icon"
                      component="img"
                      src={icon}
                      height={20}
                      width={20}
                    />
                  </ListItemIcon>
                </Tooltip>
              )}
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  variant: activePanel[2] === id ? "subtitle2" : "subtitle1",
                  color:
                    !activePanel[2] && activePanel[2] === id
                      ? theme.palette.primary.main
                      : theme.palette.neutral[500],
                }}
                className="item-list-text"
              />
            </StyledListButton>
            <Collapse className="collapse" in={activePanel[2] === id}>
              {!!open && !!children?.length && (
                <Stack className="children-list">
                  {children.map((child) => (
                    <StyledListButton
                      key={child.id}
                      className="child-list-button"
                      onClick={() => sidePanelItemClick({ url: child.url })}
                      isButtonActive={activePanel[2] === child.id}
                    >
                      <FiberManualRecordRoundedIcon className="roundIcon" />
                      <ListItemText
                        className="child-item-text"
                        primaryTypographyProps={{
                          variant:
                            activePanel[3] === child.id
                              ? "subtitle2"
                              : "subtitle1",
                          color:
                            activePanel[3] === child.id
                              ? theme.palette.primary.main
                              : theme.palette.neutral[500],
                        }}
                        primary={child.label}
                      />
                    </StyledListButton>
                  ))}
                </Stack>
              )}
            </Collapse>
          </ListItem>
        ))}
      </Box>
      <Box>
        {bottomActionList.map(({ id, label, icon, url }) => (
          <ListItem className="bottom-list-item" key={id} disablePadding>
            <ListItemButton
              className="bottom-list-button"
              onClick={() => {
                if (id === "logout") logout();
                navigate(url);
              }}
            >
              <ListItemIcon className="bottom-list-icon">{icon}</ListItemIcon>
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  variant: "subtitle2",
                  color: theme?.palette?.neutral["500"],
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </Box>
    </List>
  );
};

export const SideDrawer: FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(true);
  const handleDrawer = useCallback(() => setOpen((prev) => !prev), []);

  return (
    <StyledAppbar open={open}>
      <Drawer className="drawer" variant="permanent" open={open}>
        <Stack className="drawer-header" direction="row">
          {open ? (
            <Fragment>
              <Box
                className="logo-img"
                component="img"
                src={logoText}
                alt="logo"
              />
              <IconButton onClick={handleDrawer}>
                <Box
                  component="img"
                  src={arrowLeft}
                  height={30}
                  width={30}
                  className="arrow-icon"
                />
              </IconButton>
            </Fragment>
          ) : (
            <IconButton onClick={handleDrawer} className="menu-icon-button">
              <Box
                component="img"
                src={logo}
                height={30}
                width={30}
                className="arrow-icon"
              />
            </IconButton>
          )}
        </Stack>
        <Content open={open} />
      </Drawer>
      <Box component="main" className="main-component">
        {children}
      </Box>
    </StyledAppbar>
  );
};
