import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import districts from '@/data/night_city_districts_v3.json';
import { NightCityContext } from '../context/NightCityContext';

const DistrictView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { setDistrict } = useContext(NightCityContext);
  const d = districts.find((x) => x.id === id);

  useEffect(() => {
    if (id) setDistrict(id);
  }, [id, setDistrict]);

  const startEncounter = (poi: string) => {
    console.log('start encounter', poi);
  };

  if (!d) return <div>Unknown district</div>;

  return (
    <div className="space-y-2">
      <h2 className="text-neon-cyan">{d.name}</h2>
      <p>
        {d.faction_control} – Risk {d.risk_level}
      </p>
      <div className="flex flex-col space-y-1">
        {d.poi.map((p) => (
          <button
            key={p}
            onClick={() => startEncounter(p)}
            className="text-left hover:text-neon-magenta"
          >
            Visit {p}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DistrictView;

