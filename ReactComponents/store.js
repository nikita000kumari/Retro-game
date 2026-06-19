import { atom, createStore } from "jotai";

export const isTextBoxVisibleAtom = atom(false);
export const textBoxContentAtom = atom("");
export const relicCountAtom = atom(0);
export const gamePhaseAtom = atom("start");
export const endSummaryAtom = atom("");
export const interactionHintAtom = atom("");
export const store = createStore();
