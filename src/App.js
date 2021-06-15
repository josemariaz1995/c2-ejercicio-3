function App() {
  return (
    <>
      <header className="d-flex align-items-center justify-content-center p-5 bg-primary text-white border-bottom">
        <h1>Crea una cuenta/logeate</h1>
      </header>
      <main className="p-5 vw-100">
        <section className="container formulario-seccion shadow-sm  mb-5 bg-white rounded ">
          <form className="row p-3 justify-content-center">
            {/* <label className="col-sm-6 col-form-label" htmlFor="nombre">
              Nombre
            </label> */}
            <div className="input-group col-sm-12 mb-4">
              <div className="input-group-prepend ">
                <label className="input-group-text" htmlFor="nombre">
                  Nombre
                </label>
              </div>
              <input className="form-control" type="text" id="nombre" />
            </div>

            <div className="input-group col-sm-12 mb-4">
              <div className="input-group-prepend ">
                <label className="input-group-text" htmlFor="apellido">
                  Apellidos
                </label>
              </div>
              <input className="form-control" type="text" id="apellido" />
            </div>
            <div className="input-group col-sm-12 mb-4">
              <div className="input-group-prepend ">
                <label className="input-group-text" htmlFor="fecha">
                  Nacimiento
                </label>
              </div>
              <input className="form-control" type="date" id="fecha" />
            </div>
            <div className="input-group col-sm-12 mb-4">
              <div className="input-group-prepend ">
                <label className="input-group-text" htmlFor="email">
                  Email
                </label>
              </div>
              <input className="form-control" type="email" id="email" />
            </div>
            <button type="submit" className="btn btn-primary mt-3 col-sm-8">
              Siguiente
            </button>
          </form>
        </section>
        <section className="container formulario-seccion shadow-sm  mb-5 bg-white rounded ">
          <form className="row p-3 justify-content-center">
            <div className="input-group col-sm-12 mb-4">
              <div className="input-group-prepend ">
                <label className="input-group-text" htmlFor="apodo">
                  Apodo
                </label>
              </div>
              <input className="form-control" type="text" id="apodo" />
            </div>

            <div className="input-group col-sm-12 mb-4">
              <div className="input-group-prepend ">
                <label className="input-group-text" htmlFor="passwordRegistro">
                  Contraseña
                </label>
              </div>
              <input
                className="form-control"
                type="password"
                id="passwordRegistro"
              />
            </div>
            <div className="input-group col-sm-12 mb-4">
              <div className="input-group-prepend ">
                <label className="input-group-text" htmlFor="confirm">
                  Confirmar
                </label>
              </div>
              <input className="form-control" type="password" id="confirm" />
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-3 mr-3 col-sm-4"
            >
              Atras
            </button>
            <button type="submit" className="btn btn-primary mt-3 col-sm-4">
              Registrar
            </button>
          </form>
        </section>

        <section className="container formulario-seccion shadow-sm  mb-5 bg-white rounded ">
          <form className="row p-3 justify-content-center">
            <div className="input-group col-sm-12 mb-4">
              <div className="input-group-prepend ">
                <label className="input-group-text" htmlFor="apodoLog">
                  Apodo
                </label>
              </div>
              <input className="form-control" type="text" id="apodoLog" />
            </div>
            <div className="input-group col-sm-12 mb-4">
              <div className="input-group-prepend ">
                <label className="input-group-text" htmlFor="passwordLog">
                  Contraseña
                </label>
              </div>
              <input
                className="form-control"
                type="password"
                id="passwordLog"
              />
            </div>
            <div className="form-check col-sm-12 text-right">
              <input
                className="form-check-input"
                type="checkbox"
                id="recordar"
              />
              <label className="form-check-label recordar" htmlFor="recordar">
                Recordar Contraseña?
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-3 mr-3 col-sm-4"
            >
              Atras
            </button>
            <button type="submit" className="btn btn-primary mt-3 col-sm-4">
              Iniciar Sessión
            </button>
          </form>
        </section>
        <section className="container formulario-seccion  p-3 mb-5 bg-white rounded d-flex justify-content-center">
          <ul className="list-group w-75 shadow-sm ">
            <li className="list-group-item">nombre:</li>
            <li className="list-group-item">apellidos:</li>
            <li className="list-group-item">email:</li>
            <li className="list-group-item">nick name:</li>
            <li className="list-group-item">fecha de nacimiento:</li>
            <li className="list-group-item">contraseña:</li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
