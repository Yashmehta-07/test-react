import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { FC, PropsWithChildren } from "react";
import {
  GridArrowUpwardIcon,
  GridMoreVertIcon,
  GridSearchIcon,
} from "@mui/x-data-grid";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { CustomCard, CustomDataGrid, CustomeHeader } from "../../../components";

interface Props {}

const columns = [
  {
    field: "id",
    headerName: "SNo.",
    maxWidth: 100,
    flex: 1,
  },
  {
    field: "biomassName",
    headerName: "Biomass Name",
    minWidth: 175,
    flex: 1,
  },
  {
    field: "type",
    headerName: "Type",
    minWidth: 175,
    flex: 1,
  },
  {
    field: "dateOfDelivery",
    headerName: "Date of Delivery",
    minWidth: 175,
    flex: 1,
  },
  {
    field: "biomassDensity",
    headerName: "Biomass Density",
    minWidth: 175,
    flex: 1,
  },
  {
    field: "sourceLocation",
    headerName: "Source Location",
    minWidth: 175,
    flex: 1,
  },
  {
    field: "biomassAggregator",
    headerName: "Biomass Aggregator",
    minWidth: 175,
    flex: 1,
  },
  {
    field: "action",
    headerName: "",
    // minWidth: 175,
    maxWidth: 100,
    flex: 1,
    renderCell: () => (
      <IconButton size="small" onClick={() => {}}>
        {/* <DeleteOutline /> */}
        <GridMoreVertIcon />
      </IconButton>
    ),
  },
];

const rows = [
  {
    id: 1,
    biomassName: "Lemon Myrtle",
    type: "Biomass A",
    dateOfDelivery: "01.03.2024",
    biomassDensity: 10,
    sourceLocation: "Noida",
    biomassAggregator: "BA 0202 (0202)",
  },
  {
    id: 2,
    biomassName: "Lemon Myrtle",
    type: "Biomass A",
    dateOfDelivery: "02.03.2024",
    biomassDensity: 20,
    sourceLocation: "Noida",
    biomassAggregator: "BA 0202 (0202)",
  },
  {
    id: 3,
    biomassName: "Lemon Myrtle",
    type: "Biomass B",
    dateOfDelivery: "03.03.2024",
    biomassDensity: 10,
    sourceLocation: "Noida",
    biomassAggregator: "BA 0202 (0202)",
  },
  {
    id: 4,
    biomassName: "Lemon Myrtle",
    type: "Biomass B",
    dateOfDelivery: "04.03.2024",
    biomassDensity: 10,
    sourceLocation: "Noida",
    biomassAggregator: "BA 0202 (0202)",
  },
  {
    id: 5,
    biomassName: "Lemon Myrtle",
    type: "Biomass B",
    dateOfDelivery: "04.03.2024",
    biomassDensity: 30,
    sourceLocation: "Noida",
    biomassAggregator: "BA 0202 (0202)",
  },
  {
    id: 6,
    biomassName: "Lemon Myrtle",
    type: "Biomass B",
    dateOfDelivery: "05.03.2024",
    biomassDensity: 40,
    sourceLocation: "Noida",
    biomassAggregator: "BA 0202 (0202)",
  },
  {
    id: 7,
    biomassName: "Eucalyptus",
    type: "Biomass A",
    dateOfDelivery: "09.03.2024",
    biomassDensity: 35,
    sourceLocation: "Bangalore",
    biomassAggregator: "BA 0505 (0505)",
  },
  {
    id: 8,
    biomassName: "Willow",
    type: "Biomass C",
    dateOfDelivery: "13.03.2024",
    biomassDensity: 50,
    sourceLocation: "Hyderabad",
    biomassAggregator: "BA 1010 (1010)",
  },
  {
    id: 9,
    biomassName: "Pine",
    type: "Biomass B",
    dateOfDelivery: "17.03.2024",
    biomassDensity: 45,
    sourceLocation: "Mumbai",
    biomassAggregator: "BA 0303 (0303)",
  },
  {
    id: 10,
    biomassName: "Oak",
    type: "Biomass A",
    dateOfDelivery: "21.03.2024",
    biomassDensity: 38,
    sourceLocation: "Chennai",
    biomassAggregator: "BA 0404 (0404)",
  },
  {
    id: 11,
    biomassName: "Oak",
    type: "Biomass A",
    dateOfDelivery: "21.03.2024",
    biomassDensity: 38,
    sourceLocation: "Chennai",
    biomassAggregator: "BA 0404 (0404)",
  },
  {
    id: 12,
    biomassName: "Oak",
    type: "Biomass A",
    dateOfDelivery: "21.03.2024",
    biomassDensity: 38,
    sourceLocation: "Chennai",
    biomassAggregator: "BA 0404 (0404)",
  },
];

const opt = {
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      barHeight: "100%",
      dataLabels: {
        total: {
          enabled: false,
        },
      },
    },
  },
  xaxis: {
    type: "datetime",
    categories: [
      "01/01/2011 GMT",
      "01/02/2011 GMT",
      "01/03/2011 GMT",
      "01/04/2011 GMT",
      "01/05/2011 GMT",
      "01/06/2011 GMT",
      "01/07/2011 GMT",
      "01/08/2011 GMT",
      "01/09/2011 GMT",
      "01/10/2011 GMT",
      "01/11/2011 GMT",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    position: "bottom",
    horizontalAlign: "left",
    offsetY: 10,
    markers: {
      radius: 12,
    },
  },
  fill: {
    opacity: 1,
  },
  grid: { show: false },
  dataLabels: {
    enabled: false,
  },
};

export const Production: FC<PropsWithChildren<Props>> = () => {
  const theme = useTheme();

  const HeaderComponents = () => {
    return (
      <Stack flexDirection="row" columnGap={2} alignItems="center">
        <TextField
          label="Search"
          name="search"
          placeholder="Search"
          variant="outlined"
          sx={{ width: "336px", height: "36px" }}
          InputProps={{
            startAdornment: <GridSearchIcon />,
          }}
        />
        <FormControl
          sx={{ m: 1, minWidth: 80, width: "100px", height: "36px" }}
        >
          <InputLabel id="tagLabel">Tag</InputLabel>
          <Select labelId="tagLabel" label="Tag">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          sx={{ m: 1, minWidth: 80, width: "120px", height: "36px" }}
        >
          <InputLabel id="statusLabel">Status</InputLabel>
          <Select labelId="statusLabel" label="Status">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    );
  };

  const options = {
    series: [
      {
        name: "PRODUCT A",
        data: [44, 55, 41, 67, 22, 43],
        color: theme.palette.warning.main,
      },
      {
        name: "PRODUCT B",
        data: [13, 23, 20, 8, 13, 27],
        color: theme.palette.custom.green[500],
      },
      {
        name: "PRODUCT C",
        data: [11, 17, 15, 15, 21, 14],
        color: theme.palette.custom.red[500],
      },
    ],
  };

  const CustomCardHeader = () => {
    return(
      <Stack height={"448px"}>
      <Stack flexDirection="row" columnGap={1} alignItems="center">
        <Typography variant="body2">Total Biomass Volume</Typography>
        <Typography variant="h5">10,000</Typography>
        <Stack flexDirection="row" alignItems="center">
          <IconButton size="small" onClick={() => {}}>
            <GridArrowUpwardIcon
              sx={{ height: "12px", width: "12px" }}
              color="success"
            />
          </IconButton>
          <Typography variant="caption" color="success.main">
            12%
          </Typography>
        </Stack>
      </Stack>
      <ReactApexChart
        options={opt as ApexOptions}
        series={options.series}
        type="bar"
        height="90%"
      ></ReactApexChart>
    </Stack>
    )
  }

  return (
    <Stack rowGap={2} padding={2}>
      <CustomeHeader showBottomBorder={"false"} heading="Production" />
      <CustomCard
        headerComponent={<CustomCardHeader /> }
      ></CustomCard>
      <Stack rowGap={2} paddingLeft={1}>
        <Typography variant="h5" paddingTop={1}>
          Biomass Available
        </Typography>
        <CustomDataGrid
          rows={rows}
          columns={columns}
          rowCount={12}
          headerComponent={<HeaderComponents />}
        />
      </Stack>
    </Stack>
  );
};
