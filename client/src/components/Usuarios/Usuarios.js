import FormDialog from '../DialogBox/DialogBox'
import { useState } from 'react'
import styles from './Usuario.module.css'

const Usuarios = props => {
  const [open, setOpen] = useState(false)

  const handleClickCard = () => {
    setOpen(true)
  }
  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        id={props.id}
        nome={props.nome}
        cpf={props.cpf}
        email={props.email}
        telefone={props.telefone}
        sexo={props.sexo}
        dataNascimento={props.dataNascimento}
        listUser={props.listUser}
        setListUser={props.setListUser}
      />
      <div className={styles.usuario} onClick={() => handleClickCard()}>
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
