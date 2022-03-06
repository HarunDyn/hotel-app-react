import React from "react";
import "../scss/main.scss";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="kurumsal">
            <h3>Keşfet</h3>
            <ul>
              <li>Otel</li>
              <li>Tur</li>
              <li>Uçak Bileti</li>
              <li>Online Katalog</li>
              <li>Resmi Tatil Günleri</li>
            </ul>
          </div>
          <div className="Kampanyalar">
            <h3>Kampanyalar</h3>
            <ul>
              <li>Erken Rezervasyon Otelleri</li>
              <li>Kampanyalar</li>
              <li>İptal ve İade Paketi</li>
              <li>Tatil Fırsatları</li>
              <li>Hediye Kart</li>
            </ul>
          </div>
          <div className="yardım">
            <h3>Yardım</h3>
            <ul>
              <li>İletişim Bilgileri</li>
              <li>Sıkça Sorulan Sorular</li>
            </ul>
          </div>
          <div className="iletişim">
            <h3>İletişim</h3>
            <address>
              <b>Adres</b> Sun Plaza Maslak Mah. Bilim Sok. No:5 K:13 34485 ,
              <br />
              Sarıyer/İstanbul
            </address>
            <p>
              <b>Telefon: </b>08505555555
            </p>
          </div>
          <div className="takip">
            <div className="takip-social">
              <h3>Bizi Takip Edin</h3>
              <div className="social-medias-top">
                <a href="https://www.facebook.com/">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com/?lang=tr">
                  <FaTwitter />
                </a>
                <a href="https://www.youtube.com/">
                  <FaYoutube />
                </a>
                <a href="https://www.instagram.com/">
                  <FaInstagramSquare />
                </a>
              </div>
            </div>
            <p>E-Bültene abone olun gelişmeleri kaçırmayın</p>
            <div className="input">
              <input type="email" placeholder="E-Posta Adresiniz" />
              <div>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyRight">
        <div>Copyright@2022 icibot</div>
      </div>
    </>
  );
}

export default Footer;
