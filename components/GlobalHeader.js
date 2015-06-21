/**
 * <GlobalHeader menuItems={} bodyContainer=""/>
 * @param  {String} )                   
 * @return {[type]}   [description]
 */
var GlobalHeader = React.createClass({displayName: "GlobalHeader",
    render: function() {
        return (
            React.createElement("header", {className: "navbar navbar-default navbar-fixed-top nav_mob header-logout"}, 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-md-4 cubet_search_main"}, 
                        React.createElement("a", {href: "javascript:;", className: "menu_btn"}), 
                        React.createElement(HeaderMenu, {menuContainer: this.props.menuContainer, 
                            bodyContainer: this.props.bodyContainer, menuItems: this.props.menuItems})
                    ), 
                    React.createElement("div", {className: "col-md-4 cubet_board"}, 
                        React.createElement("a", {href: "", className: "logo"}, 
                        React.createElement("img", {src: "site-logo.png"}))
                    ), 
                    React.createElement("a", {href: "landing.html"}, 
                        React.createElement("span", {className: "glyphicon glyphicon-log-in cubetlogin"})
                    )
                )
            )
        );
    }
});