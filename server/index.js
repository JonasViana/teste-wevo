const express = require('express');
const app = express();
const mysql = require('mysql2')
const cors = require('cors')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "teste-wevo"
})

app.use(cors())
app.use(express.json())

app.post('/register', (req, res) => {
    const { nome } = req.body
    const { cpf } = req.body
    const { email } = req.body
    const { telefone } = req.body
    const { sexo } = req.body
    const { dataNascimento } = req.body

    let SQL = "INSERT INTO usuarios (Nome, CPF, Email, Telefone, Sexo, DataNascimento) VALUES( ?,?,?,?,?,?)"

    db.query(SQL, [nome, cpf, email, telefone, sexo, dataNascimento], (err, result) => {
        if(err) console.log(err)
        else res.send(result)
    })
})

app.get('/usuarios', (req, res) => {
    let SQL = "SELECT * from usuarios"

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
    
})

app.put('/editar', (req, res) => {
    const { id } = req.body
    const { nome } = req.body
    const { cpf } = req.body
    const { email } = req.body
    const { telefone } = req.body
    const { sexo } = req.body
    const { dataNascimento } = req.body

    let SQL = 'UPDATE usuarios SET Nome = ?, CPF = ? , Email = ? , Telefone = ? , Sexo = ? , DataNascimento = ? WHERE id = ?'

    db.query(SQL,[nome,cpf,email,telefone,sexo,dataNascimento], (err,result) => {
        if(err) console.log(err)
        else res.send(result)
    })
})

app.delete('/delete/:id', (req,res) => {
    const { id } = req.params
    let SQL = "DELETE FROM usuarios WHERE id = ?"

    db.query(SQL,[id], (err,result) => {
        if(err) console.log(err)
        else res.send(result)
    })
})

app.listen(3001, () => {
    console.log('rodando servidor')
});

