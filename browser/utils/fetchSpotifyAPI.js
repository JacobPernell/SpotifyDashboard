export const fetchSpotifyAPI = ({ url, options, success, fail }) => {
  fetch(url, options)
    .then(res => res.json(), fail)
    .then(success)
    .catch(fail);
};
