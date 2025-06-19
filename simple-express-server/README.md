# Simple Express Server

This project is a simple Express server that listens on port 8001. It is designed to demonstrate the basic setup of an Express application with Docker support and automatic reloading using Nodemon.

## Project Structure

```
simple-express-server
├── src
│   └── server.js        # Entry point of the application
├── Dockerfile            # Dockerfile to build the application image
├── package.json          # NPM configuration file
├── yarn.lock             # Dependency lock file
└── README.md             # Project documentation
```

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

- Node.js (version 14 or higher)
- Yarn (package manager)
- Docker (for containerization)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd simple-express-server
   ```

2. Install the dependencies:

   ```
   yarn install
   ```

### Running the Server

To start the server with automatic reloading, use the following command:

```
yarn start
```

The server will be running on `http://localhost:8001`.

### Building the Docker Image

To build the Docker image for the application, run:

```
docker build -t simple-express-server .
```

### Running the Docker Container

To run the Docker container, use the following command:

```
docker run -p 8001:8001 simple-express-server
```

The server will be accessible at `http://localhost:8001` from your host machine.

## License

This project is licensed under the MIT License.