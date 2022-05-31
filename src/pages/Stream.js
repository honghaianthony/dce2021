import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useHistory } from 'react-router-dom'
import { io } from 'socket.io-client'
import { Container, Button, Col, Row } from 'react-bootstrap'
import Peer from 'simple-peer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMicrophone, faCopy } from '@fortawesome/free-solid-svg-icons';

const videoConstraints = {
  height: window.innerHeight / 2,
  width: window.innerWidth / 2,
};

const Video = (props) => {
  const ref = useRef();

  useEffect(() => {
    props.peer.on('stream', (stream) => {
      ref.current.srcObject = stream;
    });
  }, []);

  return <video playsInline autoPlay ref={ref} />;
};

function Stream() {
  const { id } = useParams();
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);

  useEffect(() => {
    socketRef.current = io('http://localhost:3000');
    navigator.mediaDevices
      .getUserMedia({ video: videoConstraints, audio: true })
      .then((stream) => {
        userVideo.current.srcObject = stream;
        socketRef.current.emit('join room', id);
        socketRef.current.on('all users', (users) => {
          const peers = [];
          users.forEach((userID) => {
            const peer = createPeer(userID, socketRef.current.id, stream);
            peersRef.current.push({
              peerID: userID,
              peer,
            });
            peers.push(peer);
          });
          setPeers(peers);
        });

        socketRef.current.on('user joined', (payload) => {
          const peer = addPeer(payload.signal, payload.callerID, stream);
          peersRef.current.push({
            peerID: payload.callerID,
            peer,
          });

          setPeers((users) => [...users, peer]);
        });

        socketRef.current.on('receiving returned signal', (payload) => {
          const item = peersRef.current.find((p) => p.peerID === payload.id);
          item.peer.signal(payload.signal);
        });
      });
  }, []);

  function createPeer(userToSignal, callerID, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on('signal', (signal) => {
      socketRef.current.emit('sending signal', {
        userToSignal,
        callerID,
        signal,
      });
    });

    return peer;
  }

  function addPeer(incomingSignal, callerID, stream) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on('signal', (signal) => {
      socketRef.current.emit('returning signal', { signal, callerID });
    });

    peer.signal(incomingSignal);

    return peer;
  }

  const handleEndCall = ()=> {
    window.open('/', '_self')
  }


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Calling</title>
      </Helmet>
      <Container>
        <video
          playsInline
          autoPlay
          muted
          ref={userVideo}
          className="position-absolute bottom-0 end-0 mb-16 w-25"
        />
        {peers.map((peer, index) => {
          return <Video key={index} peer={peer} className="" />;
        })}
        <div className="position-absolute bottom-0 end-0 bg-secondary bg-gradient w-100 h-auto text-center">
          <FontAwesomeIcon
            className="text-danger text-center p-2 m-2 bg-light rounded-circle"
            icon={faCopy}
            onClick={() =>
              navigator.clipboard.writeText(
                'http://localhost:3001/stream/' + id
              )
            }
          />
          <FontAwesomeIcon
            icon={faPhone}
            className="text-danger text-center p-2 m-2 bg-light rounded-circle"
            onClick={handleEndCall}
          />
          <FontAwesomeIcon
            icon={faMicrophone}
            className="text-danger text-center p-2 m-2 bg-light rounded-circle"
          />
        </div>
      </Container>
    </>
  );
}
export default Stream;
