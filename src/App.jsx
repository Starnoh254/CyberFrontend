// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Footer from "./footer/Footer";
import Main from "./page1/Main";
import Main2 from "./page2/Main2";
import Main3 from "./page3/Main3";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Main/>
      <Main2/>
      <Main3/>
      <Footer/>
    </>
  );
}

export default App;
