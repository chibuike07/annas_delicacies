import { FiZap, FiAward, FiTrendingUp, FiShield } from "react-icons/fi";
import { HeroSection } from "./HeroStyles";
import type { IHeroProps } from "./Hero.interface";

const Hero = ({}: IHeroProps) => {
  return (
    <HeroSection>
      <div className="hero_content">
        <h1>
          Welcome to Ann&apos;s SoleCraft Studio — Designer Shoes in Nigeria.
        </h1>
        <p>
          Discover handcrafted designer shoes made for Nigerian streets and
          events. From sleek heels to everyday sneakers, order your perfect pair
          with instant WhatsApp checkout.
        </p>
        <div className="hero_actions">
          <a href="#categories" className="primary_btn">
            Order Now
          </a>
          <a href="#contact" className="ghost_btn">
            Contact Us
          </a>
        </div>
      </div>
      <div className="hero_visual">
        <div>
          <FiZap size={22} /> Order via WhatsApp instantly
        </div>
        <div className="metric_row">
          <div className="metric_card">
            <div className="metric_value">40+</div>
            <div className="metric_label">Signature designs</div>
          </div>
          <div className="metric_card">
            <div className="metric_value">4.9/5</div>
            <div className="metric_label">Customer ratings</div>
          </div>
          <div className="metric_card">
            <div className="metric_value">24-48h</div>
            <div className="metric_label">Dispatch in Lagos</div>
          </div>
        </div>
        <div className="metric_row">
          <div className="metric_card">
            <div className="metric_value">
              <FiAward /> Crafted
            </div>
            <div className="metric_label">Handmade detailing</div>
          </div>
          <div className="metric_card">
            <div className="metric_value">
              <FiTrendingUp /> Popular
            </div>
            <div className="metric_label">Best-selling pairs</div>
          </div>
          <div className="metric_card">
            <div className="metric_value">
              <FiShield /> Hygienic
            </div>
            <div className="metric_label">Quality checked</div>
          </div>
        </div>
      </div>
    </HeroSection>
  );
};

export default Hero;
