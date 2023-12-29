# Start from go 1.20.5 base image
FROM golang:1.20.5

# Add maintainer info
LABEL maintainer="Daniel Johnston <daniel.johnston937124@gmail.com>"

# Set the current working directory inside the container
WORKDIR /app

# Copy go mod and sum files
COPY go.mod go.sum ./

# Download all dependencies. Dependencies will be cached if the go.mod and go.sum files are not changed
RUN go mod download

# Copy the source from the current directory to the working directory inside the container
COPY . .

# Build the application
RUN go build -o main ./cmd/main.go

# Expose port 8080 to the outside world
EXPOSE 8080

# Run the executable
CMD ["./main"]