import { useEffect, useState } from "react";

const Index = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    const fetchProducts = async () => {
        try {
            setLoading(true);

            const response = await fetch(`https://dummyjson.com/products/?limit=20&skip=${count * 20}`);
            const data = await response.json();

            if (data && count === 0) {
                setProducts(data.products)
            } else{
                setProducts((prevProducts) => [...prevProducts,...data.products])
            }

            console.log(products)

        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [count]);

    return (
        <section className="p-4">
            <div className="grid grid-cols-4 gap-3">
                {products && products.length ? products.map((product) => (
                    <div key={product.id} className="border-2 my-3">
                        <p>{product.title}</p>
                        <img src={product.thumbnail} width="200" height="200" />
                    </div>
                )): null}

            </div>

            <p className="text-center font-bold text-gray-700">
            {loading ? "Loading..." : ""}
            </p>
            {
                products && products.length < 194 ? <button onClick={() => setCount(count + 1)}
                                                            className="px-3 py-2 outline-none border-0 bg-blue-700 text-white rounded-md">
                    {loading ? "Loading..." : "Load More..."}
                </button> : <p className="text-amber-400 text-center font-bold">No More products</p>
            }

        </section>
    );
};

export default Index;
