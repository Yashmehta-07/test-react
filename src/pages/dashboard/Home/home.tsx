import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Button,
  Card,
  CardActionArea,
  Stack,
  Tab,
  Typography,
  alpha,
  styled,
  useTheme,
} from "@mui/material";
import { ApexOptions } from "apexcharts";
import { SyntheticEvent, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { CustomeHeader } from "../../../components";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

const chartData = {
  series: [4000, 3000],
  options: {
    legend: { show: false },
    dataLabels: { enabled: false },
    tooltip: { enabled: false },
    responsive: [
      {
        breakpoint: 680,
        options: {
          chart: {
            width: 200,
          },
        },
      },
      {
        breakpoint: 1420,
        options: {
          chart: {
            width: 250,
          },
        },
      },
    ],
    // Todo: change these to theme palatte
    fill: { colors: ["#C44736", "#F7E6E4"] },
    states: {
      hover: { filter: { type: "darken", value: 0.5 } },
      active: { filter: { type: "none", value: 0 } },
    },
    stroke: { width: 0 },
  },
};

const lineChartData = {
  series: [
    {
      name: "Biomass Collection",
      data: [1, 2, 4, 3.2, 2.5, 4.8, 2],
    },
    {
      name: "Biochar Production",
      data: [2, 1, 3.6, 3.8, 4, 4, 3.6],
    },
  ],
  options: {
    responsive: [
      {
        breakpoint: 680,
        options: {
          chart: {
            width: 300,
          },
        },
      },
      {
        breakpoint: 960,
        options: {
          chart: {
            width: 400,
          },
        },
      },
      {
        breakpoint: 1420,
        options: {
          chart: {
            width: 500,
          },
        },
      },
    ],
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    // TODO: need to added color from theme
    colors: ["#D0E6A6", "#C44736"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Statistics",
      align: "left",
      style: {
        // TODO: need to added color from theme
        color: "#070605",
        fontSize: "16px",
        fontWeight: "700",
        fontFamily: "overpass",
      },
    },
    grid: {
      // TODO: need to added color from theme
      borderColor: "#fff",
      row: {
        colors: ["transparent", "transparent"],
        opacity: 0,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    yaxis: {
      min: 1,
      max: 6,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      floating: false,
      fontSize: "12px",
      fontWeight: "500",
      // TODO: need to added color from theme
      color: "#504945",
      offsetY: 0,
      offsetX: -25,
      ".apexcharts-legend-series": {
        marginLeft: "10px",
      },
    },
  },
};

export const Home = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState("my-network");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    console.log(event)
    setTabValue(newValue);
  };
  return (
    <CustomeHome>
      <CustomeHeader showBottomBorder={"false"} heading="Home" />
      <TabContext value={tabValue}>
        <TabList className="tabList" onChange={handleChange}>
          <Tab label="My Networks" value="my-network" />
          <Tab label="All C-Sink Managers" value="all-c-sink-manager" />
        </TabList>
        <TabPanel className="tab-panel" value="my-network">
          <Stack spacing={4}>
            <Stack className="chart-container">
              {[1, 2, 3].map((data) => (
                <Card key={data} className="border-card card">
                  <Typography variant="body2" ml={2}>
                    Total Biomass
                  </Typography>
                  <Stack className="card-container" direction="row">
                    <Stack className="chart">
                      <Stack
                        className="chart-data"
                        sx={{
                          right: { sm: "33%", md: "35%", lg: "39%" },
                        }}
                      >
                        <Typography variant="h5" textAlign="end">
                          78%
                        </Typography>
                        <Stack direction="row" alignItems="center">
                          <ArrowDropUpRoundedIcon
                            fontSize="small"
                            color="success"
                          />
                          <Typography variant="caption" color="success.main">
                            12%
                          </Typography>
                        </Stack>
                      </Stack>
                      <ReactApexChart
                        options={chartData.options as ApexOptions}
                        series={chartData.series}
                        type="donut"
                      />
                    </Stack>
                    <Stack width="40%" justifyContent="center">
                      <Typography variant="h5">7,000 tons</Typography>
                      <Stack spacing={0.5} mt={2}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <FiberManualRecordRoundedIcon
                            className="circle-icon"
                            color="success"
                          />
                          <Typography variant="subtitle1">
                            Artisan Pro
                          </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <FiberManualRecordRoundedIcon
                            className="circle-icon"
                            color="primary"
                          />
                          <Typography variant="subtitle1">
                            C Sink Network
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Card>
              ))}
            </Stack>
            <Stack className="chart-notification-container" direction="row">
              <Stack direction="column" className="linar-chart-container">
                <Typography variant="h5">
                  Rate of production and biomass collection
                </Typography>
                <Stack
                  className="border-query linear-chart"
                  sx={{
                    width: { sm: "75%", md: "100%", lg: "100%" },
                  }}
                >
                  <ReactApexChart
                    options={lineChartData.options as ApexOptions}
                    series={lineChartData?.series}
                  />
                </Stack>
              </Stack>
              <Stack direction="column" className="notification-container">
                <Stack
                  className="notification-container-header"
                  direction="row"
                >
                  <Typography variant="body2">Notifications/Updates</Typography>
                  <Button variant="text" className="clear-button">
                    Clear all
                  </Button>
                </Stack>
                <Card elevation={0} className="border-query">
                  <Stack className="card">
                    {[1, 2, 3].map((notification) => (
                      <CardActionArea
                        className="notification-card-action-area"
                        key={notification}
                      >
                        <Stack spacing={1} py={2}>
                          <Typography variant="body1">
                            Email@address.com sent a query.
                          </Typography>
                          <Typography
                            variant="overline"
                            sx={{
                              color: theme.palette.neutral["300"],
                              textTransform: "none",
                            }}
                          >
                            10 mins ago
                          </Typography>
                        </Stack>
                      </CardActionArea>
                    ))}
                    <Button className="view-all-button" variant="text">
                      View all
                    </Button>
                  </Stack>
                </Card>
              </Stack>
            </Stack>
          </Stack>
        </TabPanel>
        <TabPanel className="tab-panel" value="all-c-sink-manager">
          Item Two
        </TabPanel>
      </TabContext>
    </CustomeHome>
  );
};

const CustomeHome = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),

  ".tabList": {
    borderBottom: `${theme.spacing(0.125)} solid ${
      theme.palette.neutral["100"]
    }`,
    padding: theme.spacing(0, 3),
    ".tab-panel": {
      padding: theme.spacing(0, 3),
    },
  },
  ".circle-icon": {
    height: 8,
    width: 8,
  },
  ".border-card": {
    borderRadius: theme.spacing(2),
    boxShadow: `0 0 ${theme.spacing(0.25)} 0 ${alpha(
      theme.palette.common.black,
      0.25
    )}`,
  },
  ".border-query": {
    borderRadius: theme.spacing(2),
    boxShadow: `0 0 ${theme.spacing(0.25)} 0 ${alpha(
      theme.palette.common.black,
      0.25
    )}`,
  },
  ".chart-container": {
    flexDirection: "row",
    width: "100%",
    gap: theme.spacing(2),
    flexWrap: "wrap",
    ".card": {
      padding: theme.spacing(2),
      width: "100%",
      maxWidth: 354,
      height: 255,
      ".card-container": {
        height: "100%",
        alignItems: "center",
        ".chart": {
          position: "relative",
          width: "70%",
          height: "100%",
          justifyContent: "center",
          marginLeft: theme.spacing(-3),
          ".chart-data": {
            position: "absolute",
            height: 48,
            width: 48,
          },
        },
      },
    },
  },
  ".chart-notification-container": {
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    height: "100%",
    width: "100%",
    rowGap: theme.spacing(8),
  },
  ".linar-chart-container": {
    minWidth: 600,
    width: "58%",
    gap: theme.spacing(2.5),
    ".linear-chart": {
      padding: theme.spacing(2),
    },
  },
  ".notification-container": {
    minWidth: 350,
    width: "40%",
    gap: theme.spacing(3),
    ".notification-container-header": {
      justifyContent: "space-between",
      alignItems: "center",
      ".clear-button": {
        textTransform: "none",
        padding: 0,
        color: theme.palette.primary.light,
        ...theme.typography.caption,
      },
    },
    ".card": {
      padding: theme.spacing(2, 0),
      ".notification-card-action-area": {
        borderBottom: `${theme.spacing(0.25)} solid ${theme.palette.divider}`,
        padding: theme.spacing(0, 2),
      },
      ".view-all-button": {
        marginTop: theme.spacing(2),
        textTransform: "none",
        ...theme.typography.subtitle2,
      },
    },
  },
}));
