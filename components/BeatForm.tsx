import React, { useState } from "react";

export function BeatForm({ userPlan, onGenerate }) {
  const [bpm, setBpm] = useState(90);
  const [style, setStyle] = useState(userPlan.allowedStyles[0]);
  const [duration, setDuration] = useState(userPlan.durations[0]);
  const [quality, setQuality] = useState(userPlan.qualities[0]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onGenerate({ bpm, style, duration, quality });
      }}
      style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 400 }}
    >
      <label>
        Темп (BPM):
        <input type="number" min={60} max={200} value={bpm} onChange={e => setBpm(Number(e.target.value))} />
      </label>
      <label>
        Стиль:
        <select value={style} onChange={e => setStyle(e.target.value)}>
          {userPlan.allowedStyles.map(style => (
            <option key={style} value={style}>{style}</option>
          ))}
        </select>
      </label>
      <label>
        Длительность:
        <select value={duration} onChange={e => setDuration(Number(e.target.value))}>
          <option value={15}>15 сек.</option>
          <option value={30} disabled={!userPlan.durations.includes(30)}>30 сек. (Plus/Pro)</option>
          <option value={60} disabled={!userPlan.durations.includes(60)}>60 сек. (Pro)</option>
        </select>
      </label>
      <label>
        Качество:
        <select value={quality} onChange={e => setQuality(e.target.value)}>
          <option value="mp3">mp3</option>
          <option value="wav" disabled={!userPlan.qualities.includes("wav")}>wav (Pro)</option>
        </select>
      </label>
      <button type="submit">Сгенерировать</button>
    </form>
  );
}