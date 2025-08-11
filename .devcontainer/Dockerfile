# Use Go 1.23 for building, then switch to Node.js for runtime
FROM golang:1.23-bullseye AS builder

# Build GitHub MCP Server
RUN git clone https://github.com/github/github-mcp-server.git /tmp/github-mcp-server \
    && cd /tmp/github-mcp-server \
    && go build -o github-mcp-server ./cmd/github-mcp-server

# Runtime stage with Node.js
FROM node:22-bullseye

# Install additional packages and development tools
RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    vim \
    nano \
    tree \
    sudo \
    locales \
    && rm -rf /var/lib/apt/lists/* \
    && echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen \
    && locale-gen \
    && update-locale LANG=en_US.UTF-8

# Copy the built MCP server binary
COPY --from=builder /tmp/github-mcp-server/github-mcp-server /usr/local/bin/

# Set working directory
WORKDIR /workspace

# Install global npm packages useful for Docusaurus development
RUN npm install -g \
    @docusaurus/core \
    @docusaurus/preset-classic \
    typescript \
    eslint \
    prettier

# Verify MCP server installation
RUN echo "=== Verifying GitHub MCP Server ===" \
    && which github-mcp-server \
    && ls -la /usr/local/bin/github-mcp-server

# Add sudo to existing node user and create vscode user as alias
RUN usermod -aG sudo node \
    && echo "node ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/node \
    && chmod 0440 /etc/sudoers.d/node \
    && ln -sf /home/node /home/vscode

# Switch to node user
USER node

# Set environment variables
ENV NODE_ENV=development
ENV PORT=3000
ENV HOST=0.0.0.0
ENV LANG=en_US.UTF-8
ENV LC_ALL=en_US.UTF-8

# Expose ports
EXPOSE 3000 3001