var FindPwdModal = React.createClass({displayName: "FindPwdModal",
    render: function() {
        return (
            React.createElement("div", {className: "modal fade", id: "Forgot", tabindex: "-1", role: "dialog", "aria-labelledby": "myModalLabel", "aria-hidden": "true"}, 
                React.createElement("div", {className: "modal-dialog login"}, 
                    React.createElement("div", {className: "modal-content"}, 
                        React.createElement("form", {name: "forgotform", id: "forgotform"}, 
                            React.createElement("div", {className: "modal-header"}, 
                                React.createElement("button", {type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true"}, "x"), 
                                React.createElement("h4", {id: "myModalLabel"}, "Forgot Password")
                            ), 
                            React.createElement("div", {className: "modal-body signup"}, 
                                React.createElement("div", {className: "row"}, 
                                    React.createElement("div", {className: "col-md-8 col-md-offset-2"}, 
                                        React.createElement("div", {className: "search-new"}, 
                                            React.createElement("div", {className: "msg"}), 
                                            React.createElement("input", {type: "text", name: "email", className: "form-control sign_up required email", placeholder: "E-mail"})
                                        )
                                    )
                                )
                            ), 
                            React.createElement("div", {className: "modal-footer"}, 
                                React.createElement("button", {type: "submit", className: "btn submit", id: "forgotSubmit"}, "Submit")
                            )
                        )
                    )
                )
            )
        );
    }
});