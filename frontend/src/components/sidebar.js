import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './sidebar.css';
import { Link } from 'react-router-dom';
import {faTasks, faUser, faChartLine, faEdit} from "@fortawesome/free-solid-svg-icons";
import React from "react";



function Sidebar(){


    return(
        <SideNav
        onSelect={(selected) => {

        }}
        >
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="donnees">
            <NavIcon>
                <Link to='/mes-donnees'>
                    <FontAwesomeIcon icon={faUser} style={{color: "white", fontSize: '1.75em'}}/>
                </Link>

            </NavIcon>
            <NavText>
                Mes données
            </NavText>
        </NavItem>
        <NavItem eventKey="activites">
            <NavIcon>
                <Link to='/mes-activites'>
                    <FontAwesomeIcon icon={faTasks} style={{color: "white", fontSize: '1.75em'}}/>
                </Link>

            </NavIcon>
            <NavText>
                Mes activités
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <Link to='/mes-statistiques'>
                    <FontAwesomeIcon icon={faChartLine} style={{color: "white", fontSize: '1.75em'}}/>
                </Link>
            </NavIcon>
            <NavText>
                Mes statistiques
            </NavText>
        </NavItem>
        <NavItem eventKey="objectifs">
            <NavIcon>
                <Link to='/objectifs'>
                    <FontAwesomeIcon icon={faEdit} style={{color: "white", fontSize: '1.75em'}}/>
                </Link>
            </NavIcon>
            <NavText>
                Mes objectifs
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>
    )
}
export default Sidebar;