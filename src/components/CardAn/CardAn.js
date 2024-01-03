
import React,{useEffect} from "react";
import "./CardAn.scss"

function CardAn() {
    
    useEffect(() => {   console.clear();

    const { gsap, imagesLoaded } = window;
    
    const buttons = {
        prev: document.querySelector(".btn--left"),
        next: document.querySelector(".btn--right"),
    };
    const cardsContainerEl = document.querySelector(".cards__wrapper");
    const appBgContainerEl = document.querySelector(".app__bg");
    
    const cardInfosContainerEl = document.querySelector(".info__wrapper");
    
    buttons.next.addEventListener("click", () => swapCards("right"));
    
    buttons.prev.addEventListener("click", () => swapCards("left"));
    
    function swapCards(direction) {
        const currentCardEl = cardsContainerEl.querySelector(".current--card");
        const previousCardEl = cardsContainerEl.querySelector(".previous--card");
        const nextCardEl = cardsContainerEl.querySelector(".next--card");
    
        const currentBgImageEl = appBgContainerEl.querySelector(".current--image");
        const previousBgImageEl = appBgContainerEl.querySelector(".previous--image");
        const nextBgImageEl = appBgContainerEl.querySelector(".next--image");
    
        changeInfo(direction);
        swapCardsClass();
    
        removeCardEvents(currentCardEl);
    
        function swapCardsClass() {
            currentCardEl.classList.remove("current--card");
            previousCardEl.classList.remove("previous--card");
            nextCardEl.classList.remove("next--card");
    
            currentBgImageEl.classList.remove("current--image");
            previousBgImageEl.classList.remove("previous--image");
            nextBgImageEl.classList.remove("next--image");
    
            currentCardEl.style.zIndex = "50";
            currentBgImageEl.style.zIndex = "-2";
    
            if (direction === "right") {
                previousCardEl.style.zIndex = "20";
                nextCardEl.style.zIndex = "30";
    
                nextBgImageEl.style.zIndex = "-1";
    
                currentCardEl.classList.add("previous--card");
                previousCardEl.classList.add("next--card");
                nextCardEl.classList.add("current--card");
    
                currentBgImageEl.classList.add("previous--image");
                previousBgImageEl.classList.add("next--image");
                nextBgImageEl.classList.add("current--image");
            } else if (direction === "left") {
                previousCardEl.style.zIndex = "30";
                nextCardEl.style.zIndex = "20";
    
                previousBgImageEl.style.zIndex = "-1";
    
                currentCardEl.classList.add("next--card");
                previousCardEl.classList.add("current--card");
                nextCardEl.classList.add("previous--card");
    
                currentBgImageEl.classList.add("next--image");
                previousBgImageEl.classList.add("current--image");
                nextBgImageEl.classList.add("previous--image");
            }
        }
    }
    
    function changeInfo(direction) {
        let currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
        let previousInfoEl = cardInfosContainerEl.querySelector(".previous--info");
        let nextInfoEl = cardInfosContainerEl.querySelector(".next--info");
    
        gsap.timeline()
            .to([buttons.prev, buttons.next], {
            duration: 0.2,
            opacity: 0.5,
            pointerEvents: "none",
        })
            .to(
            currentInfoEl.querySelectorAll(".text"),
            {
                duration: 0.4,
                stagger: 0.1,
                translateY: "-120px",
                opacity: 0,
            },
            "-="
        )
            .call(() => {
            swapInfosClass(direction);
        })
            .call(() => initCardEvents())
            .fromTo(
            direction === "right"
            ? nextInfoEl.querySelectorAll(".text")
            : previousInfoEl.querySelectorAll(".text"),
            {
                opacity: 0,
                translateY: "40px",
            },
            {
                duration: 0.4,
                stagger: 0.1,
                translateY: "0px",
                opacity: 1,
            }
        )
            .to([buttons.prev, buttons.next], {
            duration: 0.2,
            opacity: 1,
            pointerEvents: "all",
        });
    
        function swapInfosClass() {
            currentInfoEl.classList.remove("current--info");
            previousInfoEl.classList.remove("previous--info");
            nextInfoEl.classList.remove("next--info");
    
            if (direction === "right") {
                currentInfoEl.classList.add("previous--info");
                nextInfoEl.classList.add("current--info");
                previousInfoEl.classList.add("next--info");
            } else if (direction === "left") {
                currentInfoEl.classList.add("next--info");
                nextInfoEl.classList.add("previous--info");
                previousInfoEl.classList.add("current--info");
            }
        }
    }
    
    function updateCard(e) {
        const card = e.currentTarget;
        const box = card.getBoundingClientRect();
        const centerPosition = {
            x: box.left + box.width / 2,
            y: box.top + box.height / 2,
        };
        let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
        gsap.set(card, {
            "--current-card-rotation-offset": `${angle}deg`,
        });
        const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
        gsap.set(currentInfoEl, {
            rotateY: `${angle}deg`,
        });
    }
    
    function resetCardTransforms(e) {
        const card = e.currentTarget;
        const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
        gsap.set(card, {
            "--current-card-rotation-offset": 0,
        });
        gsap.set(currentInfoEl, {
            rotateY: 0,
        });
    }
    
    function initCardEvents() {
        const currentCardEl = cardsContainerEl.querySelector(".current--card");
        currentCardEl.addEventListener("pointermove", updateCard);
        currentCardEl.addEventListener("pointerout", (e) => {
            resetCardTransforms(e);
        });
    }
    
    initCardEvents();
    
    function removeCardEvents(card) {
        card.removeEventListener("pointermove", updateCard);
    }
    
    function init() {
    
        let tl = gsap.timeline();
    
        tl.to(cardsContainerEl.children, {
            delay: 0.15,
            duration: 0.5,
            stagger: {
                ease: "power4.inOut",
                from: "right",
                amount: 0.1,
            },
            "--card-translateY-offset": "0%",
        })
            .to(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
            delay: 0.5,
            duration: 0.4,
            stagger: 0.1,
            opacity: 1,
            translateY: 0,
        })
            .to(
            [buttons.prev, buttons.next],
            {
                duration: 0.4,
                opacity: 1,
                pointerEvents: "all",
            },
            "-=0.4"
        );
    }
    
    const waitForImages = () => {
        const images = [...document.querySelectorAll("img")];
        const totalImages = images.length;
        let loadedImages = 0;
        const loaderEl = document.querySelector(".loader span");
    
        gsap.set(cardsContainerEl.children, {
            "--card-translateY-offset": "100vh",
        });
        gsap.set(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
            translateY: "40px",
            opacity: 0,
        });
        gsap.set([buttons.prev, buttons.next], {
            pointerEvents: "none",
            opacity: "0",
        });
    
        images.forEach((image) => {
            imagesLoaded(image, (instance) => {
                if (instance.isComplete) {
                    loadedImages++;
                    let loadProgress = loadedImages / totalImages;
    
                    gsap.to(loaderEl, {
                        duration: 1,
                        scaleX: loadProgress,
                        backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
                    });
    
                    if (totalImages == loadedImages) {
                        gsap.timeline()
                            .to(".loading__wrapper", {
                            duration: 0.8,
                            opacity: 0,
                            pointerEvents: "none",
                        })
                            .call(() => init());
                    }
                }
            });
        });
    };
    
    waitForImages();
}, []);
    
  return (
<>


<div class="app">

	<div class="cardList">
		<button class="cardList__btn btn btn--left">
			<div class="icon">
				<svg>
					{/* <use xlink:href="#arrow-left"></use> */}
				</svg>
			</div>
		</button>

		<div class="cards__wrapper">
			<div class="card current--card">
				<div class="card__image">
					<img src="https://i.imgur.com/ZtXC9kN.png" alt="" />
				</div>
			</div>

			<div class="card next--card">
				<div class="card__image">
					<img src="https://i.imgur.com/nAmRKAk.png" alt="" />
				</div>
			</div>

			<div class="card previous--card">
				<div class="card__image">
					<img src="https://i.imgur.com/XWi3nRI.png" alt="" />
				</div>
			</div>
		</div>

		<button class="cardList__btn btn btn--right">
			<div class="icon">
				<svg>
					{/* <use xlink:href="#arrow-right"></use> */}
				</svg>
			</div>
		</button>
	</div>


	<div class="infoList">
		<div class="info__wrapper">
			<div class="info current--info">
				<h1 class="text name">Highlands</h1>
				<h4 class="text location">Scotland</h4>
				<p class="text description">The mountains are calling</p>
			</div>

			<div class="info next--info">
				<h1 class="text name">Machu Pichu</h1>
				<h4 class="text location">Peru</h4>
				<p class="text description">Adventure is never far away</p>
			</div>

			<div class="info previous--info">
				<h1 class="text name">Chamonix</h1>
				<h4 class="text location">France</h4>
				<p class="text description">Let your dreams come true</p>
			</div>
		</div>
	</div>


	<div class="app__bg">
		<div class="app__bg__image current--image">
			<img src="https://source.unsplash.com/Z8dtTatMVMw" alt="" />
		</div>
		<div class="app__bg__image next--image">
			<img src="https://source.unsplash.com/9dmycbFE7mQ" alt="" />
		</div>
		<div class="app__bg__image previous--image">
			<img src="https://source.unsplash.com/m7K4KzL5aQ8" alt="" />
		</div>
	</div>
</div>

<div class="loading__wrapper">
	<div class="loader--text">Loading...</div>
	<div class="loader">
		<span></span>
	</div>
</div>


<svg class="icons" style="display: none;">
	<symbol id="arrow-left" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
		<polyline points='328 112 184 256 328 400'
					 style='fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px' />
	</symbol>
	<symbol id="arrow-right" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
		<polyline points='184 112 328 256 184 400'
					 style='fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px' />
	</symbol>
</svg>











<div class="support">
	<a href="https://twitter.com/DevLoop01" target="_blank"><i class="fab fa-twitter-square"></i></a>
	<a href="https://dribbble.com/devloop01" target="_blank"><i class="fab fa-dribbble"></i></a>
</div>
</>
  )
};
export default CardAn;