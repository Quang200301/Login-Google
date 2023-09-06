import React from 'react';
import './home.css';

import { FaRegStarHalfStroke,FaMagnifyingGlass } from "react-icons/fa6";
const Home = () => {
   
    const handleclick=()=>{
        alert("sơn handsome cảm ơn bạn!")
    }
    const handlemua=()=>{
        alert("Thank you ")
    }
    const Logout = ()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        
        <div style={{padding:"10px"}}>
               
              <input  type='text' placeholder=' Search here........................'   style={{width:"460px", height:"25px", padding:"10px", borderRadius:"20px"}}  />
             <FaMagnifyingGlass />
             <button onClick={Logout}>Logout</button>
        <div className='one'>
          
            <div className='one1'>
                <h2>Anh sơn đẹp trai nghe lời </h2>
                
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU' />
            <h2><FaRegStarHalfStroke/><FaRegStarHalfStroke/><FaRegStarHalfStroke/></h2>
            <p onClick={handlemua}>Mua <span className='son' style={{color:"red"}} onClick={handleclick}> không  </span></p>
            <h2>đã có người yêu!!</h2>
            </div>
            <div className='one2'>
            <h2>Anh sơn đẹp trai nghe lời</h2>
       
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU'/>
            <h2><FaRegStarHalfStroke/><FaRegStarHalfStroke/><FaRegStarHalfStroke/></h2>
            <p onClick={handlemua}>Mua <span className='son' style={{color:"red"}} onClick={handleclick}> không  </span></p>
            <h2>đã có người yêu!!</h2>
            </div>
            <div className='one3'>
            <h2>Anh sơn đẹp trai nghe lời </h2>
    
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU'/>
            <h2><FaRegStarHalfStroke/><FaRegStarHalfStroke/><FaRegStarHalfStroke/></h2>
            <p onClick={handlemua}>Mua <span className='son' style={{color:"red"}} onClick={handleclick}> không  </span></p>
            <h2>đã có người yêu!!</h2>
            </div>
            <div className='one1'>
                <h2>Anh sơn đẹp trai nghe lời</h2>
     
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU' />
            <h2><FaRegStarHalfStroke/><FaRegStarHalfStroke/><FaRegStarHalfStroke/></h2>
            <p onClick={handlemua}>Mua <span className='son' style={{color:"red"}} onClick={handleclick}> không  </span></p>
            <h2>đã có người yêu!!</h2>
            </div>
            <div className='one2'>
            <h2>Anh sơn đẹp trai nghe lời</h2>
    
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU'/>
            <h2><FaRegStarHalfStroke/><FaRegStarHalfStroke/><FaRegStarHalfStroke/></h2>
            <p onClick={handlemua}>Mua <span className='son' style={{color:"red"}} onClick={handleclick}> không  </span></p>
            <h2>đã có người yêu!!</h2>
            </div>
            <div className='one3'>
            <h2>Anh sơn đẹp trai nghe lời </h2>
     
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg&usqp=CAU'/>
            <h2><FaRegStarHalfStroke/><FaRegStarHalfStroke/><FaRegStarHalfStroke/></h2>
            <p onClick={handlemua}>Mua <span className='son' style={{color:"red"}} onClick={handleclick}> không  </span></p>
            <h2>đã có người yêu!!</h2>
            </div>
        </div>
        </div>
    );
};

export default Home;