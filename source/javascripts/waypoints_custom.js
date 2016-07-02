var waypoint = new Waypoint({
  element: document.getElementById('launcher'),
  handler: function(direction) {
    $('.rocket-base .rocket').toggleClass('active');
  }
})
