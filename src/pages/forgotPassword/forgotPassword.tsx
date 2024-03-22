import {
  Box,
  Button,
  Card,
  FormControl,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Tooltip,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { FC, PropsWithChildren, useMemo } from "react";
import backgroundBanner from "../../assets/icons/backgroud-banner.png";
import logo from "../../assets/icons/logoText.svg";
import HexagonIcon from "@mui/icons-material/Hexagon";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import { useForgotPassword } from "./useForgotPassword";
import { useController } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const ForgotPassword: FC<PropsWithChildren> = () => {
  const navigate = useNavigate();
  const {
    createPasswordSteps,
    handleCreateNewPassword,
    register,
    handleSubmit,
    errors,
    control,
    isEmailValid,
    invitationId,
  } = useForgotPassword();

  const { field: newPassword } = useController({
    control,
    name: "newPassword",
  });

  const passwordIntruction = useMemo(
    () => [
      {
        label: "At least 8 characters long",
        isvalid: (newPassword.value ?? "").length >= 8,
      },
      {
        label: "Contain one uppercase",
        isvalid: /[A-Z]/.test(newPassword.value ?? ""),
      },
      {
        label: "Contain a number",
        isvalid: /\d/.test(newPassword.value ?? ""),
      },
      {
        label: "Contain a special character (!, @, #, etc)",
        isvalid: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword.value ?? ""),
      },
    ],
    [newPassword.value]
  );

  const Component = useMemo(() => {
    switch (createPasswordSteps) {
      case "email":
        return (
          <StyledFormController fullWidth variant="standard">
            <Typography className="label" variant="body1">
              E-mail
            </Typography>
            <TextField
              fullWidth
              autoFocus
              placeholder="Enter your email"
              type="email"
              error={!!errors.email?.message}
              helperText={errors.email?.message}
              {...register("email")}
            />
          </StyledFormController>
        );
      case "new-password":
        return (
          <Stack className="new-password-container" px={4} spacing={4}>
            <StyledFormController fullWidth variant="standard">
              <Typography className="label" variant="body1">
                E-mail
              </Typography>
              <TextField
                disabled
                fullWidth
                autoFocus
                placeholder="Enter your email"
                type="email"
                error={!!errors.email?.message}
                helperText={errors.email?.message}
                {...register("email")}
              />
            </StyledFormController>
            <StyledFormController fullWidth variant="standard">
              <Typography className="label" variant="body1">
                New Password
              </Typography>
              <TextField
                fullWidth
                autoFocus
                placeholder="Enter new password"
                type="text"
                error={!!errors.newPassword?.message}
                helperText={errors.newPassword?.message}
                {...register("newPassword")}
              />
            </StyledFormController>
            <List>
              {passwordIntruction.map(({ label, isvalid }, index) => (
                <ListItem key={index} className="instruction-list">
                  <ListItemIcon className="instruction-list-item">
                    {isvalid ? (
                      <CheckCircleIcon
                        sx={{
                          color: "success.main",
                          height: 18,
                        }}
                      />
                    ) : (
                      <HexagonIcon
                        sx={{
                          color: "primary.main",
                          rotate: "90deg",
                          height: 18,
                        }}
                      />
                    )}
                  </ListItemIcon>
                  <ListItemText className="instruction-text" primary={label} />
                </ListItem>
              ))}
            </List>
          </Stack>
        );
      default:
        return;
    }
  }, [createPasswordSteps, errors, passwordIntruction, register]);

  const Heading = useMemo(() => {
    switch (createPasswordSteps) {
      case "email":
        return "Enter your email address and we will send you the recovery OTP.";
      default:
        return;
    }
  }, [createPasswordSteps]);

  return (
    <StyledContainer>
      <Card component={Stack} elevation={1} className="container" spacing={3}>
        <Box component={"img"} src={logo} height={52} width={212} />
        <Typography className="heading-title" variant="h3">
          Forgot password
        </Typography>
        <Typography className="heading-desc" variant="subtitle1">
          {Heading}
        </Typography>
        <Stack
          component="form"
          className="form-container"
          onSubmit={handleSubmit(handleCreateNewPassword)}
        >
          {Component}
          {!isEmailValid && (
            <Typography
              variant="subtitle1"
              color="error.dark"
              textAlign="center"
            >
              We could not find this email in our system. Please try again with
              another email.
            </Typography>
          )}
          <Button
            fullWidth
            variant="contained"
            className="login-button"
            type="submit"
          >
            {createPasswordSteps === "new-password" ? "Create" : "Next"}
          </Button>
        </Stack>
        <Button variant="text" onClick={() => navigate("/login")}>
          Back to login
        </Button>
        {invitationId && (
          <Tooltip title="Enter Email">
            <IconButton
              className="back-login-button"
              onClick={() => navigate("/forgot-password")}
            >
              <ArrowLeftRoundedIcon />
            </IconButton>
          </Tooltip>
        )}
      </Card>
    </StyledContainer>
  );
};

const StyledContainer = styled(Stack)(({ theme }) => ({
  height: "100vh",
  width: "100%",
  background: `url(${backgroundBanner}) center/cover no-repeat`,
  justifyContent: "center",
  alignItems: "flex-start",
  paddingLeft: theme.spacing(14),

  ".container": {
    width: theme.spacing(60.75),
    padding: theme.spacing(8, 4),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: theme.spacing(2.5),
    position: "relative",
    ".back-login-button": {
      position: "absolute",
      top: -10,
      left: 10,
    },
    ".heading-title": {
      fontFamily: "overlock",
    },
    ".heading-desc": {
      color: theme.palette.neutral["500"],
    },
    ".form-container": {
      width: "100%",
      gap: theme.spacing(3),
      ".login-button": {
        padding: theme.spacing(1.5),
      },
      ".new-password-container": {
        ".instruction-list": {
          padding: theme.spacing(0.5, 0),
          ".instruction-list-item": {
            minWidth: 24,
            height: 16,
          },
          ".instruction-text": {
            color: theme.palette.neutral["500"],
            ...theme.typography.body1,
          },
        },
      },
    },
  },
}));

const StyledFormController = styled(FormControl)(({ theme }) => ({
  gap: theme.spacing(0.5),
  ".icon": {
    color: alpha(theme.palette.neutral["500"], 0.6),
  },
  ".label": {
    color: theme.palette.neutral["700"],
  },
  ".MuiInputBase-root": {
    borderRadius: theme.spacing(0.75),
    color: theme.palette.neutral["500"],
  },
}));
