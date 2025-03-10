import React, { use, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [username, setusername] = useState("");
  //create new room button
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success("Created New Room");
  };
  //join room button
  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Please fill username and room id!");
      return;
    }
    //redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };
  const handleInputEnter = (e) => {
    console.log("event", e.code);
    if (e.code === "Enter") {
      joinRoom();
    }
  };
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
          className="homePageLogo"
          src="/code-sync.png"
          alt="codeSyncLogo"
        ></img>
        <h4 className="mainLabel">Paste Invitation Room ID</h4>
        <div className="inputGrp">
          <input
            className="inputBox"
            type="text"
            placeholder="Room ID"
            onChange={(e) => {
              setRoomId(e.target.value);
            }}
            value={roomId}
            onKeyUp={handleInputEnter}
          ></input>
          <input
            className="inputBox"
            type="text"
            placeholder="username"
            onChange={(e) => {
              setusername(e.target.value);
            }}
            value={username}
            onKeyUp={handleInputEnter}
          ></input>
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a href="" className="createNewBtn" onClick={createNewRoom}>
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Made With &#129294; &nbsp; by &nbsp;
          <a href="https://www.github.com/kar1905">Karan</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
