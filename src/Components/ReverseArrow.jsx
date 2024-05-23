import "./styles/arrow.css";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
function ReverseArrow(props) {
    return(
        <Link to={props.link}>
            <div className="arrow reverse">
                <ArrowBackIosNewIcon sx = {{fontSize: props.size}} />
            </div>
        </Link>
    );
}


export default ReverseArrow;

