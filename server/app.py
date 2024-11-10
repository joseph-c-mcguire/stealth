import os
from flask import Flask, send_from_directory, jsonify

app = Flask(__name__, static_folder='../client/build', static_url_path='')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>', methods=['GET'])
def serve_react_app(path):
    if path and path.startswith('api'):
        return jsonify({"error": "API route not found"}), 404
    if path and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    try:
        return send_from_directory(app.static_folder, 'index.html')
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# API routes
@app.route('/api', methods=['GET'])
def api_example():
    return {'message': 'Hello from Flask API'}

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get("PORT", 5000)))
