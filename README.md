## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them.

- Docker
- Docker Compose
- Node.js v18.17.0 (for development without Docker)
- Go v1.20.5

### Installing

A step by step series of examples that tell you how to get a development env running. 

#### Frontend:

```bash
# Navigate to the frontend directory
cd frontend

# Build the docker image
docker build -t podcast-frontend .

# Run the docker container
docker run -d -p 3000:3000 podcast-frontend
```

Now, you can navigate to `http://localhost:3000` in your web browser to see the application running.

#### Backend:

```bash
# Navigate to the backend directory
cd backend

# Build the docker image
docker build -t podcast-backend .

# Run the docker container
docker run -d -p 8080:8080 podcast-backend
```

Now, the backend service will be available on `http://localhost:8080`.

### Development

Instructions for setting up the development environment.

#### Frontend:

```bash
# Navigate to the frontend directory
cd frontend

# Install the dependencies
npm install

# Start the development server
npm run dev
```

#### Backend:

```bash
# Navigate to the backend directory
cd backend

# Install the Go dependencies
go mod download

# Start the development server
go run ./cmd/main.go
```
