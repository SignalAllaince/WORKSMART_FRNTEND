/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import ApiFetcher from "../../services/ApiFetcher";
import ReactLoading from "react-loading";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import Input from "../../components/formComponents/Input";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/slices/userSlice";
import { IUser } from "../../interfaces";
import { bg, sath } from "../../assets";
import { Link } from "react-router-dom";
import BackDrop from "../../components/modal/BackDrop";
import VerifyOtp from "./VerifyOtp";

export default function Register() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_showVerifyOtpModal, setShowVerifyOtpModal] = useState<boolean>(false);

  // timer state for resend otp
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

  const registerSchema = object({
    first_name: string().min(1, "Full name is required").max(100),
    last_name: string().min(1, "Full name is required").max(100),
    email: string()
      .min(1, "Email address is required")
      .email("Email Address is invalid"),
    password: string()
      .min(1, "Password is required")
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
    confirm_password: string().min(1, "Please confirm your password"),
  }).refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Passwords do not match",
  });

  type RegisterInput = TypeOf<typeof registerSchema>;

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const [loading, setLoading] = useState<boolean>(false);

  const handleRegister = async (userData: RegisterInput) => {
    setLoading(true);
    const response = await ApiFetcher.post("/auth", userData);
    return response.data;
  };

  const dispatch = useDispatch();
  const {
    mutate: registerUser,
    data,
    isSuccess,
  } = useMutation((userData: RegisterInput) => handleRegister(userData), {
    onMutate(_variables) {
      setLoading(true);
    },
    onSuccess(data) {
      setLoading(false);
      enqueueSnackbar(`${data.message}`, {
        variant: "success",
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      setIsTimerActive(true);
    },
    onError(error: any) {
      setLoading(false);
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

  if (isSuccess) {
    dispatch(loginUser(data.data as IUser));
  }

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    // ? Execute the Mutation
    registerUser(values);
  };

  return (
    <div className="w-full relative h-screen flex justify-center items-center">
      <div className="w-[40.42vw] relative z-20 px-8 py-8 rounded-lg bg-white">
        <FormProvider {...methods}>
          <form
            action=""
            className="w-full mt-4"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <div className="w-full">
              <label htmlFor="first name" className="text-xs text-primary-bold">
                First Name
              </label>
              <div className="w-full relative">
                <Input name="first_name" type="text" placeholder="First name" />
              </div>
            </div>

            <div className="w-full mt-2">
              <label htmlFor="last name" className="text-xs text-primary-bold">
                Last Name
              </label>
              <div className="w-full relative">
                <Input name="last_name" placeholder="Last Name" type="text" />
              </div>
            </div>

            <div className="w-full mt-2">
              <label htmlFor="email" className="text-sm text-primary-bold">
                Email
              </label>
              <div className="w-full relative">
                <Input name="email" placeholder="Email address" type="email" />
              </div>
            </div>

            <div className="w-full mt-2">
              <label htmlFor="password" className="text-xs text-primary-bold">
                Password
              </label>
              <div className="w-full relative">
                <Input name="password" placeholder="Password" type="password" />
              </div>
            </div>

            <div className="w-full mt-2">
              <label
                htmlFor="confirm password"
                className="text-xs text-primary-bold"
              >
                Confirm Password
              </label>
              <div className="w-full relative">
                <Input
                  name="confirm_password"
                  placeholder="Password"
                  type="password"
                />
              </div>
            </div>

            <button
              className="w-full flex justify-center items-center hover:scale-105 transition-all text-white mt-8 py-3 rounded-lg bg-primary-bold disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <ReactLoading color="#fff" type="spin" width={20} height={20} />
              ) : (
                "Sign up"
              )}
            </button>

            <p className="text-center mt-4">
              Already have an account?{" "}
              <Link to="/auth/login" className="underline text-primary-bold">
                login
              </Link>{" "}
              here
            </p>
          </form>
        </FormProvider>
      </div>

      <div className="w-full h-full left-0 top-0 absolute bg-[#0000006d] z-10"></div>
      <div className="absolute left-0 top-0 w-full h-full ">
        <img src={bg} className="w-full h-full object-cover" alt="" />
      </div>

      {isSuccess && (
        <BackDrop onClose={() => setShowVerifyOtpModal(false)}>
          <VerifyOtp isTimerActive={isTimerActive} setIsTimerActive={setIsTimerActive} />
        </BackDrop>
      )}

      <div className="w-44 h-16 absolute left-4 top-4 z-50">
      <img src={sath} className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
}
