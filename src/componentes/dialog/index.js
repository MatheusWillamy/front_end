import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";


export default function FormDialog(props) {
  
  const [editValues, setEditValues] = useState({
    id: props.id,
    nome: props.nome,
    rg: props.rg,
    cpf: props.cpf,
    data_nascimento: props.data_nascimento,
    data_admissao: props.data_admissao,
    funcao: props.funcao
    
  });
  const handleDeletePerson = () => {
    Axios.delete(`http://localhost:5000/deletar/${editValues.id}`)
    handleClose()
    window.location.reload(false)
  }

  const handleEditPerson = () =>{
    Axios.put("http://localhost:5000/editar", {
      id: editValues.id,
      nome: editValues.nome,
      rg: editValues.rg,
      cpf: editValues.cpf,
      data_nascimento: editValues.data_nascimento,
      data_admissao: editValues.data_admissao,
      funcao: editValues.funcao
    });
    handleClose()
    window.location.reload(false)
  };
    

    const handleClose = () => {
      props.setOpen(false);
    };
  
  const handleChangeValues = (value) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [value.target.id]:value.target.value,
    }))
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
          {/* <TextField
            disabled
            margin="dense"
            id="id"
            label="id"
            defaultValue={props.id}
            type="text"
            fullWidth
          /> */}
          <TextField
            autoFocus
            margin="dense"
            id="nome"
            label="Nome"
            defaultValue={props.nome}
            onChange={handleChangeValues}
            type="text"
           
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="rg"
            label="RG"
            defaultValue={props.rg}
            onChange={handleChangeValues}
            type="text"
            
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="cpf"
            label="CPF"
            defaultValue={props.cpf}
            onChange={handleChangeValues}
            type="text"
            
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="funcao"
            label="Funcao"
            defaultValue={props.funcao}
            onChange={handleChangeValues}
            type="text"
            
            fullWidth
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={handleEditPerson}>
            Salvar
          </Button>
          <Button color="primary" onClick={handleDeletePerson}>
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    
  );
}