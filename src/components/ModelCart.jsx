import { useState } from "react";
import { Check } from "lucide-react";
import { toast } from "react-toastify";

const getStatusStyle = (status) => {
    switch (status) {
        case "Best Seller": return "bg-amber-100 text-amber-600";
        case "Popular": return "bg-purple-100 text-purple-600";
        case "New": return "bg-green-100 text-green-600";
        default: return "bg-gray-100 text-gray-600";
    }
};

const ModelCart = ({ model, carts, setCarts }) => {

    const [isBuy, setBuyed] = useState(false)

    const handleBuy = () => {
        setBuyed(true)

        const isFound = carts.find(item => item.id === model.id)
        if (isFound) {
            toast.error("Item Already Exist!")
            return
        }

        setCarts([...carts, model])
        toast.success("Item Added to Cart!")
    }
    return (
        <div key={model.id} className="relative shadow-lg rounded-2xl p-6 flex flex-col gap-4 border border-gray-100">

            {/* Best Seller Status */}
            {model.status && (
                <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${getStatusStyle(model.status)}`}>
                    {model.status}
                </span>
            )}

            {/* Image */}
            <img src={model.image} alt={model.title} className="w-12 h-12 object-contain" />

            {/* Title & Description */}
            <div>
                <h2 className="text-2xl font-bold">{model.title}</h2>
                <p className="text-sm text-[#627382] mt-1">{model.description}</p>
            </div>

            {/* Price */}
            <div>
                <span className="text-2xl font-bold">${model.price}</span>
                <span className="text-base text-[#627382]">/Mo</span>
            </div>

            {/* Features */}
            {model.features && (
                <ul className="flex flex-col gap-2">
                    {model.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                            <Check className="text-purple-600 w-4 h-4" strokeWidth={3} />
                            {feature}
                        </li>
                    ))}
                </ul>
            )}

            {/* Button */}
            <button onClick={handleBuy} className="btn w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-3 rounded-full font-semibold text-sm mt-auto">
                {isBuy ? "Buyed" : "Buy Now"}
            </button>

        </div>
    );
};

export default ModelCart;