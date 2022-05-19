FROM node:14 AS build
WORKDIR /app
COPY package.json package-lock.json audit-resolve.json ./
RUN npm install -g react-scripts npm-audit-resolver
RUN npm set progress=false && \
  npm config set depth 0 && \
  npm ci
RUN check-audit --production --audit-level=moderate

ARG PUBLIC_URL
ENV PUBLIC_URL=${PUBLIC_URL}

COPY public ./public
COPY src ./src
RUN npm run build

FROM nginx:alpine
WORKDIR /app
RUN addgroup -g 1001 -S app && \
  adduser -u 1001 -S app -G app && \
  chown -R app:app /app && \
  chown -R app:app /var/cache/nginx && \
  touch /var/run/nginx.pid && \
  chown -R app:app /var/run/nginx.pid && \
  chmod 770 /app
USER app:app
COPY --chown=app:app nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=app:app --from=build /app/build ./
COPY --chown=app:app entrypoint.sh ./
RUN dos2unix entrypoint.sh && chmod +x entrypoint.sh
ENTRYPOINT [ "./entrypoint.sh" ]
EXPOSE 8080
