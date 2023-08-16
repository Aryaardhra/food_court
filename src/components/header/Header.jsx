import React, { useState } from 'react'
import { MdShoppingBasket, MdAdd, MdLogout} from "react-icons/md";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase.config";
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';

const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user}, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false)

  const login = async() => {
     if(!user){
      const { user: {refreshToken, providerData}}= await signInWithPopup(firebaseAuth, provider);
     dispatch({
      type : actionType.SET_USER,
      user: providerData[0]
     });
     localStorage.setItem("user", JSON.stringify(providerData[0]));
     }
     else{
      setIsMenu(!isMenu);
     }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear()
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  }

  return (
    <>
     <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
    {/* desktop & tablet */}
    <div className="hidden md:flex w-full h-full items-center justify-between ">

        <Link to={"/"} className="flex items-center gap-2">
            <img src="./img/food_court_logo.png"    
                 className="w-12 object-cover"
                 alt= "logo"
                 />
              <p className="text-headingColor text-xl font-semibold">FC!</p>
        </Link>

       <div className="flex items-center gap-6 ">
        <motion.ul 
          initial={{opacity: 0, x: 200}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: 200}}
          className="flex items-center gap-6">

            <li className="text-base text-textColor hover:text-headingColor 
                 duration-100 transition-all ease-in-out cursor-pointer">
                  Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor 
                 duration-100 transition-all ease-in-out cursor-pointer">
                  Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor
                 duration-100 transition-all ease-in-out cursor-pointer">
                   About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor 
                 duration-100 transition-all ease-in-out cursor-pointer">
                   Service
            </li>
            
        </motion.ul>
          
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-xl ml-8 cursor-pointer" />
            <div className=" absolute -top-2 -right-1 w-3 h-3 rounded-full
                 bg-cartNumBg flex items-center justify-center">
                  <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>

        <div className="relative">
        <motion.img 
           whileTap={{scale: 0.6}}
           src={ user ? user.photoURL :"./img/avatar.png"}
           className="w-8 min-w-[30px] h-8 min-h-[30px] drop-shadow-xl cursor-pointer rounded-full" 
           alt="userprofile"
           onClick={login}
           />

        {
          isMenu && (
            <motion.div 
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-9 right-0">

            { user && user.email === "ardhra455@gmail.com" && (

                <Link to={"/createItem"}>
                  <p className=" px-4 py-4 flex items-center 
                     gap-3 cursor-pointer hover:bg-slate-100
                     transition-all duration-100
                     ease-in-out text-textColor 
                     text-base"
                     onClick={()=> setIsMenu(false)}
                     >
                       New Item 
                        <MdAdd/>
                  </p>
                </Link>
            )
            }

             <p className=" px-4 py-4 flex items-center
              gap-3 cursor-pointer hover:bg-slate-100 
              transition-all duration-100
              ease-in-out text-textColor 
              text-base"
              onClick={logout} 
               >
               Log Out 
                <MdLogout/>
             </p>
            </motion.div>
          )
        }
        </div>
       </div>
      </div>

    {/* mobile */}

    <div className="flex items-center justify-between md:hidden w-full h-full">
   
        <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-xl ml-8 cursor-pointer"/>
            <div className=" absolute -top-2 -right-1 w-3 h-3 rounded-full
                  bg-cartNumBg flex items-center justify-center"
                   >
               <p className="text-xs text-white font-semibold">2</p>
            </div>
        </div>

          <Link to={"/"} className="flex items-center gap-2">
            <img src="./img/food_court_logo.png"    
                 className="w-12 object-cover"
                 alt= "logo"/>
              <p className="text-headingColor text-xl font-semibold">FC!</p>
        </Link>

        <div className="relative">
        <motion.img 
           whileTap={{scale: 0.6}}
           src={ user ? user.photoURL :"./img/avatar.png"}
           className="w-8 min-w-[30px] h-8 min-h-[30px] drop-shadow-xl cursor-pointer rounded-full" 
           alt="userprofile"
           onClick={login}
           />

        {
          isMenu && (

            <motion.div 
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-9 right-0">

            { user && user.email === "ardhra455@gmail.com" && (

                <Link to={"/createItem"}>
                  <p className=" px-4 py-4 flex items-center 
                  gap-3 cursor-pointer hover:bg-slate-100
                  transition-all duration-100
                  ease-in-out text-textColor 
                  text-base" 
                  onClick={()=> setIsMenu(false)}
                  >
                  New Item <MdAdd/>
                  </p>
                </Link>
            )
            }

    <ul className="flex  flex-col">
        <li className="text-base text-textColor hover:text-headingColor
             duration-100 transition-all ease-in-out cursor-pointer
             hover:bg-slate-100 px-4 py-4"
               onClick={()=> setIsMenu(false)}
               >
              Home
        </li>
        <li className="text-base text-textColor hover:text-headingColor 
             duration-100 transition-all ease-in-out cursor-pointer
              hover:bg-slate-100 px-4 py-4" 
                onClick={()=> setIsMenu(false)}
                >
                Menu
        </li>
        <li className="text-base text-textColor hover:text-headingColor
             duration-100 transition-all ease-in-out cursor-pointer
              hover:bg-slate-100 px-4 py-4" 
              onClick={()=> setIsMenu(false)}
              >
                 About Us
        </li>
        <li className="text-base text-textColor hover:text-headingColor
              duration-100 transition-all ease-in-out cursor-pointer
               hover:bg-slate-100 px-4 py-4"
               onClick={()=> setIsMenu(false)}
               >
                  Service
        </li>
    </ul>

         <p className=" m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200
             gap-3 cursor-pointer hover:bg-slate-300 
             transition-all duration-100
             ease-in-out text-textColor 
             text-base" 
             onClick={logout} >
               Log Out 
               <MdLogout/>
         </p>

        </motion.div>
          )
        }
      </div>
    </div>
     </header>
    </>
  )
}

export default Header