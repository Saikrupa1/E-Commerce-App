# Stage 1: Build and Test
FROM node:18 AS build-stage

WORKDIR /app

# Copy only frontend package.json for caching
COPY client/package*.json ./ 

# Install dependencies
RUN npm install

# Copy all frontend source code
COPY client/. .

# Run tests in CI mode
RUN npm test -- --watchAll=false --ci

# Build React app
RUN npm run build

# Stage 2: Production nginx image
FROM nginx:alpine

# Copy build files from previous stage
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 5000
EXPOSE 5000

CMD ["nginx", "-g", "daemon off;"]
