var SignupModal = React.createClass({displayName: "SignupModal",
    render: function() {
        return (
            React.createElement("div", {className: "modal fade", tabindex: "-1", id: "myModal", role: "dialog", "aria-labelledby": "myModalLabel", "aria-hidden": "true"}, 
                React.createElement("div", {className: "modal-dialog login"}, 

                    React.createElement("form", {name: "signupform", id: "signupform", method: "post", action: "/usersignup"}, 

                        React.createElement("div", {className: "modal-content"}, 
                            React.createElement("div", {className: "modal-header"}, 
                                React.createElement("button", {type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true"}, "x"), 
                                React.createElement("h4", {id: "myModalLabel"}, "Sign Up")
                            ), 
                            React.createElement("div", {className: "modal-body signup"}, 
                                React.createElement("div", {className: "row"}, 
                                    React.createElement("div", {className: "col-md-8 col-md-offset-2"}, 
                                        React.createElement("div", {className: "msg"}), 

                                        React.createElement("div", {className: "search-new"}, 
                                            React.createElement("input", {type: "text", name: "name", id: "signupname", tabindex: "6", className: "form-control sign_up", placeholder: "Name", required: true})
                                        ), 
                                        React.createElement("div", {className: "search-new"}, 

                                            React.createElement("input", {type: "text", name: "email", id: "signup_email", tabindex: "7", className: "form-control sign_up", placeholder: "E-mail Address", required: true}), 
                                            React.createElement("div", {id: "email_valid", style: {'color':'red'}}, "Already Registered Email")
                                        ), 
                                        React.createElement("div", {className: "search-new"}, 
                                            React.createElement("input", {type: "text", name: "username", id: "signup_username", tabindex: "8", className: "form-control sign_up", placeholder: "Username", required: true}), 
                                            React.createElement("div", {id: "user_valid", style: {'color':'red'}}, "User name not available")
                                        ), 
                                        React.createElement("div", {className: "input-group search-new"}, 
                                            React.createElement("span", {className: "input-group-btn"}, 
                                                React.createElement("button", {type: "button", className: "btn btn-default cursor"}, 
                                                    React.createElement("span", {className: "glyphicon glyphicon-lock"})
                                                )
                                            ), 
                                            React.createElement("input", {type: "password", tabindex: "9", name: "userpass", id: "userpass", className: "form-control", placeholder: "Password", required: true})
                                        ), 
                                        React.createElement("div", {className: "input-group search-new"}, 
                                            React.createElement("span", {className: "input-group-btn"}, 
                                                React.createElement("button", {type: "button", className: "btn btn-default cursor"}, 
                                                    React.createElement("span", {className: "glyphicon glyphicon-lock"})
                                                )
                                            ), 
                                            React.createElement("input", {type: "password", tabindex: "10", name: "cuserpass", className: "form-control", placeholder: "Confirm Password", required: true, equalTo: "#userpass"})
                                        )

                                    )
                                )
                            ), 
                            React.createElement("div", {className: "modal-footer"}, 
                                React.createElement("button", {type: "button", id: "signupButton", tabindex: "11", className: "btn submit"}, "Submit")
                            )
                        )

                    )

                )
            )
        );
    }
});