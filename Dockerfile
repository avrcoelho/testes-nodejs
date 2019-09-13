# pega a ultima versao do node
# alpine: versao mais reduzida do OS
FROM node:alpine

# diretorio da maquina que quero trabalhar
WORKDIR /usr/app

# /copia todos os arquivos que comecam com package e terminar com .json para dentro da maquina
COPY package*.json ./
RUN npm install

# depois que roda o npm install, ai é copiado todos os arquivos da maquina para dentro do docker
COPY . .

# porta que o servidor vai expor para a minha maquina acessar
EXPOSE 3333

# ela deve ser unica por dockfile e ela é a prorpiedade que indica qual comando o servidor deve startar para rodar
CMD ["npm", "start"]
