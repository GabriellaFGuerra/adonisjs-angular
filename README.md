# Sistema de Pedidos

Sistema de gerenciamento de clientes, produtos e pedidos desenvolvido como teste técnico.

## Tecnologias

* AdonisJS
* Angular
* TypeScript
* SQLite
* Bootstrap

## Funcionalidades

* Cadastro e edição de clientes
* Cadastro e edição de produtos
* Ativação e desativação de produtos
* Criação de pedidos
* Listagem de pedidos
* Visualização de pedido individual
* Alteração de status do pedido
* Cancelamento de pedidos
* Cálculo automático do total
* Controle de produtos inativos
* Histórico do preço dos produtos no pedido

## Como executar

### Backend

```bash
cd backend
npm install
node ace migration:run
npm run dev
```

### Frontend

Em outro terminal:

```bash
cd frontend
npm install
npm start
```

O backend roda na porta `3333` e o frontend na porta `4200`.

## Estrutura

```text
backend/   → API AdonisJS
frontend/  → Aplicação Angular
```
