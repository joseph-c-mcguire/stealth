# server/app.py
import os
from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='../client/build', static_url_path='')

@app.route('/')
def serve_react_app():
    return send_from_directory(os.path.join(app.static_folder, 'index.html'))

# API routes
@app.route('/api', methods=['GET'])
def api_example():
    return {'message': 'Hello from Flask API'}

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get("PORT", 5000)))
