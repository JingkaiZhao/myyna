var LoginHeader = React.createClass({
    render: function() {
        return (
            <header>
                <div className="row">

                    <div className="col-xs-4 col-xs-offset-3">
                        <a href="pins/index.html">
                            <img src="site-logo.png" /></a>
                    </div>
                    <div className="col-xs-4 form">

                        <form name="loginform" id="loginform" method="post" action="/logincheck">
                            <input name="username" id="loginusername" type="text" placeholder="User Name" tabindex="0" className="loginInput" required />
                            <input name="userpass" id="loginpass" type="password" placeholder="Password" tabindex="0" className="loginInput" required />
                            <button className="btn btn-default submit" type="button" id="loginButton" tabindex="0">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                            </button>
                        </form>
                        <input type="hidden" name="referer_url" id="referer_url"/>

                    </div>
                    <div className="col-md-1 social">
                        <a href=""  className="socialSignUps"  data-link="/socialsignup" tabindex="0">
                            <span className="fb"></span>
                        </a>
                        <a href=""  className="socialSignUps"  data-link="/twittersignup" tabindex="0">
                            <span className="tw"></span>
                        </a>
                    </div>
                </div>
            </header>
        );
    }
});