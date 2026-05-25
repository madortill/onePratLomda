import React from 'react'

function PopupJourney({ onClose }) {
    const topics = [
        {
          title: "חופשה שנתית",
        },
        {
          title: "חופשת מחלה",
        },
        {
          title: "חייל החוזר מפעילות לילית",
        },
        {
          title: "עובד משמרות (ששוהה בביתו)",
        },
        {
          title: "מצבי שירות מיוחדים:",
          description:
            "היעדרות משירות שלא ברשות, כליאה, אשפוז, חל״ד, חופשה מיוחדת, חו״ל, דח״ש וכו׳",
        },
        {
          title: "חייל הנמצא בתרגיל / אימון / פעילות",
        },
        {
          title: "חייל המבצע משמרת בזמן הזנת דו״ח 1 ואינו נגיש כלל לטלפון הנייד:",
          description:
            "לדוגמה, עובד בחמ”ל מסווג ללא גישה לטלפון הנייד.",
        },
      ];
  return (
    <div className="PopupJourney">
      <div className="popup-journey">
        <button className="PopupJourneyCloseButton" onClick={onClose}>
          ×
        </button>

        <div className="PopupJourneyGrid">
          {topics.map((topic, index) => (
            <div className="PopupJourney-topicCard" key={index}>
              <span className="PopupJourney-topicTitle">{topic.title}</span>

              {topic.description && (
                <p className="PopupJourney-topicDescription">{topic.description}</p>
              )}

              <span className="PopupJourney-redX">X</span>
            </div>
          ))}
        </div>

        <p className="PopupJourneyText">
          כיום ישנה אופציה של הזנת נוכחות עתידית, במקרים בהם ידוע מראש
          כי הפרט לא יהיה זמין להזנת נוכחות במהלך השבוע, יש להזין מראש.
        </p>
      </div>
    </div>

  )
}

export default PopupJourney
