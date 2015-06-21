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

/**
 * <PersonDetailFollower person={} followerCount="" likedCount=""/>
 * @param  {[type]} ) {                   var person [description]
 * @return {[type]}   [description]
 */
var PersonDetailFollower = React.createClass({displayName: "PersonDetailFollower",
    render: function() {
        var person =  this.props.person;
        return (
            React.createElement("div", null, 
                React.createElement("img", {width: "68px", height: "68px", src: person.avatar}), 

                React.createElement("div", {className: "follower"}, 
                    React.createElement("h2", null, person.name), 
                    React.createElement("span", {className: "icon-users"}), 
                    React.createElement("span", {className: "icon_board_text boardfollowecount"}, this.props.followerCount), 
                    React.createElement("span", {className: "glyphicon glyphicon-tags icon_board"}), 
                    React.createElement("span", {className: "icon_board_text"}, this.props.likedCount)
                )
            )
        );
    }
});