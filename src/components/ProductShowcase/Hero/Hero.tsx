import { FiZap, FiAward, FiTrendingUp, FiShield } from "react-icons/fi";
import * as S from "./Hero.styles";
import type { IHeroProps } from "./Hero.interface";

export default function Hero({}: IHeroProps) {
  return (
    <S.HeroWrapper>
      <div className="hero-content">
        <h1>Meet Onyiye — curated gear for bold lifestyles.</h1>
        <p>
          Explore hot sales, best sellers, and popular picks. Every product
          includes instant WhatsApp checkout so you can purchase in seconds.
        </p>
        <div className="hero-actions">
          <a href="#categories" className="primary-btn">
            Shop Collections
          </a>
          <a href="#contact" className="ghost-btn">
            Talk to Sales
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div>
          <FiZap size={22} /> Instant buy in WhatsApp
        </div>
        <div className="metric-row">
          <div className="metric-card">
            <div className="metric-value">40+</div>
            <div className="metric-label">Curated products</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">4.9/5</div>
            <div className="metric-label">Customer love</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">24h</div>
            <div className="metric-label">Fast response</div>
          </div>
        </div>
        <div className="metric-row">
          <div className="metric-card">
            <div className="metric-value">
              <FiAward /> Trusted
            </div>
            <div className="metric-label">Top-rated store</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">
              <FiTrendingUp /> Trending
            </div>
            <div className="metric-label">Weekly drops</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">
              <FiShield /> Secure
            </div>
            <div className="metric-label">Verified vendors</div>
          </div>
        </div>
      </div>
    </S.HeroWrapper>
  );
}
