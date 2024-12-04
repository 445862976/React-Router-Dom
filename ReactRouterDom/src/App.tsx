import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Component/layout/Layout"
import './App.css'
// import { element } from "prop-types";
import HomePage from "./Component/homePage/HomePage";
import About from "./Component/aboutpage/About"
import Service from "./Component/services/Service"
import Contact from "./Component/contactUs/Contact"



function App() {
  const Routing = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children:[
        { path:"",element:<HomePage/>},
        { path:"/about",element:<About/>},
        { path:"/service",element:<Service/>},
        {
          path: "contact", element: <Contact />, children: [
            { index: true, element:<Contact />},
          {path:"email",element:  <section>Wlcome Hello Contact US Email</section>},
          {path:"location",element:  <section>Wlcome Hello Contact US Location</section>},
          {path:"phone",element:  <section>Wlcome Hello Contact US Phone Number</section>}
          ]
        },
        {path:"*",element: <section>Not Found Page</section>}
      ]
    }
  ])
  return <RouterProvider router={Routing}/>
}
  
  


export default App
