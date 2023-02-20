async function predict(input) {
  try {
    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({input})
    });
    const output = await response.json();
    return output;
  } catch (error) {
    console.error(error);
    return null;
  }
}

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Trial() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handlePredict = async () => {
    const result = await predict(input);
    setOutput(result);
  };

  return (
    <View>
      <TextInput value={input} onChangeText={setInput} />
      <Button title="Predict" onPress={handlePredict} />
      <Text>{output}</Text>
    </View>
  );
}