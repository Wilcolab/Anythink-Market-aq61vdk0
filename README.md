# Anythink Market

This project contains both a Python FastAPI server and a Node.js Express server.

## Project Structure

```
/
├── python-server/
│   └── src/
│       └── main.py
├── simple-express-server/
│   └── src/
│       └── server.js
├── docker-compose.yml
```

## Requirements

- Docker & Docker Compose
- Python 3.8+ (for local FastAPI development)
- Node.js 18+ and Yarn (for local Node.js development)

## Running Both Servers with Docker Compose

To start both the Python and Node.js servers:

```bash
docker-compose up --build
```

- Python FastAPI server: [http://localhost:8000](http://localhost:8000)
- Node.js Express server: [http://localhost:8001](http://localhost:8001)

## Python FastAPI Server

- **GET /** – Returns "Hello World"
- **GET /tasks** – Returns the list of tasks
- **POST /tasks** – Adds a new task (expects JSON: `{ "text": "Your task" }`)

### Local Development

```bash
cd python-server
pip install fastapi uvicorn
uvicorn src.main:app --reload --host 0.0.0.0 --port 8000
```

## Node.js Express Server

- **GET /** – Returns "Hello World"
- **GET /tasks** – Returns the list of tasks
- **POST /tasks** – Adds a new task (expects JSON: `{ "text": "Your task" }`)

### Local Development

```bash
cd simple-express-server
yarn install
yarn start
```

## Troubleshooting

- If you see `Import "fastapi" could not be resolved`, run `pip install fastapi uvicorn`.
- For Docker errors, ensure all paths in `docker-compose.yml` are correct and all dependencies are installed.

---
