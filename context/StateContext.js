'use client'
import React, {
    createContext,
    useContext,
    useState,
    useEffect,
  } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
 
    const [popular,setPopular] = useState([]);
    const [active,setActive]= useState(true); 
    
    const  clickTop = async () => {
    setActive(false);
    const res =  await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f743585fbb67230207bebc2b36df5b02',{
        next:{revalidate:180}}
        
        );
        const data = await res.json();
        // console.log('data = ',data)
        setPopular(data.results);
}

const  clickPop = async () => {
    setActive(true);
    const res =  await fetch('https://api.themoviedb.org/3/movie/popular?api_key=f743585fbb67230207bebc2b36df5b02',{
        next:{revalidate:180}}
        
        );
        const data = await res.json();
        // console.log('data = ',data)
        setPopular(data.results);
}



useEffect(()=>{
    getData()
},[]);

  
    async function getData() {

          const   res =  await fetch('https://api.themoviedb.org/3/movie/popular?api_key=f743585fbb67230207bebc2b36df5b02',{
                next:{revalidate:180}}
                
                );
        
  
      const data = await res.json();
    //   console.log('data = ',data)
      setPopular(data.results);
    }




     
    //  console.log(active)

    

    return (
        <Context.Provider
          value={{
            popular,
            setPopular,
            clickTop,
            clickPop,
            active,
          }}
        >
          {children}
        </Context.Provider>
      );
    };
    
    export const useStateContext = () => useContext(Context);
    
