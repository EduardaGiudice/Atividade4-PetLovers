/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import M from 'materialize-css';
import Select from 'react-select';


export default function ListaProdServ(props) {
  const [prodserv, setProdserv] = useState([]);


  useEffect(() => {
    const selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
  }, []);

  const categoriaOptions = [
    { value: 1, label: 'Serviço' },
    { value: 2, label: 'Produto' },
];


  useEffect(() => {
    let prodserv = [
      {
        nome: "Anti-Pulgas",
        categoria: "Produto",
        valor: '70'
      },
      {
        nome: "Cortar Unhas",
        categoria: "Serviço",
        valor: '20'

      },
      {
        nome: "Coleira",
        categoria: "Produto",
        valor: '30'

      },
      {
        nome: "Tosa",
        categoria: "Serviço",
        valor: '60'

      },
      {
        nome: "Banho",
        categoria: "Serviço",
        valor: '50'

      }
    ]
    setProdserv(prodserv)

  }, [])

  function listarProdServ(prodserv, seletorView) {
    return prodserv.map((prodserv, index) => {
      return (
        <div style={{ margin: "1em", borderBottom: "1px solid #ddd" }}>
          <a
            key={index}
            className="collection-item"
            style={{ position: "relative" }}
          >
            <div className="row">
              <div className="col s5">
                <h5>Nome: {prodserv.nome}</h5>
              </div>
              <div className="col s3">
                <h5>Categoria: {prodserv.categoria}</h5>
              </div>
              <div className="col s3">
                <h5>Valor: R${prodserv.valor}</h5>
              </div>
            </div>
            <button
              className=" btn pl-2"
              style={{ position: "absolute", top: "10px", right: "60px" }}
            >Editar
            </button>
            <button
              className=" btn-floating btn waves red pl-2"
              style={{ position: "absolute", top: "10px", right: "10px" }}
            >
              X
            </button>
          </a>
        </div>
      );
    });
  }


  return (
    <>
      <div className="row" style={{ margin: "3em" }}>
        <div className="input-field col s3">
          <label htmlFor="categoria">Categoria:</label>
          <br />
          <br />
          <Select
            id="categoria"
            options={categoriaOptions}
            styles={{
              menu: provided => ({ ...provided, zIndex: 9999 }),
            }}
            placeholder="Selecione uma categoria"
          />

        </div>
        <div className="input-field col s3">
          <label htmlFor="nomeItem" className="label">
            Nome:
          </label>
          <br />
          <br />
          <input
            id="nomeItem"
            type="text"
            className="validate"
          />
        </div>
        <div className="input-field col s1">
          <label htmlFor="valorItem" className="label">
            Valor:
          </label>
          <br />
          <br />
          <input
            id="valorItem"
            type="text"
            className="validate"
          />
        </div>
        <div className="col s1">
          <br />
          <br />
          <br />
          <button className="btn" type="button">
            Salvar
          </button>
        </div>
      </div>
      <div className="collection">
        {listarProdServ(prodserv, props.seletorView)}
      </div>
    </>
  );
}
