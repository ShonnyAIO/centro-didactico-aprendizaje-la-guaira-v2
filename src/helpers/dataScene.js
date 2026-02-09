
import labQuimica from '../images/LABORAOTRIO_QUIMICA_BIOLOGIA.jpg';
import labFisica from '../images/LABORATORIO_MATEMATICA_FISICA.jpg';
import salaPrincipal from '../images/SALA_PRINCIPAL_TESLA.jpg';
import labRobotica from '../images/LABORATORIO_ROBOTICA.jpg';
import labAstronauta from '../images/SALA_ASTRONAUTA.jpg';
import labLectura from '../images/LABORATORIO_LECTURA.jpg';
import sala4Puntos from '../images/SALA_4_PUNTOS.jpg';
import salaRecepcion from '../images/SALA_RECEPCION.jpg';
import salaMaritima from '../images/SALA_MARITIMA.jpg';
import salaSatelital from '../images/SALA_SATELITAL.jpg';
import salaAcuatica from '../images/SALA_ACUATICA.jpg';
import salaSatelital2 from '../images/SALA_SATELITAL_2.jpg';
import salaHumbertoFernandezMoran from '../images/SALA_HUMBERTO_FERNANDEZ_MORAN.jpg';

const Scene = {
    salaIndices: {
        title: "Sala Indices",
        image: salaRecepcion,
        pitch: -4.527157868307489,
        yaw: -103.03913145845411,
        hfov: 145,
        hostSpots: {
            labQuimica: {
                type: 'custom',
                pitch: -29.56005206395429,
                yaw: -125.30177018114088,
                scene: 'labQuimica',
                cssClass: 'moveScene_Quimica'
            },
            labLectura: {
                type: 'custom',
                pitch: -31.078544815766385,
                yaw: -100.53638009752562,
                scene: 'labLectura',
                cssClass: 'moveScene_Lectura'
            },
            labRobotica: {
                type: 'custom',
                pitch: -28.76286121603009,
                yaw: -75.24414323841918,
                scene: 'labRobotica',
                cssClass: 'moveScene_Robotica'
            },
            recorridoCompleto: {
                type: 'custom',
                pitch: -23.28113465071364,
                yaw: -58.00383111502567,
                scene: 'recorrido_completo',
                cssClass: 'moveScene_recorrido_completo',
                url: '/video'
            },
            labSatelital2: {
                type: 'custom',
                pitch: -19.022442991863728,
                yaw: -46.73164594764054,
                scene: 'salaSatelital2',
                cssClass: 'moveScene_Satelital2'
            },
            sala4Puntos: {
                type: 'custom',
                pitch: -19.022442991863728,
                yaw: -33.73164594764054,
                scene: 'sala4Puntos',
                cssClass: 'moveScene_4_Puntos'
            },
            salaMetodologia: {
                type: 'custom',
                pitch: -19.022442991863728,
                yaw: -16.73164594764054,
                scene: 'salaMetodologia',
                cssClass: 'moveScene_Metodologia',
                url: 'https://framevr.io/tema-2'
            },
            salaHumbertoFernandezMoran: {
                type: 'custom',
                pitch: -18.022442991863728,
                yaw: -1.03164594764054,
                scene: 'salaHumbertoFernandezMoran',
                cssClass: 'moveScene_Humberto_Fernandez_Moran',
                url: 'https://recorrido-microcopico.netlify.app/'
            },
            labFisica: {
                type: 'custom',
                pitch: -16.32995864811924,
                yaw: 16.563863822213769,
                scene: 'labFisica',
                cssClass: 'moveScene_Fisica'
            },
            labAstronauta: {
                type: 'custom',
                pitch: -14.812151325441558,
                yaw: 30.64182743592381,
                scene: 'labAstronauta',
                cssClass: 'moveScene_Astronauta'
            },
            cesar_leal: {
                type: 'custom',
                pitch: -21.228855843798286,
                yaw: 50.25256706470817,
                mode: 'pop-up',
                cssClass: 'moveScene_CesarLeal',
                name: 'César Leal',
                urlInfografia: 'https://firebasestorage.googleapis.com/v0/b/chat-153ee.appspot.com/o/CESAR_LEAL.jpeg?alt=media&token=6813fcd7-bd66-4ae4-a61c-c039456e52b8',
                urlPodcast: 'https://firebasestorage.googleapis.com/v0/b/chat-153ee.appspot.com/o/Cesar_Leal.mp4?alt=media&token=614597bd-9a7c-4177-a87f-d27bd5a53010'
            },
            salaMaritima: {
                type: 'custom',
                pitch: -21.228855843798286,
                yaw: 71.25256706470817,
                scene: 'salaMaritima',
                cssClass: 'moveScene_Maritima'
            },
            salaAcuatica: {
                type: 'custom',
                pitch: -21.228855843798286,
                yaw: 88.25256706470817,
                scene: 'salaAcuatica',
                cssClass: 'moveScene_Acuatica'
            },
            labSatelital: {
                type: 'custom',
                pitch: -20.228855843798286,
                yaw: 102.25256706470817,
                scene: 'salaSatelital',
                cssClass: 'moveScene_Satelital'
            },
            historiaViva: {
                type: 'info',
                pitch: 2.028855843798286,
                yaw: 81.55256706470817,
                text: 'Historia Viva y Vigente \n de Venezuela',
                url: 'https://firebasestorage.googleapis.com/v0/b/chat-153ee.appspot.com/o/HV_SIMON_BOLIVAR.mp4?alt=media&token=5dc794ad-9886-4c46-88d0-518528e496e8',
                cssClass: 'infoSpotElement'
            },
            /*
            historiaDeLaCiencia: {
                type: 'info',
                pitch: 10.528855843798286,
                yaw: 122.05256706470817,
                text: 'Historia Viva \n de la Ciencia',
                url: 'https://firebasestorage.googleapis.com/v0/b/chat-153ee.appspot.com/o/GABRIELA_JIMENEZ_VIDEO.mp4?alt=media&token=d6bafbd0-236d-4b50-beb4-1c6ec52992e7',
                cssClass: 'infoSpotElement'
            }, */
            gabrielaJimenez: {
                type: 'custom',
                pitch: 12.528855843798286,
                yaw: 127.05256706470817,
                mode: 'pop-up',
                cssClass: 'moveScene_GabrielaJimenez',
                name: 'Gabriela Jiménez',
                urlInfografia: 'https://firebasestorage.googleapis.com/v0/b/chat-153ee.appspot.com/o/GABRIELA_JIMENEZ.jpeg?alt=media&token=93c9bccd-6cbd-4d1e-855c-a6afac7c683e',
                urlPodcast: 'https://firebasestorage.googleapis.com/v0/b/chat-153ee.appspot.com/o/HV_GABRIELA_JIMENEZ.mp4?alt=media&token=a8d70ff8-9632-437d-b98e-8ebd973976f4'
            },
            venturaEchandia: {
                type: 'custom',
                pitch: 10.128855843798286,
                yaw: 135.25256706470817,
                mode: 'pop-up',
                cssClass: 'moveScene_VenturaEchandia',
                name: 'Ventura Echandía',
                urlInfografia: 'https://firebasestorage.googleapis.com/v0/b/chat-153ee.appspot.com/o/I_need_to_2k_202602070939.jpeg?alt=media&token=acebf82a-1cb4-4b6e-b9ef-767891e8e9e0',
                urlPodcast: 'https://firebasestorage.googleapis.com/v0/b/chat-153ee.appspot.com/o/Ventura_Echendia.mp4?alt=media&token=bcd5e1a3-0d41-459f-b489-d5572c720e96'
            },
            nelsonMerentes: {
                type: 'custom',
                pitch: 8.728855843798286,
                yaw: 140.05256706470817,
                mode: 'pop-up',
                name: 'Nelson Merentes',
                cssClass: 'moveScene_NelsonMerentes',
                urlInfografia: 'https://firebasestorage.googleapis.com/v0/b/chat-153ee.appspot.com/o/Nelson_Merentes.jpeg?alt=media&token=9a8ca843-f6b4-4646-bd17-d15e7005af53',
                urlPodcast: 'https://firebasestorage.googleapis.com/v0/b/chat-153ee.appspot.com/o/HV_NELSON_MERENTES.mp4?alt=media&token=c3df6449-ee43-412b-852b-549f43f55214'
            },
            historia_viva_e_inteligenciado_la_guaira: {
                type: 'custom',
                pitch: 30.828855843798286,
                yaw: 131.55256706470817,
                cssClass: 'historia_viva_e_inteligenciado_la_guaira'
            },
            historia_viva_y_vigente_venezuela: {
                type: 'custom',
                pitch: 37.828855843798286,
                yaw: 88.05256706470817,
                cssClass: 'historia_viva_y_vigente_venezuela'
            },
            misionArbol: {
                type: 'info',
                pitch: -1.9119201728724322,
                yaw: -83.0518537023648,
                cssClass: 'infoSpotElement',
                text: 'Líneas de Acción de la Misión Árbol',
                url: 'https://www.youtube.com/watch?v=VQSJ7Hv_Qy4'
            },
            cascoHistorico: {
                type: 'info',
                pitch: -13.386880145041447,
                yaw: -59.30648657434718,
                cssClass: 'infoSpotElement',
                text: 'Casco Histórico',
                url: 'https://youtu.be/nHqST_IgJ7Y'
            },
            sectorAgroalimentario: {
                type: 'info',
                pitch: 10.702872140917027,
                yaw: -108.78254047592102,
                cssClass: 'infoSpotElement',
                text: 'Carayaca: Fortaleza Comunal en tierra de Siembra y Lucha',
                url: 'https://youtu.be/2ZHzLaMQNXc'
            },
            sateliteSucre: {
                type: 'info',
                pitch: -15.814427530313113,
                yaw: -118.05071010450882,
                cssClass: 'infoSpotElement',
                text: 'Satélite Sucre, 8 años en órbita',
                url: 'https://www.youtube.com/shorts/Fzjhotf8Gsc?feature=share'
            },
        }
    },
    salaHumbertoFernandezMoran2: {
        title: "Sala Humberto Fernandez Moran",
        image: salaHumbertoFernandezMoran,
        pitch: -5.5016849798283,
        yaw: 170.82113341149753,
        hfov: 125,
        hostSpots: {
            /*
            salaRecepcion: {
                type: 'custom',
                pitch: 0.07912949822960508,
                yaw: 155.93158239839963,
                scene: 'salaRecepcion',
                cssClass: 'moveScene'
            } */
        }
    },
    salaHumbertoFernandezMoran3: {
        title: "Sala Humberto Fernandez Moran",
        image: salaHumbertoFernandezMoran,
        pitch: -5.5016849798283,
        yaw: 170.82113341149753,
        hfov: 125,
        hostSpots: {
            salaRecepcion: {
                type: 'custom',
                pitch: 0.07912949822960508,
                yaw: 155.93158239839963,
                scene: 'salaRecepcion',
                cssClass: 'moveScene'
            }
        }
    },
    sala4Puntos: {
        title: "Sala 4 Puntos",
        image: sala4Puntos,
        pitch: -0.16705924171618391,
        yaw: -8.10092910064009,
        hfov: 125,
        hostSpots: {
            /*
            salaRecepcion: {
                type: 'custom',
                pitch: -15.398239671257318,
                yaw: 44.544454136950186,
                scene: 'salaRecepcion',
                cssClass: 'moveScene'
            },
            labAstronauta: {
                type: 'custom',
                pitch: -13.211983325708829,
                yaw: -101.74666076478739,
                scene: 'labAstronauta',
                cssClass: 'moveScene'
            },
            salaMaritima: {
                type: 'custom',
                pitch: -24.846720114152895,
                yaw: 19.348828720692104,
                scene: 'salaMaritima',
                cssClass: 'moveScene'
            },
            salaSatelital: {
                type: 'custom',
                pitch: -27.95334407385919,
                yaw: -13.67632376479724,
                scene: 'salaSatelital',
                cssClass: 'moveScene'
            },
            salaAcuatica: {
                type: 'custom',
                pitch: -22.357023432643068,
                yaw: -46.96538949558678,
                scene: 'salaAcuatica',
                cssClass: 'moveScene'
            },
            salaSatelital2: {
                type: 'custom',
                pitch: -16.72640038901557,
                yaw: -65.30839431194346,
                scene: 'salaSatelital2',
                cssClass: 'moveScene'
            } */
        }
    },
    salaMaritima: {
        title: "Sala Maritima",
        image: salaMaritima,
        pitch: -0.16705924171618391,
        yaw: -8.10092910064009,
        hfov: 125,
        hostSpots: {
            /*
            sala4Puntos: {
                type: 'custom',
                pitch: -21.795297156874554,
                yaw: 165.54639883815386,
                scene: 'sala4Puntos',
                cssClass: 'moveScene'
            },
            salaSatelital: {
                type: 'custom',
                pitch: -30.00776965123332,
                yaw: -173.68005044541488,
                scene: 'salaSatelital',
                cssClass: 'moveScene'
            } */
        }
    },
    salaSatelital: {
        title: "Sala Satelital",
        image: salaSatelital,
        pitch: -1.3434255311043086,
        yaw: -15.812384725537914,
        hfov: 125,
        hostSpots: {
            /*
            sala4Puntos: {
                type: 'custom',
                pitch: -20.04036190723891,
                yaw: 163.80178904054304,
                scene: 'sala4Puntos',
                cssClass: 'moveScene'
            },
            salaAcuatica: {
                type: 'custom',
                pitch: -28.154232309435418,
                yaw: -175.3338015791175,
                scene: 'salaAcuatica',
                cssClass: 'moveScene'
            },
            salaMaritima: {
                type: 'custom',
                pitch: -27.400736196041237,
                yaw: 145.4141014377406,
                scene: 'salaMaritima',
                cssClass: 'moveScene'
            } */
        }
    },
    salaAcuatica: {
        title: "Sala Acuatica",
        image: salaAcuatica,
        pitch: -3.5646949473083493,
        yaw: -18.476535424512843,
        hfov: 125,
        hostSpots: {
            /*
            sala4Puntos: {
                type: 'custom',
                pitch: -27.836523300660023,
                yaw: 173.07489400091148,
                scene: 'sala4Puntos',
                cssClass: 'moveScene'
            },
            salaSatelital2: {
                type: 'custom',
                pitch: -29.563545064650498,
                yaw: -167.41308773409995,
                scene: 'salaSatelital2',
                cssClass: 'moveScene'
            },
            salaSatelital: {
                type: 'custom',
                pitch: -30.672388557834157,
                yaw: 155.7567899105041,
                scene: 'salaSatelital',
                cssClass: 'moveScene'
            } */
        }
    },
    salaSatelital2: {
        title: "Sala Cámara",
        image: salaSatelital2,
        pitch: -5.311269965886336,
        yaw: -14.624668705131098,
        hfov: 125,
        hostSpots: {
            /*
            sala4Puntos: {
                type: 'custom',
                pitch: -34.32376661324968,
                yaw: 158.93567571997602,
                scene: 'sala4Puntos',
                cssClass: 'moveScene'
            },
            salaAcuatica: {
                type: 'custom',
                pitch: -50.88692037614074,
                yaw: 149.5409991592278,
                scene: 'salaAcuatica',
                cssClass: 'moveScene'
            },
            labAstronauta: {
                type: 'custom',
                pitch: -26.462638300246628,
                yaw: -172.67370475877362,
                scene: 'labAstronauta',
                cssClass: 'moveScene'
            } */
        }
    },
    labAstronauta: {
        title: "Laboratorio Astronauta",
        image: labAstronauta,
        pitch: -2.2124100537094833,
        yaw: -28.25053019132552,
        hfov: 125,
        hostSpots: {
            /*
            salaPrincipal: {
                type: 'custom',
                pitch: -22.133261102004585,
                yaw: -117.14024539796108,
                scene: 'salaPrincipal',
                cssClass: 'moveScene'
            },
            labLectura: {
                type: 'custom',
                pitch: -41.154863125546356,
                yaw: -177.02018836057184,
                scene: 'labLectura',
                cssClass: 'moveScene'
            },
            labRobotica: {
                type: 'custom',
                pitch: -20.879838327942384,
                yaw: -92.93605492353,
                scene: 'labRobotica',
                cssClass: 'moveScene'
            },
            sala4Puntos: {
                type: 'custom',
                pitch: -19.075637076062442,
                yaw: 47.510800408962794,
                scene: 'sala4Puntos',
                cssClass: 'moveScene'
            } */
        }
    },
    labLectura: {
        title: "Sala de Lectura",
        image: labLectura,
        pitch: -4.945242098759998,
        yaw: -12.337659443862135,
        hfov: 125,
        hostSpots: {
            /*
            labAstronauta: {
                type: 'custom',
                pitch: -17.612266134285527,
                yaw: 165.722071011218,
                scene: 'labAstronauta',
                cssClass: 'moveScene'
            }, */
            libroMicroscopia: {
                type: 'info',
                pitch: -32.23041115392079,
                yaw: -66.84923409837383,
                text: 'Libro Microscopía',
                url: 'https://drive.google.com/file/d/1J75X6ZIeF4WMVRAAho8OT7gUAuguQfWP/view?usp=sharing',
                cssClass: 'infoSpotElement'
            },
            salaKids: {
                type: 'info',
                pitch: -28.021467828809577,
                yaw: -58.18985188356764,
                text: 'Sala para Niños',
                url: 'https://framevr.io/cme-kids-venezuela',
                cssClass: 'infoSpotElement'
            },
            libroHacemosCiencia: {
                type: 'info',
                pitch: -0.25207846751815516,
                yaw: -146.37924614756807,
                text: 'Juguemos Haciendo Ciencia',
                url: 'https://drive.google.com/file/d/17rlLdj5uRJ3vvhpn_s5eQ9ztzEO7bXCK/view?usp=sharing',
                cssClass: 'infoSpotElement'
            },
            libroDiplomadoCiencias: {
                type: 'info',
                pitch: 23.680339042379696,
                yaw: -86.0552974672105,
                text: 'Diplomado Juguemos Haciendo Ciencia',
                url: 'https://drive.google.com/file/d/1Y4cRybNZOJnTdE9zbN6M7qU2emEpTDKe/view?usp=sharing',
                cssClass: 'infoSpotElement'
            },
            libroAstronomiaDigital: {
                type: 'info',
                pitch: -27.978739186941993,
                yaw: -147.62340159538587,
                text: 'Libro Astronomía Digital',
                url: 'https://drive.google.com/file/d/1jDnRAVq6nHfyzfAzB-8WRm6s-o3EdVJL/view?usp=sharing',
                cssClass: 'infoSpotElement'
            },
            libroAmazonia: {
                type: 'info',
                pitch: -35.71828248339781,
                yaw: -114.17509880741325,
                text: 'Libro la Amazonía el Bosque Tropical Más Extenso Del Mundo',
                url: 'https://drive.google.com/file/d/1uJePmYN_1jCcwoZxGyvwm8Z9DT3pSGLo/view?usp=sharing',
                cssClass: 'infoSpotElement'
            },
            revistaCiencias: {
                type: 'info',
                pitch: -1.4141881219988581,
                yaw: -69.64238721287595,
                text: 'Revista Ciencia en Revolución, Edición 27',
                url: 'https://drive.google.com/file/d/11GYx6fItxY1d4dCJmIbw2SSDwfmA_eH6/view?usp=sharing',
                cssClass: 'infoSpotElement'
            },
            libroColonizacion: {
                type: 'info',
                pitch: 15.217956845484107,
                yaw: -113.10243433958013,
                text: 'Libro Hacia Una Descolonización de la Ciencia Moderna',
                url: 'https://drive.google.com/file/d/1wqkh1POC-Lev5KQnNtPwVondhlwp1zZL/view?usp=sharing',
                cssClass: 'infoSpotElement'
            },
            videoAbeja: {
                type: 'custom',
                pitch: 10.723280048259475,
                yaw: -8.750437964313468,
                url: 'https://youtu.be/-r2cJGiCsFQ',
                cssClass: 'video_hospot_element'
            },
            infografiaAbeja: {
                type: 'custom',
                pitch: 0.48750590407638,
                yaw: -20.321483197808323,
                url: 'https://firebasestorage.googleapis.com/v0/b/chat-153ee.appspot.com/o/Captura%20desde%202026-01-27%2008-34-34.png?alt=media&token=b1480dda-95d7-4a89-a410-b03b6bfdd264',
                cssClass: 'video_hospot_element_infografia'
            },
            podcastAbeja: {
                type: 'custom',
                pitch: 1.0410026203255693,
                yaw: 6.273225785815399,
                url: 'https://firebasestorage.googleapis.com/v0/b/chat-153ee.appspot.com/o/La_Importancia_de_los_Insectos.mp4?alt=media&token=6857c9c9-9225-4e3d-a3cb-4f1e4197f040',
                cssClass: 'video_hospot_element_podcast'
            },
            cuestionarioAbeja: {
                type: 'custom',
                pitch: -14.35137851697836,
                yaw: -20.045966729482423,
                url: 'https://gemini.google.com/share/2227d38794a4',
                cssClass: 'video_hospot_element_cuestionario'
            },
            videoJuegoAbeja: {
                type: 'custom',
                pitch: -13.168078885364157,
                yaw: 4.792051178523312,
                url: 'https://ai.studio/apps/drive/1yZwI05LT13nQyAPCelyYZ72VXkSrdp21?fullscreenApplet=true',
                cssClass: 'video_hospot_element_video_juego'
            },
            sala_inteligenciada: {
                type: 'custom',
                pitch: 18.575055849432797,
                yaw: -11.115025035310648,
                cssClass: 'sala_inteligenciada'
            }
        }
    },
    salaPrincipal: {
        title: "Sala Principal",
        image: salaPrincipal,
        pitch: -3.7166039333529155,
        yaw: -172.4367220579273,
        hfov: 125,
        hostSpots: {}
    },
    labQuimica: {
        type: 'metaverse',
        title: "Laboratorio Biologia",
        image: labQuimica,
        pitch: -2.101859742509331,
        yaw: -92.0130725526224,
        hfov: 125,
        hostSpots: {
            tablaPeriodica: {
                type: 'info',
                pitch: -1.666353164805632,
                yaw: -14.410794352739941,
                text: 'Tabla Periodica Interactiva',
                url: 'https://artsexperiments.withgoogle.com/periodic-table/',
                cssClass: 'infoSpotElement'
            },
            tablaPeriodicaJuego: {
                type: 'info',
                pitch: -1.2347721911353107,
                yaw: 2.303907202439774,
                text: 'Juego Tabla Periodica',
                url: 'https://wordwall.net/es/resource/35672089/tabla-periodica',
                cssClass: 'infoSpotElement'
            },
            celulaEucariotaPlanta: {
                type: 'info',
                pitch: -3.5123533759115686,
                yaw: -138.78898556570886,
                text: 'Celula Eucariota Planta',
                url: 'https://telescope-schmidit-model.netlify.app/biologia/celula-planta-eucariota/',
                cssClass: 'infoSpotElement'
            },
            celulaEucariotaAnimal: {
                type: 'info',
                pitch: -3.5123533759115686,
                yaw: -131.82556059819967,
                text: 'Celula Eucariota Animal',
                url: 'https://telescope-schmidit-model.netlify.app/biologia/celula-eucariota/',
                cssClass: 'infoSpotElement'
            },
            cuerpoHumano3D: {
                type: 'info',
                pitch: -2.769232805847587,
                yaw: 159.83721054156734,
                text: 'Cuerpo Humano 3D',
                url: 'https://atlas-3d-biologia-vin.netlify.app/',
                cssClass: 'infoSpotElement'
            },
            cuerpoHumano: {
                type: 'info',
                pitch: -4.6626847575686154,
                yaw: -177.82792655949663,
                text: 'Cuerpo Humano',
                url: 'https://www.significados.com/cuerpo-humano/',
                cssClass: 'infoSpotElement'
            },
            salaInmersivaBiologia: {
                type: 'info',
                pitch: -7.278320380091383,
                yaw: 170.08304148314596,
                text: 'Sala Inmersiva de Biologia',
                url: 'https://framevr.io/biologia-inmersiva',
                cssClass: 'infoSpotElement'
            },
            salaMincyt: {
                type: 'custom',
                pitch: -1.829202791937072,
                yaw: -78.95060531414792,
                url: 'https://recorrido-microcopico.netlify.app/',
                cssClass: 'sala_mincyt'
            },
        }
    },
    labFisica: {
        title: "Laboratorio Fisica",
        image: labFisica,
        pitch: -5.772233955879995,
        yaw: -89.78442646227468,
        hfov: 125,
        hostSpots: {
            telescopio: {
                type: 'info',
                pitch: -5.778611177944839,
                yaw: 119.50676365589942,
                text: 'Telescopio',
                url: 'https://telescope-schmidit-model.netlify.app/refractor.html',
                cssClass: 'infoSpotElement'
            },
            unidadesCapacidad: {
                type: 'info',
                pitch: 0.11820754383303239,
                yaw: -19.126497967183614,
                text: 'Unidades de Capacidad',
                url: 'https://wordwall.net/es/resource/1374816/unidades-de-medida-de-masa',
                cssClass: 'infoSpotElement'
            },
            vectores: {
                type: 'info',
                pitch: 1.0440171222369088,
                yaw: 31.355797396888207,
                text: 'Vectores',
                url: 'https://concepto.de/vector/',
                cssClass: 'infoSpotElement'
            }
        }
    },
    labRobotica: {
        title: "Laboratorio Robótica",
        image: labRobotica,
        pitch: -3.3755383098773324,
        yaw: -179.61442200447738,
        hfov: 100,
        hostSpots: {
            /*
            salaPrincipal: {
                type: 'custom',
                pitch: -8.425212538790436,
                yaw: 179.14971011261574,
                scene: 'salaPrincipal',
                cssClass: 'moveScene'
            }, */
            videoRobotica: {
                type: 'custom',
                pitch: -12.046795934121732,
                yaw: -147.64609388121983,
                url: 'https://youtu.be/KyipjizhbBA',
                cssClass: 'video_robotica'
            }
        }
    },
};

export default Scene;
