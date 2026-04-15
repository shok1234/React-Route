import {Link,NavLink} from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">

         <nav className="d-flex justify-content-center">
         
                    <NavLink to="/" 
                    className={(naveData)=>naveData.isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                    <NavLink to="about" className={(naveData)=>naveData.isActive ? "nav-link active" : "nav-link"}>About</NavLink>
                    <NavLink to="product" className={(naveData)=>naveData.isActive ? "nav-link active" : "nav-link"}>Products</NavLink>
                    <NavLink to="posts" className={(naveData)=>naveData.isActive ? "nav-link active" : "nav-link"}>Posts</NavLink>
                
         </nav>
         <div className="copyrights">
          &copy; 2026<Link to="/">WebStylePress</Link> -All Rights Reserved.
         </div>
        </div>
    </footer>
  )
}

export default Footer