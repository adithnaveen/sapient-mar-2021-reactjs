import React from "react"



const Carousel=({banners})=>{
    return(
        <div>
        {banners.map(item=>{return(
            <img
            className="d-block w-100"
            src= {item.bannerImageUrl}
            alt={item.bannerImageAlt}
            />
     )})}
       </div>
        )
}

export default Carousel; 