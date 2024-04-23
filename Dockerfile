#####################################################
#                                                   #
#          Предварительная сборка                   #
#                                                   #
#####################################################
FROM node:20.2.0-alpine3.17 as frontend-build

WORKDIR /usr/src/app

# Установка NPM
RUN npm install npm

RUN npm config set registry http://5.9.95.92:54873/

COPY package.json .
COPY package-lock.json .
COPY .npmrc .

# Установка пакетов для сборки
RUN npm install

# Копирование проекта в образ
COPY . .

# Сборка nuxt (!!!!"build": "nuxt build --standalone"!!!!)
RUN npm run build

#####################################################
#                                                   #
#          Сборка основного коттейнера              #
#                                                   #
#####################################################
FROM node:20.2.0-alpine3.17

# Переменные
ENV NUXT_VERSION=2.15.8
ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

# Установка пакета nuxt-start(Нужен для запуска Nuxt)
RUN npm add nuxt-start@${NUXT_VERSION}
# Установка пакета node-fetch-native(Нужен для запуска Nuxt)
RUN npm add node-fetch-native@1.4.0

# Перенос необходимых данных
COPY --from=frontend-build /usr/src/app/.nuxt /app/.nuxt
COPY --from=frontend-build /usr/src/app/nuxt.config.js /app
COPY --from=frontend-build /usr/src/app/src/static /app/src/static
COPY --from=frontend-build /usr/src/app/src/server-middleware /app/src/server-middleware
COPY --from=frontend-build /usr/src/app/src/middleware /app/src/middleware
COPY --from=frontend-build /usr/src/app/src/types /app/src/types
COPY --from=frontend-build /usr/src/app/env.config.js /app/
COPY --from=frontend-build /usr/src/app/cms.config.js /app/

ENTRYPOINT ["npx", "nuxt-start"]

EXPOSE ${PORT}