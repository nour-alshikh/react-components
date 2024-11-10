import useLocalStorage from "./useLocalStorage.jsx";
import './theme.css'

export default function Index(){
const [theme , setTheme] = useLocalStorage("theme" , "dark")

    const handleChangeTheme = ()=>{
        theme === "dark"? setTheme("light") : setTheme("dark");
    }

    return (
        <section className="hero h-screen w-screen flex flex-col justify-center items-center" data-theme={theme}>
            <p className="title text-5xl font-bold mb-5">
                Hello,World!
            </p>
            <button className="btn py-4 px-6 rounded-md text-3xl" type="button" onClick={handleChangeTheme}>
                Change Theme
            </button>
        </section>
    )
}