# Use the official Node.js image from the Docker Hub
FROM node:20.11.1-alpine as build

# Create and set the working directory
WORKDIR /src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your app runs on (Cloud Run expects this)
EXPOSE 8080

# Command to run the app
CMD ["npm", "start"]
