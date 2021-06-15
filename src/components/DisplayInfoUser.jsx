export const DisplayInfoUser = (props) => {
  const {
    informacion: { nombre, apellidos, email, apodo, anyo, contrasenya },
    setEtapa,
    etapa,
  } = props;
  console.log(localStorage);
  if (etapa === 3) {
    return (
      <section className="container formulario-seccion  p-3 mb-5 bg-white rounded d-flex justify-content-center">
        <ul className="list-group w-75 shadow-sm ">
          <li className="list-group-item">nombre: {nombre}</li>
          <li className="list-group-item">apellidos: {apellidos}</li>
          <li className="list-group-item">email: {email}</li>
          <li className="list-group-item">apodo: {apodo}</li>
          <li className="list-group-item">fecha de nacimiento: {anyo}</li>
          <li className="list-group-item">contraseña: {contrasenya}</li>
        </ul>
        <button
          type="submit"
          className="btn btn-primary  "
          onClick={() => {
            localStorage.clear();
            setEtapa(etapa - 1);
          }}
        >
          Deslogear
        </button>
      </section>
    );
  }
  return "";
};
