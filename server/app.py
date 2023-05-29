from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import pickle
import numpy as np

from sklearn.preprocessing import StandardScaler

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


model = pickle.load(open("model.pkl", "rb"))


@app.route('/list2', methods=['POST'])
def api2():
    data = request.form

    new = StandardScaler()
    array = [data['age'], data['sex'], data['BMI'], data['BP'], data['TC'],
             data['LDL'], data['HDL'], data['TCH'], data['LTG'], data['Glucose']]
    array1 = np.array(array, dtype=np.float64)
    val = new.fit_transform(array1.reshape(-1, 1))
    print(data)
    pred = model.predict(val.reshape(1, -1))
    return jsonify(pred.tolist())


if __name__ == '__main__':
    app.run(debug=True, port=8080)
