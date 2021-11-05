import './App.css'
import { BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/Main/HomePage/HomePage";
import SideBar from "./components/Main/SideBar/SideBar";
import DialogPage from "./components/Main/DialogsPage/DialogPage";

const App = (props) => {
  return <div className="app">
    <Header />
    <BrowserRouter>
      <main className="page">
        <SideBar />
        <Route path="/" exact render={() => <HomePage state={props.store} dispatch={props.dispatch}/>}/>
        <Route path="/messages" render={() => <DialogPage store={props.store}/>} />
      </main>
    </BrowserRouter>
    <Footer />
    </div>
  
}

export default App;
