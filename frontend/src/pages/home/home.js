import React, { useState, useEffect } from "react";
import homeImg from '../../images/homeImg.png';
import './home.css';

const TypingText = ({ texts, speed }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            if (textIndex < texts.length) {
                const currentText = texts[textIndex];

                if (!isDeleting) {
                    setDisplayedText(currentText.slice(0, charIndex + 1));
                    setCharIndex((prev) => prev + 1);

                    if (charIndex === currentText.length - 1) {
                        setTimeout(() => setIsDeleting(true), 1000);
                    }
                } else {
                    setDisplayedText(currentText.slice(0, charIndex - 1));
                    setCharIndex((prev) => prev - 1);

                    if (charIndex === 0) {
                        setDisplayedText("");
                        setIsDeleting(false);
                        setTextIndex((prev) => (prev + 1) % texts.length);
                    }
                }
            }
        };

        if (texts && texts.length > 0) {
            const timeout = setTimeout(handleTyping, speed);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, textIndex, isDeleting, texts, speed]);

    return <span>{displayedText}</span>;
};

const Home = () => {
    return (
        <div className="flexC">
            <div>
                <h1>hello There👋🏼,</h1><br/>
                <h2>I'm <span className="name">Dieuveille Suthi</span></h2><br/>
                <h3>
                    <TypingText texts={["a Fullstack developer", "& tech lover"]} speed={100} />
                </h3>
            </div>
            <div>
                <img src={homeImg} alt="homeImg" />
            </div>
        </div>
    );
};

export default Home;
