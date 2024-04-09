import { Link } from "react-router-dom";

export default function NavBar({ api_name, api_uri, children }) {
  return (
    <div className="bg-green-500 w-full flex items-center justify-center h-16">
      <h4 className="font-bold tracking-widest">MENU DE OPCIONES</h4>
      <div className="ml-auto mr-5">
        <Link
          to={api_uri}
          className="border p-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 mr-3"
        >
          IR A {api_name.toUpperCase()}
        </Link>
        <button className="border p-2 rounded-lg bg-red-500 hover:bg-red-600">
          CERRAR SESIÓN
        </button>
      </div>
    </div>
  );
}
