import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expart/Expart'

const experts =[
    {id:1, name:'AB De Villiers',img:expert1},
    {id:2, name:'Rabada',img:expert2},
    {id:3, name:'Markram',img:expert3},
    {id:4, name:'Sabbir',img:expert4},
    {id:5, name:'Cummings',img:expert5},
    {id:6, name:'Warner',img:expert6}
]
const Experts = () => {
 
    return (
        <div className="mt-5 "> 
            <h1 className='text-center text-primary '>Exparts</h1>
           <div id="experts" className='container row '>
           {
                experts.map(expert =><Expert key={expert.id} expert={expert} ></Expert>)
            }
           </div>
          

        </div>
    );
};

export default Experts;