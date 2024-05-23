import "./styles/menu.css";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";




function Menu(props){
  const [menuFlag, setMenuFlag] = useState(false);
  const [cls, setCls] = useState("");
  function handleMenuClick(){
    setMenuFlag(true);
    setCls("menu-comp");
  }
  function handleCloseClick(){
    setCls((prev) => {return prev + " menu-contract"});
    setTimeout(() => {
      setMenuFlag(false);
    }, 500);
  }
  useEffect(() => {
    function handleEsc(e) {
      if(e.key === "Escape") {
        setCls((prev) => {return prev + " menu-contract"});
        setTimeout(() => {
          setMenuFlag(false);
        }, 400);
      }
    }
    document.addEventListener("keydown", handleEsc);
    return (() => {
      document.removeEventListener("keydown", handleEsc);
    })
  }, []);
  return(
    menuFlag 
    ? 
    <div className={cls}>
      <div className="items">
        <Link to="/" className="link-menu">
          <div className="item">
            <p>Home</p>
          </div>
        </Link>
        <Link to="/skills" className="link-menu">
          <div className="item">
            <p>Skills</p>
          </div>
        </Link>
        <Link to="/projects" className="link-menu">
          <div className="item">
            <p>Projects</p>
          </div>
        </Link>
        <Link to="/hobbies" className="link-menu">
          <div className="item">
            <p>Hobbies</p>
          </div>
        </Link>
        <Link to="/contact" className="link-menu">
          <div className="item">
            <p>Contact Me</p>
          </div>
        </Link>
        <div className="item tupdate">
          <p>Tupdates(Coming Soon)</p>
        </div>
      </div>
      <div className="icon">
        <div className="close-icon" onClick={handleCloseClick}>
          <CloseIcon sx = {{fontSize: props.size}} />
        </div>
      </div>  
      <Outlet /> 
    </div>
    :
    <div className = "menu-icon" onClick={handleMenuClick}> 
      <MenuIcon sx = {{fontSize: props.size}} /> 
    </div>
  );
}
export default Menu;
