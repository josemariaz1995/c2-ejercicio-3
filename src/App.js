import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <main>
    <form>
      <label htmlFor="nombre"></label>
      <input type="text" id="nombre"/>
      <label htmlFor="apellido"></label>
      <input type="text" id="apellido" />
      <label htmlFor="fecha"></label>
      <input  type="date" id="fecha"/>
      <label htmlFor="email"></label>
      <input type="email" id="email"/>
      <button type="submit"></button>
    </form>
    <form>
    <label htmlFor="nombrelogin"></label>
      <input type="text" id="nombrelogin" />
    <label htmlFor="password"></label>
      <input type="password"  id="password"/>
      <label htmlFor="repeat-password"></label>
      <input type="password" id="repeat-password"/>
      <button type="submit"></button>
    </form>
    <form>
     <label htmlFor="nombrelogin"></label>
      <input type="text" id="nombrelogin"/>
      <label htmlFor="password"></label>
      <input type="password" id="password" />
      <label htmlFor="remember-password">Recordar contraseña?</label>
      <input type="checkbox" id="remember-password" />
      <button type="submit"></button>
    </form>
    </main>
    </>
  );
}

export default App;
