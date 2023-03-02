import React from "react";
import Angular from "../assets/images/angular.png";
import Js from "../assets/images/Js.png";
import React1 from "../assets/images/React-js.png";
import React2 from "../assets/images/react_native.png";
import { Button } from "./commen/Button";
import { Link, Outlet } from "react-router-dom";
import { Card } from "../component/commen/Card";

const products = [
  {
    id: 1,
    name: "Angular",
    href: "#",
    price: "250000 تومان",
    imageSrc: Angular,
    imageAlt: "",
    star: 2,
  },
  {
    id: 2,
    name: "Js",
    href: "#",
    price: "320000 تومان",
    imageSrc: Js,
    imageAlt: "",
    star: 2.5,
  },
  {
    id: 3,
    name: "React1",
    href: "#",
    price: "410000 تومان",
    imageSrc: React1,
    imageAlt: "",
    star: 4,
  },
  {
    id: 4,
    name: "React2",
    href: "#",
    price: "380000 تومان",
    imageSrc: React2,
    imageAlt: "",
    star: 5,
  },
];

export default function Example() {
  return (
    <div className="bg-white pt-20">
      <h2 className="text-center text-3xl font-bold leading-8 text-blue-900">
        دوره های آموزشی
      </h2>
      <div className="mx-auto py-14 px-4 sm:py-22 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/course/{product.id}`}
              className="group"
            >
              <Card {...product} />
            </Link>
          ))}
        </div>
      </div>
      <Button>
        <Link to="/coursesPage">نمایش بیشتر</Link>
      </Button>
    </div>
  );
}
