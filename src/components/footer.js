import React, { Component } from "react";

const navigation = [
  {
    nameDe: "Kontakt",
    nameEn: "Contact",
    href: "/contact",
    description:"Contact",
    icon: ""
  },
  {
    nameDe: "Impressum",
    nameEn: "Imprint",
    href: "/imprint",
    description:"Imprint",
    icon: ""
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/hugo-schweers-bb449588/",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 512 512" {...props}>
      <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"/>
    </svg>
    ),
  },
  // {
  //   name: "Dribbble",
  //   href: "#",
  //   icon: (props) => (
  //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //       <path
  //         fillRule="evenodd"
  //         d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
  //         clipRule="evenodd"
  //       />
  //     </svg>
  //   ),
  // },
];

export default class footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <>
        <footer className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
              {navigation.map((item) => (
                <a
                  key={item.description}
                  href={item.href}
                  className="text-fgDefault-black hover:border-fgDefault-black focus:border-fgDefault-black text-base font-medium border-transparent border-b"
                >
                <p>{this.props.lang==="de" ? item.nameDe : item.nameEn}</p>
                  <span className="sr-only">{item.description}</span>
                  {item.icon==="" ? "" : <item.icon className="h-6 w-6" aria-hidden="true" />}
                </a>
              ))}
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-fgDefault-black">
                &copy; 2022 formgroup
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
