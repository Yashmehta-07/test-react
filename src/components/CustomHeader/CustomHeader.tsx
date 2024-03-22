import { Button, Stack, Typography, styled } from "@mui/material";
import { useState } from "react";

const Buttons = [
  {
    label: "WTD",
  },
  {
    label: "MTD",
  },
  {
    label: "YTD",
  },
  {
    label: "Custom",
  },
];

interface IProps {
  showBottomBorder?: "true" | "false";
  heading: string;
}

export const CustomeHeader = ({ showBottomBorder, heading }: IProps) => {
  const [selectedButton, setSelectedButton] = useState<string>("WTD");
  return (
    <StyledHeader showbottomborder={showBottomBorder}>
      <Typography variant="h3" className="heading">
        {heading}
      </Typography>
      <Stack className="tab-container">
        {Buttons.map(({ label }) => (
          <Button
            key={label}
            className={`tab-button ${
              selectedButton === label ? "selected-button" : ""
            }`}
            size="small"
            variant="text"
            onClick={() => setSelectedButton(label)}
          >
            {label}
          </Button>
        ))}
      </Stack>
    </StyledHeader>
  );
};

interface IStyleProps {
  showbottomborder?: "true" | "false";
}

const StyledHeader = styled(Stack)<IStyleProps>(
  ({ theme, showbottomborder }) => ({
    padding: theme.spacing(0, 3),
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottom:
      showbottomborder === "true"
        ? `${theme.spacing(0.125)} solid ${theme.palette.neutral["100"]}`
        : "",
    ".heading": {
      textTransform: "capitalize",
      color: theme.palette.neutral["900"],
    },
    ".tab-container": {
      flexDirection: "row",
      alignItems: "center",
      background: theme.palette.neutral["100"],
      padding: theme.spacing(0.25),
      borderRadius: theme.spacing(0.75),
      ".tab-button": {
        background: "transparent",
        color: theme.palette.common.black,
        textTransform: "none",
        height: 32,
        width: 88,
        fontWeight: 400,
      },
      ".selected-button": {
        background: theme.palette.common.white,
      },
      ".button-border": {
        height: "60%",
        borderRight: `2px solid ${theme.palette.neutral["100"]}`,
        borderRadius: theme.spacing(0.25),
      },
    },
  })
);
