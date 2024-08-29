import enderecoimg from '../../../public/img/image01.jpg'
import  {Footer}  from '../../components/Footer'
import  {Header}  from '../../components/Header'
import './styles.css'

export function Home() {

  return (
    <>

    <Header />
    
    <div>
    
      <img id='testeimg' src={enderecoimg} alt="" />

      <h1 id='h1home'> pagina principal </h1>

    </div>

    <Footer />
    
    </>
  )
}