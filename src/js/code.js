$(document).ready(function() {
  $('.title').mouseenter(function(e) {
    $(this).toggleClass('hover-fx');
  }).mouseleave(function(e) {
    $(this).toggleClass('hover-fx');
  });

  var colors = {
    'jade': '#42cbad',
    'bruhzzfeed': '#e32'
  };

  function focusProject() {
    $('.project-wrapper').each(function(idx) {
      var distanceFromViewportTop = $(this)[0].getBoundingClientRect().top;
      var project = $(this)[0].children[0];

      if (distanceFromViewportTop >= -200 &&
          distanceFromViewportTop < window.innerHeight - 200) {
        project.classList.add('focus');
      } else {
        project.classList.remove('focus');
      }
    });
  }

  $(document).scroll(focusProject);

  $('#project-section-link, .to-projects').click(function(e) {
    $('html, body').animate({
        scrollTop: $('#jade').parent().offset().top
    }, 600);
  });

  $('.to-projects').mouseenter(function(e) {
    $('#project-section-link').toggleClass('hover-fx');
  }).mouseleave(function(e) {
    $('#project-section-link').toggleClass('hover-fx');
  });

  focusProject();
  $('#project-section-link').removeClass('hover-fx');
});
