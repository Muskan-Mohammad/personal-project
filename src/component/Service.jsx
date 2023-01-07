import React from 'react';
import dungeon from '../assets/dungeon.png';
import Vector1 from '../assets/Vector-1.png';
import Vector2 from '../assets/Vector-2.png';
import Group from '../assets/Group.png';
import Group1 from '../assets/Group-1.png';
import Group2 from '../assets/Group-2.png';
import ILLUSTRATION031 from '../assets/ILLUSTRATION 03  1.png';
import dolo from '../assets/dolo.png';
import Group100 from '../assets/Group 100.png';




export default function Service() {

  return (
    <div>
      <img className='group' src={Group100} style={{ position: 'relative', marginLeft: '-130px', height: '350px', display: 'flex' }} />
      <h3 style={{ textAlign: 'center', paddingBottom: '20px', position: 'relative', bottom: '250px' }}>
        <b>    <span style={{ textDecoration: 'underline', textDecorationColor: 'orange', textDecorationThickness: '6px' }}> Dedicated</span>
          <br />
          to our mission we are</b>
      </h3>
      <p style={{ color: 'grey', textAlign: 'center', fontSize: '22px', position: 'relative', bottom: '250px' }}>
        Our services include Company Formation & Renewals,<br />
        Trust & Fiduciary, Tax Residency Setup With Family, Bank <br />
        Accounts, Remote Management, Stock Trading <br />
        Platforms, Ownership Solutions.<br />
      </p>

      <div className='container d-flex   ' style={{ bottom: '120px', position: 'relative' }}>

        <div className='Block1' style={{ paddingLeft: '50px', paddingTop: '15px' }}>
          <img src={dungeon} style={{ paddingBottom: '20px' }} />
          <h4> <b> UAE Free Zone Company</b></h4>
          <p style={{ color: 'grey', fontSize: '17px', fontFamily: `Noto Sans, sans-serif` }}> Your registration agent, will answer all < br />
            of your questions and help you to reach<br />
            a conclusion that meets your objectives<br />
            of investing in the UAE.</p>
          <h4 style={{ color: 'orange' }}> Get Started </h4>
        </div>

        <div className='Block2' style={{ paddingLeft: '80px' }}>
          <img src={Vector2} style={{ paddingBottom: '20px' }} />
          <h4> <b>  Dubai Local Companies </b></h4>
          <p style={{ color: 'grey', fontSize: '17px', fontFamily: `Noto Sans, sans-serif` }}> The Dubai LLC formation documents < br />
            are actually articles of organization or a < br />
            certificate of organization. You can get < br />
            yours today.</p>
          <h4 style={{ color: 'orange' }}> Get Started </h4>
        </div>



        <div className='Block3' style={{ paddingLeft: '80px' }} >
          <img src={Vector1} style={{ paddingBottom: '20px' }} />
          <h4> <b>  Offshore Compamies </b></h4>
          <p style={{ color: 'grey', fontSize: '17px', fontFamily: `Noto Sans, sans-serif` }}> You can register an offshore company < br />
            and open its bank account in Dubai. < br />
            Your agent will help you along all the < br />
            process.</p>
          <h4 style={{ color: 'orange' }}> Get Started </h4>

        </div>



      </div>

      <h4 style={{ padding: ' 10px 150px 30px 150px' }}>
        Learn the ways in which you can benefit <br />
        from a UAE/Offshore Company. Then get <br />
        started on fulfilling your UAE dream.<br />
      </h4>
      <h5 style={{ color: '#548CFF', paddingLeft: '150px', paddingBottom: '90px' }}> Claim a Free Quote</h5>

      <div class="card" style={{ width: '24rem', float: 'right', marginTop: '-230px', position: 'relative', left: '-130px', border: '2px solid #B2B2B2' }}>
        <img src={Group} style={{ width: 200, alignSelf: 'center', paddingTop: '40px', marginBottom: '20px' }} />
        <div class="card-body">
          <h4 class="card-title" style={{ paddingLeft: '17px' }}><b>Advice & Guidance</b> </h4>
          <div class="card-text" style={{ color: '#B2B2B2', padding: '10px 20px 10px 20px ', fontFamily: `Noto Sans, sans-serif` }}> All activities in the UAE are licensed.
            Whether manufacturing, finance,
            trading, marketing, consultancy or
            restaurants. In some countries only
            manufacturing is licensed. In others
            there is a threshold below which
            business are encouraged. Get our
            insightfull guidance today.</div>
        </div>
        <h5 style={{ padding: '0 0 30px 40px' }}><a href="#" class="card-link">Learn More <img src={dolo} /></a></h5>


      </div>
      <div class="card" style={{ width: '24rem', position: 'relative', right: '-140px', border: '2px solid #B2B2B2' }}>
        <img src={ILLUSTRATION031} style={{ width: 200, alignSelf: 'center', paddingTop: '40px', marginBottom: '20px' }} />
        <div class="card-body">
          <h4 class="card-title" style={{ paddingLeft: '17px' }}><b>Bank Account Setup</b></h4>
          <div class="card-text" style={{ color: '#B2B2B2', padding: '10px 20px 10px 20px', fontFamily: `Noto Sans, sans-serif` }}>There are many banks in the United
            Arab Emirates [UAE]. Both locally
            owned and branches of
            multinational ones. Foreign banks
            adjust according to their parent s
            strategies and have changed local
            requirements overnight in the past.
            But we are here to help you.</div>
        </div>


        <h5 style={{ padding: '0 0 30px 40px' }}> <a href="#" class="card-link">Learn More <img src={dolo} /></a></h5>


      </div>
      <div class="card" style={{ width: '24rem', float: 'right', marginTop: '50px', position: 'relative', left: '-130px', border: '2px solid #B2B2B2' }}>
        <img src={Group1} style={{ width: 200, alignSelf: 'center', paddingTop: '40px', marginBottom: '20px' }} />
        <div class="card-body">
          <h4 class="card-title" style={{ paddingLeft: '17px' }}><b>Registration Document Preperation</b></h4>
          <div class="card-text" style={{ color: '#B2B2B2', padding: '10px 20px 10px 20px', fontFamily: `Noto Sans, sans-serif` }}>Several documents must be prepared to start the process of registering a new company in the United Arab Emirates. Be it a Dubai local company, a free zone one or an offshore entity. Your registered agent is dedicated to get this done for you for a seamless process.</div>
        </div>


        <h5 style={{ padding: '0 0 30px 40px' }}> <a href="#" class="card-link">Learn More <img src={dolo} /></a></h5>


      </div>
      <div class="card" style={{ width: '24rem', position: 'relative', right: '-140px', border: '2px solid #B2B2B2', paddingTop: '50px', marginTop: '250px' }}>
        <img src={Group2} style={{ width: 200, alignSelf: 'center', paddingTop: '40px', marginBottom: '20px' }} />
        <div class="card-body">
          <h4 class="card-title" style={{ paddingLeft: '17px' }}><b>UAE Company Visas</b></h4>
          <div class="card-text" style={{ color: '#B2B2B2', padding: '10px 20px 10px 20px', fontFamily: `Noto Sans, sans-serif` }}>Your application for visas is critical
            especially if you intend to move to
            Dubai. This becomes even more
            urgent if your family will also move
            with you. All the paperwork is done
            on your behalf smoothly so that you
            may only focus on doing what
            matters most to you.</div>
        </div>


        <h5 style={{ padding: '0 0 30px 40px' }}> <a href="#" class="card-link">Learn More <img src={dolo} /></a></h5>


      </div>
      <div style={{ float: 'right', position: 'relative', left: '-120px', bottom: '140px' }}>
        <h4 >  We have gathered a team of <br />
          professionals to craft adequate <br />
          services you can rely on for a friction <br />
          free setup in UAE.</h4>
        <h5 style={{ paddingTop: '15px' }}><a href="#" class="card-link"> More About Our Services <img src={dolo} /></a></h5>
      </div>


    </div>
  )
}