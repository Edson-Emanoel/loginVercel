import './esqueceu.css'
import { ThemeOption } from './theme/ThemeOption'
import kLogo from "/logo.svg"

export default function Esqueceu() {
  return (
      <div className='div-esqueceu-form'>
            <div className="theme-options">
                  <ThemeOption theme='dark' />
                  <ThemeOption theme='light' />
            </div>

            <img src={kLogo} alt="" />

            <div className="textos">
                  <h1>Criar nova conta</h1>

                  <small>Ou <a href="/">entrar na sua conta existente</a></small>
            </div>

            <form className='form-esqueceu'>
                  <div className="div-input">
                        <label htmlFor="">E-mail</label>
                        <input type="text" />
                  </div>

                  <button className='btn-entrar'>Redefinir senha</button>
            </form>
      </div>
  )
}