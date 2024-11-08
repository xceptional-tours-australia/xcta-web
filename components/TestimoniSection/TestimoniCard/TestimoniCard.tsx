"use client"
import { UserIcon } from "lucide-react";
import "./style.css";

interface TestimoniCardProps {
  data: {
    testimony: string;
    fullname: string | undefined;
    user_image: string;
    origin: string;
  };
}

export default function TestimoniCard({
  data: { testimony, fullname, user_image, origin },
}: TestimoniCardProps) {
  return (
    <div className="testimoni-card__wrapper space-y-16">
      <div>
        <h2 className="testimoni-card__title">{`"${testimony}"`}</h2>
      </div>
      <div className="testimoni-card__user-container">
        <div className="testimoni-card__user-profile-picture">
          <UserIcon />
        </div>
        <div>
          <h3 className="testimoni-card__user-name">{fullname}</h3>
          <h5 className="testimoni-card__user-country">{origin}</h5>
        </div>
      </div>
    </div>
  );
}
