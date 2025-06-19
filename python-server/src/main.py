from fastapi.testclient import TestClient
from src.main import app

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == "Hello World"

def test_get_tasks_initial():
    response = client.get("/tasks")
    assert response.status_code == 200
    data = response.json()
    assert "tasks" in data
    assert isinstance(data["tasks"], list)
    # Check that initial tasks are present
    assert "Write a diary entry from the future" in data["tasks"]

def test_add_task():
    new_task = {"text": "Test time travel gadget"}
    response = client.post("/tasks", json=new_task)
    assert response.status_code == 200
    assert response.json() == {"message": "Task added successfully"}

    # Verify the new task is in the list
    response = client.get("/tasks")
    tasks = response.json()["tasks"]
    assert "Test time travel gadget" in tasks

def test_add_multiple_tasks():
    tasks_to_add = [
        {"text": "Invent a new calendar"},
        {"text": "Meet a famous inventor"}
    ]
    for t in tasks_to_add:
        response = client.post("/tasks", json=t)
        assert response.status_code == 200
        assert response.json() == {"message": "Task added successfully"}

    response = client.get("/tasks")
    tasks = response.json()["tasks"]
    for t in tasks_to_add:
        assert t["text"] in tasks



