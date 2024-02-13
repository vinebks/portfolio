export interface IGlobalState {
  path: string;
}
export const setGlobalState = (globalState: IGlobalState) => {
  localStorage.setItem("globalState", JSON.stringify(globalState));
};

export const getGlobalState = () => {
  if (typeof window !== "undefined") {
    const globalState = localStorage.getItem("globalState");

    if (globalState) {
      return JSON.parse(globalState) as IGlobalState;
    }
  }

  return null;
};
