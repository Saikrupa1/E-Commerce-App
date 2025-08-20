# Stage 1: Build stage
FROM python:3.12-slim AS build-stage

WORKDIR /app

# Copy dependencies first (for caching)
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Set PYTHONPATH so Python can find your app package
ENV PYTHONPATH=/app

# Run tests (optional)
RUN pytest tests/

# Expose port
EXPOSE 5000

# Command to run app, assuming your Flask (or similar) app object is named `app` in app/__init__.py
CMD ["python", "-m", "app"]
