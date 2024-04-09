import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/auth.context";

import { login } from "../services/auth.service";

export default function LoginPage() {
  const [serverMsg, setServerMsg] = useState("");
  const { user, setUser, setIsAuth, isAuth } = useContext(UserContext);

  const nav = useNavigate();

  useEffect(() => {
    if (isAuth) {
      setTimeout(nav, 2000, "/product");
    }
  }, [isAuth]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function submitForm(data) {
    login(data).then(
      (res) => {
        if (res.data.token) {
          setUser(res.data);
          setIsAuth(true);
        }

        if (res.data.mensaje) {
          setServerMsg(res.data.mensaje.toUpperCase());
          setTimeout(setServerMsg, 1500, "");
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <Link className="ml-2 mt-2" to={"/"}>
        <button className="text-red-700 bg-transparent border border-red-700 px-4 py-2 rounded-md">
          Regresar
        </button>
      </Link>
      <div className="bg-gray-50 rounded-lg shadow-lg p-6 md:mt-0 sm:max-w-md xl:p-0">
        {serverMsg !== "" && (
          <span className="text-red-700 text-center bg-red-200 mx-5 p-2 border border-red-400 rounded-sm block">
            {serverMsg}
          </span>
        )}
        <h1 className="text-xl text-gray-900 font-bold text-center tracking-widest mb-4">
          INICIAR SESION
        </h1>
        <form
          className="space-y-4 md:space-y-6"
          onSubmit={handleSubmit(submitForm)}
        >
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-900 cursor-pointer"
            >
              Nombre de Usuario
            </label>
            <input
              id="username"
              className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 outline-none"
              type="text"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="text-red-700">Este campo es obligatorio</span>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900 cursor-pointer"
            >
              Contraseña
            </label>
            <input
              id="password"
              className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 outline-none"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-700">Este campo es obligatorio</span>
            )}
          </div>
          <button
            className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm py-2.5"
            type="submit"
          >
            INICIAR SESION
          </button>
        </form>
      </div>
    </div>
  );
}
