import { RootState } from "../../store";

const sliceName = "homepage"

export const selectRoadmapProps = (state: RootState) => state[sliceName].roadmap;

export const selectProgress = (state: RootState) => state[sliceName].progress;

export const selectOnClose = (state: RootState) => state[sliceName].close;
