# =================== STAGE 1: Dependencies ===================
FROM node:22-alpine AS deps
WORKDIR /app

# pnpm fixo na versão do lockfile: o "latest" mudou de major e passou a
# recusar o install por causa dos build scripts ignorados (ERR_PNPM_IGNORED_BUILDS).
RUN corepack enable && corepack prepare pnpm@10.5.0 --activate

# pnpm-workspace.yaml leva a lista de build scripts ignorados de propósito.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm store prune || true && pnpm install --frozen-lockfile

# =================== STAGE 2: Build ===================
FROM node:22-alpine AS builder
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.5.0 --activate

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm run build

# =================== STAGE 3: Runner ===================
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copia arquivos públicos e o build
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
