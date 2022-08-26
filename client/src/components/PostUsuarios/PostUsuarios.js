import { useState } from 'react'
import Axios from 'axios'
import styles from './PostUsuarios.module.css'

const PostUsuarios = () => {
  const [values, setValues] = useState()

  const handleChangeValues = value => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value
    }))
  }

  const handleClickButton = () => {
    Axios.post('http://localhost:3001/register', {
      nome: values.nome,
      cpf: values.cpf,
      email: values.email,
      telefone: values.telefone,
      sexo: values.sexo,
      dataNascimento: values.dataNascimento
    }).then(response => {
      console.log(response)
    })
  }

  return (
    <div className={styles.form}>
      <h1>Cadastre um novo usuario</h1>
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
      <input type="text" name="dataNascimento" onChange={handleChangeValues} />
      <button onClick={() => handleClickButton()}>Cadastrar</button>
    </div>
  )
}

export default PostUsuarios
