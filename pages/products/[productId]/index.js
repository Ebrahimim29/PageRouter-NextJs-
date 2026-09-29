import { useRouter } from "next/router";

const ProductId = () => {

    const router = useRouter()
    const {productId} = router.query

    return(
        <div className="animate-bounce flex items-center justify-center mt-8 text-emerald-800 text-3xl">
            Product : {productId}
        </div>
    )
};

export default ProductId;