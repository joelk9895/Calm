from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import openai

openai.api_key = ""


app = Flask(__name__)
CORS(app)


@app.route('/doctorrequest', methods=['POST'])
def api():
    if request.method == 'POST':
        print(request.json)
        response = openai.Completion.create(
    model="text-davinci-003",
    prompt="Recommend the best doctor for a client from this list[\"Gynacolegist\",\"General Physician\", \"Ortho\",\"Ent\"] and return as a json file, like{ \n\"doctorrec\" : actual recommended doctor\n} if the message is {prompt}\"n\"\n\n\n{\n\"doctorrec\" : \"Gynacolegist\"\n}".format(prompt=),
    temperature=1,
    max_tokens=256,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
)
        return jsonify(request.json)
