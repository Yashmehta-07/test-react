import { TablePagination, styled } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";

interface IProps {
  rowCount?: number;
}

export const CustomPagination = ({ rowCount }: IProps) => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const paramsLimit = searchParams.get("limit") ?? 10;
  const paramsPage = searchParams.get("page") ?? 0;
  const searchQueryParams = new URLSearchParams(window.location.search);

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    searchQueryParams.set("page", String(newPage));
    navigate(`?${searchQueryParams.toString()}`, { replace: true })
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    searchQueryParams.set("limit", String(event.target.value || 10));
   
    navigate(`?${searchQueryParams.toString()}`, { replace: true })


  };

  return (
    <StyledPagination
      count={rowCount ?? 0}
      page={Number(paramsPage)}
      onPageChange={handleChangePage}
      rowsPerPage={Number(paramsLimit)}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

const StyledPagination = styled(TablePagination)(({theme}) => ({
  ".MuiTablePagination-select": {
    border: `1px solid ${theme.palette.neutral[100]}`,
    borderRadius: theme.spacing(1),
    width: "82px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    aspectRatio: " 82 / 36 "
  },
  "& .MuiSelect-select-MuiInputBase-input.MuiSelect-select":{
    height: "36px",
  },
  ".MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows ": {
    fontWeight: theme.typography.body1.fontWeight,
  },
}));
