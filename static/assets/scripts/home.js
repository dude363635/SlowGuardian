let inFrame;

try {
  inFrame = window !== top;
} catch (e) {
  inFrame = true;
}

if (!inFrame && !navigator.userAgent.includes("Firefox")) {
  const popup = open("about:blank", "_blank");
  if (!popup || popup.closed) {
    alert("Please allow popups and redirects.");
  } else {
    const doc = popup.document;
    const iframe = doc.createElement("iframe");
    const style = iframe.style;
    const link = doc.createElement("link");

    const name = localStorage.getItem("name") || "My Drive - Google Drive";
    const icon =
      localStorage.getItem("icon") ||
      "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png";

    doc.title = name;
    link.rel = "icon";
    link.href = icon;

    iframe.src = location.href;
    style.position = "fixed";
    style.top = style.bottom = style.left = style.right = 0;
    style.border = style.outline = "none";
    style.width = style.height = "100%";

    doc.head.appendChild(link);
    doc.body.appendChild(iframe);

    const pLink =
      localStorage.getItem(encodeURI("pLink")) ||
      "https://www.classroom.google.com/";
    location.replace(pLink);

    const script = doc.createElement("script");
    script.textContent = `
      window.onbeforeunload = function (event) {
        const confirmationMessage = 'Leave Site?';
        (event || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
      };
    `;
    doc.head.appendChild(script);
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  if (window.localStorage.getItem("v4Particles") === "true") {
    const scr = document.createElement("script");
    scr.src = "/assets/scripts/particles.js";
    document.body.appendChild(scr);
  }
});

window.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<iframe src="/a/hvtrs8%2F-gmoelg.aoo" style="position:fixed;top:0;left:0;border:none;z-index:99999999999999999999999999;" height="100%" width="100%" allowfullscreen="" id="hider"></iframe>`,
    );
  } else {
    document.querySelector("#hider")?.remove();
  }
});

document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    document.getElementById("is").blur();
  }
};

let splashtext = [
  "I hate gogaudian!",
  "Slowest Proxy!",
  "Skid Alert",
  "Slowwwwwwwwww",
  "SlowGuardian",
  "Donald why you getting NS blocked?",
  "Karter is gay",
  "Wyatt is a skid",
  "YouSNAPPPPPPP",
  "You are a skid",
  "Guardian",
  "SlowGuardian is the best",
  "Abortion is wrong!!",
  "Adolf Hitler needs to be stopped",
  "All lives matter",
  "Racism is bad!",
  "The Pharaoh is gonna get you",
  "The Pharaoh told me to",
  "The Pharaoh MADE ME do it",
  "The Pharaoh is gonna eat you",
  "Ermmmm. Allow Popups",
  "About:Black",
  "Jayden is gay",
  "Naked Mole Rat",
  "Medium Pace",
  "Spit on your hand",
  "SlowGuardian is free",
  "Im on my gooning streak",
  "Ronald H. Johnson",
  "KARTER YOU LOVE ZANE - Ron",
];

document.getElementById("splash").innerText =
  splashtext[Math.floor(Math.random() * splashtext.length)];
