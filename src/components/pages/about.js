import React  from "react";
import Cards from '../../components/cards.js'


// import Photos from '../../img/img.json'
import '../styles/about.css'
import Pics from "../../img/img.json"
// import { Component } from 'react';

const About = () => {
  
    return(

    <div>

      <h1>Zack Shone</h1>
      <p>
        <h3> something about how i started racing into coding</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
        varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
        Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
        imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
        ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
        elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
        consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
        malesuada fames ac ante ipsum primis in faucibus.
      </p>
      <div className = "container">

    <div className = "Jumbotron">
      <div className='row'>
  {Pics.map(imgs =>(
    <div className = 'col-3'>
    <Cards img = {imgs.src} alt = {imgs.alt}/>
    </div>
  ))}
      </div>
      </div>
    </div>
    </div>
  )
  
}
export default About;
