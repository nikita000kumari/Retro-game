import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import TextBox from "../ReactComponents/TextBox.jsx";
import {
  endSummaryAtom,
  gamePhaseAtom,
  relicCountAtom,
} from "../ReactComponents/store.js";

export default function ReactUI() {
  const gamePhase = useAtomValue(gamePhaseAtom);
  const endSummary = useAtomValue(endSummaryAtom);
  const relicCount = useAtomValue(relicCountAtom);
  const setGamePhase = useSetAtom(gamePhaseAtom);

  useEffect(() => {
    const keyHandler = (event) => {
      if (gamePhase === "start" && event.code === "Enter") {
        setGamePhase("playing");
      }
    };

    window.addEventListener("keydown", keyHandler);

    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  }, [gamePhase, setGamePhase]);

  return (
    <>
      {gamePhase === "start" && (
        <div className="phase-screen">
          <div className="phase-card">
            <p className="phase-kicker">Retro Console</p>
            <h1 className="phase-title">Relic Hunt</h1>
            <p className="phase-copy">
              Explore the map, collect all 3 glowing relics, then return to the
              villager to complete the quest.
            </p>
            <p className="phase-copy">
              Use the arrow keys to move. Press <strong>Enter</strong> to start.
            </p>
          </div>
        </div>
      )}

      {gamePhase === "ended" && (
        <div className="phase-screen">
          <div className="phase-card">
            <p className="phase-kicker">Quest Complete</p>
            <h1 className="phase-title">Adventure Finished</h1>
            <p className="phase-copy">{endSummary}</p>
            <p className="phase-copy">Refresh the page if you want to play again.</p>
          </div>
        </div>
      )}

      <div className="hud-panel">
        <p className="hud-title">Explorer Log</p>
        <p className="hud-copy">Relics found: {relicCount} / 3</p>
        <p className="hud-copy">Walk into glowing markers to collect them.</p>
      </div>
      <TextBox />
    </>
  );
}
