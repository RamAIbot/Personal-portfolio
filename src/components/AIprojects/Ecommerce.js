import {AINavbar} from "./AINavbar";
import webpage_img from "../../assets/images/webpage1.jpeg"

export const Ecommerce = () => {
    return (
        <div className="ai_project_coding">
            <AINavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h1>E-Commerce Web development</h1>
                        <p style={{textAlign:'left',background:"black"}}>An online eCommerce music store web app using spring MVC,hibernate,jsp,bootstrap,jquery and h2 db.</p>

                        <p style={{textAlign:'left',background:"black"}}>A Customizable online music store app using Spring Model View Controller. The application has been securley made with spring security with admin and non admin roles. The admin role can enable to add products and non admin can purchase products. The application has inbuilt cart system to store the products for checkout. A H2 database is used at the backend to store the data. The database tables are automatically created by hibernate if not exist. </p>
                        <a href="https://github.com/RamAIbot/eMusicStore.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <h4>Final Webpage Deployed</h4>
                        <img src={webpage_img} alt="webpage_img" style={{width:"100%",height:"100%"}}/>
                    </div>

                </div>

            </div>

        </div>
    )
}