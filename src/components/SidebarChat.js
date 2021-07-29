import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';
import db from '../firebase';
import  { Link } from "react-router-dom";
import PersonAddIcon from '@material-ui/icons/PersonAdd';


function SidebarChat({addNewChat, id, name}) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");
 
  useEffect(() => {
    if(id){
        db.collection('Rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map((doc) => doc.data()))
        })

    }
  }, [id]);

  useEffect(()=> {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Enter name for new chat room ");

    if(roomName){
      db.collection("Rooms").add({
        name: roomName
      })
    }
  };

    return  !addNewChat ? (
      <Link to={`/rooms/${id}`}>

        <div className="sidebarChat_container">
        <div className="sidebarChat">
          {/* <Avatar
            className="avatar"
            src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
          /> */}
          <div className="room_avatar_sb">
            <h2 className="logo_heading_sb">{name.slice(0,1)}</h2>
          </div>
          <div className="sidebarChat_info">
            <h2>{name}</h2>
            <p>{
              messages[0]?.message.length>40 ? messages[0]?.message.slice(0,40)  + " ..." : messages[0]?.message
            
            }</p>
          </div>
        </div>
        <hr/>
      </div>

      </Link>
       ) : (
        <div onClick={createChat} className="sidebarChat_Btn">
            <h3 className="add-new-chat-title"> {<PersonAddIcon />} </h3>
        </div>
    );
}

export default SidebarChat
