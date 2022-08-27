import { useState } from 'react'
import Axios from 'axios'
import { Form } from './styled'

const PostUsuarios = () => {
  const [values, setValues] = useState("")

  const [error, setError] = useState()

  const handleChangeValues = value => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value
    }))
  }

  const handleClickButton = (e) => {
    if (values.nome === undefined || values.cpf === undefined || values.email === undefined || values.telefone === undefined || values.sexo === undefined || values.dataNascimento === undefined) {
      setError('Preencha todos os campos !')
    } else Axios.post('http://localhost:3001/register', {
      nome: values.nome,
      cpf: values.cpf,
      email: values.email,
      telefone: values.telefone,
      sexo: values.sexo,
      dataNascimento: values.dataNascimento
    })
}


  return (
    <Form>
      <h1>Cadastre um novo usuario</h1>
      {error}
      <label>Nome</label>
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        onChange={handleChangeValues}
      />
      <label>CPF</label>
      <input
        type="text"
        name="cpf"
        placeholder="CPF"
        onChange={handleChangeValues}
      />
      <label>E-mail</label>
      <input
        type="e-mail"
        name="email"
        placeholder="E-mail"
        onChange={handleChangeValues}
      />
      <label>Telefone</label>
      <input
        type="text"
        name="telefone"
        placeholder="Telefone"
        onChange={handleChangeValues}
      />
      <label>Sexo</label>
      <input
        type="text"
        name="sexo"
        placeholder="Sexo"
        onChange={handleChangeValues}
      />
      <label>Data Nascimento</label>
      <input type="text" name="dataNascimento" onChange={handleChangeValues} placeholder='Data de nascimento' />
      <button onClick={() => handleClickButton()}>Cadastrar</button>
    </Form>
  )
}

export default PostUsuarios
