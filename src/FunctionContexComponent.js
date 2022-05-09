import React from 'react'
import { useTheme,useThemeUpdate,useCounter   } from './ThemeContext'
    

export default function FunctionContexComponent() {
  const counter=useCounter()
 

   const darkTheme=useTheme( )
   const toggleTheme=useThemeUpdate()
    const themeStyles={
        backgroundColor:darkTheme ?'red':'blue',
        color:darkTheme?'blue':'red',
        padding:'2rem',
        margin:'2rem'

    }     

  return (
 
    <div>
     <button onClick={toggleTheme}>toggle Theme</button>
      
      <div style={themeStyles}>Function Theme</div>
      <div>{counter}</div>
     
      </div>
    
  )
}
