FROM node:12-alpine

ADD package.json /tmp/package.json

RUN rm -rf dist

RUN cd /tmp && npm install -q

RUN npm dedupe

# Code Base
ADD ./ /src
RUN rm -rf /src/node_modules && cp -a /tmp/node_modules /src/

# Define Working Directory
WORKDIR /src

RUN npm run-script build

RUN npm install pm2 -g

EXPOSE 4000

# node cmd is run through env consul in envconsul-launch
CMD ["pm2-runtime", "process.json"]