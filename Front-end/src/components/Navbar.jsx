import "materialize-css/dist/css/materialize.min.css";

export default function Navbar(props) {
  const gerarListaBotoes = () => {
    if (props.botoes.length <= 0) {
      return <></>;
    } else {
      let lista = props.botoes.map((valor) => (
        <li key={valor}>
          <a onClick={(e) => props.seletorView(valor, e)}>{valor}</a>
        </li>
      ));
      return lista;
    }
  };

  return (
    <>
      <nav className='yellow darken-1'>
        <div className="nav-wrapper">
          <a style={{ marginLeft: '10px' }} className="brand-logo">PetLovers ♥ </a>
          <a data-target="mobile-menu" className="sidenav-trigger">
            <i className="material-icons"></i>
          </a>
          <ul className=" right hide-on-med-and-down">{gerarListaBotoes()}</ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-menu">
        {gerarListaBotoes()}
      </ul>
    </>
  );
}
