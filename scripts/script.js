const game = {
  startGameButt: $("#start-game"),
  endGameButt: $("#end-game"),
  quitButt: $("#quit"),
  quitButtHeader: $("#quit-butt-header"),
  playAgainButt: $("#play-again-butt"),
  helpButt: $("#help"),
  moreInfoButt: $("#more-info"),
  playIcon: $("#playicon"),
  pauseIcon: $("#pauseicon"),
  gameRunScreen: $("#game-run"),
  gameStratScreen: $("#game-start"),
  playAgainScreen: $("#play-again"),
  myModal: $("#myModal"),
  myModal2: $("#myModal2"),

  gamePlay() {
    this.startGameButt.on("click", () => {
      console.log("Game is running!");
      this.gameRunScreen.removeClass("d-none");
      this.gameRunScreen.css("display", "block");
      this.gameStratScreen.addClass("d-none");
      this.quitButtHeader.removeClass("d-none");
      this.helpButt.removeClass("d-none");
    });
    this.playIcon.on("click", () => {
      this.pauseIcon.removeClass("d-none");
      this.playIcon.addClass("d-none");
      this.helpButt.removeClass("d-none");
    });

    this.pauseIcon.on("click", () => {
      this.playIcon.removeClass("d-none");
      this.pauseIcon.addClass("d-none");
      this.helpButt.removeClass("d-none");
    });

    this.endGameButt.on("click", () => {
      this.playAgainScreen.removeClass("d-none");
      this.gameRunScreen.addClass("d-none");
      this.quitButtHeader.addClass("d-none");
      this.helpButt.addClass("d-none");
    });

    this.quitButt.on("click", () => {
      this.gameStratScreen.removeClass("d-none");
      this.playAgainScreen.addClass("d-none");
      this.quitButtHeader.addClass("d-none");
      this.playIcon.removeClass("d-none");
      this.pauseIcon.addClass("d-none");
      this.helpButt.removeClass("d-none");
    });

    this.quitButtHeader.on("click", () => {
      this.gameStratScreen.removeClass("d-none");
      this.playAgainScreen.addClass("d-none");
      this.gameRunScreen.addClass("d-none");
      this.quitButtHeader.addClass("d-none");
      this.playIcon.removeClass("d-none");
      this.pauseIcon.addClass("d-none");
      this.helpButt.removeClass("d-none");
    });

    this.playAgainButt.on("click", () => {
      this.playAgainScreen.addClass("d-none");
      this.gameRunScreen.removeClass("d-none");
      this.quitButtHeader.removeClass("d-none");
      this.helpButt.removeClass("d-none");
    });
  },

  showModal() {
    const myModal = new bootstrap.Modal(this.myModal, {
      keyboard: false, // Disable closing with Escape key
    });

    const myModal2 = new bootstrap.Modal(this.myModal2, {
      keyboard: false,
    });

    this.helpButt.on("click", () => {
      if (!this.pauseIcon.hasClass("d-none")) {
        console.log("pause icon is showing");
        myModal2.show();
        myModal.hide();
      } else {
        console.log("pause icon is not showing");
        myModal2.hide();
        myModal.show();
      }
    });

    this.moreInfoButt.on("click", () => {
      myModal2.show();
      myModal.hide();
    });
  },
};

$(() => {
  console.log("The DOM is ready, jQuery concise style.");
  game.gamePlay();
  game.showModal();
});
