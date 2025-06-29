import character from "../../data/character.json";

export const CharacterSheet = () => (
  <div className="space-y-1 text-left">
    <h2 className="text-xl font-bold">{character.name}</h2>
    <p>Class: {character.class}</p>
    {Object.entries(character.stats).map(([s, v]) => (
      <p key={s}>{s}: {v}</p>
    ))}
  </div>
);
