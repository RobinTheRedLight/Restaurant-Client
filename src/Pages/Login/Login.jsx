import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";
import authenticationImg from "../../assets/others/authentication2.png";
import authenticationBgImg from "../../assets/others/authentication.png";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn, providerLogin, user } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user.uid) {
          const saveUser = {
            name: user.displayName,
            email: user.email,
            imageURL: user.photoURL,
          };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then(() => {
              navigate(from, { replace: true });
            });
        } else {
          Swal.fire({
            icon: "Log in failed",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      })
      .catch((error) => setLoginError(error.message));
  };

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email.toLowerCase(), data.password)
      .then((result) => {
        const user = result.user;
        console.log("Login Page", user);

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div
        style={{ backgroundImage: `url(${authenticationBgImg})` }}
        className="hero min-h-screen bg-base-200 "
      >
        <div className="hero-content justify-end flex-col md:flex-row-reverse">
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
              <h1 className="text-center text-neutral-900 text-[40px] font-bold font-['Inter']">
                Login
              </h1>
              <div className="form-control">
                <label className="label">
                  {" "}
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  {" "}
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters or longer",
                    },
                  })}
                  className="input input-bordered"
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="text-white btn bg-orange-400 bg-opacity-70 rounded-lg"
                  type="submit"
                  value="Login"
                />
              </div>
              <div>
                {loginError && <p className="text-red-600">{loginError}</p>}
              </div>
            </form>
            <div className="text-center">
              <span className="text-orange-400 text-sm font-medium font-['Inter']">
                New here?{" "}
              </span>
              <span className="text-orange-400 text-sm font-bold font-['Inter']">
                <Link to="/signUp">Create a New Account</Link>
              </span>
            </div>
            <div className="divider">OR</div>
            <div className="pb-5 pr-5 pl-5">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline w-full"
              >
                CONTINUE WITH GOOGLE
              </button>
            </div>
          </div>
          <div className=" md:w-1/2 max-sm:hidden">
            <img src={authenticationImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
