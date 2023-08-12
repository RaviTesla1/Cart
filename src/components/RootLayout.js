import { Provider } from "react-redux"
import  Navbarpanel  from "./Navbarpanel"
import { Outlet } from "react-router-dom"
import store from "../store/store"



const RootLayout = () => {
  return (
    <Provider  store={store}>
     <Navbarpanel/>

    <main>
        <Outlet/>
    </main>
    </Provider>
  )
}

export default RootLayout