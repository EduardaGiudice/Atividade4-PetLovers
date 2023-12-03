import {useEffect} from "react";
import M from 'materialize-css';
import Select from 'react-select';


export default function FormularioCadastroPet(props) {

    useEffect(() => {
        const selects = document.querySelectorAll('select');
        M.FormSelect.init(selects);
    }, []);

    const donoOptions = [
        { value: 1, label: 'Maria Aparecida Soares' },
        { value: 2, label: 'Carlos de Almeida' },
        { value: 3, label: 'Eduardo Carvalho' },
    ];

    const tipoOptions = [
        { value: 1, label: 'Cachorro' },
        { value: 2, label: 'Gato' },
    ];

    const generoOptions = [
        { value: 1, label: 'Macho' },
        { value: 2, label: 'Fêmea' },
    ];
    
    return (
        <div style={{ margin: "3em" }}>
            <form className="col s12">
                <div className="center-align">
                    <h2>Cadastro de Pets</h2>
                </div>
                <div className="row">
                <div className="input-field col s3 offset-s4">
                        <label htmlFor="donoPet">Dono:</label>
                        <br />
                        <br/>
                        <Select
                            id="donoPet"
                            options={donoOptions}
                            styles={{
                                menu: provided => ({ ...provided, zIndex: 9999 }),
                            }}
                            placeholder="Selecione um dono"
                        />
                    </div>
                    </div>
                <h4>Dados do Pet</h4>
                <div className="row">
                    <div className="input-field col s3">
                        <label htmlFor="nomePet" className="label">
                            Nome:
                        </label>
                        <br />
                        <br />
                        <input
                            id="nomePet"
                            type="text"
                            className="validate"
                        />
                    </div>
                    <div className="input-field col s3">
                        <label htmlFor="tipoPet">Tipo:</label>
                        <br />
                        <br/>
                        <Select
                            id="tipoPet"
                            options={tipoOptions}
                            styles={{
                                menu: provided => ({ ...provided, zIndex: 9999 }),
                            }}
                            placeholder="Selecione um tipo"
                        />
                    </div>
                    <div className="input-field col s3">
                        <label htmlFor="racaPet" className="label">
                            Raça:
                        </label>
                        <br />
                        <br />
                        <input
                            id="racaPet"
                            type="text"
                            className="validate"
                        />
                    </div>
                    <div className="input-field col s3">
                        <label htmlFor="generoPet">Gênero:</label>
                        <br />
                        <br />
                        <Select
                            id="generoPet"
                            options={generoOptions}
                            styles={{
                                menu: provided => ({ ...provided, zIndex: 9999 }),
                            }}
                            placeholder="Selecione um genero"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className="btn" type="submit" name="action"  style={{ position: "absolute", bottom: 50, left:50 }}>
                            Cadastrar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
