import './App.css'
import logo from './assets/logo.jpeg'
function app(){
  return (
    <div>
      <img className='logo' src={logo} alt="logo"/>
      <h1 className="heading">Tamanna's Hut Of Purity.</h1>
      <h2>Coming Soon...</h2>
    </div>
  )
}
export default app;