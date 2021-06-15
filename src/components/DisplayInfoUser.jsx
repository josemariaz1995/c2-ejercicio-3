export const DisplayInfoUser = (props) => {
  const {
    informacion: { nombre, apellidos, email, apodo, fecha, contrasenya },
    etapa,
  } = props;
  if (etapa === 3) {
    return (
      <section className="container formulario-seccion  p-3 mb-5 bg-white rounded d-flex justify-content-center">
        <ul className="list-group w-75 shadow-sm ">
          <li className="list-group-item">nombre: {nombre}</li>
          <li className="list-group-item">apellidos: {apellidos}</li>
          <li className="list-group-item">email: {email}</li>
          <li className="list-group-item">apodo: {apodo}</li>
          <li className="list-group-item">fecha de nacimiento: {fecha}</li>
          <li className="list-group-item">contraseña: {contrasenya}</li>
        </ul>
      </section>
    );
  }
  return "";
};
