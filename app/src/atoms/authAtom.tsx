import { atom } from "jotai";

// ログイン状態を管理するatom
export const isAdminLoggedInAtom = atom(true);
export const isGuestLoggedInAtom = atom(false);