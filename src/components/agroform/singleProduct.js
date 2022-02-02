import React from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

export default function singleProduct(props) {
  return (
  <>
      <tbody className="bg-white divide-y divide-gray-200">
                          <tr
                            key={props.product.name}
                            className="hover:bg-green-lighter hover:bg-opacity-25"
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <a href={props.product.link}>
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-16 w-16">
                                    <img
                                      className="h-16 w-16"
                                      src={props.product.image}
                                      alt=""
                                    />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                      {props.product.name}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                      {props.product.slogan}
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <a href={props.product.link}>
                                <div className="text-sm text-gray-900">
                                  {props.product.ingredient1}
                                </div>
                                <div className="text-sm text-gray-900">
                                  {props.product.ingredient2}
                                </div>
                              </a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <a href={props.product.link}>
                                <span
                                  className={classNames(
                                    props.product.styling1,
                                    "mx-0.5 px-2 inline-flex text-xs font-semibold leading-5 uppercase tracking-wide rounded-full"
                                  )}
                                >
                                  {props.product.feld1}
                                </span>
                                <span
                                  className={classNames(
                                    props.product.styling2,
                                    "mx-0.5 px-2 inline-flex text-xs font-semibold leading-5 uppercase tracking-wide rounded-full"
                                  )}
                                >
                                  {props.product.feld2}
                                </span>
                              </a>
                            </td>
                          </tr>
                          </tbody>  
                          </>  )     
                              
}
