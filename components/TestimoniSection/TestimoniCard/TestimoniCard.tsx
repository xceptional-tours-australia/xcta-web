import { UserIcon } from "lucide-react";
import "./style.css";

interface TestimoniCardProps {
  data: {
    desc: string;
    photo: string | undefined;
    name: string;
    city: string;
  };
}

export default function TestimoniCard({
  data: { desc, photo, name, city },
}: TestimoniCardProps) {
  return (
    <div className="testimoni-card__wrapper space-y-16">
      <div>
        <h2 className="testimoni-card__title">{`"${desc}"`}</h2>
      </div>
      <div className="testimoni-card__user-container">
        <div className="testimoni-card__user-profile-picture">
          <UserIcon />
        </div>
        <div>
          <h3 className="testimoni-card__user-name">{name}</h3>
          <h5 className="testimoni-card__user-country">{city}</h5>
        </div>
      </div>
    </div>
  );
}
