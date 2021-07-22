import './App.css';
import Main from "./Main"
import Header from "./Header.js"
import Footer from "./Footer.js"

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <Main className="Main-content"/>
      <Footer className="Footer" />
    </div>
  );
}

export default App;
