import { useState } from "react";

export default function FormularioCadastroCliente(props) {
  const [formData, setFormData] = useState({
    endereco: {},
    telefones: [],
  });

  const [telefone, setTelefone] = useState({
    ddd: "",
    numero: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await fetch("http://localhost:32831/cliente/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          telefones: formData.telefones.map(({ ddd, numero }) => ({
            ddd,
            numero,
          })),
        }),
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

  return (
    <div style={{ margin: "3em" }}>
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="center-align">
          <h2>Cadastro de Clientes</h2>
        </div>
        <div className="row">
          <div className="input-field col s3">
            <label for="nome">Nome:</label>
            <br />
            <input
              id="nome"
              type="text"
              name="nome"
              className="validate"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s3">
            <label for="nomeSocial">Nome Social:</label>
            <br />
            <input
              id="nomeSocial"
              type="text"
              name="nomeSocial"
              className="validate"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s6">
            <label for="email" className="label">
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
        <label className="label">Telefones:</label>
        <div className="row">
          <div className="input-field col s1">
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
            <br/>
            <button style={{ fontSize: '1.5rem' }} className="btn" type="button" onClick={handleAddTelefone}>
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
                        onClick={() => handleDeleteTelefone(index)}>
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
            <label for="estado" className="label">
              Estado:
            </label>
            <br />
            <input
              id="estado"
              type="text"
              name="endereco.estado"
              className="validate"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s3">
            <label for="cidade" className="label">
              Cidade:
            </label>
            <br />
            <input
              id="cidade"
              type="text"
              name="endereco.cidade"
              className="validate"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s3">
            <label for="bairro" className="label">
              Bairro:
            </label>
            <br />
            <input
              id="bairro"
              type="text"
              name="endereco.bairro"
              className="validate"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s3">
            <label for="rua" className="label">
              Rua:
            </label>
            <br />
            <input
              id="rua"
              type="text"
              name="endereco.rua"
              className="validate"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s1">
            <label for="numero" className="label">
              Número:
            </label>
            <br />
            <input
              id="numero"
              type="text"
              name="endereco.numero"
              className="validate"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s2">
            <label for="codigoPostal" className="label">
              Código Postal:
            </label>
            <br />
            <input
              id="codigoPostal"
              type="text"
              name="endereco.codigoPostal"
              className="validate"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s8">
            <label for="informacoesAdicionais" className="label">
              Informações Adicionais:
            </label>
            <br />
            <br />
            <textarea
              id="informacoesAdicionais"
              type="text"
              name="endereco.informacoesAdicionais"
              className="materialize-textarea validate"
              style={{ height: "100px" }}
              onChange={handleInputChange}
              rows={1}
            />
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <button className="btn" type="submit" name="action">
              Cadastrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
