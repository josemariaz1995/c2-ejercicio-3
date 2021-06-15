export const DisplayInfoUser = () => {
  return (
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
  );
};
