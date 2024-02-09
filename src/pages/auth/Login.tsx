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
import { bg } from "../../assets";
import { Link } from "react-router-dom";

export default function Login() {
  const loginSchema = object({
    email: string()
      .min(1, "Email address is required")
      .email("Email Address is invalid"),
    password: string().min(1, "Password is required"),
  });

  type RegisterInput = TypeOf<typeof loginSchema>;

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(loginSchema),
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

  const handleLogin = async (userData: RegisterInput) => {
    setLoading(true);
    const response = await ApiFetcher.post("/auth/login", userData);
    return response.data;
  };

  const dispatch = useDispatch();
  const {
    mutate: login,
    data,
    isSuccess,
  } = useMutation((userData: RegisterInput) => handleLogin(userData), {
    onMutate(_variables) {
      setLoading(true);
    },
    onSuccess(data) {
      setLoading(false);
      enqueueSnackbar(`${data.message}`, {
        variant: "success",
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      localStorage.setItem("worksmart_jwt", JSON.stringify(data.access_token))
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
    login(values);
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
              <label htmlFor="email" className="text-sm text-primary-bold">
                Email
              </label>
              <div className="w-full relative">
                <Input name="email" placeholder="Email address" type="email" />
              </div>
            </div>

            <div className="w-full mt-2">
              <label htmlFor="password" className="text-sm text-primary-bold">
                Password
              </label>
              <div className="w-full relative">
                <Input name="password" placeholder="Password" type="password" />
              </div>
            </div>

            <button
              className="w-full flex justify-center items-center hover:scale-105 transition-all text-white mt-8 py-3 rounded-lg bg-primary-bold disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <ReactLoading color="#fff" type="spin" width={20} height={20} />
              ) : (
                "Sign in"
              )}
            </button>

            <p className="text-center mt-4">
              Don't have an account?{" "}
              <Link to="/auth" className="underline text-primary-bold">
                register
              </Link>{" "}
              here
            </p>
          </form>
        </FormProvider>
      </div>

      <div className="w-full h-full left-0 top-0 absolute bg-[#0000006d] z-10"></div>
      <div className="absolute left-0 top-0 w-full bg-red-600 h-full ">
        <img src={bg} className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
}
