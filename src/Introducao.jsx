import './Introducao.css'

//Assets
import Perfil from "./assets/Rafael.jpg"
import Curriculo from "./assets/Rafael da Rosa Ferreira - Back-end.pdf"

// Components
import VantaBackground from "./components/VantaBackground";
import ImageAvatars from "./components/ImageAvatars";
import BotaoPrincipal from './components/BotaoPrincipal';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


function Introducao() {

const email = "rafaferreirarosa941@gmail.com";
const assunto = encodeURIComponent("Contato pelo portfólio");
const mensagem = encodeURIComponent("Olá Rafael, vi seu portfólio e gostaria de conversar.");
const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${assunto}&body=${mensagem}`;

  return (
    <>
      <VantaBackground>
        <ImageAvatars nome="Rafael Ferreira" src={Perfil} width={150} height={150} />
        <h1 className="introducao-nome">Rafael da Rosa Ferreira</h1>
        <h2 className="introducao-cargo">Desenvolvedor Full Stack Júnior | React · Java · Spring Boot</h2>
        <p className="introducao-descricao">4 anos com React e APIs REST. Hoje aprofundando em Java e Spring Boot. Busco vaga júnior remota ou em Porto Alegre.</p>
        <div className="introducao-botoes">
          <BotaoPrincipal
            text="Currículo"
            icon={<LibraryBooksIcon />}
            href={Curriculo}
            download="Curriculo-Rafael-Ferreira.pdf"
          />

          <BotaoPrincipal
            text="Email"
            href={gmailLink}
            target="_blank"
            rel="noopener noreferrer"
            icon={<EmailIcon />} 
          />

          <BotaoPrincipal 
            text="GitHub" 
            href={"https://github.com/FerreiraRAf"} 
            icon={<GitHubIcon />} 
            target="_blank"
            rel="noopener noreferrer"
          />

          <BotaoPrincipal 
            text="LinkedIn" 
            href={"https://www.linkedin.com/in/rafael-ferreira-21131539b/"}  
            icon={<LinkedInIcon />} 
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </VantaBackground>
    </>
  )
}

export default Introducao
