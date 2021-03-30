FROM node:10.15.0-alpine
EXPOSE 3000 9229

WORKDIR /home/app

COPY package.json /home/app/

RUN npm install --quiet

RUN npm install nodemon -g --quiet

COPY . /home/app

CMD ./scripts/start.sh
