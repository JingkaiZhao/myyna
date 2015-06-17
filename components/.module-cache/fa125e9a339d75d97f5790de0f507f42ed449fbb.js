var LoginFooter = React.createClass({displayName: "LoginFooter",
    render: function() {
        return (
            React.createElement("footer", null, 

                React.createElement("h1", null, 
                    React.createElement("strong", null, React.createElement("a", null, "Sign up")), 
                "with"
                ), 
                React.createElement("a", {href: "", "data-toggle": "modal", "data-target": "#myModal"}, 
                    React.createElement("span", {className: "signup-email"})
                ), 

                React.createElement("a", {href: "", className: "socialSignUps", "data-link": "/socialsignup"}, 
                    React.createElement("span", {className: "fb"})
                ), 

                React.createElement("a", {href: "", className: "socialSignUps", "data-link": "/twittersignup"}, 
                    React.createElement("span", {className: "tw"})
                ), 

                React.createElement("h2", null, 
                    React.createElement("a", {href: "", "data-toggle": "modal", "data-target": "#Forgot"}, "Forgot password")
                )

            )
        );
    }
});