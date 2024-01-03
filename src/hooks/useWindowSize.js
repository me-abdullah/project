
import React, { useEffect, useReducer } from 'react'


const windowReducer = (state, action) => {
    switch (action.type) {
        case 'LARGE':
            return ({ ...state, width: action.payload.large + 1 })
        case 'SMALL':
            return ({ ...state, width: action.payload.large - 1 })
        default:
            return state;
    }
}

export default function useWindowSize(large = 1050) {
    const [windowSize, dispatch] = useReducer(windowReducer, {
        width: undefined,
        height: undefined,
        large: undefined
    })

    useEffect(() => {
        function handleResize() {
            window.innerWidth > large ?
                dispatch({
                    payload: {
                        width: window.innerWidth,
                        large: large
                    },
                    type: 'LARGE'
                }
                )
                :
                dispatch(
                    {
                        payload: {
                            width: window.innerWidth,
                            large: large

                        },
                        type: 'SMALL'
                    }
                )
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [dispatch, large]);

    return windowSize;
}