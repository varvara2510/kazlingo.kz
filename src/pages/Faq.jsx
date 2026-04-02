export default function Faq({ t }) {
  return (
    <div className="faq-container">
      <h1>{t.faq}</h1>
      
      <div className="faq-item">
        <h3 className="faq-question">{t.q1}</h3>
        <p className="faq-answer">{t.a1}</p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">{t.q2}</h3>
        <p className="faq-answer">{t.a2}</p>
      </div>

      </div>
  );
}