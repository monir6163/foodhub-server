FROM node:22-alpine
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .

EXPOSE 8080
CMD ["sh", "-lc", "CI=true pnpm install && pnpm generate && pnpm dev"]