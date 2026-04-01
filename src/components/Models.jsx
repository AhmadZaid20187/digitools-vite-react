import { use } from "react";
import ModelCart from "./ModelCart";




const Models = ({ modelPromise, carts, setCarts }) => {
    const models = use(modelPromise);


    return (
        <div className="py-20">
            {/* Heading */}


            {/* Cards Grid */}
            <div className="max-w-[80%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {models.map((model) => (
                    <ModelCart key={model.id} model={model} carts={carts} setCarts={setCarts} />
                ))}
            </div>
        </div>
    );
};

export default Models;