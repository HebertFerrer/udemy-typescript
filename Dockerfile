FROM node:13.1

# Typescript
RUN npm install -g typescript

# Angular
RUN npm install -g @angular/cli

# Ionic
RUN npm install -g ionic

COPY [".", "/app"]

WORKDIR /app/TypeScript

CMD [ "tail", "-f",  "/dev/null" ]
