import useFetch from "./useFetch.jsx";

export default function Index(){
  const { data, error, pending } =   useFetch("https://dummyjson.com/products" , {})

    return (
        <>
            {pending ? <h3>Pending ! Please wait</h3> : null}
            {error ? <h3>{error}</h3> : null}
            {data && data.products && data.products.length
                ? data.products.map((productItem , ind) => (
                    <p key={ind}>{productItem.title}</p>
                ))
                : null}
        </>
    )
}