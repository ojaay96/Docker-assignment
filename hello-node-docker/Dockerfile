# Use the official Node.js 18 image from Docker Hub as the base image
FROM node:18

# Create and set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 3000 (same as your app listens on)
EXPOSE 3000

# Command to run your app
CMD ["npm", "start"]
