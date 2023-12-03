/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";

export default function ListaVendas(props) {

  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    let vendas = [
        {
            nome: "Maria Aparecida de Moraes",
            cpf: '48475647382',
            item: 'Banho',
            categoria: 'Serviço',
            valor: '50'
        },
        {
            nome: "Marcos Antonio Souza",
            cpf: '584958485743',
            item: 'Coleira',
            categoria: 'Produto',
            valor: '30'
        },
        {
            nome: "Celso Tadeu",
            cpf: '584947364732',
            item: 'Cortar Unhas',
            categoria: 'Serviço',
            valor: '20'
        },
        {
            nome: "Vitor Antônio",
            cpf: '103947362345',
            item: 'Tosa',
            categoria: 'Serviço',
            valor: '60'
        }
    ]
    setVendas(vendas)

  }, [])

  function listarVendas(vendas, seletorView) {
    return vendas.map((venda, index) => {
      return (
        <div style={{ margin: "1em", borderBottom: "1px solid #ddd" }}>
          <a
            key={index}
            className="collection-item"
            style={{ position: "relative" }}
          >
            <div className="row">
              <div className="col s5">
                <h5>Cliente: {venda.nome}</h5>
                <h6>CPF: {venda.cpf}</h6>
              </div>
              <div className="col s4">
                <h5>Item: {venda.item}</h5>
                <h6>Categoria: {venda.categoria}</h6>
              </div>
              <div className="col s3">
                <br/>
              <h5>Valor: R${venda.valor}</h5>

            </div>
            </div>

            <button
            className="btn waves"
            style={{ position: "absolute", bottom: "10px", right: "10px" }}
          >
            Visualizar
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
    <div className="collection">
      {listarVendas(vendas, props.seletorView)}
    </div>
  );
}
