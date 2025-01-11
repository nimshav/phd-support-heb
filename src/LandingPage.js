import React from "react";
import "./index.css";

function LandingPage() {
  const [activeTab, setActiveTab] = React.useState("about-me");

  const tabs = [
    { id: "about-me", label: "אודותיי", content: (
      <div>
        <h2>אודותיי</h2>
        <p>אני נמרוד שביט חוקר בתחומי התקשורת והמדעי הרוח עם ניסיון רב בהנחיה ועריכה אקדמית</p>
        <p>תארים מתקדמים מישראל וארהב עם פרסומים בכתבי עת מובילים</p>
        <p>גישה מותאמת אישית לכל לקוח</p>
        <p>שליטה באנגלית והתמחות בכלים מתקדמים כמו בינה מלאכותית</p>
        <a href="#">קישור לפרופיל מלא</a>
      </div>
    ) },
    { id: "services", label: "שירותים עיקריים", content: (
      <div>
        <h2>שירותים עיקריים</h2>
        <ul>
          <li>הנחיית מחקר תמיכה לסטודנטים לתואר שני ודוקטורט וכן לחוקרים המתקשים בכתיבה אקדמית</li>
          <li>פגישות מותאמות אישית מפגשים אחד על אחד המותאמים לצורכי הפרויקט הספציפיים</li>
          <li>פתרון בעיות עזרה בכתיבת הצעות מחקר תכנון מתודולוגיה וניתוח תוצאות</li>
          <li>בניית תוכנית ולוחות זמנים לוחות זמנים מותאמים לזמינות הלקוח</li>
          <li>אסטרטגיות לניהול זמן טכניקות לשיפור מחקר וכתיבה</li>
          <li>הכשרה בכלים טכנולוגיים הדרכה לשימוש בכלים מתקדמים כמו כתיבת סקריפטים מותאמים אישית</li>
          <li>עריכה עריכה מבנית סגנונית ורציונלית כולל הגהה</li>
          <li>עמידה בסטנדרטים מדעיים כתיבה ועריכה בהתאם לסטנדרטים כמו איי פי איי</li>
        </ul>
      </div>
    ) },
    { id: "delivery", label: "אפשרויות מתן שירות", content: (
      <div>
        <h2>אפשרויות מתן שירות</h2>
        <ul>
          <li><strong>אינטנסיבי</strong> פגישות שבועיות או דו-שבועיות לפרויקטים בעדיפות גבוהה או תובעניים</li>
          <li><strong>רגיל</strong> פגישות בנקודות מפתח בתהליך המחקר כמו הגשת פרקים או סיום איסוף הנתונים</li>
          <li><strong>מינימלי</strong> פגישות חודשיות או לפי הצורך כדי לטפל באתגרים ספציפיים או לתת כיוון</li>
        </ul>
      </div>
    ) },
    { id: "testimonials", label: "לקוחות ממליצים", content: (
      <div>
        <h2>עדויות לקוחות</h2>
        <ul>
          <li><strong>אסף</strong> פתרונות יצירתיים לתכנון שיעורים ופרויקטים אקדמיים דוקטורט עברית</li>
          <li><strong>אלינה</strong> כתיבת מאמרים ופרסום בינלאומי דוקטורט אנגלית</li>
          <li><strong>ליאנה</strong> עריכה וכתיבה מותאמת לקהל בינלאומי דוקטורט אנגלית</li>
          <li><strong>אנה</strong> הגשת הצעת תזה איכותית תואר שני עברית</li>
        </ul>
      </div>
    ) },
    { id: "resources", label: "משאבים", content: (
      <div>
        <h2>משאבים</h2>
        <ul>
          <li>מדריך למבנה אקדמי מדריך מפורט לארגון עבודה אקדמית בצורה יעילה</li>
          <li>דוגמאות עריכה דוגמאות המראות שינויים סגנוניים מבניים וכתיבתיים</li>
          <li>טיפים וכלים טכנולוגיים טיפים וכלים למחקר וכתיבה יעילה באמצעות</li>
        </ul>
      </div>
    ) },
    { id: "contact", label: "צור קשר", content: (
      <div>
        <h2>צור קשר</h2>
        <p>אימייל <a href="mailto:nshavit@icloud.com">nshavit@icloud.com</a></p>
        <p>עקוב אחרי הפרופילים שלי</p>
        <ul>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              פרופיל לינקדאין
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              מעורבות אזרחית בטוויטר
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              גלו את המשאבים והפרויקטים שלנו לתמיכה בחינוך מדעי הרוח קוד פתוח
            </a>
          </li>
        </ul>
      </div>
    ) },
  ];

  return (
    <div className="landing-page">
      <header>
        <h1>תמיכה לדוקטורט</h1>
        <p>השותף שלך להצלחה אקדמית</p>
      </header>
      <div className="tabs">
        {tabs.map(tab => (
          <button key={tab.id} className="tab-button" onClick={() => setActiveTab(tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}

export default LandingPage;


