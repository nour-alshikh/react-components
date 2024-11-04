import {useRef, useState,useEffect} from "react";

const Index = () => {
    const [color, setColor] = useState("#000000");
    const [type, setType] = useState("hex");
    const [showMessage, setShowMessage] = useState(false)
    const timeoutRef = useRef(null);

    const handleCopy =  async () => {
        try {
            await navigator.clipboard.writeText(color);
            setShowMessage(true)

            // Clear any existing timeout to avoid memory leaks
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => {
                setShowMessage(false);
            }, 500);
        } catch (error) {
            console.error('Unable to copy to clipboard:', error);
        }
    }

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    function randomColor(length) {
        return Math.floor(Math.random() * length);
    }

    function handleHEXGenerator(e){
        e.stopPropagation();
        setType("hex")
        const hexdigits = ["0", "1", "2", "3", "4", "5", "6", "7","8" , "9" , "a" , "b" , "c" , "d" , "e", "f"];

        let hexColor = "#";

        for (let i = 0; i < 6;i++){
            hexColor+= hexdigits[randomColor(hexdigits.length)];
        }

        setColor(hexColor);

    }

    function handleRGBGenerator(e){
        e.stopPropagation();
        let r = randomColor(265)
        let g = randomColor(265)
        let b = randomColor(265)
        setType("rgb");
        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    return (
        <>
            <section  className="h-screen " style={{background:color}}>
                <div className="w-1/3 mx-auto pt-3">
                    <button className="bg-white border-0 outline-0 rounded px-3 py-2 mx-2" onClick={(e)=>handleHEXGenerator(e)}>Generate HEX Color</button>
                    <button className="bg-white border-0 outline-0 rounded px-3 py-2 mx-2" onClick={(e)=>handleRGBGenerator(e)}>Generate RGB Color</button>
                </div>

                <div className="w-full h-full flex flex-col justify-center items-center gap-8">
                    <div className="text-white text-7xl">
                    {type === "hex" ? "HEX" : "RGB"}
                    </div>
                    <div onClick={handleCopy} className="text-white text-7xl cursor-pointer">
                        {color}
                    </div>
                    {
                    showMessage && <div className="py-1 px-2 bg-white font-bold rounded">
                        Copied To clipboard
                    </div>
                    }
                </div>

            </section>
        </>
    )
}

export default Index;