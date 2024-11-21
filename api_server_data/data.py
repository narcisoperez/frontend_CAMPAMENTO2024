# api-server-flask.py

from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

# Conexión a la base de datos SQLite
def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

# Crear tabla si no existe
with get_db_connection() as conn:
    conn.execute('''
        CREATE TABLE IF NOT EXISTS numeros (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            valor INTEGER NOT NULL
        )
    ''')

@app.route('/add_number', methods=['POST'])
def add_number():
    data = request.get_json()
    valor = data.get('valor')

    if valor is None or not isinstance(valor, int):
        return jsonify({'error': 'Valor numérico requerido'}), 400

    with get_db_connection() as conn:
        conn.execute('INSERT INTO numeros (valor) VALUES (?)', (valor,))
        conn.commit()

    return jsonify({'message': 'Número agregado exitosamente'}), 201

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=6000)