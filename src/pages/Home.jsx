import { Link } from 'react-router-dom';

export default function Home({ t }) {
  return (
    <div className="home-page">
      <h1>{t.welcome}</h1>

      <section className="home-section">
        <h2>{t.whatIsLing}</h2>
        <p>{t.lingDef}</p>

        <ul className="home-list">
          <li>{t.lingQ1}</li>
          <li>{t.lingQ2}</li>
          <li>{t.lingQ3}</li>
        </ul>

        <p>{t.lingEnd}</p>
      </section>

      <section className="oly-section">
        <div className="oly-text">
          <h2>{t.whatAreOly}</h2>
          <p>{t.olyIntro}</p>
          <p>{t.olyFormat}</p>
        </div>

        <div className="oly-image">
          <img src="/images/team_2026.jpg" alt="Kazakh team at IOL" />
        </div>
      </section>

      <p className="cta-inline">
        {t.ctaStart}{" "}
        <Link to="/participate" className="inline-link">
          {t.ctaParticipate}
        </Link>{" "}
        {t.ctaOr}{" "}
        <Link to="/faq" className="inline-link">
          {t.ctaFaq}
        </Link>
      </p>
    </div>
  );
}