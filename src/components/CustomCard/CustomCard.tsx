import { Card, CardProps, Stack, styled } from "@mui/material";
import { FC, ReactNode } from "react";

interface CustomCardProps extends CardProps {
  headerComponent?: ReactNode;
}

export const CustomCard: FC<CustomCardProps> = ({
  headerComponent,
  ...props
}) => {
  return (
    <StyledCard {...props}>
      <Stack>{headerComponent || null}</Stack>
    </StyledCard>
  );
};

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: "100%",
  borderRadius: theme.spacing(2),
  alignItems: "center",
  padding: theme.spacing(2),
}));
