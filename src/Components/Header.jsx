import {Link,NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <div className="logo">
                    <Link to="/" className="brand">Wsp</Link>
                </div>
                <nav className="nav nav-pills">

                    <NavLink to="/" 
                    className={(naveData)=>naveData.isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                    <NavLink to="about" className={(naveData)=>naveData.isActive ? "nav-link active" : "nav-link"}>About</NavLink>
                    <NavLink to="product" className={(naveData)=>naveData.isActive ? "nav-link active" : "nav-link"}>Products</NavLink>
                    <NavLink to="posts" className={(naveData)=>naveData.isActive ? "nav-link active" : "nav-link"}>Posts</NavLink>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header