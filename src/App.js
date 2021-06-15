import { InfoUser } from "./components/InfoUser";
import { InfoRegistro } from "./components/InfoRegistro";
import { InfoLogin } from "./components/InfoLogin";
import { Login } from "./components/Login";
import { DisplayInfoUser } from "./components/DisplayInfoUser";

function App() {
  return (
    <>
      <header className="d-flex align-items-center justify-content-center p-5 bg-primary text-white border-bottom">
        <h1>Crea una cuenta/logeate</h1>
      </header>
      <main className="p-5 vw-100">
        <InfoRegistro />
        <InfoLogin />
        <Login />
        <DisplayInfoUser />
      </main>
    </>
  );
}

export default App;
