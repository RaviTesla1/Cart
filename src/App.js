import Products from "./components/Products";
import 'bootstrap/dist/css/bootstrap.css';
import {
  createBrowserRouter,
  RouterProvider, Outlet,createRoutesFromElements,Route
} from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import Demo from "./components/Demo";
import RootLayout from "./components/RootLayout";


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    
    <Route  path="/" element ={<RootLayout/>}>
      <Route  index element ={<Dashboard/>}></Route>
      <Route  path="/cart" element ={<Cart/>}></Route>
    </Route>
  ))

  return (
    <div className="App">
        <RouterProvider router={router}/>
    
    </div>
  );
}







// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     children: [
//       {
//         path: "/",
//         element: <Dashboard/>,
//       },
//       {
//         path: "/cart",
//        element: <Cart/>,
//       },
//       {
//         path:"/demo",
//         element: <Demo/>
//       }
//     ],
//   }
// ]);


export default App;



// import React from 'react';
// import ReactDOM from 'react-dom/client';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router={router} />
//  );



