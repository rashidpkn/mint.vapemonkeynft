import Aos from 'aos';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom'
import router from './router';
import 'aos/dist/aos.css';


function App() {
  Aos.init()

  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
