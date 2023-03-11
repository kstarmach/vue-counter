# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install
RUN npm ci

# Copy the rest of the files to the container
COPY --chown=node:node . .

# Build the Vue project
CMD ["npm", "run", "serve"]