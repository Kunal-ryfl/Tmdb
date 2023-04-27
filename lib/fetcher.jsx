export async function getPopular() {
    const [
      PopularRes,
    ] = await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API}`
      ),
    
    ])
  
    if (
      !PopularRes.ok 
    ) {
      throw new Error("Failed to fetch shows")
    }
  
    const [popular] =
      (await Promise.all([
        PopularRes.json(),
         ])) 
  
    return {
      popular: popular?.results,
     
    }
  }
export async function getTrending() {
    const [
      TrendingRes,
    ] = await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.NEXT_PUBLIC_API}`
      ),
    
    ])
  
    if (
      !TrendingRes.ok 
    ) {
      throw new Error("Failed to fetch shows")
    }
  
    const [trending] =
      (await Promise.all([
        TrendingRes.json(),
         ])) 
  
    return {
      trending: trending?.results,
     
    }
  }
