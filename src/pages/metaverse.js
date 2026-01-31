import React, { useState } from "react";
import { Pannellum } from "pannellum-react";
import "../styles/metaverse.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from 'react-tooltip';
import '@google/model-viewer';

import microscopio_tem from '../images/MICROSCOPIO_TEM.glb';

export default function Metaverse({ scene }) {

    const [show3D, setShow3D] = useState(false);

    return (
        <>
            <Pannellum
                width={'100%'}
                height={'100vh'}
                title={scene.title}
                image={scene.image}
                pitch={scene.pitch}
                yaw={scene.yaw}
                hfov={95}
                autoLoad
                draggable={true}
                showControls={false}
                showFullscreenCtrl={false}
                showZoomCtrl={false}
                orientationOnByDefault={true}
                hotspotDebug={false}
                mouseZoom={true}
                onLoad={() => {
                    setShow3D(false);
                }}
            >
                <Pannellum.Hotspot
                    key={30}
                    type={"info"}
                    pitch={-1.666353164805632}
                    yaw={-14.410794352739941}
                    cssClass={'infoSpotElement'}
                    text={'Tabla Periodica Interactiva'}
                    URL={'https://artsexperiments.withgoogle.com/periodic-table/'}
                />

                <Pannellum.Hotspot
                    key={31}
                    type={"info"}
                    pitch={-1.2347721911353107}
                    yaw={2.303907202439774}
                    cssClass={'infoSpotElement'}
                    text={'Juego Tabla Periodica'}
                    URL={'https://wordwall.net/es/resource/35672089/tabla-periodica'}
                />

                <Pannellum.Hotspot
                    key={32}
                    type={"info"}
                    pitch={-3.5123533759115686}
                    yaw={-138.78898556570886}
                    cssClass={'infoSpotElement'}
                    text={'Celula Eucariota Planta'}
                    URL={'https://telescope-schmidit-model.netlify.app/biologia/celula-planta-eucariota/'}
                />

                <Pannellum.Hotspot
                    key={33}
                    type={"info"}
                    pitch={-3.5123533759115686}
                    yaw={-131.82556059819967}
                    cssClass={'infoSpotElement'}
                    text={'Celula Eucariota Animal'}
                    URL={'https://telescope-schmidit-model.netlify.app/biologia/celula-eucariota/'}
                />

                <Pannellum.Hotspot
                    key={34}
                    type={"info"}
                    pitch={-2.769232805847587}
                    yaw={159.83721054156734}
                    cssClass={'infoSpotElement'}
                    text={'Cuerpo Humano 3D'}
                    URL={'https://atlas-3d-biologia-vin.netlify.app/'}
                />

                <Pannellum.Hotspot
                    key={35}
                    type={"info"}
                    pitch={-4.6626847575686154}
                    yaw={-177.82792655949663}
                    cssClass={'infoSpotElement'}
                    text={'Cuerpo Humano'}
                    URL={'https://www.significados.com/cuerpo-humano/'}
                />

                <Pannellum.Hotspot
                    key={36}
                    type={"info"}
                    pitch={-7.278320380091383}
                    yaw={170.08304148314596}
                    cssClass={'infoSpotElement'}
                    text={'Sala Inmersiva de Biologia'}
                    URL={'https://framevr.io/biologia-inmersiva'}
                />

                <Pannellum.Hotspot
                    key={37}
                    type={"custom"}
                    pitch={-1.829202791937072}
                    yaw={-78.95060531414792}
                    cssClass={'sala_mincyt'}
                    handleClick={() => window.open('https://recorrido-microcopico.netlify.app/', '_blank')}
                />

                <Pannellum.Hotspot
                    key={38}
                    type={"info"}
                    pitch={-12.10771063167306}
                    yaw={-96.65364643314071}
                    cssClass={'infoSpotElement'}
                    text={'El Microscopio Sirve para Observar lo Invisible'}
                    URL={'https://www.youtube.com/watch?v=lLGG4-npG2k'}
                />

            </Pannellum>

            {show3D ?
                <>
                    <div data-tooltip-id="my-tooltip" data-tooltip-content="Laboratorio del Microscopio" className="metaverse digital_microscope" onClick={() => window.open('https://cme-demostracion-cr.netlify.app/1', '_blank')}>
                        <model-viewer src={microscopio_tem} auto-rotate camera-controls ar alt="Microscopio Confocal"> </model-viewer>
                        <svg className="svg_microscope"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="#000"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                            <path d="M12 9h.01" />
                            <path d="M11 12h1v4h1" />
                        </svg>
                    </div>
                    <Tooltip id="my-tooltip" place="bottom" offset={-40} />
                </>
                :
                ''}

        </>
    );
}