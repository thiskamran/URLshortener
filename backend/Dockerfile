FROM python:3.9-slim

WORKDIR /backend

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first
COPY app/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy all code
COPY . .

# Set Flask environment variables
ENV FLASK_APP=wsgi.py
ENV PYTHONPATH=/backend

EXPOSE 5000

# Use python directly to run app
CMD ["python", "wsgi.py"]