/**
 * <CategoryPin pinData={} />
 * @pinData {
 *      carouselImgSrc,
 *      carouselNavUrl,
 *      pinDescription,
 *      createDate,
 *      pinnedBy,
 *      pinnedOnto,
 *  }
 */
var CategoryPin = React.createClass({displayName: "CategoryPin",
    render: function() {
        var data = this.props.pinData;
        return (
            React.createElement("div", {className: "element clearfix"}, 

                React.createElement("div", {id: "myCarousel2_557460a5fce885ab59fe0d7b", className: "carousel slide custom"}, 

                    React.createElement("div", {className: "carousel-inner"}, 

                        React.createElement("div", {className: "active item"}, 
                            React.createElement("a", {href: ""}, 
                                React.createElement("img", {src: data.carouselImgSrc}))
                        ), 

                        React.createElement("div", {style: {'display': 'none'}, "data-toggle": "modal", "data-target": "#myModal"}), 
                        React.createElement("a", {href: data.carouselNavUrl, className: "time_1  time_1_change_width "}, React.createElement("i", null))

                    )
                ), 
                React.createElement("div", {className: "post-content"}, 

                    React.createElement("a", {href: data.carouselNavUrl}, 
                        React.createElement("p", null, data.pinDescription)
                    )

                ), 

                React.createElement("div", {className: "post-info-inner clearfix"}, 
                    React.createElement("span", {className: "glyphicon glyphicon-dashboard date"}), 
                    React.createElement("span", {className: "text"}, 
                        React.createElement("a", {href: ""}, data.createDate)
                    ), 
                    /* like button */
                    React.createElement("a", {href: "javascript:void(0)", className: "glyphicon glyphicon-heart date ", style: {'pointer-events':'none'}, id: "like_557460a5fce885ab59fe0d7b", onclick: "pinlike('557460a5fce885ab59fe0d7b', this)"}), 
                    /* like counts */
                    React.createElement("span", {className: "text"}, 
                        React.createElement("a", {className: "pincount", id: "pincount_557460a5fce885ab59fe0d7b", style: {'pointer-events':'none'}, href: ""}, "4")
                    ), 

                    React.createElement("a", {href: "http://www.jasminebee.org", target: "_blank"}, 
                        React.createElement("span", {className: "glyphicon glyphicon-link date"})
                    ), 

                    React.createElement("div", {className: "clear"}), 
                    React.createElement("a", {className: "flag", href: ""})
                ), 

                React.createElement(PersonDetailSmall, {person: data.pinnedBy, url: "../login-2.html", displayText: "Pinned by", extraClass: ""}), 
                React.createElement(PersonDetailSmall, {person: data.pinnedOnto, url: "../board/5574606bfce885ab59fe0b6f.html", displayText: "Pinned onto", extraClass: "board_show"})

            )
        );
    }
});


