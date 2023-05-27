from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

openai.api_key = "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"


app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/list', methods=['POST'])
def api():
    data = request.form
    print(data)
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt="Generate a possible cause for this symptoms {prompt} also warn the user that this is a AI Generated and recommend to consult a doctor on calm website also recommend what type fo doctor to see".format(
            prompt=data.get('prompt')),
        temperature=1,
        max_tokens=512,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    print(data)
    return jsonify(response["choices"][0]["text"])


if __name__ == '__main__':
    app.run(debug=True, port=8080)
