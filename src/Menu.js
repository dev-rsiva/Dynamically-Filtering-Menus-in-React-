
function Menu({menus}){

  return(<div id='menus'> 
            {menus.map((eachmenu)=>{

                  return <div id='menu'>

                    <img src={eachmenu.img}/>
                    <h2>{eachmenu.title}</h2>
                    <p>{eachmenu.price}</p>
                    <p>{eachmenu.desc}</p>

                        </div>
                })
            }
        </div>
  )

}

export default Menu 


//Manual Method
// import React,{useState, useEffect} from 'react';
// import Categories from './Categories';

// const Menu = ({menulist}) => {

//   const [items, setItems] = useState(menulist)
//   const [selection, setSelection] = useState('')


//   useEffect(()=>{
//   if(selection==='Breakfast'){
//     setItems(menulist.filter((eachitem)=> eachitem.category === 'breakfast'))
//   }else if(selection==='Lunch'){
//     setItems(menulist.filter((eachitem)=> eachitem.category === 'lunch'))
//   }else if(selection==='Shakes'){
//     setItems(menulist.filter((eachitem)=> eachitem.category === 'shakes'))
//   }else if(selection==='All'){
//     setItems(menulist)
//   }else {
//     return
//   }
// }, [selection, menulist])



//   return <div id="wholemenu">
//           <div id='menubtn'>
//             <button onClick={()=>setSelection('All')}>All</button>
//             <button onClick={()=>setSelection('Breakfast')}>Breakfast</button>
//             <button onClick={()=>setSelection('Lunch')}>Lunch</button>
//             <button onClick={()=>setSelection('Shakes')}>Shakes</button>
//           </div>

//           <div id="menu"> 
      
//             {items.map((eachitem)=> <Categories eachitem={eachitem}/>  )}
            
          
//           </div>
          
  
  
//   </div>
// }

// export default Menu;
