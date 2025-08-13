# Stage 1: Build and Test
FROM node:18 AS build-stage

# Set working directory inside container
WORKDIR /app

# Copy only package.json and package-lock.json first for caching
# Adjust path if your package.json is in a subfolder, e.g., frontend/package*.json
COPY frontend/package*.json ./ 

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY frontend/. .

# Run tests in CI mode
RUN npm test -- --watchAll=false --ci

# Build React app for production
RUN npm run build

# Stage 2: Production nginx image
FROM nginx:alpine

# Copy build files from previous stage
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 5000
EXPOSE 5000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
