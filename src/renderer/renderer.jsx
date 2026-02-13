import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const Main = () => {
  return <App/>
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Main/>);