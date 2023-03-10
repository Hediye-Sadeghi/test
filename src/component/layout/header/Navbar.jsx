import React from "react";
import { Bars3Icon} from "@heroicons/react/24/outline";
import { Link, Outlet } from 'react-router-dom' 


export const Navbar= ({setMobileMenuOpen,navigation})=> {
  
  return (
    <nav className="flex items-center justify-between" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            className="h-8" 
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="text-sm font-semibold leading-6 text-blue-900 hover:text-blue-500"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
          href="#"
          className="text-sm font-semibold leading-6 text-blue-900 hover:text-blue-500"
        >
          ثبت نام <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
  );
}
