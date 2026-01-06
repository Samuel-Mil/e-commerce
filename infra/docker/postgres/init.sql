-- Criação de extensões úteis
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Exemplo: schema separado por domínio
CREATE SCHEMA IF NOT EXISTS catalog;
CREATE SCHEMA IF NOT EXISTS orders;
CREATE SCHEMA IF NOT EXISTS inventory;
