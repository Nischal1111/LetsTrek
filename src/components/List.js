import React from 'react'
import "../Css/TrekDetail.css"
import {FaEdit,FaTrash} from "react-icons/fa"
import {BsArrowReturnRight} from "react-icons/bs"
import avatar from "../assets/avatar.jpg"

const List = ({items,removeItem,editItem}) => {
return (
    
    <div style={{marginTop:".5rem",fontSize:"1.2rem"}}>
    {items.map((item)=>{
        const {id,title}=item;
        return(<>

        <div style={{width:"100%",marginBottom:"1rem"}} key={id}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <div className='rev--name'>
                        <img src={avatar}/>
                        <h3 >Nischal</h3>
                    <span className='rev-stars' >
                        5 <i className="fa-solid fa-star"></i>
                    </span>
                    </div>
                </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"}}className='rev--part'>
            <h5 style={{marginLeft:"4.2rem"}}><span><BsArrowReturnRight className='arrow'/></span>{title}</h5>
            <div className='btn-container'>
                <button className='edit-btn' type='button' onClick={()=>editItem(id)}>
                    <FaEdit/>
                </button>
                <button className='delete-btn' type='button'onClick={()=>removeItem(id)}>
                    <FaTrash/>
                </button>
            </div>
            </div>
        </div>       
        </>)
    })}
    </div>

)
}

export default List
