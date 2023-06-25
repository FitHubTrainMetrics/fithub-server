// seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});


async function main() {
  await prisma.user.create({
    data: {
      name: 'Nome do Usuário',
      email: 'usuario@example.com',
      password: 'senha',
    },
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
