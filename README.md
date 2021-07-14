
# Telzir - FaleMais

![Telzir](https://i.imgur.com/5cmc9jq.gif)

## Passo a passo

Para executar a aplicação é necessário criar uma instância do PostgreSQL para servir de
base de dados utilizando o [Docker](https://www.docker.com/).

## Criando container no Docker
O comando abaixo mostra como pode-se criar uma container do PostgreSQL com o Docker:

```bash
  docker run --name telzir -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

## Criando banco de dados
Com o container criado e executando, é necessário criar uma nova base de dados
(pode ser utilizado uma ferramenta como o [DBeaver](https://dbeaver.io/) ou outra semelhante).

A base de dados por padrão deve se chamar `vizir_challenge`,
mas caso preferir, as configurações e credenciais podem ser alteradas no arquivo `ormconfig.json`.

## Instruções para a API

- Acessar o diretório **api** e executar o comando `yarn` para instalar as dependências;
- Executar o comando `yarn typeorm migration:run` para criar a tabela no banco de dados;
- Executar o comando `yarn typeorm:seed` para popular o banco de dados;
- Executar o comando `yarn dev:server` para inicializar a API;
- Executar o comando `yarn test` para executar os testes;

## Rotas

#### Calcula a tarifa da ligação

Recebe no corpo da requisição a origem, destino, duração e plano  e retorna a tarifa calculada com e sem o plano FaleMais.

```http
  POST /call-rate
```

| Parâmetro       | Tipo     | Descrição                                                 |
| :-------------- | :------- | :-------------------------------------------------------- |
| `origin `       | `string` | **Obrigatório**. DDD de origem                            |
| `destination`   | `string` | **Obrigatório**. DDD de destino                           |
| `duration`      | `number` | **Obrigatório**. Duração da ligação (em minutos)          |
| `plan_duration` | `number` | **Obrigatório**. Duração do plano FaleMais (em minutos)   |


## Instruções para o frontend

- Acessar o diretório **frontend** e executar o comando `yarn` para instalar as dependências;
- Executar o comando `yarn start` para inicializar o projeto;
- Aguardar o projeto abrir no navegador e navegar pela interface.

## Tecnologias

As principais tecnologias utilizadas neste projeto foram as seguintes:

- [ReactJS](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
