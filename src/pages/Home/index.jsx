import imageSrad750 from '../../../public/img/srad750.jpg'
import  {Footer}  from '../../components/Footer'
import  {Header}  from '../../components/Header'
import './styles.css'

export function Home() {

  return (
    <>

    <Header />
    
    <div>
    
      <img id='testeimg' src={imageSrad750} alt="" />

      <h1 >nossas motos</h1>

      <p>srad750</p>
      <div class='box'>
        <a href="#" class='linkBox'>Comece já</a>
      </div>

    </div>

    <Footer />
    
    </>
  )
}