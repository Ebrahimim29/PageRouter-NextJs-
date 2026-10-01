import Link from "next/link";

const Products = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-amber-400 text-sky-700 mt-8">
            
            <h1 className="animate-bounce">Products Page:</h1>
            <Link href={{
                pathname:"/products/1",
                query: {id:1}
            }}>product1</Link>
            <Link href={{
                pathname:"/products/2",
                query: {id:2}
            }} replace>product2</Link>
            <Link href={{
                pathname:"/products/3",
                query: {id:3}
            }}>product3</Link>
            <Link href={{
                pathname:"/products/4",
                query: {id:4}
            }}>product4</Link>
        </div>
    )
};

export default Products;