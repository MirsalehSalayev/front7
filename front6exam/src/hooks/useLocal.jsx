import  { useEffect, useState } from 'react'

function useLocal(key,initVal="") {
    const [values, setValues] = useState(localStorage.getItem(key)?JSON.parse(localStorage.getItem(key)):initVal)
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(values))
    },[values,key])
  return [values,setValues]
}

export default useLocal