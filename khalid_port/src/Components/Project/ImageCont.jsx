import React from 'react';
import GYM_WEB from "../../assets/Project_Img/GYM_WEB.jpg";
import WebSite from "../../assets/Project_Img/WebSite.jpg";
import App_beat from "../../assets/Project_Img/App_beat.jpg";
import Dic from "../../assets/Project_Img/Dic.jpg";
import Image from "../../assets/Project_Img/Image.jpg";
import Game from "../../assets/Project_Img/Game.jpg";
import Parllex from "../../assets/Project_Img/Parllex.jpg";
import Spot_clone from "../../assets/Project_Img/Spot_clone.jpg";
import ImageCard from './ImageCard';

const ImageCont = () => {
    const images = [
        {
            imgScr: GYM_WEB,
            link: "https://alammd0.github.io/gym-website/",
            title: "Gym Website",
            desc: "Uses HTML, CSS, and JavaScript"
        },
        {
            imgScr: App_beat,
            link: "https://eloquent-strudel-b785ad.netlify.app/",
            title: "App Beats",
            desc: "Uses HTML, CSS, and JavaScript"
        },
        {
            imgScr: WebSite,
            link: "https://animated-figolla-6ecae5.netlify.app/",
            title: "Animation Website",
            desc: "Uses HTML, CSS, and JavaScript"
        },
        {
            imgScr: Dic,
            link: "https://dictionaryappalam.netlify.app/",
            title: "Dictionary App",
            desc: "Uses React and Tailwind CSS"
        },
        {
            imgScr: Image,
            link: "https://github.com/alammd0/react_Project/tree/main/watch_store",
            title: "Watch Store",
            desc:"Using React, Context API and CSS"
        },
        {
            imgScr: Game,
            link: "https://github.com/alammd0/Simon_says_game",
            title: "Simon Says Game",
            desc: "Uses HTML, CSS, and JavaScript"
        },
        {
            imgScr: Spot_clone,
            link: "https://alammd0.github.io/clone-spotify-html-css/",
            title: "Clone Spotify",
            desc: "Uses HTML, CSS, and JavaScript"
        },
        {
            imgScr : Parllex,
            link : "https://github.com/alammd0/parallax-website",
            title : "Parallax Website",
            desc : "Uses HTML, CSS, and JavaScript"
        }
    ];

    return (
        <div>
            <div className="image-gallery">
                {images.map((image, index) => (
                    <ImageCard
                        key={index}
                        imgScr={image.imgScr}
                        link={image.link}
                        title={image.title}
                        desc={image.desc}
                    />
                ))}
            </div>

        </div>

    );
};

export default ImageCont;
