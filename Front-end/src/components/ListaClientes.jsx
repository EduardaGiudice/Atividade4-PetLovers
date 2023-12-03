/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";

export default function ListaClientes(props) {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    try {
      fetchClientes();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const removeCliente = async (cliente) => {
    try {
      const response = await fetch("http://localhost:32831/cliente/excluir", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cliente),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        fetchClientes();
      } else {
        console.log("Error submitting form");
      }
    } catch (error) {
      console.log(error);
    }
  };

  function listarClientes(clientes, seletorView, setClienteId) {
    return clientes.map((cliente) => {
      return (
        <div style={{ margin: "1em", borderBottom: "1px solid #ddd" }}>
          <a
            key={cliente.id}
            className="collection-item"
            style={{ position: "relative" }}
          >
            <div className="row">
              <div className="col s5">
                <h5>Nome: {cliente.nome}</h5>
                <h6> Nome Social: {cliente.nomeSocial}</h6>
                <h6>Email: {cliente.email}</h6>
              </div>
              <div className="col s4">
                <br />
                <br />
                <h6>Código Postal: {cliente.endereco.codigoPostal}</h6>
                <h6>Nº Residência: {cliente.endereco.numero}</h6>
              </div>
              <div className="col s3">
                <h5>Telefones:</h5>
                <ul>
                  {cliente.telefones.map((telefone, index) => (
                    <li key={index}>{`(${telefone.ddd}) ${telefone.numero}`}</li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              className="btn waves"
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
              onClick={(e) => {
                seletorView("editarCliente", e);
                setClienteId(cliente.id);
              }}
            >
              Vizualizar
            </button>
            <button
              className=" btn-floating btn waves red pl-2"
              style={{ position: "absolute", top: "10px", right: "10px" }}
              onClick={(e) => {
                seletorView("Clientes", e);
                removeCliente(cliente);
              }}
            >
              X
            </button>
          </a>
        </div>
      );
    });
  }

  async function fetchClientes() {
    let resp = await fetch("http://localhost:32831/cliente/clientes");
    const resp_json = await resp.json();
    console.log(resp_json);
    setClientes(resp_json);
  }

  return (
    <>
      <div className="collection">
        {listarClientes(clientes, props.seletorView, props.setClienteId)}
      </div>
    </>
  );
}
