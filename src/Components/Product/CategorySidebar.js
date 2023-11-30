import React from 'react'
import img1 from '../../Assets/Image/1.png'
import img2 from '../../Assets/Image/2.png'
import vegetable from '../../Assets/Image/vegetable.png'
import veg1 from '../../Assets/Image/veg1.png'
import './CategorySidebar.css'

const CategorySidebar = () => {
    const data = [
        {
            id: 1,
            categoryimage: img1,
            categoryname: 'Category 1'
        },
        {
            id: 2,
            categoryimage: img2,
            categoryname: 'Category 2'
        },
        {
            id: 3,
            categoryimage: vegetable,
            categoryname: 'Fresh Vegetables'
        },
        {
            id: 4,
            categoryimage: veg1,
            categoryname: 'Category 4'
        },
        {
            id: 5,
            categoryimage: img1,
            categoryname: 'Category 5'
        },
        {
            id: 6,
            categoryimage: img2,
            categoryname: 'Category 6'
        },
        {
            id: 7,
            categoryimage: vegetable,
            categoryname: 'Category 7'
        },
        {
            id: 8,
            categoryimage: veg1,
            categoryname: 'Category 8'
        }
    ]
    return (
        <div className='categorysidebar'>
            {
                data.map((item) => {
                    return (
                        <div className='category'>
                            <img src={item.categoryimage} alt='categoryimage' />
                            <h3>{item.categoryname}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategorySidebar