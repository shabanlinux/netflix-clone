FROM node:8
WORKDIR /apps
COPY . .
RUN npm install
EXPOSE 8001
CMD ["npm","start"]
