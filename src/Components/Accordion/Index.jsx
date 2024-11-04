import {data} from "./data.js";
import {useState} from "react";

const Index = () => {

    const [selected, setSelected] = useState(null)
    const [enableMultiSelect, setEnableMultiSelect] = useState(false)
    const [multipleSelected, setMultipleSelected] = useState([])

    const handleSingleSelect = (id)=>{
        selected === id ? setSelected(null) : setSelected(id)
    }

    const handleMultiSelect = (id)=> {
     let multiSelectedCpy = [...multipleSelected];
        multiSelectedCpy.indexOf(id) === -1 ? multiSelectedCpy.push(id) : multiSelectedCpy.splice(multiSelectedCpy.indexOf(id) , 1);

        setMultipleSelected(multiSelectedCpy);
    }


   const handleEnableMultiSelect = ()=>{
       setEnableMultiSelect(!enableMultiSelect)
       setSelected(null);
       setMultipleSelected([])
   }

    return (
        <>
            <section className="p-0 m-0 h-lvh bg-amber-300" >
                <div className="w-2/3 mx-auto my-2">
                    <div className="text-center">
                        <button type="button" className="rounded bg-blue-800 text-white p-2 my-3" onClick={()=>handleEnableMultiSelect()}>Enable Multi Select</button>
                    </div>
                    {
                        data.map(item=>(

                            <div key={item.id} className="bg-blue-700 text-white py-3 mb-2  px-4 rounded-md cursor-pointer">

                                <div className="text-center  flex justify-between items-center" onClick={enableMultiSelect ? ()=>handleMultiSelect(item.id) : ()=>handleSingleSelect(item.id)}>
                                    <div className="font-bold ">
                                        {item.question}
                                    </div>
                                    <div>
                                            +
                                    </div>
                                </div>
                                {
                                   multipleSelected.indexOf(item.id) !== -1 || selected === item.id ? (
                                        <div className="text-center mt-3">
                                            {item.answer}
                                        </div>
                                    ) : null
                                }
                            </div>

                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Index