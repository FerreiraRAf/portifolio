import './App.css'

//Assets
import Perfil from "./assets/Rafael.jpg"

// Components
import VantaBackground from "./components/VantaBackground";
import ImageAvatars from "./components/ImageAvatars";
import BotaoPrincipal from './components/BotaoPrincipal';


function App() {

  return (
    <>
      <VantaBackground>
        <ImageAvatars nome="Rafael Ferreira" src={Perfil} width={100} height={100} />
        <h1>Rafael da Rosa Ferreira</h1>
        <h2>Desenvolvedor Back-end</h2>
        <div className='botoes'>
        <BotaoPrincipal text="Curriculo" />
        <BotaoPrincipal text="Email" />
        </div>
      </VantaBackground>
    </>
  )
}

export default App
