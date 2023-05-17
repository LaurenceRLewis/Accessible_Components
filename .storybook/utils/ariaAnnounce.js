const ariaAnnounce = (message) => {
  const liveRegion = document.createElement("div");
  liveRegion.style.position = "absolute";
  liveRegion.style.width = "1px";
  liveRegion.style.height = "1px";
  liveRegion.style.marginTop = "-1px";
  liveRegion.style.clip = "rect(1px, 1px, 1px, 1px)";
  liveRegion.style.overflow = "hidden";
  liveRegion.setAttribute("aria-live", "assertive");
  liveRegion.setAttribute("aria-atomic", "true");
  liveRegion.setAttribute("role", "status");

  document.body.appendChild(liveRegion);

  setTimeout(() => {
    liveRegion.innerText = message;
  }, 50);

  setTimeout(() => {
    document.body.removeChild(liveRegion);
  }, 7000);
};

export default ariaAnnounce;
