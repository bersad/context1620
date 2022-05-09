import React,{useContext,useState} from 'react'

const ThemeContext=React.createContext()
const ThemeUpdateContext=React.createContext()
const CounterContext=React.createContext()
const UpdateCounterContext=React.createContext()

export function useCounter(){
    return useContext(CounterContext)
}
export function useUpdateCounter(){
    return useContext(UpdateCounterContext)
}

export function useTheme(){
    return useContext(ThemeContext)
}
export function useThemeUpdate(){
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider({children}){
    const [darkTheme,setDarkTheme]=useState(true)
    const [counter,setCounter]=useState(0)
    
    function toggleCounter(){
        setCounter(counter + 1)
    }

    function toggleTheme(){
        setDarkTheme(prevDarkTheme=>!prevDarkTheme)
    }
    return(
        <CounterContext.Provider value={counter}>
        <UpdateCounterContext.Provider value={toggleCounter}>
        <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
            {children}
        </ThemeUpdateContext.Provider >
        </ThemeContext.Provider >
        </UpdateCounterContext.Provider >
            </CounterContext.Provider >
         
    )
}