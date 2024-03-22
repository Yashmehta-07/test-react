import {
  Box,
  Button,
  Card,
  FormControl,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { FC, PropsWithChildren, useCallback, useState } from "react";
import backgroundBanner from "../../assets/icons/backgroud-banner.png";
import logo from "../../assets/icons/logoText.svg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILogin, LoginSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthContext } from "../../contexts";
import { useNavigate } from "react-router-dom";

const initialValues: ILogin = {
  password: "",
  email: "",
};

export const Login: FC<PropsWithChildren> = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isLoginError, setIsLoginError] = useState<boolean>();
  const { login } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(LoginSchema),
  });

  const handleLogin: SubmitHandler<ILogin> = useCallback(
    async (data: ILogin) => {
      try {
        const payload = {
          email: data.email,
          password: data.password,
        };
        await login(payload);
        setIsLoginError(false);
        navigate(`/dashboard/home`);
      } catch (error) {
        setIsLoginError(true);
      }
    },
    [login, navigate]
  );

  return (
    <StyledContainer>
      <Card component={Stack} elevation={1} className="container" spacing={3}>
        <Box component={"img"} src={logo} height={52} width={212} />
        <Typography variant="h3" fontFamily={"overlock"}>
          Log In
        </Typography>
        <Stack
          component="form"
          className="form-container"
          onSubmit={handleSubmit(handleLogin)}
        >
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
          <StyledFormController fullWidth variant="standard">
            <Typography className="label" variant="body1">
              Password
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter your email"
              type={isPasswordVisible ? "text" : "password"}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setIsPasswordVisible((prev) => !prev)}
                    >
                      {isPasswordVisible ? (
                        <VisibilityOffIcon className="icon" />
                      ) : (
                        <VisibilityIcon className="icon" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...register("password")}
            />
          </StyledFormController>
          {isLoginError && (
            <Typography variant="subtitle1" color="error" textAlign="center">
              Incorrect password or email. Please try again.
            </Typography>
          )}
          <Button
            className="forgot-password-button"
            variant="text"
            disableFocusRipple
            disableTouchRipple
            disableRipple
            onClick={() => navigate("/forgot-password")}
          >
            Forgot your password?
          </Button>
          <Button
            fullWidth
            variant="contained"
            className="login-button"
            type="submit"
          >
            Login
          </Button>
        </Stack>
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
    padding: theme.spacing(8, 5),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: theme.spacing(2.5),
    ".form-container": {
      width: "100%",
      gap: theme.spacing(2),
      ".forgot-password-button": {
        color: alpha(theme.palette.neutral["500"], 0.6),
        textDecoration: "underline",
        ...theme.typography.subtitle1,
      },
    },
    ".login-button": {
      padding: theme.spacing(1.5),
    },
    ".span-button": {
      ...theme.typography.subtitle2,
      cursor: "pointer",
      userSelect: "none",
      color: theme.palette.primary.main,
    },
  },
}));

const StyledFormController = styled(FormControl)(({ theme }) => ({
  gap: theme.spacing(0.5),
  ".icon": {
    color: alpha(theme.palette.neutral["500"], 0.6),
  },
  ".label": {
    color: theme.palette.neutral["500"],
  },
  ".MuiInputBase-root": {
    borderRadius: theme.spacing(0.75),
    color: theme.palette.neutral["500"],
  },
}));
