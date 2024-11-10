import {useState} from "react";
import QRCode from "react-qr-code";

export default function Index(){
    const [input, setInput] = useState("")
    const [code, setCode] = useState("")

    const handleQrGenerator = ()=>{
        setCode(input)
        setInput("")
    }
    return (
        <section className="w-screen h-screen bg-gray-200 flex flex-col justify-center items-center">
            <div className="flex gap-3 mb-5">
                <input type="text" value={input} placeholder="Enter Your Text..." className=' border-2 border-gray-500' name="input" onChange={(e)=>setInput(e.target.value)} />
                <button type="button" className="py-2 px-3 bg-blue-700 text-white rounded-md cursor-pointer disabled:bg-blue-300 disabled:cursor-not-allowed" onClick={handleQrGenerator} disabled={input && input.trim() !== "" ? false : true}>Generate</button>
            </div>

            <QRCode value={code} id="qr_code" size={400} bgColor="#fff" />
        </section>
    )
}