import react from 'react'
import styled from 'styled-components'
import { faUtensils, faMartiniGlassEmpty } from "@fortawesome/free-solid-svg-icons";
import { faUser, faMessage, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <Img>
            <div id="icons">
                <ul>
                    <Link to="/inicio" style={{ color:'white' }}>
                        <li><FontAwesomeIcon icon={faUtensils}/></li>
                    </Link>
                    <Link to="/home" style={{ color:'white' }}>
                        <li><FontAwesomeIcon icon={faMartiniGlassEmpty}/></li>
                    </Link>
                    <Link to="/home" style={{ color:'white' }}>
                        <li><FontAwesomeIcon icon={faMessage}/></li>
                    </Link>
                    <Link to="/home" style={{ color:'white' }}>
                        <li><FontAwesomeIcon icon={faUser}/></li>
                    </Link>
                    <Link to="/home" style={{ color:'white' }}>
                        <li><FontAwesomeIcon icon={faHeart}/></li>
                    </Link>
                </ul>
            </div>
        </Img>
    )
}

export default Footer;

const Img = styled.div`
    position: absolute;
    bottom: 0;
    left: 45%;

    #icons {
        display: flex;
        align-items: center;
        justify-content: center;
        position: block;
        
        ul li {
            list-style: none;
            float: left;
            margin: 0px 20px;
            font-size: 20px;
            position: relative;
            cursor: pointer;
            transition: .5s ease-in-out;
            z-index: 1;
        }

        ul li:before {
            content: '';
            width: 100%;
            heigth: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: #fff;
            border-radius: 50%;
            transform: scale(0);
            transition: .5s ease-in-out;
            z-index: -1;
        }

        ul li:hover:before {
            transform: scale(1);
        }

        ul li:hover {
            color: #484444;
            width: 45px;
            height: 45px;
            background: #fff;
            font-size: 18px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`