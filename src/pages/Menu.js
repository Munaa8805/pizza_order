import React from "react";
import css from "./menu.module.css";
import Card from "../components/Card";

const data = [
    {
        _id: 1,
        name: "Handcrafted Crust Medium Pizza Special",
        description:
            "Choose any of our five new Handcrafted Crust recipe pizzas",
        image: "https://api.pizzahut.io/v1/content/en-ca/ca-1/images/deal/deal.810.de09e5cbaf051f3c2600a2b77feef6ab.1.jpg",
        price: 10.0,
    },
    {
        _id: 2,
        name: "Pizza of the Day - Supreme Lover's® or Handcrafted Smoky Tri-Cheese Blend",
        description:
            "$10.99 mediums Sun: Triple Crown, Mon: Hawaiian, Tues: Pepperoni, Wed: Canadian, Thurs: Supreme Lover's®, Fri: Chicken Caesar, Sat: Veggie Lover's®. Offer available online only. Upsize to large for a few bucks more. Select locations.",
        image: "https://api.pizzahut.io/v1/content/en-ca/ca-1/images/deal/deal.843.97eb4505d41ec1f0afb985307d09df05.1.jpg",
        price: 10.99,
    },
    {
        _id: 3,
        name: "Triple Treat Box",
        description:
            "Includes 2 medium pizzas (2-Topping CYO or Recipe), regular breadsticks, 2 dips, 8 boneless bites, and an ultimate Hershey's® Chipits® Cookie.",
        image: "https://api.pizzahut.io/v1/content/en-ca/ca-1/images/deal/deal.885.a52498a9a18432c69fd319e5d8dd97a9.1.jpg",
        price: 38.99,
    },
    {
        _id: 4,
        name: "Triple Pizza Box",
        description:
            "One box. Triple the Pizza. Includes 3 medium 2-topping or recipe pizzas.",
        image: "https://api.pizzahut.io/v1/content/en-ca/ca-1/images/deal/deal.890.c976b7e6fda44122f5dfa7a6f6987ed8.1.jpg",
        price: 37.99,
    },
];
const Menu = () => {
    return (
        <div className={css.container}>
            <div className={css.row}>
                {data.map((item) => (
                    <Card key={item._id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Menu;
