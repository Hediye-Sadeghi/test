import React from "react";
import Angular from "../assets/images/angular.png";
import Js from "../assets/images/Js.png";
import React1 from "../assets/images/React-js.png";
import React2 from "../assets/images/react_native.png";
import {Button} from "./commen/Button"

const products = [
  {
    id: 1,
    name: "Angular",
    href: "#",
    price: "250000 تومان",
    imageSrc: Angular ,
    imageAlt: "",
  },
  {
    id: 2,
    name: "Js",
    href: "#",
    price: "320000 تومان",
    imageSrc:  Js ,
    imageAlt: "",
  },
  {
    id: 3,
    name: "React1",
    href: "#",
    price: "410000 تومان",
    imageSrc:  React1 ,
    imageAlt: "",
  },
  {
    id: 4,
    name: "React2",
    href: "#",
    price: "380000 تومان",
    imageSrc:  React2 ,
    imageAlt: "",
  },
];

export default function Example() {
  return (
    <div className="bg-white pt-20">
      <h2 className="text-center text-3xl font-bold leading-8 text-blue-900">
        دوره های آموزشی
      </h2>
      <div className="mx-auto max-w-2xl shadow-md py-14 px-4 sm:py-22 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-blue-700">{product.name}</h3>
              <p className="mt-1 text-sm font-medium text-blue-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
      <Button>نمایش بیشتر</Button>
    </div>
  );
}
