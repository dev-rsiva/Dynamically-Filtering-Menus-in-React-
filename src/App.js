import React,{useState} from 'react';
import Categories from './Categories'
import Menu from './Menu'
import items from './data'

  const allCategory = new Set(items.map((item)=> item.category))
  const allCategories = ['all', ...allCategory ]

function App(){

    const [categories, setCategories] = useState(allCategories)

    const [menus, setMenus] = useState(items)
    

    function filterMenus(eachCategory){

      if(eachCategory==='all'){
          setMenus(items)
          console.log(menus)
          return       
      }

      const newItems = items.filter((currItem)=> {
        return currItem.category===eachCategory
    })  
          setMenus(newItems)      
      
      }
      
      console.log(menus)


  return(
    <div id='all'>
      <h1>Our Menu</h1>
      <Categories allCategories={allCategories} filterMenus={filterMenus}/>
      <Menu menus={menus}/>
    </div>
  )
}


export default App



//Manual Method
// import React, { useState } from 'react';
// import Menu from './Menu';
// import Categories from './Categories';
// import items from './data';

// function App() {

//   const [menulist, setMenulist] = useState(items)
  

//   return <>
//   <h1>Our Menu</h1>
//   <Menu menulist={menulist}/>
//   </>
// }

// export default App;
