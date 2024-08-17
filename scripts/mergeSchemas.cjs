const fs = require('fs');
const path = require('path');

const schemaDir = path.join(__dirname, '../prisma');
const outputFile = path.join(schemaDir, 'schema.prisma');

const schemaFiles = [
    'user.prisma'
];

const header = `
generator client {
    provider = "prisma-client-js"
  }
  
  datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
  }
`;

const schemaContent = schemaFiles
    .map((file) => fs.readFileSync(path.join(schemaDir, file), 'utf8'))
    .join('\n\n');

fs.writeFileSync(outputFile, `${header}\n\n${schemaContent}`);

console.log('Schemas merged successfully!');