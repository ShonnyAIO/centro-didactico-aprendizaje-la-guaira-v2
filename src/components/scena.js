import React, { useState } from "react";
import { Pannellum } from "pannellum-react";
import dataScene from "../helpers/dataScene";
import Metaverse from "../pages/metaverse";

export default function Scene() {

    /* LISTADO DE ESCENAS */
    const salasItems = Object.keys(dataScene);

    /* ESCENA ACTUAL */
    const [sceneIndex, setSceneIndex] = useState(2);
    const [scene, setScene] = useState(dataScene['salaIndices']);
    const [sceneName, setsceneName] = useState('salaIndices');

    /* MANEJO DE ESCENAS ANTERIORES */
    const [previosScene, setPreviosScene] = useState([]);

    const allowSalas = ['moveScene', 'sala_mincyt', 'moveScene_Quimica', 'moveScene_Fisica', 'moveScene_Robotica', 'moveScene_Astronauta', 'moveScene_Satelital', 'moveScene_Satelital2', 'moveScene_Lectura', 'moveScene_4_Puntos', 'moveScene_Humberto_Fernandez_Moran', 'moveScene_Maritima', 'moveScene_Acuatica'];

    const updateStyle = () => {
        let styleInfo = document.getElementsByClassName('pnlm-hotspot-base pnlm-hotspot pnlm-sprite pnlm-info pnlm-pointer pnlm-tooltip');
        let lengthStyle = styleInfo.length;
        let counter = 0;

        while (counter < lengthStyle) {
            if (!(styleInfo[counter].style.transform).includes('scale(1.3)')) {
                let saveStyle = styleInfo[counter].style.transform + ' scale(1.3)';
                document.getElementsByClassName('pnlm-hotspot-base pnlm-hotspot pnlm-sprite pnlm-info pnlm-pointer pnlm-tooltip')[counter].style.transform = saveStyle;
            }
            counter++;
        }
    }

    const hotSpots = (element, i) => {

        if ((element.cssClass === 'hotSpotElement') || (element.cssClass === 'video_hospot_element') || (element.cssClass === 'video_hospot_element_infografia') || (element.cssClass === 'video_hospot_element_podcast') || (element.cssClass === 'video_hospot_element_cuestionario') || (element.cssClass === 'video_hospot_element_video_juego') || (element.cssClass === 'sala_inteligenciada') || (element.cssClass === 'video_robotica') || (element.cssClass === 'moveScene_Metodologia') || (element.cssClass === 'moveScene_recorrido_completo')) return (
            <Pannellum.Hotspot
                key={i}
                type={element.type}
                pitch={element.pitch}
                yaw={element.yaw}
                cssClass={element.cssClass}
                handleClick={() => {
                    window.open(element.url, "_blank");
                }}
            />
        );

        else if (allowSalas.includes(element.cssClass)) return (
            <Pannellum.Hotspot
                key={i}
                type={element.type}
                pitch={element.pitch}
                yaw={element.yaw}
                cssClass={element.cssClass}
                handleClick={() => {
                    setPreviosScene(previosScene => [...previosScene, element.scene]);
                    setSceneIndex(salasItems.indexOf(element.scene));
                    setsceneName(element.scene);
                    setScene(dataScene[element.scene]);
                }}
            />
        );


        if (element.cssClass === 'infoSpotElement') return (
            <Pannellum.Hotspot
                key={i}
                type={element.type}
                pitch={element.pitch}
                yaw={element.yaw}
                text={element.text}
                URL={element.url}
            />
        );

        return null;
    }


    return (
        <>
            {scene.type !== 'metaverse' ?
                // PARA PONER EL VISOR 360
                <Pannellum
                    width={'100%'}
                    height={'100vh'}
                    title={scene.title}
                    image={scene.image}
                    pitch={scene.pitch}
                    yaw={scene.yaw}
                    hfov={scene.hfov}
                    autoLoad={true}
                    showControls={false}
                    showFullscreenCtrl={false}
                    showZoomCtrl={false}
                    orientationOnByDefault={true}
                    hotspotDebug={true}
                    draggable={true}
                    onRender={() => { updateStyle(); }}
                >
                    {
                        Object.values(scene.hostSpots).map((element, i) =>
                            hotSpots(element, i)
                        )
                    }
                </Pannellum>
                :
                // PARA PONER EL METAVERSO
                <Metaverse scene={scene} />
            }

            {(previosScene.length > 0) ? <div className="return-recorrido" onClick={() => {

                if (previosScene[previosScene.length - 1] === sceneName) {
                    previosScene.pop();
                }

                if (previosScene.length > 1) {
                    let newScene = previosScene.pop();
                    setSceneIndex(sceneIndex - 1);
                    setsceneName(newScene);
                    setScene(dataScene[newScene]);
                } else {
                    setsceneName('salaIndices');
                    setSceneIndex(4);
                    setScene(dataScene['salaIndices']);
                }

            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg>
            </div> : ''}

            {((sceneIndex + 1) <= salasItems.length) ? <div className="next-recorrido" onClick={() => {

                setSceneIndex(sceneIndex + 1);
                let newScene = salasItems[sceneIndex];
                setPreviosScene(previosScene => [...previosScene, newScene]);
                setsceneName(newScene);
                setScene(dataScene[newScene]);

            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
            </div> : ''}

            <div className="reset-recorrido" onClick={() => {

                setScene(dataScene['salaIndices']);
                setsceneName('salaIndices');
                setSceneIndex(4);
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-reload"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" /><path d="M20 4v5h-5" /></svg>
            </div>
        </>
    );
}