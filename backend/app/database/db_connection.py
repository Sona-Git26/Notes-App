import mysql.connector

# Connect to MySQL without specifying database
conn = mysql.connector.connect(
    host="localhost",
    user="root",        # MySQL username
    password="harishma"
)

cursor = conn.cursor()

# Create database if not exists
cursor.execute("CREATE DATABASE IF NOT EXISTS notes_app")
cursor.execute("USE notes_app")

# Create table if not exists
cursor.execute("""
CREATE TABLE IF NOT EXISTS notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)
""")
conn.commit()