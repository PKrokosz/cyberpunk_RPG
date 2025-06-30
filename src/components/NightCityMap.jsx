import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import districts from '@/data/night_city_districts_v3.json';
import { NightCityContext } from '@/context/NightCityContext';

const NightCityMap = () => {
  const navigate = useNavigate();
  const { setDistrict } = useContext(NightCityContext);
  const [tooltip, setTooltip] = useState(null);

  return (
    <div
      className="relative w-full h-full bg-center bg-cover"
      style={{
        backgroundImage:
          'url(data:image/webp;base64,UklGRuAAAABXRUJQVlA4INQAAADwFgCdASosASwBPm02mUmkIyKhICgAgA2JaW7hdrEbQAeiAV3LxcnIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk4UAA/v1RD7GhCgAAAAAAAAAAAAA==)',
      }}
    >
      {districts.map((d) => (
        <div
          key={d.id}
          className="absolute hotspot border border-cyan-500 cursor-pointer"
          style={{ left: `${d.position.x * 100}%`, top: `${d.position.y * 100}%` }}
          onMouseEnter={() => setTooltip(d)}
          onMouseLeave={() => setTooltip(null)}
          onClick={() => {
            setDistrict(d.id);
            navigate(`/map/${d.id}`);
          }}
        />
      ))}
      {tooltip && (
        <div
          className="absolute text-xs bg-black/80 text-neon-cyan px-2 py-1 border border-neon-cyan"
          style={{ left: `${tooltip.position.x * 100}%`, top: `${tooltip.position.y * 100}%` }}
        >
          {`${tooltip.name} – ${tooltip.faction_control} (Risk ${tooltip.risk_level})`}
        </div>
      )}
    </div>
  );
};

export default NightCityMap;
