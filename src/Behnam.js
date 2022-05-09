import React from 'react'
import { useUpdateCounter  } from './ThemeContext'

export default function Behnam() {
    
    const toggleCounter=useUpdateCounter()
  return (
    <div>
         <button onClick={toggleCounter}>Click</button>
        
    </div>
  )
}
