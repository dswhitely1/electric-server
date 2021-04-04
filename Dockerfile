FROM node:alpine
RUN apk --no-cache add --virtual \
    builds-deps \
    build-base \
    python
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run test
RUN npx tsc
CMD ["npm", "run", "start"]
