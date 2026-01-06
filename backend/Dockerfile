FROM node:20-alpine

# Diretório de trabalho
WORKDIR /app

# Copia dependências primeiro (cache de build)
COPY package*.json ./

RUN npm install

# Copia o resto do código
COPY . .

# Build (se usar TS)
# RUN npm run build

EXPOSE 3000

# Dev
CMD ["npm", "run", "dev"]
