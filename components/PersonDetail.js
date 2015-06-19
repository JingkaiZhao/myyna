/**
 * <PersonDetailSmall person={} url='' displayText='' extraClass='' />
 *
 */
var PersonDetailSmall = React.createClass({displayName: "PersonDetailSmall",
    render: function() {
        var person = this.props.person;
        return (
            React.createElement("div", {className: "persnl_details clearfix " + this.props.extraClass}, 
                React.createElement("a", {href: this.props.url, className: "subtle"}, 

                React.createElement("img", {src: person.avatar})), 
                React.createElement("div", {className: "contns"}, 
                    React.createElement("p", null, this.props.displayText), 
                    React.createElement("a", {href: this.props.url, className: "subtle"}, person.name)
                )
            )
        );
    }
});