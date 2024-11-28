import useWindowResize from "./useWindowResize.jsx";

export default function Index() {
const window = useWindowResize()
    const{width , height} = window
    return <>
        <p>Width is : {width}</p>
        <p>Height is : {height}</p>
    </>
}