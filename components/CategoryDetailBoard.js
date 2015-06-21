/**
 * <CategoryDetailBoard name="" desc="" followerCount="" likedCount="" follower={} />
 * @return {[type]} [description]
 */
var CategoryDetailBoard = React.createClass({displayName: "CategoryDetailBoard",

    render: function() {
        return (
            React.createElement("div", {id: "board_container", className: "leftmenu_adjst"}, 
                React.createElement("div", {className: "row row_min", style: {'visibility': 'hidden'}}, 
                    React.createElement("div", {className: "col-md-12 board_small"}, 
                        React.createElement("span", {className: "glyphicon glyphicon-th-list board_small_m"}), 
                        this.props.name
                    )
                ), 
                React.createElement("div", {className: "row row_lrg"}, 
                    React.createElement("div", {className: "col-md-3 board"}, 
                    React.createElement("img", {src: "../categories/category-2.png"})), 
                    React.createElement("div", {className: "col-md-5 board"}, 
                        React.createElement("h2", null, this.props.name), 
                        React.createElement("h3", null), 
                        React.createElement("p", null, this.props.desc)

                    ), 

                    React.createElement("div", {className: "col-md-2  col-md-offset-2 board_right"}, 
                        React.createElement(PersonDetailFollower, {person: this.props.follower, 
                            followerCount: this.props.followerCount, likedCount: this.props.likedCount})
                    )
                )
            )

        );
    }

});