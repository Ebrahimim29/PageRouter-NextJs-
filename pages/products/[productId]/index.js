import { useRouter } from "next/router";

const ProductId = () => {

    const router = useRouter()
    console.log(router.query);

    const { productId } = router.query

    const handlePushToDetails = () => {
        //some action...
        //according to response...
        
        
        router.push(`${productId}/details`)
        // router.back()
    }

    return (
        <div className="flex flex-col mt-16 items-center justify-center text-red-800 text-3xl">

            <h1 className="animate-bounce mb-16 text-amber-300">
                Product : {productId}
            </h1>

            <button className="bg-red-400 border-2" onClick={handlePushToDetails}>
                product : {productId} details
            </button>
        </div>
    )
};

export default ProductId;