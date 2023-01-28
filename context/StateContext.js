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
    const [search,setSearch]= useState(false); 
    
    const  clickTop = async () => {
    setActive(false);
    const res =  await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f743585fbb67230207bebc2b36df5b02',{
        next:{revalidate:180}}
        
        );
        const data = await res.json();
        // console.log('data = ',data)
        setPopular(data.results);
        setSearch(false)
}

const  clickPop = async () => {
    setActive(true);
    const res =  await fetch('https://api.themoviedb.org/3/movie/popular?api_key=f743585fbb67230207bebc2b36df5b02',{
        next:{revalidate:180}}
        
        );
        const data = await res.json();
        // console.log('data = ',data)
        setPopular(data.results);
        setSearch(false)
}


const submitContact = async (event) => {
  event.preventDefault();
  // alert(`So your name is ${event.target.name.value}?`);
  const query = event.target.name.value;
  const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=f743585fbb67230207bebc2b36df5b02&query=${query}`);
  const res =await data.json();
  // console.log(res.results)
  setPopular(res.results);
  // setActive(false)
  setSearch(true)
};



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
            submitContact,
            search,
          }}
        >
          {children}
        </Context.Provider>
      );
    };
    
    export const useStateContext = () => useContext(Context);
    
