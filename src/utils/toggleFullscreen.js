const toggleFullscreen = () => {
  if (document.fullscreen) {
    document
      .exitFullscreen()
      .then(() => {})
      .catch(() => {});
  } else {
    document.documentElement
      .requestFullscreen({ navigationUI: "show" })
      .then(() => {})
      .catch(() => {});
  }
};

export default toggleFullscreen;
