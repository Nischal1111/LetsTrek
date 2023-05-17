import React from 'react'
import ImgGallery from '../Data/Imgglry';
import Masonry,{ResponsiveMasonry} from "react-responsive-masonry";

const MasonryImg = () => {
return (
<ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:3}} >
    <Masonry gutter='1.5rem'>
    {ImgGallery.map((item,index)=>{
        return (
        <img className="galleryImg"src={item} key={index} alt="" ></img>
    )})}
    </Masonry>
</ResponsiveMasonry>
)
}

export default MasonryImg
