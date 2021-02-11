import React, { Component } from 'react';
import { ContactBoxes } from "./contact-boxes";
import { MenuLink, menuLinks } from "./header";
import { address } from "../components/cms-data/footer-data";
import { products } from "./cms-data/menu-data";

class Copyright extends Component {
  render() {
    return (
      <div className="copyright">
        <div className="container">
          <span>{new Date().getFullYear() + " Copyright © "} RC Medical</span>
        </div>
      </div>
    )
  }
}

class FooterContactInfo extends Component {
  render() {
    return (
      <div className="footer-contact-info">
        <div className="logo"></div>
        {addressInfo}
      </div>
    )
  }
}

const addressInfo = address.map((element, index) =>
  <div key={`info-${index}`} className="contact-info">
    <span className="title">{element.title}</span>
    <span className="address">{element.street}</span>
    <span className="address">{element.postal}</span>
  </div>
)

const extraLinks = products.map((element, index) =>
  <MenuLink key={index} link={element.link} name={element.name} />
);

class FooterMenu extends Component {

  render() {
    return (
      <ul className="links-box menu">
        <h3>Menu</h3>
        {menuLinks}
      </ul>
    )
  }
}

class FooterExtraLinks extends Component {
  render() {
    return (
      <ul className="links-box">
        <h3>Produkty</h3>
        {extraLinks}
      </ul>
    )
  }
}


export class Footer extends Component {
  render() {
    return (
      <footer>
        <ContactBoxes />
        <div className="container">
          <FooterContactInfo />
          <FooterMenu />
          <FooterExtraLinks />
        </div>
        <Copyright />
      </footer>
    )
  }
}