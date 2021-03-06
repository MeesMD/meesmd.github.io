$(window).bind("load", function () {

  $('.ml11 .letters').each(function () {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  anime.timeline({ loop: false })

    .add({
      translateX: [0, $(".ml11 .letters").width()],
      easing: "easeOutExpo",
      duration: 1000,
      delay: 100
    }).add({
      targets: '.ml11 .letter',
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=775',
      delay: function (el, i) {
        return 34 * (i + 1)
      }
    }).add({
      targets: '.ml11 .line',
      opacity: 0,
      duration: 200,
      easing: "easeOutExpo",
    })
});
