import React from 'react'
import { useRef } from 'react';
import "./Cursor.style.css"
import AnimatedCursor from "react-animated-cursor"
function Cursor() {
    var touchInterval;
    const mouseCursor = useRef(null);
    const cursor = useRef(null);
    window.addEventListener("mousemove", (e)=>{
        console.log(e.pageX, e.pageY)

        // mouseCursor.current.style.borderRadius = "50%";
        // mouseCursor.current.style.transform = "scale(1)";
        
        // mouseCursor.current.style.border = "1px solid white";
        // mouseCursor.current.style.top = e.pageY-10 + 'px';
        // mouseCursor.current.style.left = e.pageX-10 + 'px';
        // cursor.current.style.top = e.pageY + 'px';
        // cursor.current.style.left = e.pageX + 'px';
        // if(touchInterval)
        //     clearInterval(touchInterval);
        // touchInterval = setInterval(()=>{
        //   mouseCursor.current.style.borderRadius = "0%";
        // mouseCursor.current.style.transform = "scale(1.5)";
        // }, 300);
    })
  return (
    <div>
        {/* <div ref={mouseCursor} class="fly"></div>
        <span ref={cursor} class="curs"></span> */}
        <AnimatedCursor
      innerSize={10}
      outerSize={30}
      color='255, 255, 255'
      outerAlpha={0.5}
      innerScale={1}
      outerScale={1.5}
      clickables={[
        '.projects--body', '.skill--box', '.experience-card', '.education-card']} />
    </div>
  )
}

export default Cursor
