# Use a base Node.js image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the entire Angular project to the container
COPY . .

# Build the Angular app
RUN npm run build:ssr

# Expose the port on which the application will run
EXPOSE 4000

# Set the command to start the SSR server
CMD ["npm", "run", "serve:ssr"]
