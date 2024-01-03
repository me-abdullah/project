import React, { useState } from 'react'
import './CardItem.css';
import { ReactComponent as IconArrowDown } from '../images/icon-arrow-down.svg'
import { config, animated, useSpring } from 'react-spring';

const AnimatedIconArrowDown = animated(IconArrowDown)

function CardItem(
    {
        question = 'How many team members can I invite?',
        answer = 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
        ...props
    }
) {

    const [answerOpen, setAnswerOpen] = useState(false)
    const [mouseOver, setMouseOver] = useState(false)
    const { rotate, color, fontWeight } = useSpring({
        rotate: answerOpen ? 180 : 0,
        fontWeight: answerOpen ? 700 : 500,
        color: (mouseOver && (!answerOpen)) ? 'hsl(14, 88%, 65%)' : 'hsl(237, 12%, 33%)'
    })

    const animProps = useSpring({
        to: {
            maxHeight: answerOpen ? '100%' : '0px',
            height: '100%'
        },
        config: { tension: 50, friction: 20, mass: 2 }
    })

    function handleQuestionClick() {
        setAnswerOpen(!answerOpen)
    }
    function handleOnMouseOver() {
        setMouseOver(true)
    }
    function handleMouseOut() {
        setMouseOver(false)
    }
    return (
        <animated.div {...props} className="Card-item ">
            <div className="Card-question" onMouseOver={handleOnMouseOver} onMouseOut={handleMouseOut} onTouchEnd={handleMouseOut} onClick={handleQuestionClick}>
                <animated.div className="Card-question-inner" style={{
                    color: color,
                    fontWeight: fontWeight
                }}>
                    {question}
                </animated.div>
                <div className="iconContainer">
                    <AnimatedIconArrowDown style={{
                        transform: rotate.interpolate(r => `rotateZ(${r}deg)`),
                    }} />
                </div>
            </div>
            <animated.div className="Card-answer" style={{
                ...animProps
            }}><div className="Card-answer-inner">{answer}</div>
            </animated.div>
        </animated.div>

    );
}

export default CardItem;
