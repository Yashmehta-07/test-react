import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ForgotPasswordSchema, InitialvalueForgotPassword } from "./schema";
import { authAxios, publicAxios } from "../../contexts/Api/authAxios";
import { useAuthStore } from "../../contexts/Auth/useAuthStore";

export const useForgotPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const createPasswordSteps =
    searchParams.get("createPasswordSteps") ?? "email";
  const invitationId = searchParams.get("invitationId") ?? "";
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm({
    defaultValues: InitialvalueForgotPassword,
    resolver: yupResolver(ForgotPasswordSchema(createPasswordSteps ?? "email")),
  });

  const getEmailIdByInivitation = useCallback(async () => {
    if (!invitationId) return;

    try {
      const { data } = await publicAxios(
        `/invitation/details?invitationId=${invitationId}`
      );
      setValue("email", data?.email);
    } catch (error) {
      console.log(error);
    }
  }, [invitationId, setValue]);

  useEffect(() => {
    getEmailIdByInivitation();
  }, [getEmailIdByInivitation]);

  const handleEmailSubmit = useCallback(async () => {
    const payload = {
      email: watch("email"),
    };
    try {
      await authAxios.post("/forgot-password", payload);
      setIsEmailValid(true)
    } catch (error) {
      console.log(error);
      setIsEmailValid(false)
    }
  }, [watch]);

  const handleSubmitPassword = useCallback(async () => {
    try {
      const { data } = await publicAxios.put(`/set-password`, {
        invitationId,
        password: watch("newPassword"),
      });
      useAuthStore.setState({
        token: data?.token,
        refreshToken: data?.refreshToken,
      });
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }, [invitationId, navigate, watch]);

  const handleCreateNewPassword = useCallback(() => {
    switch (createPasswordSteps) {
      case "email":
        handleEmailSubmit();
        break;
      case "new-password":
        handleSubmitPassword();
        break;
      default:
        break;
    }
  }, [createPasswordSteps, handleEmailSubmit, handleSubmitPassword]);

  return {
    createPasswordSteps,
    handleCreateNewPassword,
    register,
    handleSubmit,
    errors,
    control,
    isEmailValid,
    invitationId
  };
};
