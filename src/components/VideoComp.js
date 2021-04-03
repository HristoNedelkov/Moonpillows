import React, { useState } from 'react'
import firebase from './../firebase'
import './VideoComp.css'
function VideoComp() {
    const storage = firebase.storage();
    const video = storage.ref().child('videos/video-1.mp4');

    const [videoLink, setVideoLink] = useState('')

    video.getDownloadURL()
        .then((url) => { setVideoLink(url) })
        .catch((error) => { console.log(error); });

    return (
        <video src={videoLink} autoPlay loop muted />
    )



}

export default VideoComp
