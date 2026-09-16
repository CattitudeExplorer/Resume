import {useState} from "react";
function Home() {
  const [isShow,setIsShow]=useState(true)
  return (
    <>
      <h1>useState-Hook</h1>

      <button onClick={()=>setIsShow(!isShow)}>{isShow ?"Hide" : "show"}</button>
      <h1>
        {isShow && "Hola"}
        </h1>
    </>
  )
}

export default Home;
