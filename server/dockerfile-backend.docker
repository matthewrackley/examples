# Use a Debian-based Node.js image
FROM node:16-buster

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install npm packages
RUN npm install

# Copy all source files
COPY . .

# Compile TypeScript
RUN npm run build

# Expose the port the app runs on
EXPOSE 3001

# Command to run the application
CMD ["npm", "start"]
