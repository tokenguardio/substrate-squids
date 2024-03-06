# 1. Base Node Image
FROM node:18-alpine AS node

# 2. Install Dependencies and Tools
RUN apk add --no-cache g++ make python3 postgresql-client
RUN npm i -g @subsquid/cli@latest @subsquid/commands

# 3. Set up the project and dependencies
WORKDIR /squid
COPY squidgen.yaml ./squidgen.yaml
COPY . ./
RUN npm i
RUN npx squid-gen config squidgen.yaml

# Copy db.ts to the src directory
COPY db.ts ./src/db.ts

# Copy over the startup script
COPY startup.sh /squid/startup.sh
RUN chmod +x /squid/startup.sh

# Optional: Uncomment if needed
# RUN npm run build
# RUN npm ci --production

RUN echo -e "loglevel=silent\\nupdate-notifier=false" > /squid/.npmrc
# Ensure that the sqd command is available globally
RUN mv $(which squid-commands) /usr/local/bin/sqd
ENV PROCESSOR_PROMETHEUS_PORT 3000

CMD ["/squid/startup.sh", "sh", "-c", "sqd process:prod"]