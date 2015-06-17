$(function() {
  React.render(
    <LoginHeader />,
    document.getElementById("login-header")
  );
  Page.init();

  $('#referer_url').val(window.localStorage.getItem('cubetSharepinId'));
  window.localStorage.removeItem('cubetSharepinId');

  $('.socialSignUps').click(function() {
    window.localStorage.setItem('cubetSharepinId', $('#referer_url').val());
    window.open($(this).attr('data-link'), 'Signup', 'width=600,height=350')
  })

  $('#loginform input').on('focus keyup', function(e) {
    $('div.error_message').html('');
    $('div.error_message').removeClass('error-true alert-danger');
  });

  //Handle arrow keys
  $(document).keydown(function(e) {
    var key = e.which;
    if (e.target.tagName != 'INPUT' && (key == 37 || key == 39)) {
      e.preventDefault();
      return false;
    }
    return true;
  });

  $('#loginform').keyup(function(e) {
    if (e.which == 13) {
      $('#loginButton').click();
    }
  });

  $('#signupform').keyup(function(e) {
    if (e.which == 13) {
      $('#signupButton').click();
    }
  });

  /* to clear pop up contents on each close */
  $("#myModal,#Forgot").on('hidden.bs.modal', function() {
    $("#signupform").get(0).reset();
    $("#forgotform").get(0).reset();
    $("#signupform input,#forgotform input").removeAttr('style').removeClass('error');
    $(".errmsg,.msg,#user_valid,#email_valid").html('');
  });
});

$(window).scroll(function() {
  if ($(document).width() > 900) {
    $(".frozen_top").css("top", Math.max(130, $(this).scrollTop()));
    if ($(this).scrollTop() > 135) {
      $(".frozen_top").css("margin-top", "-95px");
      $("#nothingt").css("top", "53px");
    } else {
      $(".frozen_top").css("margin-top", "-5px");
      $("#nothing").css("top", "33px");
    }
  }
});