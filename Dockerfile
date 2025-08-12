# Stage 1: Build and Test
FROM node:18 AS build-stage

WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Run tests (CI mode, no watch)
RUN npm test -- --watchAll=false --ci

# Build React app for production
RUN npm run build

# Stage 2: Production nginx image
FROM nginx:alpine

# Copy build files from previous stage
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 5000
EXPOSE 5000

CMD ["nginx", "-g", "daemon off;"]
