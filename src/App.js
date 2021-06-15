import { InfoUser } from "./components/InfoUser";
import { InfoRegistro } from "./components/InfoRegistro";
import { InfoLogin } from "./components/InfoLogin";
import { Login } from "./components/Login";
import { DisplayInfoUser } from "./components/DisplayInfoUser";
import { useEffect, useState } from "react";

function App() {
  const [informacion, setInformacion] = useState(InfoUser);
  const [etapa, setEtapa] = useState(0);
  const [recordar, setRecordar] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("password") !== null) {
      setInformacion((informacion) => {
        return {
          ...informacion,
          apodo: localStorage.getItem("user"),
          contrasenya: localStorage.getItem("password"),
          email: localStorage.getItem("email"),
          anyo: localStorage.getItem("anyo"),
          apellidos: localStorage.getItem("apellidos"),
          nombre: localStorage.getItem("nombre"),
        };
      });
      setEtapa(3);
    }
  }, []);

  return (
    <>
      <header className="d-flex align-items-center justify-content-center p-5 bg-primary text-white border-bottom">
        <h1>Crea una cuenta/logeate</h1>
      </header>
      <main className="p-5 vw-100 d-flex justify-content-center align-items-center vh-100">
        <InfoRegistro
          etapa={etapa}
          setEtapa={setEtapa}
          setInformacion={setInformacion}
        />
        <InfoLogin
          etapa={etapa}
          informacion={informacion}
          setEtapa={setEtapa}
          setInformacion={setInformacion}
        />
        <Login
          etapa={etapa}
          setEtapa={setEtapa}
          setRecordar={setRecordar}
          recordar={recordar}
          informacion={informacion}
        />
        <DisplayInfoUser
          etapa={etapa}
          setEtapa={setEtapa}
          informacion={informacion}
        />
      </main>
    </>
  );
}

export default App;
