from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow React to connect

@app.route("/api/profile")
def profile():
    return jsonify({
        "name": "Musku Manasa",
        "title": "Aspiring Data Scientist",
        "skills": [
            "Python",
            "Machine Learning",
            "Deep Learning (CNN)",
            "NLP Basics",
            "LLM & RAG",
            "React.js",
            "Django",
            "SQL",
            "MongoDB"
        ],
        "projects": [
            "Image Classification using CNN",
            "Dominos Clone Website (React)",
            "Mobile & Laptop Sales Data 2025",
            "Emart Django-React Website"
        ],
        "experience": "Augmented Software Engineer at Archelos Intense Technology Pvt Ltd, Bengaluru"
    })

if __name__ == "__main__":
    app.run(debug=True)