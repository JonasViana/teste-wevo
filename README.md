# CRUD NodeJS - MySQL - React

## Instalação

## Client

1. $ cd client

2. $ npm install

3. $ npm start

## Server

1. Crie uma tabela SQL em uma database com o seguinte comando.

CREATE TABLE `teste-wevo`.`new_table` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `cpf` VARCHAR(45) NOT NULL,
  `email` VARCHAR(60) NOT NULL,
  `telefone` VARCHAR(60) NOT NULL,
  `sexo` VARCHAR(45) NOT NULL,
  `data_nascimento` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  
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

