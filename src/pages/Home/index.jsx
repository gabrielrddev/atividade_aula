import enderecoimg from '../../../public/img/image01.jpg'
import enderecoimg1 from '../../../public/img/image.svg'
import  {Footer}  from '../../components/Footer'
import  {Header}  from '../../components/Header'
import './styles.css'

export function Home() {

  return (
    <>

    <Header />
    
    <div>
    
      <img id='testeimg' src={enderecoimg} alt="" />

      <h1 id='h1home'>Treinos <span>exclusivos</span> <br /> para você!</h1>

      <p>Nós criamos treinos <span class='cinza1'>exclusivos e únicos para você.</span> <br />
      Invista no seu corpo e  <span class='cinza1'>tenha muito mais performance </span> e <br /> qualidade de vida.</p>
      <div class='box'>
        <a href="#" class='linkBox'>Comece já</a>
            <img class='logowhats' src={enderecoimg1} alt="" />
      </div>

    </div>

    <Footer />
    
    </>
  )
}