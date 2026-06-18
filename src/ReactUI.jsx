import { useAtomValue } from "jotai";
import { isTextBoxVisibleAtom, textBoxContentAtom } from "../ReactComponents/store.js";
import "./App.css";

export default function ReactUI() {
  const isTextBoxVisible = useAtomValue(isTextBoxVisibleAtom);
  const textBoxContent = useAtomValue(textBoxContentAtom);

  return (
    <div className="ui-shell">
      <header className="hud-card hud-top">
        <p className="eyebrow">Retro Console</p>
        <h1>Pixel Town</h1>
        <p className="hud-copy">
          Walk around with the arrow keys and bump into the villager to trigger
          dialogue.
        </p>
      </header>

      <aside className="hud-card hud-controls">
        <p className="eyebrow">Controls</p>
        <p className="key-row">
          <span>Move</span>
          <strong>Arrow Keys</strong>
        </p>
        <p className="key-row">
          <span>Debug</span>
          <strong>F1</strong>
        </p>
      </aside>

      <section className={`dialogue-box ${isTextBoxVisible ? "visible" : ""}`}>
        <p className="eyebrow">Dialogue</p>
        <p className="dialogue-copy">
          {textBoxContent || "Explore the map to find someone to talk to."}
        </p>
      </section>
    </div>
  );
}
