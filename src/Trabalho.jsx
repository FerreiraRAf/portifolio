// Css
import './Trabalho.css';

//Assets
import Certificado from './assets/Certificado.jpg'

//Components
import CardCurso from './components/CardMedia.jsx'


function Trabalho() {

    return (
        <>
        <h1>Trabalho</h1>
        <CardCurso
            image={Certificado}
            title="Curso de ReactWeb Frontend Fundamentos HTML5 CSS3 JavaScript + 10 Projetos"
            description="Este curso abrangente as principais tecnologias para se tornar um programador ou programadora web front-end: HTML5, CSS3 e JavaScript."
            href="https://www.udemy.com/certificate/UC-38c90c7c-ba59-480f-a268-f26886b967ac/"
        />
        </>
    )
}

export default Trabalho
