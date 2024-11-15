import React,{useEffect,useState,useMemo} from "react";
import {io} from "socket.io-client";

const App=()=>{
   const socket = useMemo(()=>{
    ()=>io("http://localhost:3000",{
      withCredentials:true,
    }),
    []
   })
};



export default App
