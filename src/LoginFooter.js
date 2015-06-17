var LoginFooter = React.createClass({
    render: function() {
        return (
            <footer>

                <h1>
                    <strong><a>Sign up</a></strong> 
                with
                </h1>
                <a href="" data-toggle="modal" data-target="#myModal">
                    <span className="signup-email"></span>
                </a>

                <a href="" className="socialSignUps" data-link="/socialsignup">
                    <span className="fb"></span>
                </a>

                <a href="" className="socialSignUps"  data-link="/twittersignup">
                    <span className="tw"></span>
                </a>

                <h2>
                    <a href="" data-toggle="modal" data-target="#Forgot">Forgot password</a>
                </h2>

            </footer>
        );
    }
});