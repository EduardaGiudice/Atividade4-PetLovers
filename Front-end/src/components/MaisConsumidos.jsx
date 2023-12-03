import { useEffect, useState } from "react";
import M from 'materialize-css';
import Select from 'react-select';


export default function MaisConsumidos() {
    const [tableData, setTableData] = useState([]);


    useEffect(() => {
        // Inicialização do select
        const selects = document.querySelectorAll('select');
        M.FormSelect.init(selects);
    }, []);

    const racaOptions = [
        { value: 1, label: 'Nenhum' },
        { value: 2, label: 'Chow Chow' },
        { value: 3, label: 'Golden Retriever' },
        { value: 4, label: 'Spitz Alemão' },
        { value: 5, label: 'Pinsher' },
    ];

    const tipoOptions = [
        { value: 1, label: 'Nenhum' },
        { value: 2, label: 'Gato' },
        { value: 3, label: 'Cachorro' },
    ];

    const data = [
        { ranking: 1, nomeItem: 'Banho', categoria: 'Serviço', quantidade: 72 },
        { ranking: 2, nomeItem: 'Shampoo Anti-pulgas', categoria: 'Produto', quantidade: 57 },
        { ranking: 3, nomeItem: 'Remédio para Carrapato', categoria: 'Produto', quantidade: 55 },
        { ranking: 4, nomeItem: 'Cortar unhas', categoria: 'Serviço', quantidade: 52 },
        { ranking: 5, nomeItem: 'Coleira', categoria: 'Produto', quantidade: 43 },
        { ranking: 6, nomeItem: 'Guia de passeio', categoria: 'Produto', quantidade: 41 },
        { ranking: 7, nomeItem: 'Vacinação tipo A', categoria: 'Serviço', quantidade: 32 },
        { ranking: 8, nomeItem: 'Roupinha para Gatos', categoria: 'Produto', quantidade: 27 },
        { ranking: 9, nomeItem: 'Vermifugação tipo C', categoria: 'Serviço', quantidade: 24 },
        { ranking: 10, nomeItem: 'Shampoo Anti-pulgas', categoria: 'Produto', quantidade: 16 },
      ];
    
    const renderTableRows = () => {
        return data.map((item) => (
          <tr key={item.ranking}>
            <td>{item.ranking}</td>
            <td>{item.nomeItem}</td>
            <td>{item.categoria}</td>
            <td>{item.quantidade}</td>
          </tr>
        ));
      };

    return (
        <div style={{ margin: "3em" }}>
            <form className="col s12">
                <div className="center-align">
                    <h2>Serviços/Produtos mais consumidos</h2>
                </div>
                <div className="row">
                    <div className="col s6 offset-s3">
                        <div className="input-field" style={{ width: '40%', display: 'inline-block', marginRight: '1rem' }}>
                            <label htmlFor="tipoPet">Tipo:</label>
                            <br />
                            <br />
                            <Select
                                id="tipoPet"
                                options={tipoOptions}
                                styles={{
                                    menu: provided => ({ ...provided, zIndex: 9999 }),
                                }}
                                placeholder="Selecione um tipo"
                            />
                        </div>
                        <div className="input-field" style={{ width: '40%', display: 'inline-block', marginLeft: '1rem' }}>
                            <label htmlFor="racaPet">Raça:</label>
                            <br />
                            <br />
                            <Select
                                id="racaPet"
                                options={racaOptions}
                                styles={{
                                    menu: provided => ({ ...provided, zIndex: 9999 }),
                                }}
                                placeholder="Selecione uma raça"
                            />
                        </div>
                        <button
                            className="btn"
                            type="button"
                            name="pesquisar"
                            style={{ marginLeft: '1rem' }}
                        >
                            Pesquisar
                        </button>
                    </div>
                </div>
            </form>

            {/* Tabela */}
            <div className="row">
                <div className="col s6 offset-s3 ">
                    <table className="striped responsive-table custom-width blue lighten-4">
                        <thead>
                            <tr>
                                <th>Ranking</th>
                                <th>Nome Item</th>
                                <th>Categoria</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTableRows()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
