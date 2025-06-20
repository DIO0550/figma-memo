# Use the official Node.js 22 image as base
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
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /workspace

# Install global npm packages useful for Docusaurus development
RUN npm install -g \
    @docusaurus/core \
    @docusaurus/preset-classic \
    typescript \
    eslint \
    prettier

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

# Expose ports
EXPOSE 3000 3001
