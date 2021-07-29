import React from 'react'
import './Navbar.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { useStateValue } from '../StateProvider';
import { Avatar } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import InfoIcon from '@material-ui/icons/Info';
import {Link} from 'react-router-dom';

function Navbar() {

  const [{user}, dispatch] = useStateValue();
  
    return (
      <div className="app_bar">
        <div className="logo">
          <h2>WAFFLES</h2>
          {/* <img 
                        src="http://getdrawings.com/free-icon/waffle-icon-73.png"
                        alt="img0"
                    /> */}
        </div>

        <div className="options_list">
            <div id="option1" className="list_item">
                <a className="home" href="#">
                HOME
                </a>
            </div>
                <div id="option2" className="list_item" >
                <a className="home" href="#">
                CONTACTS
                </a>
            </div>
                <div id="option3" className="list_item">
                <a className="home" href="#">
                ABOUT
                </a>
            </div>
                <div id="option4" className="list_item">
                <div class="dropdown">
                <Dropdown className="app_bar_dropdown">
                    <Dropdown.Toggle variant="success">MORE</Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item href="#">Settings</Dropdown.Item>
                  <Dropdown.Item href="http://localhost:3000/">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
            </div>
        </div>

        <div className="avatar_container">
          <Avatar src={user?.photoURL} />
        </div>
      </div>
    );
}

export default Navbar

