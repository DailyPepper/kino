import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./page/Kino"
import { GlobalStyles } from "./styles/global-styles"

function App() {

  return (
    <>
    <GlobalStyles/>
      <Header/>
        <Home/>
      <Footer/>
    </>
  )
}

export default App
