var SignupModal = React.createClass({
    render: function() {
        return (
            <div className="modal fade" tabindex="-1" id="myModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog login">

                    <form name="signupform" id="signupform" method="post" action="/usersignup">

                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">x</button>
                                <h4 id="myModalLabel">Sign Up</h4>
                            </div>
                            <div className="modal-body signup">
                                <div className="row">
                                    <div className="col-md-8 col-md-offset-2">
                                        <div className="msg"></div>

                                        <div className="search-new">
                                            <input type="text" name="name" id="signupname" tabindex="6" className="form-control sign_up" placeholder="Name" required />
                                        </div>
                                        <div className="search-new">

                                            <input type="text" name="email" id="signup_email" tabindex="7" className="form-control sign_up" placeholder="E-mail Address"  required/>
                                            <div id="email_valid" style={{'color':'red'}}>Already Registered Email</div>
                                        </div>
                                        <div className="search-new">
                                            <input type="text" name="username" id="signup_username" tabindex="8" className="form-control sign_up" placeholder="Username" required />
                                            <div id="user_valid" style={{'color':'red'}}>User name not available</div>
                                        </div>
                                        <div className="input-group search-new">
                                            <span className="input-group-btn">
                                                <button type="button" className="btn btn-default cursor">
                                                    <span className="glyphicon glyphicon-lock"></span>
                                                </button>
                                            </span>
                                            <input type="password" tabindex="9" name="userpass" id="userpass" className="form-control" placeholder="Password" required />
                                        </div>
                                        <div className="input-group search-new">
                                            <span className="input-group-btn">
                                                <button type="button" className="btn btn-default cursor">
                                                    <span className="glyphicon glyphicon-lock"></span>
                                                </button>
                                            </span>
                                            <input type="password" tabindex="10" name="cuserpass" className="form-control" placeholder="Confirm Password" required equalTo="#userpass"/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" id="signupButton" tabindex="11" className="btn submit" >Submit</button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        );
    }
});