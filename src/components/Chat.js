import React from 'react'
import './Chat.css';
import {Avatar, IconButton} from '@material-ui/core';
import {AttachFile, MoreVert, SearchOutlined} from '@material-ui/icons';
// import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
// import SendIcon from '@material-ui/icons/Send';
import ExpandLessSharpIcon from '@material-ui/icons/ExpandLessSharp';
import AttachFileIcon from '@material-ui/icons/AttachFile';
// import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import {useStateValue} from "../StateProvider";
import firebase from 'firebase';
import RoomIcon from './RoomIcon';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'


function Chat() {
  const [seed,setSeed] = useState("");
  const [input, setInput] = useState("");
  const {roomId} = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [{user}, dispatch] = useStateValue();

  useEffect(()=>{
    if(roomId){
        db.collection('Rooms').doc(roomId).onSnapshot(snapshot => {
            setRoomName(snapshot.data().name);
        });

        // console.log(roomName)
        db.collection('Rooms').doc(roomId).collection("messages").orderBy("timestamp","asc").onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        });

    }
},[roomId])


  useEffect( ()=> {
    setSeed(Math.floor(Math.random() *5000));
  },[roomId]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (input != "") {
      db.collection('Rooms').doc(roomId).collection('messages').add({
        message: input,
        name: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    } else {
      console.log("Empty message")
    }
    setInput("");
  }

  const getDate = (dateString , msg) => {

    let arr = dateString.split(" ")

    if(msg){
    arr = [ arr[0] , arr[4]]
    }
    let finalDate = "";

    const temp = arr.map((element) => {
      if (element != "GMT")
        if (element.length == 8) {
          finalDate += element.slice(0, 5);
        } else {
          finalDate += element + " ";
        }
    });

    return finalDate

  } 


  return (
    <div className="chat">

      <div className="chat_window">
        <div className="chat_header">
          {/* <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} /> */}

          

          <RoomIcon letter={roomName.slice(0,1)}/>

          <div className="chat_headerInfo">
            <h3 className="chat-room-name">{roomName}</h3>
            <p className="chat-room-last-seen"> 
                {messages.length > 0
                ? "Last seen: " +            
                  getDate(new Date(
                    messages[messages.length - 1]?.timestamp?.toDate()
                  ).toUTCString() , false)

                : " No messages available yet" }
            </p>
          </div>

          

          <div className="chat_header_right">
            {/* <IconButton>
              <SearchOutlined />
            </IconButton>
            <IconButton>
              <AttachFile />
            </IconButton> */}
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>

        <div className="chat_body">

          {messages.map((message) => (
            <p key={message.id} className={`chat_message ${message.name === user.displayName && "chat_receiver"}`}>
              <span className="chat_name">{message.name === user.displayName ? "You " :message.name}</span>
              {message.message}
              <br/>
              <p className="chat_timestamp">
                {  getDate( new Date(message.timestamp?.toDate()).toUTCString() ,true )}
              </p>
            </p>                               
          ))}

          {/* <button className="scroll_downBtn">down</button>  */}
        </div>

        <div className="chat_footer">
          
          <form onSubmit={sendMessage} 
               className="message_form">
            <button className="emoji_button">
              <InsertEmoticonIcon />
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Type a message"
            />
            {/* <MicIcon /> */}
            <button className="emoji_button2">
              <AttachFileIcon />
            </button>
            <button
              className="form_sendButton"
              type="submit"
              onClick={sendMessage}
            >
              Send
            </button>
          </form>

          <button className="sendButton" onClick={sendMessage}>
            <ExpandLessSharpIcon />
          </button>
        </div>
      </div>
    </div>
  );
}


export default Chat
