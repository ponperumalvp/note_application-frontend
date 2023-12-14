import { getItem } from "./localStorage/getItem/getItem";

export const loginCheck = (path) => {
  const token = getItem("accessToken");

  if (token && token.length < 10) {
    pathNavigatore(path);
  }
};

export const pathNavigatore = (path) => {
  const { origin } = window.location;
  window.location.href = `${origin}/${path}`;
};
