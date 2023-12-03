import {useEffect} from "react";
import M from 'materialize-css';
import Select from 'react-select';


export default function FormularioCadastroVendas(props) {

    useEffect(() => {
        // Inicialização do select
        const selects = document.querySelectorAll('select');
        M.FormSelect.init(selects);
    }, []);

    const clienteOptions = [
        { value: 1, label: 'Maria Aparecida Soares' },
        { value: 2, label: 'Carlos de Almeida' },
        { value: 3, label: 'Eduardo Carvalho' },
    ];

    const categoriaOptions = [
        { value: 1, label: 'Serviço' },
        { value: 2, label: 'Produto' },
    ];

    const itensOptions = [
        { value: 1, label: 'Banho' },
        { value: 2, label: 'Tosa' },
        { value: 3, label: 'Cortar Unhas' },
        { value: 4, label: 'Vacinação tipo A' },
        { value: 5, label: 'Vermifugação tipo C' },
        { value: 6, label: 'Banho Anti-pulgas' },

    ];

    return (
        <div style={{ margin: "3em" }}>
            <form className="col s12">
                <div className="center-align">
                    <h2>Cadastro de Vendas</h2>
                </div>
                <div className="row">
                    <div className="input-field col s3 offset-s4">
                        <label htmlFor="tipoItem">Cliente:</label>
                        <br />
                        <br/>
                        <Select
                            id="tipoItem"
                            options={clienteOptions}
                            styles={{
                                menu: provided => ({ ...provided, zIndex: 9999 }),
                            }}
                            placeholder="Selecione um cliente"

                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s3 offset-s4">
                        <label htmlFor="item">Categoria:</label>
                        <br />
                        <br/>
                        <Select
                            id="tipoItem"
                            options={categoriaOptions}
                            styles={{
                                menu: provided => ({ ...provided, zIndex: 9999 }),
                            }}
                            placeholder="Selecione uma categoria"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6 offset-s3">
                        <label htmlFor="tipoItem">Item:</label>
                        <br />
                        <br/>
                        <Select
                            id="tipoItem"
                            options={itensOptions}
                            styles={{
                                menu: provided => ({ ...provided, zIndex: 9999 }),
                            }}
                            placeholder="Selecione um Item"

                        />
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s12 center">
                        <h5>Valor: R$40</h5>
                    </div>
                    </div>
                
                <div className="row">
                    <div className="col s12">
                        <button className="btn" type="submit" name="action" style={{ position: "absolute", bottom: 50, left: 50 }}>
                            Finalizar Venda
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
