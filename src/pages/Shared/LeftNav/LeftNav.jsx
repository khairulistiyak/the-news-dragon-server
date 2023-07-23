import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([])
    // console.log(categories) 
    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h4 className='mb-4'>All Category</h4>
            <div className='ps-3'>
                {
                    categories.map(category => < p key={category.id} >

                        <Link to={`/category/${category.id}`} className='text-black text-decoration-none'>{category.name}</Link>

                    </p>)
                }


            </div>

        </div >
    );
};

export default LeftNav;