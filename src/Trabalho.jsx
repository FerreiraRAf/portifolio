// Css
import './Trabalho.css';

//Assets
import SistemaClimatico from './assets/SistemaClimatico.png';
import ListaCompras from './assets/ListaDeCompras.png';
import FakeStore from './assets/fakestore.png';
import Fontcup from './assets/fontcup.png';
import GerenciamentoCompras from './assets/GerenciamentoCompras.png';

//Components
import Carrosel from './components/Carrosel.jsx';


function Trabalho() {

    const trabalhos = [
        {
            image: SistemaClimatico,
            title: "Sistema Climático",
            description: "Este é um sistema simples de consulta de informações climáticas desenvolvido em Java. O programa consome a API pública WeatherAPI para obter dados meteorológicos em tempo real de qualquer cidade do mundo.",
            git: "https://github.com/FerreiraRAf/sistema-climatico-java"
        },
        {
            image: ListaCompras,
            title: "Lista de Compras",
            description: "Uma aplicação desktop desenvolvida com Java e JavaFX que permite criar e gerenciar listas de compras.",
            git: "https://github.com/FerreiraRAf/Lista-de-compras"
        },
        {
            image: FakeStore,
            title: "Fake Store",
            description: "E-commerce desenvolvido com HTML, CSS e JavaScript, consumindo a FakeStore API para listagem de produtos, autenticação e gerenciamento de carrinho.   Nome: mor_2314 Senha: 83r5^_",
            git: "https://github.com/FerreiraRAf/Fake-Store-API",
            site: "https://fake-store-beta-puce.vercel.app/pages/login.html"
        },
        {
            image: Fontcup,
            title: "Fontcup",
            description: "Aplicação em React com Material UI que permite digitar um texto e visualizar diferentes fontes tipográficas em tempo real.",
            git: "https://github.com/FerreiraRAf/Fontcup",
            site: "https://fontcup-de0hs6uh3-ferreiras-projects-753776d2.vercel.app/"
        },
        {
            image: GerenciamentoCompras,
            title: "Gerenciamento de Compras",
            description: "Aplicação desktop de gerenciamento de estoque com CRUD completo de produtos, interface em JavaFX e persistência em SQLite via JDBC, seguindo o padrão DAO.",
            git: "https://github.com/FerreiraRAf/gerenciamento-de-compras",
        },
    ]

    return (
        <>
        <h1>Projetos</h1>

        <Carrosel itens={trabalhos} />
        </>
    )
}

export default Trabalho
