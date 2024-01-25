import { useState } from "react";
import { bg } from "../../assets";
import { Icons } from "../../components/icons";
import ReactLoading from "react-loading";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/slices/userSlice";

export default function Login() {
  const [userType, setUserType] = useState<string>("member");
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleDispatch = () => {
    try {
      dispatch(
        loginUser({
          email: userDetails.email,
          level: userType,
        })
      );
      window.location.replace("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      handleDispatch();
      setLoading(false);
    }, 1000);
  };

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleUserType = (userType: string) => {
    setUserType(userType);
  };

  return (
    <div className="w-full h-screen border-2 flex justify-center items-center border-red-900">
      <div className="w-[40.42vw] relative z-10 px-8 py-8 rounded-lg bg-white">
        <div className="flex justify-start items-center gap-4">
          <button
            className={`${
              userType === "member" && "bg-primary-bold !text-white scale-105"
            } transition-all px-5 py-2 border text-primary-bold font-medium rounded-lg`}
            onClick={() => handleUserType("member")}
          >
            Member
          </button>
          <button
            className={`${
              userType === "manager" && "bg-primary-bold !text-white scale-105"
            } transition-all px-5 py-2 text-primary-bold border font-medium rounded-lg`}
            onClick={() => handleUserType("manager")}
          >
            Manager
          </button>
        </div>

        <form action="" className="w-full mt-4" onSubmit={handleSubmit}>
          <div className="w-full">
            <label htmlFor="username" className="text-sm text-primary-bold">
              Email
            </label>
            <div className="w-full relative">
              <input
                type="text"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
                name=""
                id=""
                className="px-12 text-primary-bold focus:outline-none py-2 bg-transparent border rounded-lg w-full"
              />
              <Icons.user className="w-6 h-6 absolute left-2 top-2" />
            </div>
          </div>

          <div className="w-full mt-6">
            <label htmlFor="username" className="text-sm text-primary-bold">
              Password
            </label>
            <div className="w-full relative">
              <input
                type="password"
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
                name=""
                id=""
                className="px-12 text-primary-bold focus-within:outline-none py-2 bg-transparent border rounded-lg w-full"
              />
              <Icons.password className="w-6 h-6 absolute left-2 top-2" />
            </div>
          </div>

          <button
            className="w-full flex justify-center items-center hover:scale-105 transition-all text-white mt-8 py-3 rounded-lg bg-primary-bold disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!userDetails.email || !userDetails.password || loading}
          >
            {loading ? (
              <ReactLoading color="#fff" type="spin" width={20} height={20} />
            ) : (
              `Login as ${userType}`
            )}
          </button>
        </form>
      </div>

      <div className="absolute left-0 top-0 w-full bg-red-600 h-full ">
        <img src={bg} className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
}
