import React from "react";
import Angular from "../assets/images/angular.png";
import Js from "../assets/images/Js.png";
import React1 from "../assets/images/React-js.png";
import React2 from "../assets/images/react_native.png";
import { Button } from "./commen/Button"
import { Link, Outlet } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: "Angular",
    href: "#",
    price: "250000 تومان",
    imageSrc: Angular,
    imageAlt: "",
  },
  {
    id: 2,
    name: "Js",
    href: "#",
    price: "320000 تومان",
    imageSrc: Js,
    imageAlt: "",
  },
  {
    id: 3,
    name: "React1",
    href: "#",
    price: "410000 تومان",
    imageSrc: React1,
    imageAlt: "",
  },
  {
    id: 4,
    name: "React2",
    href: "#",
    price: "380000 تومان",
    imageSrc: React2,
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
            <Link key={product.id} to={`/course/${product.id}`} className="group">




              <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                <a href="#">
                  <div class="relative flex items-end overflow-hidden rounded-xl">
                    <img src={product.imageSrc} alt={product.imageAlt} />
                    <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="ml-1 text-sm text-slate-400">4.9</span>
                    </div>
                  </div>

                  <div class="mt-1 p-2">
                    <h2 class="text-slate-700">{product.name}</h2>
                    <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                    <div class="mt-3 flex items-end justify-between">
                      <p class="text-lg font-bold text-blue-500">${product.price}</p>


                      <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>

                        <button class="text-sm">Add to cart</button>
                      </div>
                    </div>
                  </div>
                </a>
              </article>






              {/* <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-blue-700">{product.name}</h3>
              <p className="mt-1 text-sm font-medium text-blue-900">
                {product.price}
              </p> */}
            </Link>
          ))}
        </div>
      </div>
      <Button><Link to="/coursesPage">نمایش بیشتر</Link></Button>
    </div>
  );
}
