// Css
import './Curso.css'

//Assets
import Frontend from './assets/CertificadoFront-end.jpg'
import Backend from './assets/CertificadoBack-end.png'


//Components
import CardCurso from './components/CardMedia.jsx'
import Carrosel from './components/Carrosel.jsx';


function Curso() {

    const cursos = [
            {
                image: Frontend,
                title: "Curso de Frontend Fundamentos HTML5 CSS3 JavaScript + 10 Projetos",
                description: "Curso que aborda as principais tecnologias para atuar como desenvolvedor web front-end: HTML5, CSS3 e JavaScript.",
                site: "https://www.udemy.com/certificate/UC-38c90c7c-ba59-480f-a268-f26886b967ac/",
            },
            {
                image: Backend,
                title: "Java Moderno e Fácil de Seguir: Spring Boot, IA e Projetos",
                description: "Java Completo, Didático e Objetivo: POO, Machine Learning, REST, JavaFX, Hibernate/JPA, 60 Exercícios + Amor ao Ensinar!",
                site: "https://www.udemy.com/certificate/UC-8e6722cc-3208-447e-b1c7-6e930d3b7f6f/",
            },
        ]

    return (
        <>
        <h1>Certificações</h1>

        <Carrosel itens={cursos} />
        </>
    )
}

export default Curso
