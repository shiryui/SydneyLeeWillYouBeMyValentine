document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     🔗 BASIC NAVIGATION
     ========================= */

  window.yes = function () {
    window.location.href = "yes.html";
  };

  window.no = function () {
    window.location.href = "no.html";
  };

  window.gift1countdown = function () { 
    window.location.href = "gift1countdown.html"
    ; 
  }; 
  
  window.gift2countdown = function () { 
    window.location.href = "gift2countdown.html"; }
  ; 
  
  window.gift3countdown = function () { 
    window.location.href = "gift3countdown.html"; }
  ;

  window.gift1 = function () { 
    window.location.href = "gift1.html"; }
  ;

  window.gift2 = function () { 
    window.location.href = "gift2.html"; }
  ;

  window.gift3 = function () { 
    window.location.href = "gift3.html"; }
  ;

  /* =========================
     🎁 GIFT SEQUENCE LOGIC
     ========================= */

  window.openGift = function () {
    let stage = parseInt(localStorage.getItem("giftStage")) || 0;

    stage += 1;
    localStorage.setItem("giftStage", stage);

    window.location.href = "countdown.html";
  };

  /* =========================
     🎵 BACKGROUND MUSIC
     ========================= */

  const audio = document.getElementById("bgMusic");

  if (audio) {
    audio.play().catch(() => {
      document.addEventListener(
        "click",
        () => {
          audio.play();
        },
        { once: true }
      );
    });
  }

});
