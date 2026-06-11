import Alunos from './components/Alunos/Alunos.jsx'
import Card from './components/Card/Card.jsx'
import Button from './components/Button/Button.jsx'
import Lista from './components/Lista/Lista.jsx'
import MsgUsuario from './components/MensagemUsuario/MsgUsuario.jsx'

import './App.css'

function App() {


  return (
    <>
      <MsgUsuario autenticado = {true} nomeUsuario={'SENAI'}/>
      <MsgUsuario nomeUsuario={'SENAI'}/>
    </>
  )
}

export default App
