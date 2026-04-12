import {BrowserRouter,Routes ,Route} from "react-router-dom"; 
import './App.css'

function App() {

  return (
    <>
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element="Home"/>
        <Route path="about" element="About Page"/>
        <Route path="products" element="Products Page"/>
      </Routes>
      </BrowserRouter>
    </div>
     </>
  )
}

export default App
