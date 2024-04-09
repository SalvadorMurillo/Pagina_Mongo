import { useContext } from "react";
import { UserContext } from "../context/auth.context";
import { useNavigate, Link } from "react-router-dom";

import NavBar from "../components/nav.component";
import { logout } from "../services/auth.service";

export default function SupplierPage() {
  const { setUser, setIsAuth } = useContext(UserContext);
  const nav = useNavigate();

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
      <NavBar api_name={"productos"} api_uri={"/product"}>
        <input
          className="cursor-pointer"
          type="button"
          value={"CERRAR SESION"}
          onClick={() => onLogout()}
        />
      </NavBar>
      <h1 className="text-center text-3xl font-bold tracking-widest">
        PROVEEDORES
      </h1>
      <h1 className="text-center text-3xl font-bold tracking-widest mb-4"></h1>
      <h1 className="text-center text-3xl font-bold tracking-widest mb-4"></h1>

      <button>
      <div className="text-center">
        <Link to={"/supplier/new"} className="w-full text-white bg-purple-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm py-2.5">AÑADIR PROVEEDORES</Link>
      </div>
      <h1 className="text-center text-3xl font-bold tracking-widest mb-4"></h1>
      <br />
      </button>
      <div className="text-center">
        <Link to={"/supplier/view"} className="w-full text-white bg-purple-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm py-2.5">VER PROVEEDORES</Link>
      </div>
      <h1 className="text-center text-3xl font-bold tracking-widest mb-4"></h1>
      <h1 className="text-center text-3xl font-bold tracking-widest mb-4"></h1>
      <div className="text-center">
        <Link to={"/supplier/update"} className="w-full text-white bg-purple-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm py-2.5">MODIFICAR PROVEEDORES</Link>
      </div>
      <h1 className="text-center text-3xl font-bold tracking-widest mb-4"></h1>
      <h1 className="text-center text-3xl font-bold tracking-widest mb-4"></h1>
      <div className="text-center">
        <Link to={"/supplier/delete"} className="w-full text-white bg-purple-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm py-2.5">ELIMINAR PROVEEDORES</Link>
      </div>
    </>
  );
}
