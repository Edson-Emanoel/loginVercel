import './App.css'
import { ThemeOption } from './components/theme/ThemeOption'
import kLogo from "/logo.svg"

function App() {

  const selectedTheme = localStorage.getItem("theme")

  if (selectedTheme){
    document
      .querySelector("body")
      ?.setAttribute("data-theme", selectedTheme)
  }

  return (
    <div className='div-login-form'>
      <div className="theme-options">
        <ThemeOption theme='dark' />
        <ThemeOption theme='light' />
      </div>
      
      <img src={kLogo} alt="" />

      <div className="textos">
        <h1>Entrar na sua conta</h1>
        <small>Ou <a href="/cadastrar">fazer cadastro</a></small>
      </div>

      <form className='form-login'>
        <div className="div-input">
          <label htmlFor="">E-mail</label>
          <input type="text" />
        </div>

        <div className="div-input">
          <label htmlFor="">Senha</label>
          <input type="text" />
        </div>

        <a className='esqueceu' href='/esqueceuSenha'>Esqueceu a senha ?</a>

        <button className='btn-entrar'>Entrar</button>
      </form>
    </div>
  )
}

export default App