<h1 align="center">Burger Hunger API</p>

<h4>REST API para a solução web da hamburgueria Burger Hunger.</h4>
<h4>Para acessar a documentação da API clique no link: [Burger Hunger API](https://testando-db.herokuapp.com/doc/)</h4>

---

## Índice

- [1. Resumo do Projeto](#1-resumo-do-projeto)
- [2. Endpoints disponíveis](#2-endpoints-disponíveis)
- [3. Tecnologias Utilizadas](#3-tecnologias-utilizadas)
- [4. Implementações Futuras](#4-implementações-futuras)

## 1. Resumo do Projeto

A solução web para a hamburgueria Burger Hunger foi criada anteriormente(pode ser acessada clicando [aqui](https://burgerhunger.vercel.app/), utilizando uma REST API já existente, disponibilizada pela equipe técnica da Laboratória.
Neste projeto foi proposta a criação de uma nova REST API, exclusiva para a hamburgueria, que atendesse todas as necessidades do fluxo de trabalho dos funcionários no dia a dia:
 - criação e atualização de cadastro para novos funcionários,
 - anotação dos pedidos,
 - visualização do pedido pela equipe da cozinha,
 - atualização do status do pedido

## 2. Endpoints disponíveis
#### `[ Base URL: testando-db.herokuapp.com/ ]`

### 2.1 `/auth`

* [x] `POST /auth`

### 2.2 `/users`

* [x] `GET /users`
* [x] `GET /users/:uid`
* [x] `POST /users`
* [x] `PATCH /users/:uid`
* [x] `DELETE /users/:uid`

### 2.3 `/products`

* [x] `GET /products`
* [x] `GET /products/:productid`
* [x] `POST /products`
* [x] `POST /products/many`
* [x] `PATCH /products/:productid`
* [x] `DELETE /products/:productid`

### 2.4 `/orders`

* [x] `GET /orders`
* [x] `GET /orders/:orderid`
* [x] `POST /orders`
* [x] `PATCH /orders/:orderid`
* [x] `DELETE /orders/:orderid`

## 3. Tecnologias Utilizadas

 - Node JS
 - JavaScript
 - Git e GitHub
 - Express
 - JsonWebToken
 - PostgreSQL
 - Heroku
 - Sequelize
 - Swagger
 - Insomnia

## 4. Implementações Futuras

-   Testes unitários
-   Testes  _e2e_
-  Endpoint `/totem`, para a implementação de um totem, ontem os clientes tenham mais autonomia ao efetuar um pedido na hamburgueria, dessa forma, diminuindo a carga dos funcionários do salão
- Endpoint `/clients`, para a implementação de um sistema de delivery da hamburgueria.
---
<p align="center">
Desenvolvido por: <a href="https://github.com/biacostadev">Ana Beatriz Costa</a> 
<p/>
