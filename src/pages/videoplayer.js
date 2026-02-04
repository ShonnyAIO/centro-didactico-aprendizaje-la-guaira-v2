import React from 'react';
import { PannellumVideo } from "pannellum-react";


export default function VideoPlayer() {

    return (
        <>
            <div>
                <PannellumVideo
                    video={"https://firebasestorage.googleapis.com/v0/b/chat-153ee.appspot.com/o/RECORRIDO_LA_GUAIRA.mp4?alt=media&token=e0209f74-cc5c-45ce-bbfe-4f170047efba"}
                    loop
                    width="100%"
                    height="100vh"
                    autoLoad
                    autoPlay
                    controls
                    pitch={10}
                    yaw={180}
                    hfov={200}
                />
            </div>
        </>
    );
}