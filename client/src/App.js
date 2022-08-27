import PostUsuarios from './components/PostUsuarios/PostUsuarios'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import Usuarios from './components/Usuarios/Usuarios'
import Header from './components/Header/Header'
import { Main } from './styled'

function App() {
  const [listUser, setListUser] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3001/usuarios').then(response => {
      setListUser(response.data)
    })
  })

  return (
    <>
      <Header />
      <Main>
        <PostUsuarios />
        {typeof listUser !== 'undefined' &&
          listUser.map(listUser => {
            return (
              <Usuarios
                key={listUser.id}
                listUser={listUser}
                setListUser={setListUser}
                id={listUser.id}
                nome={listUser.nome}
                cpf={listUser.cpf}
                email={listUser.email}
                telefone={listUser.telefone}
                sexo={listUser.sexo}
                dataNascimento={listUser.data_nascimento}
              ></Usuarios>
            )
          })}
      </Main>
    </>
  )
}

export default App
