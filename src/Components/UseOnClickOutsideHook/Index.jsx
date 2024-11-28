import {useRef, useState} from "react";
import useOnClickOutside from "./useOnClickOutside.jsx";

export default function Index() {
    const [showBlueContent, setShowBlueContent] = useState(false)
    const [showRedContent, setShowRedContent] = useState(false)
    const blueRef = useRef();
    const redRef = useRef();

    useOnClickOutside(blueRef, () => setShowBlueContent(false))
    useOnClickOutside(redRef, () => setShowRedContent(false))

    return (
        <>
            <div >


            {showBlueContent ? (
                <div ref={blueRef} className="bg-blue-700 text-white p-14">
                    <p className="text-white">Please Click out side to close the blue modal</p>
                </div>
            ) : (
                <button className="bg-blue-700 text-white p-5" onClick={()=>setShowBlueContent(true)}>
                    Click To open Blue Modal!
                </button>
            )} {showRedContent ? (
                <div ref={redRef} className="bg-red-700 text-white p-14">
                    <p className="text-white">Please Click out side to close the red modal</p>
                </div>
            ) : (
                <button className="bg-red-700 text-white p-5" onClick={()=>setShowRedContent(true)}>
                    Click To open Red Modal!
                </button>
            )}
            </div>
        </>
    )
}