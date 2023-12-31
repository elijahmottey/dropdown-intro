import React from 'react'

function card({children}) {

  return (
    <div  style={{
        color:"hsl(0,0%,8%)",
        backgroundColor:"white",
        width:"8rem",
        height:"auto",
        borderRadius:"5px",
        position:"absolute",
        right:"18rem",
        top:"1.5rem",
        zIndex:"1",
        boxShadow:"2px 2px 3px 3px hsl(0,0%,41%)",
        textAlign:"center",
        padding:"7px",

        lineHeight:"1.7rem"
        

    }}>
      {children}
    </div>
  )
}

export default card
