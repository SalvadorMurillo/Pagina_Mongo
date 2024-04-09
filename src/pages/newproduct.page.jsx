import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { UserContext } from "../context/auth.context";
import { logout } from "../services/auth.service";
import NavBar from "../components/nav.component";
import { newProduct } from "../services/product.service";
import { getSupplierInfo } from "../services/supplier.service";

export default function NewProductPage() {
  const { setUser, setIsAuth } = useContext(UserContext);
  const [options, setOptions] = useState(null);
  const nav = useNavigate();
  const arr = [];

  useEffect(() => {
    getSupplierInfo().then((res) => {
      for (let i = 0; i < res.data.proveedores.length; i++) {
        arr.push(res.data.proveedores[i].supplier_id);
      }
      setOptions(arr);
    });
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function submitNewProduct(data) {
    newProduct(data).then((res) => console.log(res.data));
  }

  function onLogout() {
    logout().then(
      async (data) => {
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
      <NavBar api_name={"PRODUCTOS"} api_uri={"/product"}>
        <input
          className="cursor-pointer"
          type="button"
          value={"CERRAR SESION"}
          onClick={() => onLogout()}
        />
      </NavBar>
      <div className="flex justify-center items-center h-full">
        <form
          onSubmit={handleSubmit(submitNewProduct)}
          autoComplete="off"
          className="bg-zinc-700 p-5 rounded-md"
        >
          <h1 className="text-center text-3xl tracking-widest font-bold">
            Nuevo Producto
          </h1>
          <div className="flex flex-col mb-4">
            <input
              className="w-full p-2 rounded-md bg-gray-200 placeholder-gray-600"
              type="text"
              placeholder="Codigo del Producto"
              {...register("productCode", { required: true })}
            />
          </div>
          <div className="flex flex-col mb-4">
            <input
              className="w-full p-2 rounded-md bg-gray-200 placeholder-gray-600"
              type="text"
              placeholder="Nombre del Producto"
              {...register("productName", { required: true })}
            />
          </div>
          <div className="flex flex-col mb-4">
            <input
              className="w-full p-2 rounded-md bg-gray-200 placeholder-gray-600"
              type="text"
              placeholder="Descripcion del Producto"
              {...register("productDesc", { required: true })}
            />
          </div>
          <div className="flex flex-col mb-4">
            <select
              className="w-full p-2 rounded-md bg-black-200 placeholder-gray-600"
              {...register("productStatus", { required: true })}
            >
              <option value="">Estado del Producto</option>
              <option value={"agotado"}>AGOTADO</option>
              <option value={"disponible"}>DISPONIBLE</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <select
              className="w-full p-2 rounded-md bg-black-200 placeholder-gray-600"
              {...register("productProvider", { required: true })}
            >
              <option value="">Proveedor</option>
              {options !== null ? (
                options.map((item, i) => {
                  return (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  );
                })
              ) : (
                <option disabled>No hay proveedores</option>
              )}
            </select>
          </div>
          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value="Enviar Consulta"
          />
        </form>
      </div>
    </>
  );
}
