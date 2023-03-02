import React from "react"

const stats = [
    { id: 1, name: 'تعداد دانشجو', value: '1542' },
    { id: 2, name: 'تعداد استاد', value: '57' },
    { id: 3, name: 'تعداد دوره', value: '218' },
    { id: 4, name: 'تعداد دوره فعال', value: '87' },

  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-3xl rounded-md bg-indigo-100 shadow-sm py-8 px-5 lg:px-8">
          <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-blue-600">{stat.name}</dt>
                <dd className="order-first text-sm tracking-tight text-blue-900 sm:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }