import React  from 'react'
import Behnam from './Behnam'
import FunctionContexComponent from './FunctionContexComponent'
import { ThemeProvider } from './ThemeContext'

 
export default function App() {
 return(
   <ThemeProvider>
     <FunctionContexComponent></FunctionContexComponent>
     <Behnam></Behnam>
   </ThemeProvider>
 )
}
