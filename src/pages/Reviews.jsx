import { useState } from "react";
import "./Reviews.css";

function Reviews() {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [stars, setStars] = useState(5);
  const [hover, setHover] = useState(0);
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews((prev) => [
      { id: Date.now(), email, text, stars, date: new Date() },
      ...prev,
    ]);
    setEmail("");
    setText("");
    setStars(5);
  };

  return (
    <div className="reviews">
      <h1>Értékelések</h1>

      <form className="review-form" onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            placeholder="te@pelda.hu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Vélemény
          <textarea
            placeholder="Írd le, mit gondolsz..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={5}
            required
          />
        </label>

        <div className="star-picker">
          <span>Csillagok</span>
          <div onMouseLeave={() => setHover(0)}>
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                className={n <= (hover || stars) ? "star on" : "star"}
                onClick={() => setStars(n)}
                onMouseEnter={() => setHover(n)}
                aria-label={`${n} csillag`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Küldés
        </button>
      </form>

      <div className="review-list">
        {reviews.length === 0 ? (
          <p className="empty">Még nincs értékelés. Légy te az első!</p>
        ) : (
          reviews.map((r) => (
            <div key={r.id} className="review-item">
              <div className="review-head">
                <strong>{r.email}</strong>
                <span className="review-stars">
                  {"★".repeat(r.stars)}
                  {"☆".repeat(5 - r.stars)}
                </span>
              </div>
              <p>{r.text}</p>
              <small>{r.date.toLocaleDateString("hu-HU")}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Reviews;