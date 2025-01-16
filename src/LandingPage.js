import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"; // Ensure styles are applied

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <header className="landing-header">
        <h1>תמיכה לדוקטורנטים וחוקרים</h1>
        <p>השותף שלך להצלחה אקדמית</p>
        <button className="cta-button" onClick={() => navigate("/contact")}>
          התחילו עכשיו
        </button>
      </header>

      {/* Services Section */}
      <section className="services-section">
        <h2>השירותים שלנו</h2>
        <div className="service-list">
          <div className="service-card">
            <h3>תמיכה בכתיבה</h3>
            <p>הדרכה מקצועית בכתיבת דיסרטציות, מאמרים אקדמיים והצעות מחקר.</p>
          </div>
          <div className="service-card">
            <h3>הנחיית מחקר</h3>
            <p>ייעוץ מעמיק במחקר, סקירת ספרות ותמיכה בשיטות מחקר.</p>
          </div>
          <div className="service-card">
            <h3>תמיכה טכנית</h3>
            <p>עזרה בניתוח נתונים, קידוד ושימוש בתוכנות מחקר.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>מה הלקוחות שלנו אומרים?</h2>
        <div className="testimonial">
          <p>"תמיכת הדוקטורנטים עזרה לי לסיים את הדיסרטציה בזמן עם ליווי מקצועי יוצא דופן!"</p>
          <span>- ד"ר אמילי ג'ונסון, אוניברסיטת הרווארד</span>
        </div>
        <div className="testimonial">
          <p>"הייעוץ המחקרי שינה את פני העבודה האקדמית שלי!"</p>
          <span>- ד"ר אחמד חאן, אוניברסיטת אוקספורד</span>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>קחו את המחקר שלכם לשלב הבא</h2>
        <p>קבעו פגישה עם המומחים שלנו עוד היום.</p>
        <button className="cta-button" onClick={() => navigate("/contact")}>
          קבעו פגישה
        </button>
      </section>
    </div>
  );
};

export default LandingPage;






