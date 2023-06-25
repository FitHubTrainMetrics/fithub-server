import { Pool } from 'pg';

// Carregar as variáveis de ambiente do arquivo .env
require('dotenv').config();

// Obter as variáveis de ambiente com valores padrão caso sejam undefined
const {
  POSTGRES_USERNAME = 'postgres',
  POSTGRES_PASSWORD = '',
  POSTGRES_HOST = 'localhost',
  POSTGRES_PORT = '5432',
  POSTGRES_DATABASE = 'fitnessapp'
} = process.env;

// Configurações de conexão com o banco de dados
const pool = new Pool({
  user: POSTGRES_USERNAME,
  password: POSTGRES_PASSWORD,
  host: POSTGRES_HOST,
  port: parseInt(POSTGRES_PORT, 10),
  database: POSTGRES_DATABASE,
});

// Exportar o pool de conexão para ser usado em outros módulos
export default pool;
