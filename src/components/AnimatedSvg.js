import React, { createRef, useEffect, useState } from 'react'
import './AnimatedSvg.css';
import BackgroundPatternDesktop from '../images/bg-pattern-desktop.svg'
import BackgroundPatternMobile from '../images/bg-pattern-mobile.svg'

import useWindowSize from '../hooks/useWindowSize';
import { animated, useSpring } from 'react-spring';

function AnimatedSvg() {

    const windowSize = useWindowSize()
    const [bg, setBgPattern] = useState(undefined)
    const [lg, setLg] = useState(undefined)
    const boxAnim = useSpring({
        from: { marginLeft: '-200px' },
        to: { marginLeft: lg ? '0px' : '110%' },
        config: { mass: 5, },
        reset: true,

    })
    const womanAnim = useSpring({
        from: { bottom: '-400px' },
        to: { bottom: '-120px' },
        config: { mass: 5, friction: 20 },
        reset: true,

    })
    useEffect(() => {
        if (windowSize && windowSize.width)
            if (windowSize.width > 1050) {
                setBgPattern(BackgroundPatternDesktop)
                setLg(true);
            } else {
                setBgPattern(BackgroundPatternMobile)
                setLg(false);
            }
    }, [windowSize])

    return (
        <div className="bgPattern" >
            <div className="containerImgDownTop" >
                <div>

                </div>
                <animated.img alt="bg-woman" style={womanAnim} className="illWoman ml-[10px]hidden  lg:block sm:hidden " src="/assets/pack.png" alt=" Background Pattern Desktop" ></animated.img>
            </div>
           
        </div>
    );
}

export default AnimatedSvg;
