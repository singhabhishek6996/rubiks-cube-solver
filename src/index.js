import React from "react"
import ReactDOM from "react-dom"
import { injectGlobal } from "@emotion/css"
import { createTheme, ThemeProvider } from "@mui/material"
import { ThreeAppActionsProvider } from "./context"
import App from "./App"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"
import threeApp from "./three-app"
import "./index.css"
import Navbar from "./Navbar"
import Footer from "./footer"
// import './tailwind.css';


// const darkTheme = createTheme({
//   palette: {
//     mode: "light"
//   }
// })

const main = async () => {
  const threeAppActions = threeApp()

  ReactDOM.render(
    <React.StrictMode>
      {/* <div className="bg-stone-50"> */}
      <Navbar />
      {/* </div> */}
       {/* <div className="bg-stone-50"> */}
        <ThreeAppActionsProvider threeAppActions={threeAppActions}>
          <App />
        </ThreeAppActionsProvider>
      {/* </div> */}
      
    </React.StrictMode>,
    document.getElementById("react-container")
  )

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://cra.link/PWA
  // serviceWorkerRegistration.register()

  threeAppActions.init()

  ReactDOM.render(
    <React.StrictMode>
      <Footer />  
      </React.StrictMode>,
      document.getElementById("react-container2")
  )
}

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    background-color: white;
  }

  #visualisation-container {
    width: 100vw;
    height: 100vh;
    background-color: white;
  }
`

main()