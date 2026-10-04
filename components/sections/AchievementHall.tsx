import AchievementMedal from "@/components/ui/AchievementMedal";
import { achievements } from "@/data/achievements";

export default function AchievementHall() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-[-0.05em] text-slate-900 sm:text-4xl lg:text-5xl">
            Achievement Hall
          </h2>

          <p className="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
            Legendary milestones unlocked throughout the adventure.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {achievements.map((achievement) => (
            <AchievementMedal
              key={achievement.title}
              {...achievement}
            />
          ))}
        </div>
      </div>
    </section>
  );
}