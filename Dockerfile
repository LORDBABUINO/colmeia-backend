FROM node:13.5.0-alpine3.11
WORKDIR /usr/app
COPY package.json yarn.lock ./

RUN yarn

COPY . .

#EXPOSE ${FRONTEND_PORT}
#EXPOSE ${BACKEND_PORT}

CMD ["yarn", "start"]
