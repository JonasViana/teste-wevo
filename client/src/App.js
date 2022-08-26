import PostUsuarios from './components/PostUsuarios/PostUsuarios'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import Usuarios from './components/Usuarios/Usuarios'
import './App.css'

function App() {
  const [listUser, setListUser] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3001/usuarios').then(response => {
      setListUser(response.data)
    })
  })

  return (
    <div className="main">
      <PostUsuarios />
      {typeof listUser !== 'undefined' &&
        listUser.map(listUser => {
          return (
            <Usuarios
              key={listUser.id}
              listUser={listUser}
              setListUser={setListUser}
              id={listUser.id}
              nome={listUser.Nome}
              cpf={listUser.CPF}
              email={listUser.Email}
              telefone={listUser.Telefone}
              sexo={listUser.Sexo}
              dataNascimento={listUser.DataNascimento}
            ></Usuarios>
          )
        })}
    </div>
  )
}

export default App
