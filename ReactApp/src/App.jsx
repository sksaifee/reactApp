import './App.css'
import logo from './assets/logo.jpeg'
function app(){
  return (
    <div>
      <img className='logo' src={logo} alt="logo"/>
      <h1 className="heading">Tamanna's Hut Of Purity.</h1>
      <h2>Coming Soon...</h2>
      <a href="https://www.meesho.com/TamannasHut" target='_blank'>Buy Now</a>
    </div>
  )
}
export default app;