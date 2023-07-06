# dependencias de desarrollo
FROM  node:18.16.1-alpine3.18 as deps
WORKDIR /app
COPY package.json ./
RUN npm install

#build y test
FROM  node:18.16.1-alpine3.18 as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . . 
RUN npm run test

# dependencias de produccion
FROM  node:18.16.1-alpine3.18 as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod

# ejecutar la app
FROM  node:18.16.1-alpine3.18 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY app.js ./
COPY taks/ ./taks
CMD ["node", "app.js"]
