import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import authenticationImg from "../../assets/others/authentication2.png";
import authenticationBgImg from "../../assets/others/authentication.png";

const SignUp = () => {
  const imageHostKey = import.meta.env.VITE_imgbb_key;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, providerLogin, updateUserProfile } =
    useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [signUpError, setSignUPError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    setSignUPError("");
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        Swal.fire({
          position: "top",
          icon: "success",
          title: "You have successfully signed up.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });

    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          updateUserProfile(data.name, imgData.data.url);
          reset();
        }
      });
  };
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user.uid) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "You have successfully signed up.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from, { replace: true });
        } else {
          Swal.fire({
            icon: "Log in failed",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      })
      .catch((error) => setSignUPError(error.message));
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div
        style={{ backgroundImage: `url(${authenticationBgImg})` }}
        className="hero min-h-screen bg-base-200"
      >
        <div className="hero-content justify-between flex-col lg:flex-row-reverse">
          <div className=" md:w-1/2 max-sm:hidden">
            <img src={authenticationImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-center text-neutral-900 text-[40px] font-bold font-['Inter']">
                Sign Up
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="input input-bordered"
                />
                {errors.image && (
                  <span className="text-red-600">{errors.image.message}</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="text-white btn bg-orange-400 bg-opacity-70 rounded-lg"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              {signUpError && <p className="text-red-600">{signUpError}</p>}
            </form>
            <p className="text-center">
              <small className="text-orange-400 text-sm font-medium font-['Inter']">
                Already have an account?{" "}
                <Link
                  className="text-orange-400 text-sm font-bold font-['Inter']"
                  to="/login"
                >
                  Go to login
                </Link>
              </small>
            </p>
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
        </div>
      </div>
    </>
  );
};

export default SignUp;
