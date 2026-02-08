import React from 'react';
import { PannellumVideo } from "pannellum-react";


export default function VideoPlayer() {

    return (
        <>
            <div>
                <PannellumVideo
                    video={"https://firebasestorage.googleapis.com/v0/b/chat-153ee.appspot.com/o/RECORRIDO_LA_GUAIRA.mp4?alt=media&token=ceb427c1-901a-42b8-8966-9af30380fcda"}
                    loop
                    autoplay
                    controls={true}
                    muted={false}
                    width="100%"
                    height="100vh"
                    pitch={10}
                    yaw={20}
                    hfov={120}
                    minHfov={50}
                    maxHfov={150}
                    mouseZoom={true}
                />
            </div>
        </>
    );
}