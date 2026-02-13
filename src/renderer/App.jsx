import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const res = await window.api.greetUser(name);
    setResponse(res);
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Smart Notes Backend Test</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Send to Backend
      </button>

      {response && <p>{response}</p>}
    </div>
  );
}

export default App;
