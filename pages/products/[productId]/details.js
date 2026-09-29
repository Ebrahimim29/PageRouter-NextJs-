import { useRouter } from "next/router";

const Details = () => {

    const router = useRouter()
    const {productId} = router.query

    return(
        <div className="animate-bounce bg-emerald-400 text-3xl flex items-center justify-center mt-8">
            Details: 
            <div>
                {productId}
            </div>
        </div>
    )
};

export default Details;