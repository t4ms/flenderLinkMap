/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'

import formgroupLogoWhite from '../image/svg/formgroupLogoWhite.svg'
import formgroupLogoBlack from '../image/svg/formgroupLogoBlack.svg'
import langDe from '../image/svg/lang_de.svg'
import langEn from '../image/svg/lang_en.svg'

import iconValentia from '../image/svg/ICON_fg_valentia.svg'
import iconCrozier from '../image/svg/ICON_fg_crozier.svg'
import iconBoltXl from '../image/svg/ICON_fg_boltXl.svg'
import iconHurler from '../image/svg/ICON_fg_hurler.svg'

import { Popover, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const popUpNav = [
  {
    name: 'Valentia',
    mol: '(Fluroxypyr 100 g/l, Florasulam 2 g/l)',
    description: 'Einzigartig in Mais – Top in Getreide',
    href: '#',
    icon: iconValentia,
  },
  {
    name: 'Crozier',
    description: 'Das Basisherbizid inKartoffeln und der Resistenzbrecher im Getreide',
    mol: '(Prosulfocarb 800g/l)',
    href: '#',
    icon: iconCrozier,
  },
  {
    name: 'BOLT XL',
    description: "Das Top Azol für Getreide und Raps",
    mol: '(Prothioconazol 250 g/l))',
    href: '#',
    icon: iconBoltXl,
  },
  {
    name: 'Hurler',
    description: 'Bewährt in Getreide und Grünland',
    mol: '(Fluroxypyr 180 g/l)',
    href: '#',
    icon: iconHurler,
  },
]


const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
  },
  { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
  { name: 'Events', description: 'See what meet-ups and other events we might be planning near you.', href: '#' },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(props) {
  return (
    <Popover className="relative bg-transparent">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <a href="/" className="flex">
            <span className="sr-only">formgroup</span>
            <img
              className="pb-2 h-8 w-auto sm:h-10"
              src={formgroupLogoWhite}
              alt="formgroups"
            />
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-fgDefault-light">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <Popover.Group as="nav" className="flex space-x-10">
          
          {/* Nav 1 - Warum formgroup */}

          <a href="/" className="text-base font-medium text-white border-transparent border-b hover:border-white focus:border-white">
              Warum formgroup?
            </a>

            {/* Nav 2 - Team */}

            <a href="/team" className="text-base font-medium text-white border-transparent border-b hover:border-white focus:border-white">
              Team
            </a>
            
            {/* Nav 3 - Produkte & Lösungen */}

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-white' : 'text-white',
                      'pb-2 group inline-flex items-center text-base font-medium border-transparent border-b hover:border-white focus:border-white'
                    )}
                  >
                    <span>Lösungen & Produkte</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"

                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-72 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {popUpNav.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                            >
                              <div className="flex-shrink-0 flex items-center justify-center h-36 w-36 text-white sm:h-24 sm:w-24">
                              <img className="pb-2 h-24 w-auto sm:h-36" src={item.icon} alt={item.name} />
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="text-sm font-light italic text-fgDefault-darker">{item.mol}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="p-5 bg-gray-50 sm:p-8">
                          <a href="/" className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                            <div className="flex items-center">
                              <div className="text-base font-medium text-gray-900">Enterprise</div>
                              <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800">
                                New
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              Empower your entire team with even more advanced tools.
                            </p>
                          </a>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>


          </Popover.Group>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-fgDefault-darker p-1 rounded-full text-fgDefault-dark hover:text-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Language dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-fgDefault-darker flex text-sm rounded-full">
                      <span className="sr-only">Choose Language</span>
                      
                      {props.lang==="de" ? <img className="h-8 w-8 rounded-full" src={langDe} alt="Deutsch"/> : <img className="h-8 w-8 rounded-full" src={langEn} alt="English"/> }
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            German
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          
                          <a
                            href="/"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            English
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={formgroupLogoBlack}
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-dgDefault-light">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6">
                  {popUpNav.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-100"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-24 w-24 rounded-md text-white">
                      <img className="pb-2 h-24 w-auto" src={item.icon} alt={item.name} />
                      </div>
                      <span className="ml-4 text-base font-medium text-gray-900">{item.name}</span>
                      <span className="ml-4 text-base italic text-fgDefault-darker">{item.mol}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                Warum formgroup?
                </a>

                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Team
                </a>

                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Enterprise
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Sprache</h3>
            <form className="mt-4 sm:max-w-xs">
              <fieldset className="w-full">
                <label htmlFor="language" className="sr-only">
                  Language
                </label>
                <div className="relative">
                  <select
                    id="language"
                    name="language"
                    className="appearance-none block w-full bg-none border rounded-md py-2 pl-3 pr-10 text-base text-fgDefault-dark focus:outline-none focus:ring-fgDefault-dark focus:border-fgDefault-dark sm:text-sm"
                    defaultValue="English"
                  >
                    <option>English</option>
                    <option>German</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                    <ChevronDownIcon className="h-4 w-4 text-white" aria-hidden="true" />
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
