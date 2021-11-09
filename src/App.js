import './App.css'
import { BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/Main/SideBar/SideBar";
import DialogPageContainer from "./components/Main/DialogsPage/DialogPageContainer";
import HomePageContainer from './components/Main/HomePage/HomePageContainer';


const App = (props) => {
  return <div className="app">
    <Header />
    <BrowserRouter>
      <main className="page">
        <SideBar />
        <Route path="/" exact render={() => <HomePageContainer/>}/>
        <Route path="/messages" render={() => <DialogPageContainer />} />
      </main>
    </BrowserRouter>
    <Footer />
    </div>
  
}

export default App;
