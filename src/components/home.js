// components/Maintenance.js
 
import React from 'react';


import Navbar from './navbar';
import Header from './content/headerformgroup';
import Identity from './content/contentfgidenity';
import Feature from './content/contentfgfeature';
import Footer from './footer';


export default class home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render (props)
  {
  return (
    <div>
<Navbar lang={this.props.lang} background={"bg-transparent"} text={"text-fgDefault-black"} handleLangHome={this.props.handleLang}/>

<Header lang={this.props.lang}/>

<Identity />
<Feature />

<Footer lang={this.props.lang} handleLangHome={this.props.handleLang}/>

</div>
  )}
}

