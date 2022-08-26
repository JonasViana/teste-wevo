
import FormDialog from '../DialogBox/DialogBox'
import { useState } from 'react'
import './Usuario.module.css'

const Usuarios = (props) => {
  const [open, setOpen] = useState(true)
  return (
    <>
        <div className='usuario'>
          <h1>Usuario</h1>
          <p>Nome:{props.nome}</p>
          <p>CPF:{props.cpf}</p>
          <p>Email:{props.email}</p>
          <p>Telefone:{props.telefone}</p>
          <p>Sexo:{props.sexo}</p>
          <p>Data Nascimento:{props.dataNascimento}</p>
        </div>
    </>
  )
}

export default Usuarios