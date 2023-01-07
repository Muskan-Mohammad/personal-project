import React from 'react';
import Group35 from '../assets/Group 35.png';
import Group100 from '../assets/Group 100.png';
const Image = () => {
  return <img src={Group35} alt="Tick Mark" />;
};

function List() {

  return (

    <div>
      <div class="d-flex  justify-content-between">

        <ul style={{ listStyleType: 'none' }}>
          <li style={{ margin: ' 10px 5px' }}><Image />  Attestation Charges</li>
          <li style={{ margin: ' 10px 5px' }}><Image />             Registered Agent </li>
          <li style={{ margin: ' 10px 5px' }}><Image />              Registered Office</li>
          <li style={{ margin: ' 10px 5px' }}><Image />             Varal Administrative</li>
          <li style={{ margin: ' 10px 5px' }}><Image />              Preparing Statutory File</li>
          <li style={{ margin: ' 10px 5px' }} ><Image />             Liasing with Registration  Authorities</li>
          <li style={{ margin: ' 10px 5px' }}><Image />              Due Diligence Appraisal</li>
          <li style={{ margin: ' 10px 5px' }}><Image />              Keeping The Register</li>
          <li style={{ margin: ' 10px 5px' }}><Image />             Seal Charges</li>
          <li style={{ margin: ' 10px 5px' }}><Image />             Certificate of Good Standing</li>

        </ul>
      </div>
    </div>
  )
};

export default function Pricing() {

  return (
    <div style={{ paddingBottom: ' 140px' }}>
      <h3 style={{ textAlign: 'Center', paddingTop: '200px' }}>
        <b>Most <span style={{ textDecoration: 'underline', textDecorationColor: 'orange', textDecorationThickness: '6px' }}>popular affordable pricing</span> per <br />
          jurisdictions are brought to you to <br />
          kick off your adventure.</b>
      </h3>
      <div className=' d-flex  py-5 px-5'>
        <div style={{ width: '21rem', color: 'blue', marginRight: '100px', paddingTop: '5px', marginLeft: '30px' }}>
          <div class="card-body" >
            <h5 class="card-title">AJMAN OFFSHORE</h5>
            <h2 style={{ display: 'inline-block', padding: ' 0 7px 10px 10px' }}> <b> $2,997 </b> </h2>
            <span style={{ color: '#B2B2B2', fontSize: '20px' }}>One Time Payment</span>
            <h5 style={{ paddingBottom: '20px' }}>Ajman Offshore New Company
              formation includes</h5>
            <List />
            <a href="#" class="btn btn-light btn-lg btn-block btn-outline-primary" style={{ color: 'blue', height: '60px' }} >Continue</a>
          </div>
        </div>

        <div style={{ width: '21rem', color: 'blue' }}>
          <div class="card-body">
            <h5 class="card-title">RAK ICC</h5>
            <h2 style={{ display: 'inline-block', padding: ' 0 7px 10px 10px' }}> <b> $2,997 </b> </h2>
            <span style={{ color: '#B2B2B2', fontSize: '20px' }}>One Time Payment</span>
            <h5 style={{ paddingBottom: '20px' }}>Rak Icc New Company formation
              includes</h5>
            <List />
            <a href="#" class="btn btn-light btn-lg btn-block btn-outline-primary" style={{ color: 'blue', height: '60px' }} >Continue</a>
          </div>
        </div>

        <div style={{ width: '21rem', color: 'blue', marginLeft: '100px' }}>
          <div class="card-body">
            <h5 class="card-title">SHARJAH MEDIA CITY</h5>
            <h2 style={{ display: 'inline-block', padding: ' 0 7px 10px 10px' }}> <b> $2,997 </b> </h2>
            <span style={{ color: '#B2B2B2', fontSize: '20px' }}>One Time Payment</span>
            <h5 style={{ paddingBottom: '20px' }}>Sharjah Media City New
              Company formation include </h5>
            <List />
            <a href="#" class="btn btn-light btn-lg btn-block btn-outline-primary" style={{ color: 'blue', height: '60px' }} >Continue</a>
          </div>
        </div>
      </div>
      <img src={Group100} style={{ float: 'right', height: '350px', marginRight: '-120px', bottom: '160px', position: 'relative' }} />
    </div>
  )

}




