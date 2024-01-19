
import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  //context-api mein jo methods as value provide kare unko wahan define 
  //  nahi kara. For that just create a same name function here
  // and define the logic so it automatically gets there.
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // use js to change theme 
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center dark:bg-black">
        <div className="w-full flex justify-end md:mr-20 mr-10">
          <ThemeBtn />
        </div>
        <div className="w-full max-w-sm mx-auto mb-5">
          <Card />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App