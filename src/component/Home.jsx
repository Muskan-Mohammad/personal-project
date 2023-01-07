import React from 'react';
import Group114 from '../assets/Group 114.png';
import ILLUSTRATION from '../assets/ILLUSTRATION.png';
import Group117 from '../assets/Group 117.png';
import Service from './Service';
import Pricing from './Pricing';
import AboutUs from './About-us';
import Ellipse16 from '../assets/Ellipse 16.png';
import Ellipse21 from '../assets/Ellipse 21.png';
import Ellipse8 from '../assets/Ellipse 8.png';
export default function Home() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light  py-4 " >
        <img src={Group114} style={{ paddingLeft: '70px' }} class="d-inline-block align-top " alt="" />
        <div class="collapse navbar-collapse" style={{ justifyContent: 'flex-end', paddingRight: '50px', fontSize: '20px', fontWeight: 'bold' }} id="navbarNavAltMarkup">

          <div class="navbar-nav">

            <a class="nav-item nav-link active"  >Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" >Services</a>
            <a class="nav-item nav-link" >Pricing</a>
            <a class="nav-item nav-link " >About Us</a>
            <button type="button" class="btn btn-primary btn-lg"> Start a Company</button>
          </div>
        </div>
      </nav>
      <div style={{ float: 'right', paddingRight: '70px', width: '25rem', marginTop: '50px' }}>
        <input class="form-control " type="search" placeholder="Search a Term | Topic" aria-label="Search" />
      </div>
      <img src={Ellipse16} style={{ marginLeft: '100px', position: 'relative' }} />
      <img src={Ellipse21} style={{ marginLeft: '190px', position: 'relative', marginBottom: '-30px', bottom: ' -100px' }} />
      <img src={Ellipse8} style={{ marginLeft: '580px', position: 'relative', marginBottom: '-30px', bottom: ' -100px' }} />
      <h4 style={{ color: 'blue', paddingTop: '120px', paddingLeft: '80px' }}> Claim a Free Quote </h4>
      <img src={ILLUSTRATION} style={{ float: 'right', width: 600, height: 500 }} />
      <h2 style={{ paddingLeft: '80px', fontSize: '50px' }}><b>
        <span style={{ textDecoration: 'underline', textDecorationColor: 'orange', textDecorationThickness: '6px', width: '70px' }}>Get started </span>on fulfilling <br />
        your Dubai or UAE<br />
        dream.


      </b></h2>
      <h4 style={{ color: 'blue', paddingLeft: '80px', paddingTop: '20px' }}> UAE & Offshore Company </h4>

      <h3 style={{ paddingLeft: '80px', paddingTop: '20px', color: '#B2B2B2' }}>
        We provide you with information about UAE or <br />
        Offshore Company Registration & help you <br />
        setup your company with a bank account and <br />
        visas.
      </h3>

      <div class="btn-group" style={{ paddingLeft: '80px' }} role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary btn-lg">Start a Company</button>
        <button type="button" class="btn btn-outline-primary btn-lg">Renew a Company</button>
      </div>
      <h5 style={{ color: '#548CFF', textAlign: 'center', paddingTop: 100, paddingBottom: '70px' }}> Watch the video about UAE or Offshore Company Registration <img src={Group117} /></h5>



      < Service />
      < Pricing />
      <AboutUs />
    </div>
  )
}