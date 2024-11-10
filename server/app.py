import os
from flask import Flask, send_from_directory, jsonify

app = Flask(__name__, static_folder='../client/build', static_url_path='')

@app.route('/')
def serve_react_app():
    try:
        return send_from_directory(app.static_folder, 'index.html')
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# API routes
@app.route('/api', methods=['GET'])
def api_example():
    return {'message': 'Hello from Flask API'}

# Serve React static files
@app.route('/<path:path>')
def serve_static_files(path):
    if path.startswith('api'):
        return jsonify({"error": "API route not found"}), 404
    try:
        return send_from_directory(app.static_folder, path)
    except Exception as e:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get("PORT", 5000)))
