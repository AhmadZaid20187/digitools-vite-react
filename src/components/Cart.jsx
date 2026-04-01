

const Cart = ({ carts }) => {

    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
    console.log(totalPrice)

    // console.log(carts)
    return (
        <div className="max-w-[80%] mx-auto shadow-lg bg-white my-15 p-5 rounded-2xl space-y-4 " >
            <h2 className="text-2xl font-bold" >Yours Carts</h2>
            {
                carts.map(items => <div className="bg-gray-200 flex gap-2 rounded-2xl p-4" key={items.id}>
                    <div className="">
                        <img className="h-10 w-10 object-contain bg-white p-2 rounded-full" src={items.image} alt={items.title} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">{items.title}</h2>
                        <p className="text-base text-gray-500">${items.price}</p>
                    </div>

                </div>)
            }

            <div className="flex justify-between">
                <p className="text-gray-400">Total</p>
                <span className="text-2xl font-bold">${totalPrice}</span>
            </div>
        </div>
    );
};

export default Cart;