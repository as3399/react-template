import React from "react";
import Card from "./Card"

function App() {
  return (<><Card 
    head = "Premium"
    link = "https://madewithreact.com/assets/img/react-material-bootstrap-dashboard-pro.jpg?v=1f2ec887e3"
    data =  "Argon Design System PRO React is a premium Design System for Bootstrap 4, React, Reactstrap, and React Hooks. It is built with over 1200 individual co..."
  />
    <Card 
     head = "Dashboards"
     link = "https://madewithreact.com/content/images/2021/01/volt-react.png"
     data =  "Volt Pro React Dashboard is a premium admin dashboard template built on top of the most popular front-end library in the world called React.js and the..."
    /> 
    <Card 
     head = "Themes"
     link = "https://madewithreact.com/content/images/2020/09/Argon-Design-System-PRO-React.jpg"
     data =  "Material Dashboard PRO React is a Premium Material-UI@4.1.0 Admin with a fresh, new design inspired by Google's Material Design. We are very excited to introduce our take on the material concepts through an easy to use and beautiful set of components."
  /></>);

}
export default App;
