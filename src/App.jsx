import Accordion from "./Components/Accordion"
import RandomColor from "./Components/RandomColor/index.jsx";
import StarRating from "./Components/StarRating/index.jsx";
import ImageSlider from "./Components/ImageSlider/index.jsx";


function App() {

  return (
    <>
      {/*<Accordion />*/}
      {/*<RandomColor />*/}
      {/*  <StarRating starCount={10} />*/}
        <ImageSlider url={"https://picsum.photos/v2/list?page=1&limit=10"} />
    </>

  )
}

export default App
