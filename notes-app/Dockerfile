FROM node:14-alpine
COPY . /app/code
WORKDIR /app/code
RUN npm install
CMD ["node","app.js","add","--title='Java'","--body='Java Hello World'"]
