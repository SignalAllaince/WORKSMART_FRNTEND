/// <reference types="node" />

import { useEffect, useState } from "react";
import OtpInput from "../../components/otp/Otp";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../../interfaces";
import ApiFetcher from "../../services/ApiFetcher";
import { useMutation } from "react-query";
import { enqueueSnackbar } from "notistack";
import { loginUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

interface IVerifyOtp {
  isTimerActive: boolean;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function VerifyOtp({
  isTimerActive,
  setIsTimerActive,
}: IVerifyOtp) {
  const [otp, setOtp] = useState("");
  const onChange = (value: string) => setOtp(value);

  // resend otp timer
  const [timer, setTimer] = useState<number>(120); // Initial duration in seconds

  // useEffect hook to handle the countdown logic
  useEffect(() => {
    let countdown: NodeJS.Timeout;

    if (isTimerActive && timer > 0) {
      countdown = setTimeout(
        () => setTimer((prevTimer) => prevTimer - 1),
        1000
      );
    } else {
      setIsTimerActive(false);
    }

    return () => clearTimeout(countdown);
  }, [isTimerActive, timer]);

  const registeredUser: IUser = useSelector((state: any) => state.user.user);

  const handleVerifyEmail = async () => {
    const response = await ApiFetcher.post("/auth/verify-email", {
      email: registeredUser.email,
      token: otp,
    });
    return response.data;
  };

  const {
    mutate: verifyEmail,
    data,
    isSuccess,
  } = useMutation(() => handleVerifyEmail(), {
    onSuccess(data) {
      enqueueSnackbar(`${data.message}`, {
        variant: "success",
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      setIsTimerActive(true);
      localStorage.setItem("worksmart_jwt", JSON.stringify(data.access_token))
    },
    onError(error: any) {
      if (Array.isArray((error as any).response.data.error)) {
        (error as any).response.data.error.forEach((el: any) =>
          enqueueSnackbar(`${el.message}`, {
            variant: "error",
            anchorOrigin: { vertical: "top", horizontal: "right" },
          })
        );
      } else {
        enqueueSnackbar(`${error.response.data.message}`, {
          variant: "error",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
      }
    },
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      dispatch(loginUser(data.data as IUser));
      navigate("/dashboard");
    }
  }, [isSuccess, dispatch, data, navigate]);

  useEffect(() => {
    if (otp.length === 6) {
      verifyEmail();
    }
  }, [otp, verifyEmail]);

  return (
    <div className="py-16 rounded-xl w-[30rem] flex flex-col gap-8 justify-center items-center bg-white">
      <p className="text-primary-bold">Enter your one time password</p>
      <OtpInput
        setValue={setOtp}
        value={otp}
        onChange={onChange}
        valueLength={6}
      />

      {timer > 0 ? (
        <p className="text-sm font-medium text-grey-100 mt-6">
          <span className="mr-2">Resend OTP in </span>
          {String(Math.floor(timer / 60)).padStart(2, "0")}:
          {String(timer % 60).padStart(2, "0")}
        </p>
      ) : (
        <p
          className="text-sm cursor-pointer font-medium text-purple-100 mt-6 underline"
          // onClick={handleResendOTP}
        >
          Resend OTP
        </p>
      )}
    </div>
  );
}
