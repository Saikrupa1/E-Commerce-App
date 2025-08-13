# Stage 1: Build stage
FROM python:3.12-slim AS build-stage

WORKDIR /app

# Copy dependencies first (for caching)
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Run tests (optional)
RUN pytest tests/

# Expose port
EXPOSE 5000

# Command to run app
CMD ["python", "app.py"]
