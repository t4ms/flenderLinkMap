// components/About.js
 
import React from 'react';
// import Navbar from './Navbar';



const colors = [
  {
    name: 'gray-800',
    hex: '#227dc6',
    rgb: '34 / 125 / 198',
    cymk:'100 / 35 / 0 / 0',
},
{
  name: 'gray-700',
  hex: '#227dc6',
  rgb: '34 / 125 / 198',
  cymk:'100 / 35 / 0 / 0',
},
{
  name: 'gray-600',
  hex: '#227dc6',
  rgb: '34 / 125 / 198',
  cymk:'100 / 35 / 0 / 0',
},
{
  name: 'gray-500',
  hex: '#227dc6',
  rgb: '34 / 125 / 198',
  cymk:'100 / 35 / 0 / 0',
},
{
  name: 'gray-400',
  hex: '#227dc6',
  rgb: '34 / 125 / 198',
  cymk:'100 / 35 / 0 / 0',
},
{
  name: 'gray-300',
  hex: '#227dc6',
  rgb: '34 / 125 / 198',
  cymk:'100 / 35 / 0 / 0',
},
]

export default function about() {

  return (
    <ul className="grid grid-cols-2 gap-x-2 gap-y-2 sm:grid-cols-4 sm:gap-x-4 lg:grid-cols-6 xl:gap-x-8 m-5">
      {colors.map((color) => (
        <li key={color.name} className="relative">
          <div className={"h-40 w-40 rounded-lg p-3 bg-" + (color.name)}>
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for {color.hex}</span>
            </button>
          <p className="mt-2 block text-sm font-medium text-white truncate pointer-events-none pl-5">{color.name}</p>
          <p className="mt-2 block text-sm font-medium text-white truncate pointer-events-none pl-5">{color.hex}</p>
          <p className="mt-2 block text-sm font-medium text-white truncate pointer-events-none pl-5">{color.cymk}</p>
          <p className="mt-2 block text-sm font-medium text-white truncate pointer-events-none pl-5">{color.rgb}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
