import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div className="flex flex-col justify-center items-center h-full" style={{ backgroundColor: '#FA8072', minHeight: '100vh' }}>
      <h1 style={{ marginBottom: '20px', color: '#fff' }}>INICIO</h1>
      <div style={{ marginBottom: '10px' }}>
        <Link to={"/login"} style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px', marginRight: '10px' }}>Ir al Login</Link>
        <Link to={"/register"} style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>Ir al Registro</Link>
      </div>
    </div>
  );
}
