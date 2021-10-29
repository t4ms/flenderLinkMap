// App.js
 
import React, { Component } from 'react';


import icon from './image/svg/fgAppIcon.svg';
import logo from './image/svg/formgroupLogo.svg'

import './App.css';
import home from './components/home';
import team from './components/team';
import portfolio from './components/portfolio';
import about from './components/about';
import contact from './components/contact';
import maintenance from './components/maintenance';
import { Switch, Route } from 'react-router-dom';

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'

const navigation = [
  { name: 'Home', href: '/maintenance', icon: HomeIcon, current: true },
  { name: 'Team', href: '/team', icon: UsersIcon, current: false },
  { name: 'Portfolio', href: '/portfolio', icon: FolderIcon, current: false },
  { name: 'About', href: '/about', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Contact', href: '/contact', icon: ChartBarIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
 
export default function App () {


    return (
      <>
      

       <Switch>
          <Route exact path='/' component={home}/>
          <Route exact path='/maintenance' component={maintenance}/>
          <Route exact path='/team' component={team} selectedTab='team'/>
          <Route exact path='/portfolio' component={portfolio}/>
          <Route exact path='/contact' component={contact}/>
          <Route exact path='/about' component={about}/>
        </Switch>
      </>

    );
  
}
 