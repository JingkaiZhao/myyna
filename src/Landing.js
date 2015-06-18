$(function() {

  var pageRs = [
    {
      pageName: 'Temp',
      imgSrc: 'loginpage/cubet_login1.jpg'
    },
    {
      pageName: 'Temp',
      imgSrc: 'loginpage/cubet_login2.jpg'
    },
    {
      pageName: 'Temp',
      imgSrc: 'loginpage/cubet_login3.jpg'
    },
    {
      pageName: 'Temp',
      imgSrc: 'loginpage/cubet_login4.jpg'
    },
    {
      pageName: 'Temp',
      imgSrc: 'loginpage/cubet_login5.jpg'
    },
  ];
  React.render(
    <div className="component-container">
      <Landing pageResource={pageRs} />
      <SignupModal />
      <FindPwdModal />
    </div>,
    document.getElementById("body-container")
  );

  // Page.init();

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

var Landing = React.createClass({
  componentDidMount: function() {
    var oPage = Page();
    oPage.init();
  },
  render: function() {
    return (
      <div id="log_in_container" className="log_in_container">
        <div className="error_message"></div>
        <LoginHeader />
        <PageFliper pages={this.props.pageResource} />
        <LoginFooter />
      </div>
    );
  }
})