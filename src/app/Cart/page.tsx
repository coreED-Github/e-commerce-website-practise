"use client"
import { useState } from "react";
import Link from "next/link";
const Cart = () => {
    const products = [
        {
            id: 1,
            name: "The north coat",
            description: "This is the best product to use, exclusively only for you",
            price: 50,
            image: "/best1.png",
        },
        {
            id: 2,
            name: "Gucci duffle bag",
            description: "This is the best product to use, exclusively for you",

            price: 960,
            image: "/best2.png",
        },
        {
            id: 3,
            name: "RGB liquid CPU cooler",
            description: "This is the best product to use, exclusively for you",
            price: 200,
            image: "/best3.png",
        },
        {
            id: 4,
            name: "Gucci Perfume",
            description: "This is the best product to use, exclusively for you",
            price: 250,
            image: "/fea4.png",
        },
        {
            id: 5,
            name: "Small Bookself",
            description: "This is the best product to use, exclusively for you",
            price: 250,
            image: "/best4.png",
        },
    ];

    const [cart, setCart] = useState(
        products.map((product) => ({ ...product, quantity: 1 }))
    );

    const updateQuantity = (id: any, quantity: any) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    const subTotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl text-[#2A254B] font-serif font-bold mb-4">Your shopping cart</h1>
            <div className="grid gap-4">
                {cart.map((product) => (
                    <div
                        key={product.id}
                        className="flex text-black items-center gap-4 p-4 border rounded-md shadow-sm"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-24 h-24 text-black object-cover rounded"
                        />
                        <div className="flex-1">
                            <h2 className="text-lg text-black font-bold">{product.name}</h2>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="text-gray-800 font-semibold">Price: ${product.price}</p>
                        </div>
                        <div>
                            <input
                                type="number"
                                min="1"
                                value={product.quantity}
                                onChange={(e) => updateQuantity(product.id, +e.target.value)}
                                className="border text-black rounded w-16 text-center"
                            />
                            <p className="text-gray-800 font-semibold">
                                Total: ${product.price * product.quantity}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 p-4 border-t text-slate-800">
                <p className="text-right text-black text-lg font-bold">Subtotal: ${subTotal}</p>
                <p className="text-right text-sm text-gray-500">
                    Taxes and shipping are calculated at checkout.
                </p>
                <Link href="/List">
                    <button className="mt-4 bg-slate-800  text-white py-2 px-4 rounded">
                        Go to Checkout
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;