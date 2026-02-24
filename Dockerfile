# ---- Build & Run ----
FROM node:18-alpine

WORKDIR /app

# Install dependencies first (cache layer)
COPY package*.json ./
RUN npm ci --production

# Copy app source
COPY server.js .
COPY public/ public/

# Expose the app port
EXPOSE 3000

# Run as non-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

CMD ["node", "server.js"]
