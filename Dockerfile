FROM node

WORKDIR /data/

ADD . /data/
RUN npm i --registry=https://registry.npm.taobao.org

EXPOSE 3000
CMD node /data/src/index.js