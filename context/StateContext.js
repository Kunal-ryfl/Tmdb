'use client'
import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    use,
  } from "react";

  
  const Context = createContext();
  
  export const StateContext = ({ children }) => {
    
    const [popular,setPopular] = useState([]);
    const [active,setActive]= useState(true); 
    const [search,setSearch]= useState(false); 

    const [showSearch,setshowSearch]= useState(false); 
    


    const  clickTop = async () => {
    setActive(false);
    const res =  await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API}`,{
        next:{revalidate:180}}
        
        );
        const data = await res.json();
        // console.log('data = ',data)
        setshowSearch(false);
        setPopular(data.results);
        setSearch(false)
}

const  clickPop = async () => {
    setActive(true);
    const res =  await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API}`,{
        next:{revalidate:180}}
        );
        const data = await res.json();
        // console.log('data = ',data)
        setshowSearch(false);
        setPopular(data.results);
        setSearch(false)
}

const  clickSearch = async () => {  
  setshowSearch(true);
  setSearch(true);
  setActive(false);
  // console.log(showSearch)
}


const submitContact = async (event) => {
  event.preventDefault();
  // alert(`So your name is ${event.target.name.value}?`);
  const query = event.target.name.value;
  // console.log("query = ",query)
  const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API}&query=${query}`);
  const res =await data.json();
  setPopular(res.results);
  // setActive(false)
  setSearch(true)
};


useEffect(()=>{
    getData()
    console.log("Api",process.env.NEXT_PUBLIC_API)
},[]);

  
    async function getData() {
          const res =  await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API}`,{ next:{revalidate:180}});
          
      const data = await res.json();
      
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
            clickSearch,
            showSearch,
          
          }}
        >
          {children}
        </Context.Provider>
      );
    };
    
    export const useStateContext = () => useContext(Context);
    
