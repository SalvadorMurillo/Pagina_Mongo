import { useContext } from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/nav.component";
import { UserContext } from "../context/auth.context";
import { logout } from "../services/auth.service";

export default function ProductPage() {
  const { setUser, setIsAuth } = useContext(UserContext);

  function onLogout() {
    logout().then(
      (data) => {
        console.log(data.data);
        setUser(null);
        setIsAuth(false);
        setTimeout(nav, 2000, "/");
      },
      (err) => {
        console.log(err);
      }
    );
  }

  return (
    <>
      <NavBar api_name={"proveedores"} api_uri={"/supplier"}>
        <input
          className="cursor-pointer btn btn-coral"
          type="button"
          value={"CERRAR SESION"}
          onClick={() => onLogout()}
        />
      </NavBar>
      <h1 className="text-center text-3xl font-bold tracking-widest mb-4">
        PRODUCTOS
      </h1>
      <div className="flex flex-col items-center">
          <button>
          <Link to={"/product/new"} className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm py-2.5">AÑADIR PRODUCTOS</Link>
          </button>
          <h1 className="text-center text-3xl font-bold tracking-widest mb-4"></h1>
          <button>
        <Link to={"/product/view"} className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm py-2.5">VER PRODUCTOS</Link>
        </button>
        <h1 className="text-center text-3xl font-bold tracking-widest mb-4"></h1>
        <button>
        <Link to={"/product/update"} className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm py-2.5">MODIFICAR PRODUCTOS</Link>
        </button>
        <h1 className="text-center text-3xl font-bold tracking-widest mb-4"></h1>
        <button>
        <Link to={"/product/delete"} className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm py-2.5">ELIMINAR PRODUCTOS</Link>
        </button>
      </div>
    </>
  );
}
