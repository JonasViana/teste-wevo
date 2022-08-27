import FormDialog from '../DialogBox/FormDialog'
import { useState } from 'react'
import { ContainerUser } from './styled'


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
        <ContainerUser onClick={() => handleClickCard()}>
          <h1>Usuario</h1>
          <p>Nome: {props.nome}</p>
          <p>CPF: {props.cpf}</p>
          <p>Email: {props.email}</p>
          <p>Telefone: {props.telefone}</p>
          <p>Sexo: {props.sexo}</p>
          <p>Data Nascimento: {props.dataNascimento}</p>
          <button onClick={()=>setOpen(true)}>Editar</button>
        </ContainerUser>
    </>
  )
}
export default Usuarios
