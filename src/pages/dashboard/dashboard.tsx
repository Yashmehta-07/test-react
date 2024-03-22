import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { SideDrawer } from "../../components";

export const Dashboard = () => {
  return (
    <Stack direction="row">
      <SideDrawer>
        <Outlet />
      </SideDrawer>
    </Stack>
  );
};
