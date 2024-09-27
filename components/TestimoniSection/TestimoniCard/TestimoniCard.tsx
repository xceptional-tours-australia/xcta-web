import { UserIcon } from "lucide-react";
import "./style.css";

export default function TestimoniCard() {
  return (
    <div className="testimoni-card__wrapper space-y-16">
      <div>
        <h2 className="testimoni-card__title">
          “An unforgettable adventure! Xceptional Tours showed us the best of
          Australia with fantastic guides and stunning itineraries. Highly
          recommended!”
        </h2>
      </div>
      <div className="testimoni-card__user-container">
        <div className="testimoni-card__user-profile-picture">
          <UserIcon />
        </div>
        <div>
          <h3 className="testimoni-card__user-name">John Doe</h3>
          <h5 className="testimoni-card__user-country">From New York, USA</h5>
        </div>
      </div>
    </div>
  );
}
