

import "./CardHover.css"

function CardHover({ title, detail, image, path }) {

  return (
    <div class="card-hover container mx-auto " style={{ width: '300px', height: '300px', borderRadius: '10px', zIndex: 100 }}>
    <div class="card-hover__content">
      <h3 class="card-hover__title">
       {title}
      </h3>
      <p class="card-hover__text">{detail}</p>
      <a href="#" class="card-hover__link">
        <span>Get Now</span>
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>        
      </a>
    </div>
    <div class="card-hover__extra">
      <h4>Be the First</h4>
    </div>
    <img src="/assets/tin.png" alt="" className="object-contain" />
  </div>
  )
};
export default CardHover;