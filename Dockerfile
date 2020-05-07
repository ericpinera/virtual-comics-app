FROM nginx:latest

RUN npm run build

COPY build /usr/share/nginx/html

RUN npm run start