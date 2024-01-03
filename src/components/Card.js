import React from 'react'
import './Card.css';
import CardItem from './CardItem';
import AnimatedSvg from './AnimatedSvg';
import data from './../data'
import { animated, config, useSpring, useTrail } from 'react-spring';
function Card() {
    const trail = useTrail(data.length, {
        from: {
            opacity: '0%', marginTop: '-100px'
        },
        to: {
            opacity: '100%', marginTop: '0px'
        },
        delay: 500,
        config: config.slow
    })
    const titleAnim = useSpring({
        from: { opacity: 0, marginLeft: '200px' },
        to: { opacity: 1, marginLeft: '0px' },
        config: { mass: 2, }
    })
    return (
        <div className='mt-10'>
            <h1 className='flex justify-center items-center mx-auto'>FAQ's</h1>
        <div className="container flex flex-col Card mx-auto mt-6 sm:bg-opacity-25 md:bg-opacity-25 lg:bg-cover xl:bg-cover ">
        <div className="Card-left">
        </div>
        <div className="Card-right">
            <animated.div style={titleAnim} className="">
            </animated.div>
            <div className="Card-body">
                {data.map((d, i) =>
                    <CardItem style={trail[i]} key={i} answer={d.answer} question={d.question} />
                )}
            </div>
        </div>
    </div>
    </div>
    
    );
}

export default Card;
