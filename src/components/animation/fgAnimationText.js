import React from 'react'

import './fgAnimationText.css';

export default function fgAnimationText(props) {
    return (
        <div>
        <span className="containerAnimation">
        {props.lang==="de" ? 'Wir formen' : ''}
  <div className="flip">
    <div><div>{props.lang==="de" ? 'Produkt' : 'Product'}</div></div>
    <div><div>{props.lang==="de" ? 'Innovtationen' : 'Innovations'}</div></div>
    <div><div>{props.lang==="de" ? 'Lösungen' : 'Solution'}</div></div>
  </div>
        {props.lang==="de" ? '' : 'grow with us.'}
</span>
            
        </div>
    )
}
