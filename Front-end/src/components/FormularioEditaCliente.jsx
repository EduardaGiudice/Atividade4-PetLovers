import { useState, useEffect } from "react";

export default function FormularioEditaCliente(props) {
  const [cliente, setCliente] = useState({});
  const [formData, setFormData] = useState({});
  const [telefone, setTelefone] = useState({
    ddd: "",
    numero: "",
  });

  useEffect(() => {
    fetchCliente(props.id);
  }, [props.id]);

  async function fetchCliente(id) {
    try {
      let resp = await fetch(`http://localhost:32831/cliente/${id}`);
      const resp_json = await resp.json();
      resp_json["id"] = id;
      console.log(resp_json);
      setCliente(resp_json);
      setFormData(resp_json);
    } catch (e) {
      console.log(e);
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name.includes(".")) {
      const [objectKey, nestedKey] = name.split(".");
      setFormData((prevState) => ({
        ...prevState,
        [objectKey]: {
          ...prevState[objectKey],
          [nestedKey]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleAddTelefone = () => {
    if (telefone.ddd && telefone.numero) {
      setFormData((prevState) => ({
        ...prevState,
        telefones: [...prevState.telefones, telefone],
      }));
      setTelefone({ ddd: "", numero: "" });
    }
  };

  const handleDeleteTelefone = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      telefones: prevState.telefones.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await fetch("http://localhost:32831/cliente/atualizar", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        props.seletorView("Clientes", event);
      } else {
        console.log("Error submitting form");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (Object.keys(formData).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ margin: "3em" }}>
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="center-align">
          <h2>Dados do(a) {cliente.nome}</h2>
        </div>

        <div className="row">
          <div className="input-field col s3">
            <label htmlFor="nome">Nome:</label>
            <br />
            <input
              id="nome"
              type="text"
              name="nome"
              defaultValue={formData.nome}
              className="validate"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s3">
            <label htmlFor="nomeSocial">Nome Social:</label>
            <br />
            <input
              id="nomeSocial"
              type="text"
              name="nomeSocial"
              defaultValue={formData.nomeSocial}
              className="validate"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s6">
            <label htmlFor="email" className="label">
              Email:
            </label>
            <br />
            <input
              id="email"
              type="text"
              name="email"
              defaultValue={formData.email}
              className="validate"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s1">
            <label className="label">Telefones:</label>
            <br />
            <input
              type="text"
              placeholder="DDD"
              value={telefone.ddd}
              onChange={(e) =>
                setTelefone({ ...telefone, ddd: e.target.value })
              }
            />
          </div>
          <div className="input-field col s2">
            <br />
            <input
              type="text"
              placeholder="Número"
              value={telefone.numero}
              onChange={(e) =>
                setTelefone({ ...telefone, numero: e.target.value })
              }
            />
          </div>
          <div className="col s1">
            <br />
            <br />
            <button
              style={{ fontSize: "1.5rem" }}
              className="btn"
              type="button"
              onClick={handleAddTelefone}
            >
              +
            </button>
          </div>
          <div className="col">
            <div className="row ml-2">
              {formData.telefones.map((tel, index) => (
                <div key={index}>
                  <div className="row">
                    <div className="col s2">
                      <p>({tel.ddd})</p>
                    </div>
                    <div className="col s5">
                      <p>{tel.numero}</p>
                    </div>
                    <div className="col s3">
                      <button
                        className="btn red btn-floating btn-small valign-wrapper"
                        type="button"
                        onClick={() => handleDeleteTelefone(index)}
                      >
                        <span className="valign">X</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h4>Endereço</h4>
        <div className="row">
          <div className="input-field col s3">
            <label htmlFor="estado" className="label">
              Estado:
            </label>
            <br />
            <input
              id="estado"
              type="text"
              name="endereco.estado"
              defaultValue={formData.endereco.estado}
              className="validate"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s3">
            <label htmlFor="cidade" className="label">
              Cidade:
            </label>
            <br />
            <input
              id="cidade"
              type="text"
              name="endereco.cidade"
              defaultValue={formData.endereco.cidade}
              className="validate"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s3">
            <label htmlFor="bairro" className="label">
              Bairro:
            </label>
            <br />
            <input
              id="bairro"
              type="text"
              name="endereco.bairro"
              defaultValue={formData.endereco.bairro}
              className="validate"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s3">
            <label htmlFor="rua" className="label">
              Rua:
            </label>
            <br />
            <input
              id="rua"
              type="text"
              name="endereco.rua"
              defaultValue={formData.endereco.rua}
              className="validate"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s1">
            <label htmlFor="numero" className="label">
              Número:
            </label>
            <br />
            <input
              id="numero"
              type="text"
              name="endereco.numero"
              defaultValue={formData.endereco.numero}
              className="validate"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s2">
            <label htmlFor="codigoPostal" className="label">
              Código Postal:
            </label>
            <br />
            <input
              id="codigoPostal"
              type="text"
              name="endereco.codigoPostal"
              defaultValue={formData.endereco.codigoPostal}
              className="validate"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s8">
            <label htmlFor="informacoesAdicionais" className="label">
              Informações Adicionais:
            </label>
            <br />
            <textarea
              id="informacoesAdicionais"
              type="text"
              name="endereco.informacoesAdicionais"
              className="materialize-textarea validate"
              defaultValue={formData.endereco.informacoesAdicionais}
              style={{ height: "100px" }}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <button className="btn" type="submit" name="action">
              Atualizar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
