import { Link, Outlet } from "react-router-dom";
import "./styles/arrow.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function ForwardArrow(props) {
    return(
        <Link to={props.link}>
            <div className="arrow forward">
                <ArrowForwardIosIcon sx = {{fontSize: props.size}} />
            </div>
        </Link>
    );
}




export default ForwardArrow;
