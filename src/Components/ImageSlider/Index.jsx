import {useEffect, useState} from "react";
import {BiRightArrow, BiLeftArrow} from "react-icons/bi";
import {VscCircleFilled} from "react-icons/vsc";

const Index = ({url}) => {

    const [data, setData] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    async function fetchImages (url){
       try {
           setLoading(true)
         const response = await fetch(url);
         const data = await response.json();
         if(data){
             setData(data)
             setLoading(false)
         }
       }catch (err){
           setLoading(false)
           setError(err.message)
       }
    }

    const handlePrevious = ()=>{

        if(currentSlide === 0 ){
            setCurrentSlide(data.length - 1)
        } else{
            setCurrentSlide(currentSlide - 1)
        }
    }
    const handleNext = ()=>{

        if(currentSlide === data.length -1 ){
            setCurrentSlide(0)
        } else{
            setCurrentSlide(currentSlide + 1)
        }
    }

    const handleSlide = (index)=>{
        setCurrentSlide(index)

    }

    useEffect(() => {
        if(url !== ""){
            fetchImages(url)
        }
    }, [url]);

    if(loading) {
        <h1>Loading...</h1>
    }

    if(error){
        <h1>Error...</h1>
    }


    return <section className="h-screen w-5/6 flex justify-center items-center mx-auto relative">

        <BiLeftArrow className="absolute top-1/2 left-1 text-white cursor-pointer" size={40} onClick={handlePrevious} />
        {data.map((imgItem,index)=>{
            return <img key={imgItem.id} src={imgItem.download_url} alt={imgItem.download_url} className={index !== currentSlide ? "hidden" : "" } />
        })}
        <BiRightArrow className="absolute top-1/2 right-1 text-white cursor-pointer" size={40} onClick={handleNext} />

        <div className="absolute bottom-0 right-0.5 flex">
            {data.map((imgItem,index)=>{
                return <VscCircleFilled size={50} key={index} className={index !== currentSlide ? "text-gray-700 cursor-pointer" : "text-gray-800 cursor-pointer" } onClick={()=>handleSlide(index)} />
            })}
        </div>
    </section>

}

export default Index;