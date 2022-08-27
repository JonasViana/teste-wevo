import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Axios from 'axios'

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    nome: props.nome,
    cpf: props.cpf,
    email: props.email,
    telefone: props.telefone,
    sexo: props.sexo,
    dataNascimento: props.dataNascimento,
  })

  const handleChangeValues = value => {
    setEditValues(prevValues => ({
      ...prevValues,
      [value.target.id]: value.target.value
    }))
  }

  const handleClose = () => {
    props.setOpen(false)
  }

  const handleEditUser = () => {
    Axios.put('http://localhost:3001/edit', {
      id: editValues.id,
      nome: editValues.nome,
      cpf: editValues.cpf,
      email: editValues.email,
      telefone: editValues.telefone,
      sexo: editValues.sexo,
      dataNascimento: editValues.dataNascimento
    })
    handleClose()

  }
  const handleDeleteUser = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.id}`).then(() => {
      props.setListUser(
        props.listUser.filter(value => {
          return value.id !== editValues.id
        })
      )
    })
    handleClose()
  }

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            onChange={handleChangeValues}
            label="id"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="nome"
            onChange={handleChangeValues}
            label="Nome"
            defaultValue={props.nome}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="cpf"
            onChange={handleChangeValues}
            label="CPF"
            defaultValue={props.cpf}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            onChange={handleChangeValues}
            defaultValue={props.email}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="telefone"
            onChange={handleChangeValues}
            label="Telefone"
            defaultValue={props.telefone}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="sexo"
            label="Sexo"
            onChange={handleChangeValues}
            defaultValue={props.sexo}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="dataNascimento"
            onChange={handleChangeValues}
            label="Data Nascimento"
            defaultValue={props.dataNascimento}
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleDeleteUser()} color="primary">
            Excluir
          </Button>
          <Button onClick={() => handleEditUser()} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
