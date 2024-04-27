import Footer from "./components/Footer"
import Header from "./components/Header"
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./styles/global-styles"
import MainRouter from "./app/routing"

function App() {

  return (
    <>
      <GlobalStyles/>
      <Router>
        <Header />
          <MainRouter />
        <Footer />
      </Router>
    </>
  )
}

export default App
