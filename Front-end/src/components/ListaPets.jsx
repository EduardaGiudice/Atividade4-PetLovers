/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";

export default function ListaPets(props) {

  const [pets, setPets] = useState([]);

  useEffect(() => {
    let pets = [
        {
            nome: "Belinha",
            tipo: "Cachorro",
            raca: 'Pinsher',
            genero: 'Fêmea',
            nomeDono: 'Francisca de Moraes',
            cpfDono: '28374837421',
            telefoneDono: '13 947362746',
            telefoneDono2: '13 984738473'
        },
        {
            nome: "Max",
            tipo: "Cachorro",
            raca: 'Golden Retriever',
            genero: 'Macho',
            nomeDono: 'Eduardo de Lima',
            cpfDono: '58475847482',
            telefoneDono: '12 994738273'
        },
        {
            nome: "Sofia",
            tipo: "Gato",
            raca: 'Siamês',
            genero: 'Fêmea',
            nomeDono: 'Maria Eduarda de Moraes',
            cpfDono: '58474837243',
            telefoneDono: '13 947384732',
            telefoneDono2: '13 936273643'
        },
        {
            nome: "Lassie",
            tipo: "Cachorro",
            raca: 'Vira-lata',
            genero: 'Fêmea',
            nomeDono: 'Mauricio de Souza',
            cpfDono: '483948394834',
            telefoneDono: '13 948394834',
            telefoneDono2: '13 9493840349'
        }
    ]
    setPets(pets)

  }, [])

  function listarPets(pets, seletorView) {
    return pets.map((pet, index) => {
      return (
        <div style={{ margin: "1em", borderBottom: "1px solid #ddd" }}>
          <a
            key={index}
            className="collection-item"
            style={{ position: "relative" }}
          >
            <div className="row">
              <div className="col s5">
                <h5>Nome: {pet.nome}</h5>
                <h6> Tipo: {pet.tipo}</h6>
                <h6>Raça: {pet.raca}</h6>
                <h6>Gênero: {pet.genero}</h6>

              </div>
              <div className="col s4">
                <br />
                <br />
                <h6>Dono: {pet.nomeDono}</h6>
                <h6>CPF: {pet.cpfDono}</h6>
              </div>
              <div className="col s3">
              <h5>Telefones:</h5>
              <ul>
                  <li>{pet.telefoneDono}</li>
                  <li>{pet.telefoneDono2}</li>
              </ul>
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
      {listarPets(pets, props.seletorView)}
    </div>
  );
}
