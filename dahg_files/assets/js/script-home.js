// JS by Dan Høegh
// UCN MMD 2020

let options = {
    "controls":true,
    "autoplay":true,
    "preload":"auto",
    "muted":true
}

videojs("video2", options);

videojs("video2").on("ready", function() {
    this.addClass("my-example");
    console.log(this.id_ + " is now playing")
})
