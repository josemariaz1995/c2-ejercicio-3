

function App() {
  return (
    <>
    <main>
      <section>
    <form>
      <label htmlFor="nombre"> Nombre</label>
      <input type="text" id="nombre"/>
      <label htmlFor="apellido">Apellidos</label>
      <input type="text" id="apellido" />
      <label htmlFor="fecha">Fecha de nacimiento</label>
      <input  type="date" id="fecha"/>
      <label htmlFor="email">Email</label>
      <input type="email" id="email"/>
      <button type="submit">Generar datos</button>
    </form>
    </section>
    <section>
    <form>
    <label htmlFor="nombrelogin">Nick para logear</label>
      <input type="text" id="nombrelogin" />
    <label htmlFor="password">Contraseña</label>
      <input type="password"  id="password"/>
      <label htmlFor="repeat-password">Repetir contraseña</label>
      <input type="password" id="repeat-password"/>
      <button type="submit">Registrarse</button>
    </form>
    </section>
    <section>
    <form>
     <label htmlFor="nombrelogin">Nick de login</label>
      <input type="text" id="nombrelogin"/>
      <label htmlFor="password">Contraseña</label>
      <input type="password" id="password" />
      <label htmlFor="remember-password">Recordar contraseña?</label>
      <input type="checkbox" id="remember-password" />
      <button type="submit">Logearse</button>
    </form>
    </section>
    <section>
      <ul>
        <li>nombre</li>
        <li>apellidos</li>
        <li>email</li>
        <li>nick name</li>
        <li>fecha de nacimiento</li>
        <li>contraseña</li>
      </ul>
    </section>
    </main>
    </>
  );
}

export default App;
