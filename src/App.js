import "./App.css";
import Container from "./Components/Container/Container";

import Header from "./Components/Header/Header";
import Questions from "./Components/Questions/Questions";

function App() {
  return  <div className="App"> 
    <Header></Header>
    <Container></Container>
    <hr/>
   <h1> Questions and Answers</h1>
   <hr/>
    <Questions></Questions>
    <hr/>
   
  </div>
}

export default App;
