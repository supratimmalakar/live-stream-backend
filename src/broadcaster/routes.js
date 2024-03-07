const express = require('express');
const Stream = require('../../db/StreamModel');
const webrtc = require("wrtc");

const router = express.Router();

let senderStream;

router.get('/', (req, res) => {
    res.send('Welcome to the Broadcaster API');
});

router.post('/start-stream', async (req, res) => {
    const stream = new Stream({
       ...req.body
    })
    await stream.save();
    const id = stream._id;
    res.status(201).json({id});
});

router.post('/handshake', async (req, res) => {
    const peer = new webrtc.RTCPeerConnection({
        iceServers: [
            {
                urls: "stun:stun.stunprotocol.org"
            }
        ]
    });
    peer.ontrack = (e) => handleTrackEvent(e, peer);
    const desc = new webrtc.RTCSessionDescription(req.body.sdp);
    await peer.setRemoteDescription(desc);
    const answer = await peer.createAnswer();
    await peer.setLocalDescription(answer);
    const payload = {
        sdp: peer.localDescription,
    }
    res.json(payload);
})

function handleTrackEvent(e, peer) {
    senderStream = e.streams[0];
};


module.exports = router;
