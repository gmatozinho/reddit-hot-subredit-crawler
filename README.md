# Sobre:

Projeto contendo um cron job para popular uma base de dados com posts que estejam HOT do subredit artificial.

## Como executar

\* Necessario possuir docker instalado.

Para compilar a aplicacao:

`docker-compose build`

Para iniciar a aplicacao:

`docker-compose up -d`

\*\* Caso a tabela posts não tenha sido criada checar se o conteiner do postgres esta em execucão, mudar o DB_HOST no arquivo .env para localhost e executar o comando npm run migrate

## Documentacão da api

<https://documenter.getpostman.com/view/4737860/TzCMcTHQ>

Tipos possíveis para orderBy: ups ou comments

## Executando os testes

Para executar os testes primeiro é necessário executar `docker-compose up -d` e em seguida `npm run test`
