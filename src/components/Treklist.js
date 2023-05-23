import React, { useContext, useEffect, useState } from 'react';
import { TrekContext } from "./TrekContext";
import SingleTrek from "./SingleTrek";
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

const Treklist = () => {
const { trekking, loading } = useContext(TrekContext);
const [pageCount, setPageCount] = useState(0);
const [page, setPage] = useState(0);
const itemsPerPage = 6;

useEffect(() => {
    const pages = Math.ceil(trekking.length / itemsPerPage);
    setPageCount(pages);
}, [trekking]);

if (loading) {
    return <ImSpinner2 className='loading' />;
}

return (
    <section className='ooo'>
    <div className="container">
        {trekking.slice(page * itemsPerPage, (page + 1) * itemsPerPage).map((singleTrek, index) => (
            <div key={index} className='no-line'>
            <SingleTrek singleTrek={singleTrek} />
            </div>
        ))}
        
    </div>
        <div className='pagination' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem", marginTop: "1.5rem" }}>
        {[...Array(pageCount).keys()].map(number => (
            <span key={number} onClick={() => setPage(number)} 
            className={page === number ? "active-page" : ""}
            >
            {number + 1}
            </span>
        ))}
        </div>
    </section>
);
};

export default Treklist;

