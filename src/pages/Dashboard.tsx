import { ChartsPreview } from '@/components/Dashboard/ChartsPreview';

export const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>

      <div className="flex flex-col gap-y-4">
        <section>
          <h3>Charts</h3>
          <ChartsPreview />
        </section>
      </div>
    </div>
  );
};
