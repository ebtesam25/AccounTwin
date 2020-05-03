import React, {Component} from "react";
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css';

//import assets
import MatchImg from '../assets/match.png';
import LogoImg from '../assets/logo.png';
import CodeImage from '../assets/coding.png';
import YesIcon from "../assets/tick.png";
import NoIcon from "../assets/xicon.png";


//import UI components
import {Card, Avatar, Button} from 'antd';

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;
class Match extends Component {
  constructor(props) {
    super(props);
  } 
    render() {
        return (
         <div>
            <div>
              <div style={{margin: "2% 0 0 2%"}}><img src={LogoImg} alt="logo" width="25%"/></div>
            </div>
            <div>
              <div style={{margin:"15vh 2.5%",fontFamily:"Raleway", fontSize:"4vh",lineHeight:"100%", color:"#0e9e9b", width:"41.7%", float: "left"}}>
                Find your accountability buddy!
                <div style={{fontFamily:"Lato", lineHeight:"100%", fontSize:"3vh", marginTop: "5%"}}>
                
                </div>
                <div style={{ marginRight:"5%"}}>
                     <Card
                        headStyle={{fontSize:"3vh"}}
                        bodyStyle={{fontSize:"2.25vh", lineHeight:"2.5vh"}}
                        bordered="true"
                        style={{ width: "300px", height: "400px" , backgroundColor:"#85e8e3", fontFamily:"Palanquin", fontSize:"3vh",listStyleType:"none"}}
                        cover={
                        <img
                            alt="example"
                            src={CodeImage}
                            style={{width:"70%", margin:"10%"}}
                        />
                        }
                        actions={[
                            <Link to="/cards"> <Button type="primary" shape="circle"  size="small" style={{background:"none", border:"none"}} ><img src={YesIcon}/></Button></Link>,
                            <Button type="primary" shape="circle"  size="small" style={{background:"none", border:"none"}} ><img src={NoIcon} height="56px"/></Button>
                        ]}
                    >
                        <Meta
                        avatar={<Avatar src="https://img.icons8.com/bubbles/50/000000/user.png"/>}
                        title="Hackathon Goal"
                        description="I just want my project to compile"
                        />
                    </Card>
                </div>
                </div>
              <div style={{float: "right", margin:"0 4% 0 0"}}><img src={MatchImg} alt="home" height="600vh"></img></div>
            </div>
         </div>   
        );
    }
}

export default Match;