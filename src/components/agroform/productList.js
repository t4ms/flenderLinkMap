import React from 'react';

import SingleProduct from './singleProduct'

export default function ProductList(props) {
  return (
  <div>
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Produkt
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Wirkstoff
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Anwendung
                          </th>
                        </tr>
                      </thead>
                      
                      {props.products.map((products)=> {
                        return <SingleProduct key={products.name} product={products}/>
                    })}
                      
                    </table>
                  </div>
                </div>
  </div>
  )}
