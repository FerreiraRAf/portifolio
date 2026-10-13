import './Introducao.css'

//Assets
import Perfil from "./assets/Rafael.jpg"

// Components
import VantaBackground from "./components/VantaBackground";
import ImageAvatars from "./components/ImageAvatars";
import BotaoPrincipal from './components/BotaoPrincipal';


function Introducao() {

  return (
    <>
      <VantaBackground>
        <ImageAvatars nome="Rafael Ferreira" src={Perfil} width={150} height={150} />
        <h1>Rafael da Rosa Ferreira</h1>
        <h2>Desenvolvedor Back-end</h2>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <BotaoPrincipal text="Curriculo" />
          <BotaoPrincipal text="Email" />
        </div>
      </VantaBackground>
    </>
  )
}

export default Introducao
