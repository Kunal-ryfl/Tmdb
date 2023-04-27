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
    
    // const [active,setActive]= useState(true); 
    const [search,setSearch]= useState(false);
    const [showSearch,setshowSearch]= useState(false); 
    const [searchArray,setSearchArray] = useState([]);    
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


const  clickSearch =  () => {  
  !showSearch? setshowSearch(true):setshowSearch(false)
  // setSearch(true);
  // setActive(false);
  // console.log(showSearch)
}

const submitContact = async (event) => {
  // event.preventDefault();
  // alert(`So your name is ${event.target.name.value}?`);
  const query = event.target.value;
  
  setSearch(true)
  if(query.length <1){

    console.log(search)
      setSearch(false)
    console.log("empty")
    console.log(search)
    return;
  } 
    
  console.log("query = ",query)
  const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API}&query=${query}`);
  const res =await data.json();
  setSearchArray(res)
  // setActive(false)
};


    //  console.log(active)

    

    return (
        <Context.Provider
          value={{
            movies,
            submitContact,
            search,
            clickSearch,
            showSearch,
            searchArray
          
          }}
        >
          {children}
        </Context.Provider>
      );
    };
    
    export const useStateContext = () => useContext(Context);
    
