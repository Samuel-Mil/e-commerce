# E-commerce Backend

Projeto de estudo com foco em **arquitetura backend moderna**, utilizando **Node.js**, **PostgreSQL**, **Prisma ORM**, **Redis** e **Docker**.  
O objetivo é aplicar técnicas mais avançadas de banco de dados, cache e organização de infraestrutura, indo além de um CRUD simples.



## Tecnologias

- **Node.js** – Backend
- **PostgreSQL** – Banco de dados relacional
- **Prisma ORM** – Modelagem e migrations
- **Redis** – Cache
- **Docker & Docker Compose** – Containerização
- **Nginx** – Reverse Proxy
- **HAProxy** – Load balancing de leitura



## Estrutura do Projeto

```txt
.
├── backend/           # API Node.js
│   ├── prisma/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── modules/
│   │   ├── config/
│   │   └── server.ts
│   └── Dockerfile
│
├── frontend/          # Frontend (futuro)
│   └── Dockerfile
│
├── infra/             # Infraestrutura
│   ├── docker/
│   │   ├── postgres/
│   │   │   └── init.sql
│   │   ├── redis/
│   │   │   └── redis.conf
│   │   ├── nginx/
│   │   │   └── nginx.conf
│   │   └── haproxy/
│   │       └── haproxy.cfg
│   └── scripts/
│       └── wait-for-db.sh
│
├── docker-compose.yml
└── README.md

```

## Arquitetura (Resumo)

- Backend se conecta ao PostgreSQL via Prisma

- Redis é usado para cache de consultas frequentes

- PostgreSQL utiliza schemas por domínio (auth, catalog, orders)

- Infra isolada na pasta infra/

- Tudo containerizado com Docker

## Banco de Dados

- Schemas criados no init.sql

- Tabelas e relações definidas no schema.prisma

- Migrations gerenciadas exclusivamente pelo Prisma

- Exemplo de schemas:

- auth – usuários e autenticação

- catalog – produtos

- orders – pedidos

## Cache (Redis)

Usado para:

- Listagem de produtos

- Detalhes de produto

- Dados de leitura pesada

Estratégia:

- Cache first

- Invalidação ao criar/atualizar dados

## Como Rodar o Projeto?

```sh
docker-compose up -d
```

Aplicação disponível em:

- Backend: http://localhost:3000

- PostgreSQL: localhost:5432

- Redis: localhost:6379

## Objetivos do Projeto

- Praticar arquitetura backend real

- Aplicar cache corretamente

- Organizar infra de forma profissional

- Criar um projeto forte para portfólio


## Licença

Projeto de estudo, uso livre para fins educacionais.