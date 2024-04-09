import { useContext } from "react";
import { useForm } from "react-hook-form";
import { addUser } from "../services/auth.service";
import { Link } from "react-router-dom";

import { UserContext } from "../context/auth.context";

export default function RegisterPage() {
  const { user, setUser } = useContext(UserContext);

  const { handleSubmit, register } = useForm();
  const submitForm = async (data) => {
    console.log(data);
    const res = await addUser(data);
    console.log(res);
  };

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", padding: "20px" }}>
      <Link to={"/"} style={{ display: "block", marginBottom: "20px" }}>
        <button style={{ backgroundColor: "red", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Regresar</button>
      </Link>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "white" }}>Registro</h2>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="max-w-sm mx-auto"
          onSubmit={handleSubmit(submitForm)}
          autoComplete="off"
        >
          <div className="mb-5">
            <input
              type="text"
              placeholder="Nombre de Usuario"
              {...register("username", { required: "El nombre de usuario es requerido" })}
              style={{ width: "100%", padding: "10px", marginBottom: "10px", color: "white", backgroundColor: "rgba(255, 255, 255, 0.1)", border: "none", borderRadius: "5px" }}
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Contraseña"
              {...register("password", { required: "La contraseña es requerida" })}
              style={{ width: "100%", padding: "10px", marginBottom: "10px", color: "white", backgroundColor: "rgba(255, 255, 255, 0.1)", border: "none", borderRadius: "5px" }}
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Teléfono"
              {...register("phone", { required: "El teléfono es requerido" })}
              style={{ width: "100%", padding: "10px", marginBottom: "10px", color: "white", backgroundColor: "rgba(255, 255, 255, 0.1)", border: "none", borderRadius: "5px" }}
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Nombres"
              {...register("firstname", { required: "Los nombres son requeridos" })}
              style={{ width: "100%", padding: "10px", marginBottom: "10px", color: "white", backgroundColor: "rgba(255, 255, 255, 0.1)", border: "none", borderRadius: "5px" }}
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Apellidos"
              {...register("lastname", { required: "Los apellidos son requeridos" })}
              style={{ width: "100%", padding: "10px", marginBottom: "10px", color: "white", backgroundColor: "rgba(255, 255, 255, 0.1)", border: "none", borderRadius: "5px" }}
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Correo Electrónico"
              {...register("email", { required: "El correo es requerido" })}
              style={{ width: "100%", padding: "10px", marginBottom: "10px", color: "white", backgroundColor: "rgba(255, 255, 255, 0.1)", border: "none", borderRadius: "5px" }}
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Genero"
              {...register("gender", { required: "El genero es requerido" })}
              style={{ width: "100%", padding: "10px", marginBottom: "10px", color: "white", backgroundColor: "rgba(255, 255, 255, 0.1)", border: "none", borderRadius: "5px" }}
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Fecha de Nacimiento"
              {...register("birthdate", { required: "La fecha de nacimiento es requerida" })}
              style={{ width: "100%", padding: "10px", marginBottom: "10px", color: "white", backgroundColor: "rgba(255, 255, 255, 0.1)", border: "none", borderRadius: "5px" }}
            />
          </div>
          <div className="mb-5">
            <input
              type="number"
              placeholder="Edad"
              {...register("age", { required: "La edad es requerida" })}
              style={{ width: "100%", padding: "10px", marginBottom: "10px", color: "white", backgroundColor: "rgba(255, 255, 255, 0.1)", border: "none", borderRadius: "5px" }}
            />
          </div>
          <div>
            <button type="submit" style={{ backgroundColor: "green", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Enviar consulta</button>
          </div>
        </form>
      </div>
    </div>
  );
}
