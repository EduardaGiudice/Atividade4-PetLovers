import {useState} from "react";
import M from 'materialize-css';

import Navbar from "./Navbar";
import ListaClientes from "./ListaClientes";
import FormularioCadastroCliente from "./FormularioCadastroCliente";
import ListaPets from "./ListaPets";
import ListaProdServ from "./ListaProdServ";
import ListaVendas from "./ListaVendas";
import FormularioCadastroVenda from "./FormularioCadastroVenda";
import FormularioCadastroPet from "./FormularioCadastroPet";
import FormularioEditaCliente from "./FormularioEditaCliente";
import ClientesConsumidores from "./ClientesConsumidores";
import MaisConsumidos from "./MaisConsumidos";


export default function Roteador() {
    const [tela, setTela] = useState('Clientes')
    const [clienteId, setClienteId] = useState('')

    const seletorView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }


    const construirView = () => {
        

        if (tela === 'Clientes') {
            return (
                <>
                    <Navbar seletorView={seletorView} tema="yellow" botoes={['Clientes', 'Pets', 'Produtos e Serviços','Vendas', 'Clientes Consumidores', 'Mais Consumidos']} />
                    <br />
                    <div className="center-align" style={{ margin: "1em" }}>
                        <h2>Clientes</h2>
                    </div>
                    <div style={{ margin: "1em" }}>
                        <button className="btn waves-effect waves-light blue" onClick={(e) => { setTela("cadastrarCliente") }}>
                            Cadastrar Cliente
                        </button>
                    </div>
                    <br />
                    <br />
                    <ListaClientes seletorView={seletorView} setClienteId={setClienteId} />

                </>
            )
        } else if (tela === 'cadastrarCliente') {
            return (
                <>
                    <Navbar seletorView={seletorView} tema="yellow" botoes={['Clientes', 'Pets', 'Produtos e Serviços','Vendas', 'Clientes Consumidores', 'Mais Consumidos']} />
                    <FormularioCadastroCliente tema="purple lighten-4" seletorView={seletorView} />
                </>
            )
        } else if (tela === 'editarCliente') {
            return (
                <>
                    <Navbar seletorView={seletorView} tema="yellow" botoes={['Clientes', 'Pets', 'Produtos e Serviços','Vendas', 'Clientes Consumidores', 'Mais Consumidos']} />
                    <FormularioEditaCliente id={clienteId} seletorView={seletorView} />
                </>
            )
        } else if (tela === 'Pets') {
            return (
                <>
                    <Navbar seletorView={seletorView} tema="yellow" botoes={['Clientes', 'Pets', 'Produtos e Serviços','Vendas', 'Clientes Consumidores', 'Mais Consumidos']} />
                    <br />
                    <div className="center-align" style={{ margin: "1em" }}>
                        <h2>Pets</h2>
                    </div>
                    <div style={{ margin: "1em" }}>

                        <button className="btn waves-effect waves-light blue" onClick={(e) => { setTela("cadastrarPet") }}>
                            Cadastrar Pet
                        </button>
                    </div>
                    <br />
                    <br />
                    <ListaPets tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'cadastrarPet') {
            return (
                <>
                    <Navbar seletorView={seletorView} tema="yellow" botoes={['Clientes', 'Pets', 'Produtos e Serviços','Vendas', 'Clientes Consumidores', 'Mais Consumidos']} />
                    <FormularioCadastroPet seletorView={seletorView} />
                </>
            )
        } else if (tela === 'Produtos e Serviços') {
            return (
                <>
                    <Navbar seletorView={seletorView} tema="yellow" botoes={['Clientes', 'Pets', 'Produtos e Serviços','Vendas', 'Clientes Consumidores', 'Mais Consumidos']} />
                    <br />
                    <br/>
                    <br/>
                    <div className="center-align" style={{ margin: "1em" }}>
                        <h2>Produtos e Serviços</h2>
                    </div>
                    <br />
                    
                    <ListaProdServ/>
                </>
            )
        } else if (tela === 'Vendas') {
            return (
                <>
                    <Navbar seletorView={seletorView} tema="yellow" botoes={['Clientes', 'Pets', 'Produtos e Serviços','Vendas', 'Clientes Consumidores', 'Mais Consumidos']} />
                    <br />
                    <div className="center-align" style={{ margin: "1em" }}>
                        <h2>Vendas:</h2>
                    </div>
                    <div style={{ margin: "1em" }}>
                        <button className="btn waves-effect waves-light blue" onClick={(e) => { setTela("cadastrarVenda") }}>
                            Cadastrar Venda
                        </button>
                    </div>
                    <br />
                    <br />
                    <ListaVendas tema="purple lighten-4" />
                </>
            )
        }else if (tela === 'cadastrarVenda') {
            return (
                <>
                    <Navbar seletorView={seletorView} tema="yellow" botoes={['Clientes', 'Pets', 'Produtos e Serviços','Vendas', 'Clientes Consumidores', 'Mais Consumidos']} />
                    <FormularioCadastroVenda seletorView={seletorView} />
                </>
            )
        }else if (tela === 'Clientes Consumidores') {
            return (
                <>
                    <Navbar seletorView={seletorView} tema="yellow" botoes={['Clientes', 'Pets', 'Produtos e Serviços','Vendas', 'Clientes Consumidores', 'Mais Consumidos']} />
                    <ClientesConsumidores seletorView={seletorView} />
                </>
            )
        }else if (tela === 'Mais Consumidos') {
            return (
                <>
                    <Navbar seletorView={seletorView} tema="yellow" botoes={['Clientes', 'Pets', 'Produtos e Serviços','Vendas', 'Clientes Consumidores', 'Mais Consumidos']} />
                    <MaisConsumidos seletorView={seletorView} />
                </>
            )
        }
    }

    return (
        construirView()
    )
}