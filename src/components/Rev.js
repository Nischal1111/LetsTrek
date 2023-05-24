import React, { useState } from 'react';
import "../Css/TrekDetail.css";
import List from "../components/List";

const Rev = () => {

    const [name, setName] = useState("");
    const[isEdit,setIsEdit]=useState(false)
    const [editID,setEditID]=useState(false)
    const [reviewList, setReviewList] = useState([]);

    const submitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      // Handle empty input case
    } else if (name && isEdit) {
        setReviewList(
        reviewList.map((item)=>{
            if(item.id===editID){
                return {...item,title:name}
            }
            return item
            
        })
        )
        setEditID(null)
        setName("")
        setIsEdit(false)
    } else {
        const newRev = {
        id: new Date().getTime().toString(),
        title: name
        };
        setReviewList([...reviewList, newRev]);
        setName("");
    }
    };
    const removeItem =(id)=>{
        setReviewList(reviewList.filter((item)=> item.id!==id))
    }
    const editItem=(id)=>{
        const singleRev = reviewList.find((item)=> item.id==id)
        setEditID(id)
        setIsEdit(true)
        setName(singleRev.title)
    }

    return (
    <div className='rev--person' style={{ width: "100%" }}>
        <form onSubmit={submitHandler}>
            <div className="review--input">
            <input type='text' placeholder='Share your thoughts' required value={name} onChange={(e) => setName(e.target.value)} />
            <button className="rev--btn" type='submit'>{isEdit ? "Edit" : "Submit"}</button>
        </div>
        <div className='rev--item' >
            <List items={reviewList} removeItem={removeItem} editItem={editItem}/>
        </div>
        </form>
    </div>
    );
}

export default Rev;

