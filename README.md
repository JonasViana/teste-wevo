# CRUD NodeJS - MySQL - React

<img src='./client/demonstração.gif'>

## Instalação

## Client

1. $ cd client

2. $ npm install

3. $ npm start

## Server
1. Crie uma database chamada teste-wevo

2. Crie uma tabela SQL na database com o seguinte comando.

<p>CREATE TABLE `teste-wevo`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `cpf` VARCHAR(45) NOT NULL,
  `email` VARCHAR(60) NOT NULL,
  `telefone` VARCHAR(60) NOT NULL,
  `sexo` VARCHAR(45) NOT NULL,
  `data_nascimento` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));<p/>

2. Insira os valores da sua database no server/index.js

3. $ cd server

4. $ npm install

5. $ nodemon

## Funcionalidades

- Cadastrar um usuario na database

- Exluir um usuario na database

- Ler usuarios da database

- Editar usuario da database

## Libraries

<h3>Front-end<h3/>

- Axios

- styled-components

- material-ui

<h3>Back-end<h3/>

- express

- mysql2

- nodemon

- cors

