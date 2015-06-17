var LoginHeader = React.createClass({displayName: "LoginHeader",
    render: function() {
        return (
            React.createElement("header", null, 
                React.createElement("div", {className: "row"}, 

                    React.createElement("div", {className: "col-xs-4 col-xs-offset-3"}, 
                        React.createElement("a", {href: "pins/index.html"}, 
                            React.createElement("img", {src: "site-logo.png"}))
                    ), 
                    React.createElement("div", {className: "col-xs-4 form"}, 

                        React.createElement("form", {name: "loginform", id: "loginform", method: "post", action: "/logincheck"}, 
                            React.createElement("input", {name: "username", id: "loginusername", type: "text", placeholder: "User Name", tabindex: "0", className: "loginInput", required: true}), 
                            React.createElement("input", {name: "userpass", id: "loginpass", type: "password", placeholder: "Password", tabindex: "0", className: "loginInput", required: true}), 
                            React.createElement("button", {className: "btn btn-default submit", type: "button", id: "loginButton", tabindex: "0"}, 
                                React.createElement("span", {className: "glyphicon glyphicon-chevron-right"})
                            )
                        ), 
                        React.createElement("input", {type: "hidden", name: "referer_url", id: "referer_url"})

                    ), 
                    React.createElement("div", {className: "col-md-1 social"}, 
                        React.createElement("a", {href: "", className: "socialSignUps", "data-link": "/socialsignup", tabindex: "0"}, 
                            React.createElement("span", {className: "fb"})
                        ), 
                        React.createElement("a", {href: "", className: "socialSignUps", "data-link": "/twittersignup", tabindex: "0"}, 
                            React.createElement("span", {className: "tw"})
                        )
                    )
                )
            )
        );
    }
});