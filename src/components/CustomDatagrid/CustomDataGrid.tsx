import { LinearProgress, Stack, styled } from "@mui/material";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import { FC, ReactNode } from "react";
import { CustomPagination } from "..";
import { useSearchParams } from "react-router-dom";

interface CustomDataGridProps extends DataGridProps {
  headerComponent?: ReactNode;
}

export const CustomDataGrid: FC<CustomDataGridProps> = ({
  headerComponent,
  rowCount,
  ...props
}) => {
  const [searchParams] = useSearchParams();
  const paramsLimit = searchParams.get("limit") ?? 10;
  const paramsPage = searchParams.get("page") ?? 0;

  return (
    <Stack rowGap={2}>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap={"wrap"}
        rowGap={4}
      >
        <Stack>{headerComponent || null}</Stack>
        <CustomPagination rowCount={rowCount} />
      </Stack>
      <StyledDataGrid
        slots={{
          loadingOverlay: LinearProgress,
        }}
        hideFooter={true}
        paginationModel={{
          pageSize: Number(paramsLimit),
          page: Number(paramsPage),
        }}
        rowCount={rowCount}
        getRowHeight={() => "auto"}
        disableVirtualization
        {...props}
      />
    </Stack>
  );
};

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  padding: theme.spacing(1),
  ".MuiDataGrid-columnHeaderTitle": {
    color: theme.palette.primary.main,
  },
  ".MuiDataGrid-withBorderColor": {
    borderColor: theme.palette.divider,
  },
  ".MuiDataGrid-cellContent, .MuiDataGrid-cellContent, .MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows":
    {
      fontWeight: theme.typography.body1.fontWeight,
    },
  ".MuiDataGrid-cell:focus, .MuiDataGrid-cell:focus-within": {
    outline: 0,
  },
  ".MuiDataGrid-cell": {
    minHeight: "52px ",
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    overflowWrap: "anywhere",
  },
  ".MuiDataGrid-row:hover": {
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
  "&.MuiDataGrid-root": {
    flexDirection: "column-reverse",
  },
  ".MuiDataGrid-selectedRowCount": {
    visibility: "hidden",
  },
  ".MuiDataGrid-columnHeader:focus": {
    outline: "none",
  },
  ".MuiDataGrid-virtualScroller": {
    minHeight: 40,
  },
  ".MuiDataGrid": {
    minHeight: 40,
  },
}));
