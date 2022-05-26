import { useEffect, useState, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import io from 'socket.io-client';
import Peer from 'simple-peer';
import './Stream.scss';

const CallPage = () => {
  const history = useHistory();
  let { id } = useParams();
  const isAdmin = window.location.hash == '#init' ? true : false;

  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);

  const config = {
    iceServers: [
      {
        urls: ['stun:stun.l.google.com:19302'],
      },
    ],
  };

  useEffect(() => {
    socketRef.current = io.connect('http://localhost:3000');
    navigator.mediaDevices
      .getUserMedia({ video: isAdmin, audio: true })
      .then((stream) => {
        userVideo.current.srcObject = stream;
        if(isAdmin) {
          socketRef.current.emit('broadcaster');
        }
      });
  }, []);

  return (
    <div className="callpage-container">
      <video
        className="video-container"
        playsInline
        ref={userVideo}
        autoPlay
        muted
      />
    </div>
  );
};
export default CallPage;
