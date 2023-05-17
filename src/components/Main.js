import React,{useState,useEffect} from 'react'
import '../Css/Main.css';
import Homedata from '../Data/Homedata';


const Main = () => {
    const [home,setHome]=useState(Homedata)
    const [index,setIndex]=useState(0);
    useEffect(()=>{
    if(index<0){
        setIndex(home.length-1);
    }
    if(index>home.length-1){
        setIndex(0)
    }
    },[index,home])
    useEffect(()=>{
    let slider = setInterval(()=>{
        setIndex(index+1)
    },7000)
    return ()=>{
        clearInterval(slider);
    }
    },[index])
return (<>
    <div className='main'>
        {home.map((back,picindex)=>{
            const {id,title,text,url,btnClass,btnText,image}=back;
            let position='nextSlide'
            if (picindex===index){
                position='activeSlide'
            }
            if(picindex===index-1 || (index===0 && picindex===home.length-1)){
                position='lastSlide'
            }
            return(<>
                <article key={id} className={position}>
                <img src={image} alt='Image'></img>
                <div className='content'>
                    <h1>{title}</h1>
                    <p>{text}</p>
                    <a href={url} className={btnClass}>
                        {btnText}
                    </a>
                </div>
                </article>
            </>)
        })}
    </div>
    </>
)
}

export default Main
