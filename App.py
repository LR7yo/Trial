from flask import Flask, request, jsonify
import keras

app = Flask(__name__)
model = keras.models.load_model('C:\\Users\\likhi\\OneDrive - DPSI School\\Desktop\\Projects\\Chatbot 2\\Machine Learning\\chatbot_model.h5')

@app.route('/predict', methods=['POST','GET'])
def predict():
    data = request.get_json()
    input = data(['input'])
    output = model.predict(input)
    return jsonify(output.tolist())

if __name__ == '__main__':
    app.run(debug=True)