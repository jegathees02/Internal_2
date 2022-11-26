import React from "react";
import { useState,useEffect } from "react";


const Change=()=>{
    const [col,setCol]=useState("");
    useEffect(()=>{
    document.getElementById("dropdown-main").style.backgroundColor=col;})
    return (
      <><h1>Color changer</h1>
              <div id="dropdown-main"> </div>
            <div><h3>Color change Area</h3></div>
        <select id="dropdown" onChange={(col_current) => setCol(col_current.target.value)} placeholder="Select Color">
          <option  value="none" >Dropdown</option>
          <option value="lime">Lime</option>
          <option value="lavender">Lavender</option>
          <option value="crimson">Crimson</option>
          <option value="darkblue">Dark Blue</option>
          <option value="teal">Teal</option>
          <option value="rebeccapurple">Rebecca Purple</option>
          <option value="ghostwhite">Ghost White</option>
          <option value="aquamarine">Aqua Marine</option>
          <option value="aliceblue">Alice Blue</option>
        </select>
</>
    );
 }
 export default Change;