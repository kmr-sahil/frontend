FROM node:latest AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

FROM node:latest AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:latest AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
#COPY --from=builder /app/src/app/robots.txt ./public/robots.txt

EXPOSE 3000

CMD ["npm", "start"]