import React, { Component } from "react";

const navigation = [
  {
    nameDe: "Link hinzufügen",
    nameEn: "Add a Link",
    href: "/addLink",
    description:"Add a link",
    icon: (props) => (
      <svg fill="#227dc6" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="80px" height="80px"><path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"/></svg>
    ),
    },
];

export default class footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <>
        <footer className="bg-blue-dark">
          <div className="max-w-7xl mx-auto px-4 flex md:items-center justify-between px-8">
          <div className="order-1">
              <p className="text-center text-base text-blue-medium">
                &copy; 2022 Flender GmbH
              </p>
            </div>
            <div className="flex text-base  space-x-6 order-2">
              {navigation.map((item) => (
                <a
                  key={item.description}
                  href={item.href}
                  className="mb-4 text-blue-medium rounded-full hover:border-white border-2 focus:text-blue-darktext-center font-medium border-transparent"
                >
                  <span className="sr-only">{item.description}</span>
                  {item.icon==="" ? "" : <item.icon className="h-4 w-4" aria-hidden="true" />}
                </a>
              ))}
            </div>

          </div>
        </footer>
      </>
    );
  }
}
