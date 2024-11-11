import {useState} from "react";

export default function Tabs({data}){

    const [currentTab, setCurrentTab] = useState(1)

    return (
        <>
            <div className="grid grid-cols-4 gap-4 py-5 px-1">
            {
                data.map((item)=>{
                    return (
                        <div key={item.id} onClick={()=>setCurrentTab(item.id)} className={`col-span-1 py-3 px-2 ${currentTab === item.id ? "bg-blue-900" : "bg-blue-600"} text-white rounded-md cursor-pointer`}>
                          {item.question}
                        </div>
                    )
                })
            }
            </div>

            <p className="bg-amber-200 px-4 py-3 mx-4">
            {
                data[currentTab] && data[currentTab].answer
            }
            </p>
        </>
    )
}