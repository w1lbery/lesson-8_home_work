import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img from "./img/nike.logo.png";
import facebook from "./img/facebook.svg";
import instagram from "./img/instagram.svg";

export default function App() {
  return (
    <div className="wrapper">
      <nav>
        <div className="container">
          <div className="nav_inner">
            <div className="nav_logo">
              <img src={img} alt="logo" className="nav_logo" />
            </div>
            <ul>
              <li>
                <a href="/">Контакты</a>
              </li>
              <li>
                <a href="/">О нас</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="slider">
        <div className="container">
          <div className="slider_inner">
            <Carousel>
              <div>
                <img
                  className="br"
                  src="https://images.squarespace-cdn.com/content/v1/55e467b1e4b0a2a709a23aa9/1622167154628-2CH93FWEWLMK37G0GCO2/CNK-Nike-Dunk-Low-Free-99.jpeg"
                  alt="shoes"
                />
                <p className="legend">Nike Dunk Low CNK Daily (ChicksNKicks)</p>
              </div>
              <div>
                <img
                  src="https://images.squarespace-cdn.com/content/v1/55e467b1e4b0a2a709a23aa9/1626742507148-7RE5C4CLIHGENC9J6TLV/CNK-Parra-Nike-SB-Dunk-Low-overview.jpeg?format=1000w"
                  alt="shoes"
                />
                <p className="legend">SB Parra Dunk Low 'Abstract Art' CNK Daily (ChicksNKicks)</p>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="footer_inner">
            <div className="social_media">
              <h3>Мы в соц.сетях</h3>
              <ul>
                <li>
                  <a href="https://www.facebook.com/nike/?locale=ru_RU">
                    <img src={facebook} alt="facebook" />
                    nike
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/nike/">
                    <img src={instagram} alt="insta" />
                    nike
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
