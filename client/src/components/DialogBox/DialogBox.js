import React, { useState } from "react";
import Button from "@mui/styled-engine-sc"
import TextField from "@mui/styled-engine-sc";
import Dialog from "@mui/styled-engine-sc";
import DialogActions from "@mui/styled-engine-sc";
import DialogContent from "@mui/styled-engine-sc";
import DialogTitle from "@mui/styled-engine-sc";
import Axios from "axios";
import produce from "immer";

export default function FormDialog(props) {

  const handleClose = () => {
    props.setOpen(false);
  };

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
            label="id"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome do jogo"
            defaultValue={props.title}
            type="text"
        
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="cost"
            label="preço"
            defaultValue={props.cost}
            type="number"

            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Categoria"
            defaultValue={props.category}
            type="text"

            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" >
            Excluir
          </Button>
          <Button color="primary" >
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}