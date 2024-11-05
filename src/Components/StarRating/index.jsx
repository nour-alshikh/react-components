import { BsFillStarFill } from "react-icons/bs";
import {useState} from "react";
const Index = ({starCount = 5}) => {
  
    const [hover, setHover] = useState(0)
    const [rating, setRating] = useState(0)


    function handleHover(ind) {
        setHover(ind);
    }

    function handleClick(ind) {
        setRating(ind)
    }

    function handleLeave() {
        setHover(rating);
    }

    return (
      <section className="p-0 m-0 flex justify-center items-center h-screen w-screen">
          {[...Array(starCount)].map((_, ind) => {
              ind+=1;
              return <BsFillStarFill
                  className={ind <=hover ? "text-amber-400" : ind<=rating ? "text-amber-200" :"text-gray-700"}
                  key={ind} 
                  size={40}
                  onClick={()=>handleClick(ind)}
                  onMouseEnter={()=>handleHover(ind)}
                  onMouseLeave={()=>handleLeave()}
              />
          })}
      </section>
  )
}

export default Index;