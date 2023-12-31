import React, { useEffect } from 'react'
import { CreateContainer, Header, MainContainer, RowContainer, } from './components';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunction';
import { data } from 'autoprefixer';
import { actionType } from './context/reducer';
import About from './components/about/About';
import Menu from './components/menu/Menu';
import { Service } from './components/service/Service';

const App = () => {

  const [{foodItems}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data)=>{
      console.log(data);
      dispatch({
        type : actionType.SET_FOOD_ITEMS,
        foodItems : data
      })
    });
  };

  useEffect(()=>{
    fetchData();
  },[]);
  return (
    
      <AnimatePresence mode='wait'>
       <div className="w-screen h-auto flex flex-col bg-primary ">
        <Header/>

      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
      
         <Routes>
          <Route exact path="/" Component={MainContainer}/>
          <Route path='/createItem' Component ={CreateContainer}/>
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/service" element={<Service />} />
         </Routes>

      </main>
       </div>
     </AnimatePresence>
   
  )
}

export default App;
