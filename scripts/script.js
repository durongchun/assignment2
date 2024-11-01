const game = {
  isRunning: false,
  wasRunning: false,
  currentScreen: $("#game-start"),
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
  gameStratScreen: $("#game-start"), //splash screen
  playAgainScreen: $("#play-again"),
  myModal: $("#myModal"),
  myModal2: $("#myModal2"),

  switchDisplayedScreen(screen) {
    if (screen.is(this.gameStratScreen)) {
      console.log("This splash screen");
      this.startGameButt.off("click").on("click", () => {
        console.log("Game is running!");
        this.isRunning = true;
        this.currentScreen = this.gameRunScreen;
        this.gameRunScreen.removeClass("d-none");
        this.gameStratScreen.addClass("d-none");
        this.quitButtHeader.removeClass("d-none");
        this.helpButt.removeClass("d-none");
        console.log("isRunning:", this.isRunning);
        console.log("currentScreen:", this.currentScreen[0]);
        if (this.isRunning && this.currentScreen === this.gameRunScreen) {
          this.gameRun();
          if (this.wasRunning && this.currentScreen.is(this.playAgainScreen)) {
            this.playAgain();
          }
        }
      });
    }
  },

  gameRun() {
    this.playIcon.off("click").on("click", () => {
      this.pauseIcon.removeClass("d-none");
      this.playIcon.addClass("d-none");
      this.helpButt.removeClass("d-none");
    });

    this.pauseIcon.off("click").on("click", () => {
      this.playIcon.removeClass("d-none");
      this.pauseIcon.addClass("d-none");
      this.helpButt.removeClass("d-none");
    });

    this.quitButtHeader.off("click").on("click", () => {
      this.gameStratScreen.removeClass("d-none");
      this.playAgainScreen.addClass("d-none");
      this.gameRunScreen.addClass("d-none");
      this.quitButtHeader.addClass("d-none");
      this.playIcon.removeClass("d-none");
      this.pauseIcon.addClass("d-none");
      this.helpButt.removeClass("d-none");
    });

    this.endGameButt.off("click").on("click", () => {
      this.playAgainScreen.removeClass("d-none");
      this.gameRunScreen.addClass("d-none");
      this.quitButtHeader.addClass("d-none");
      this.helpButt.addClass("d-none");
      this.wasRunning = true;
      this.currentScreen = this.playAgainScreen;
      this.playAgain();
    });
  },

  playAgain() {
    this.quitButt.off("click").on("click", () => {
      this.gameStratScreen.removeClass("d-none");
      this.playAgainScreen.addClass("d-none");
      this.quitButtHeader.addClass("d-none");
      this.playIcon.removeClass("d-none");
      this.pauseIcon.addClass("d-none");
      this.helpButt.removeClass("d-none");
    });

    this.playAgainButt.off("click").on("click", () => {
      this.playAgainScreen.addClass("d-none");
      this.gameRunScreen.removeClass("d-none");
      this.quitButtHeader.removeClass("d-none");
      this.helpButt.removeClass("d-none");
      this.playIcon.removeClass("d-none");
      this.pauseIcon.addClass("d-none");
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
  game.switchDisplayedScreen(game.currentScreen);
  game.showModal();
});
