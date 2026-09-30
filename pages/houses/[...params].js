import { useRouter } from "next/router";

const Params = () => {

    const router = useRouter()
    const { params = [] } = router.query

    console.log(params);


    return (
        <div className="flex justify-center items-center text-3xl mt-8 bg-amber-500 text-green-700 animate-bounce">
            <h1>
                Catch All Routes...
            </h1>
            <br/>            
            <h5>
                {params[0]}
            </h5>
        </div>
    )
};

export default Params;