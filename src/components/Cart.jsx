

const Cart = ({ carts, setCarts }) => {

    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

    const paymentHandle = () => {
        setCarts([])
    }

    const delateHandle = (item) => {
        const filteredArray = carts.filter(c => c.id !== item.id)
        setCarts(filteredArray)
    }


    return (
        <div className="max-w-[80%] mx-auto shadow-lg bg-white my-15 p-5 rounded-2xl space-y-4 " >
            <h2 className="text-2xl font-bold" >Yours Carts</h2>

            {
                carts.length === 0 ? <p className="text-4xl text-center text-gray-400">Your Card is Empty</p> :
                    <>
                        {
                            carts.map(items => <div className="relative" key={items.id}>
                                <div className="bg-gray-200 flex gap-2 rounded-2xl p-4">
                                    <div className="">
                                        <img className="h-10 w-10 object-contain bg-white p-2 rounded-full" src={items.image} alt={items.title} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold">{items.title}</h2>
                                        <p className="text-base text-gray-500">${items.price}</p>
                                    </div>
                                    <button onClick={() => delateHandle(items)} className="btn btn-error btn-soft absolute right-4 rounded-full">Remove</button>
                                </div>


                            </div>)
                        }
                    </>
            }



            <div className="flex justify-between">
                <p className="text-gray-400">Total</p>
                <span className="text-2xl font-bold">${totalPrice}</span>
            </div>
            <button onClick={paymentHandle} className="btn w-full bg-linear-to-r from-[#4F39F6]   to-[#9514FA] text-white rounded-2xl">Proceed to Checkout</button>
        </div>
    );
};

export default Cart;