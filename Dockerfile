# Stage 1
FROM node:8 as react-build
WORKDIR /
COPY ./ ./ 
RUN yarn
RUN yarn add @material-ui/core
RUN yarn add @material-ui/icons 
RUN yarn build