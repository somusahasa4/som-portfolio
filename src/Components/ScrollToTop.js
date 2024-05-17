import React, { useState, useEffect } from "react";

const goToTop = (e) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    return (
        <div className="goTopHidden">
            {" "}
            {showTopBtn && (
                <div className="goTop">
                    <div className="goTop__text" onClick={goToTop} ><span></span></div>
                </div>
            )}{" "}
        </div>
    );
};


export default ScrollToTop;