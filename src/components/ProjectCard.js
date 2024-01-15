import {Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import {useNavigate} from "react-router-dom";

// Helpful tutorial for React routing
// https://refine.dev/blog/navigate-react-router-redirect/#how-to-use-the--navigate-component
export const ProjectCard = ({title, description, imgUrl, buttonUrl}) => {
    let navigate = useNavigate()
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div><br/><button type="button" style={{background:'transparent'}}  className="btn btn-outline-light" onClick={() => navigate(buttonUrl)}>More Info &nbsp;<ArrowRightCircle size={25}/></button></div>
                </div>
            </div>
        </Col>
    )
}