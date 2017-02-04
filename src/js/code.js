$(document).ready(function() {
  $('.title').on({
    'mouseenter': function(e) {
      $(this).toggleClass('hover-fx');
    },
    'mouseleave' : function(e) {
      $(this).toggleClass('hover-fx');
    }
  });

  $('.to-projects').on({
    'mouseenter': function(e) {
      $('#project-section-link').toggleClass('hover-fx');
    },
    'mouseleave': function(e) {
      $('#project-section-link').toggleClass('hover-fx');
    }
  });

  $('#project-section-link, .to-projects').click(function(e) {
    $('html, body').animate({
        scrollTop: $('#devfest').parent().offset().top
    }, 600);
  });

  function focusProject() {
    $('.project-wrapper').each(function(idx, projectWrapper) {
      var distanceFromViewportTop = projectWrapper.getBoundingClientRect().top;
      var project = $(projectWrapper).find('.project')[0];

      if (distanceFromViewportTop >= -200 &&
          distanceFromViewportTop < window.innerHeight - 200) {
        project.classList.add('focus');
      } else {
        project.classList.remove('focus');
      }
    });
  }

  // Init:
  focusProject();
  $(document).scroll(focusProject);
  $('#project-section-link').removeClass('hover-fx');
});
