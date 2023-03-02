import React from "react";

export default function Opinion() {
  return (
    <div className="bg-white w-80 mx-auto py-14 sm:py-18">
      <h2 className="text-center py-8 text-2xl pr-3 font-bold leading-8 text-blue-900">
        انتقادات و پیشنهادات
      </h2>
      <form className="mt-4 space-y-2 border-2 p-6 border-blue-100 rounded-md shadow-md" action="#" method="POST">
      <h2 className="text-sm font-bold leading-8 text-blue-900">
        نام کامل
      </h2>
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="name"
          autoComplete="current-name"
          required
          className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <h2 className="text-sm font-bold leading-8 text-blue-900">
        آدرس ایمیل
      </h2>
      <div>
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-blue-900 placeholder-gray-300 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <h2 className="text-sm font-bold leading-8 text-blue-900">
        متن پیام
      </h2>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block text-sm font-semibold leading-6 text-gray-900"
        ></label>
        <div className="mt-2.5">
          <textarea
            name="message"
            id="message"
            rows={4}
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-blue-900 placeholder-gray-300 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue={""}
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          </span>
          ارسال پیام
        </button>
      </div>
      </form>
    </div>
  );
}
