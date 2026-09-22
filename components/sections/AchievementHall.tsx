import AchievementMedal from "@/components/ui/AchievementMedal";
import { achievements } from "@/data/achievements";

export default function AchievementHall() {
  return (
    <section className="py-32 px-10">

      <div className="mb-16">

        <h2 className="text-6xl font-bold">
          Achievement Hall
        </h2>

        <p className="text-muted mt-4">
          Legendary milestones unlocked throughout the adventure.
        </p>

      </div>

      <div
        className="
        grid
        md:grid-cols-3
        gap-16
        justify-items-center
        "
      >
        {achievements.map((achievement) => (
          <AchievementMedal
            key={achievement.title}
            {...achievement}
          />
        ))}
      </div>

    </section>
  );
}