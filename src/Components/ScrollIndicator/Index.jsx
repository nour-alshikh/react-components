import {useEffect, useState} from "react";

export default function Index(){
    const [data, setData] = useState([])
    const [width, setWidth] = useState("")

    const fetchData = () => {
        fetch('https://dummyjson.com/products?limit=150')
            .then(res => res.json())
            .then(data => setData(data.products))
            .catch(error => console.error("Error fetching data:", error));
    }

    useEffect(() => {
        fetchData()
    }, []);

    const handleScrollIndicatorWidth = ()=>{
        let clientHeight = document.documentElement.clientHeight;
        let documentHeight = document.documentElement.scrollHeight;
        let scrollTop = document.documentElement.scrollTop;

        let height = documentHeight-clientHeight

        setWidth(scrollTop * 100 / height)

        console.log(scrollTop * 100 / height)
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScrollIndicatorWidth)

        return ()=>{
            window.removeEventListener('scroll',()=>{})
        }
    },[])

    return (
        <>
            <section>
                <div className={`h-[4px] w-0 bg-red-600 fixed top-0 right-0 left-0`} style={{width:`${width}%`}}></div>
                {
                    data?.map((product) => {
                        return (
                            <p key={product.id} className="text-center">
                                {product.title}
                            </p>
                        )
                    })
                }
            </section>
        </>
    )
}