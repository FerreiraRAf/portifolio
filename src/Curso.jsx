// Css
import './Curso.css'

//Assets
import Certificado from './assets/Certificado.jpg'

//Components
import CardCurso from './components/CardMedia.jsx'


function Curso() {

    return (
        <>
        <h1>Certificações</h1>
        <CardCurso
            image={Certificado}
            title="Curso de ReactWeb Frontend Fundamentos HTML5 CSS3 JavaScript + 10 Projetos"
            description="Curso que aborda as principais tecnologias para atuar como desenvolvedor web front-end: HTML5, CSS3 e JavaScript."
            buttonText="Acessar Certificado"
            site="https://www.udemy.com/certificate/UC-38c90c7c-ba59-480f-a268-f26886b967ac/"
        />
        </>
    )
}

export default Curso
