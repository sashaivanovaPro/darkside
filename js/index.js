document.addEventListener("mouseover", (e) => {
  Object.assign(document.documentElement, {
    style: `
    --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
    --move-y: ${(e.clientY - window.innerHeight / 2) * -0.008}deg ;
    `,
  });
});
