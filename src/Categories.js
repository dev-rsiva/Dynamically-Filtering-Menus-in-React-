
function Categories({allCategories, filterMenus}){

  return(
    

      <div id='category'>
        {allCategories.map((eachCategory, index)=> <button key={index} onClick={()=> filterMenus(eachCategory)}>{eachCategory}</button> )}        
      </div>
    
  )}

export default Categories




//Manual Method
// import React from 'react';

// const Categories = ({eachitem}) => {
//   return <div id='eachitem'>
//             <img src='eachitem.img' alt='eachitem.desc'/>
//             <h2>{eachitem.title}</h2>
//             <p>{eachitem.price}</p>
//             <p>{eachitem.desc}</p>
//   </div>
// }

// export default Categories;



