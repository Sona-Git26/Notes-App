Professional Method (Short Version)

Create one root folder

mkdir notes-app
cd notes-app

Create React frontend (automatic, no mkdir needed)

Step 1: Run command
npm create vite@latest frontend

Ithu Vite app scaffold pannum

Terminal la questions varum:

✔ Project name: … frontend
✔ Select a framework: › React
✔ Select a variant: › JavaScript

React choose pannunga

JavaScript variant choose pannunga

Step 2: Go to frontend folder
cd frontend
Step 3: Install dependencies
npm install
Step 4: Run frontend
npm run dev

Browser-la http://localhost:5173/ → default React page varum

After creating frontend
Next step in professional full-stack project:

Create backend folder inside notes-app

Setup Python virtual environment

Install packages (FastApi, CORS, mysql-connector-python)
Step 1: Install FastAPI and Uvicorn

Terminal-la (backend venv active-a irundha):

pip install fastapi uvicorn mysql-connector-python

fastapi → backend framework

uvicorn → server run panna

mysql-connector-python → MySQL connection

Prepare folder skeleton (controllers/, models/, routes/, database/)

Create backend folder manually

mkdir backend
cd backend

Setup Python virtual environment, install packages (Flask, CORS, MySQL connector)

Folder structure

notes-app/
│
├── frontend/   ← React app (auto setup)
└── backend/    ← Python backend (manual setup)

✅ Key points:

Frontend → npx → automatic

Backend → manual folder + venv + packages

One root folder → clean & professional

backend/
│
├── main.py
└── app/
    ├── __init__.py
    └── database/
        └── db_connection.py

 ERROR :

 404 → page illa

405 → wrong method use pannirkeenga

200 OK → app correct-a work pannuthu