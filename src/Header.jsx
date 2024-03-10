import React from 'react'

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <div style={{backgroundColor:'grey',width:"100%"}}>
        <MDBNavbar >
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>
        <img
          src='https://cdn.dribbble.com/users/491923/screenshots/1815379/black-flip.gif'
          height='30'
          alt=''
          loading='lazy'
        />
        Counter App
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar>
    </div>
  )
}

export default Header