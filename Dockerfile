FROM node:16
WORKDIR /usr/src/appt
COPY . .
RUN npm install
CMD ["node", "index.js"]
EXPOSE 3001