import { ChartsPreview } from '@/features/dashboard/components/ChartsPreview';

export const Dashboard = () => {
  return (
    <div>
      <h2>Panell</h2>

      <div className="flex flex-col gap-y-4">
        <section>
          <h3>Estadístiques</h3>
          <ChartsPreview />
        </section>
      </div>
    </div>
  );
};
