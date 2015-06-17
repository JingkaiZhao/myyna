var SinglePage = React.createClass({displayName: "SinglePage",
    render: function() {
        return (
            React.createElement("div", {className: "bb-item", id: 'item' + this.props.pageNum}, 
                React.createElement("div", {className: "content"}, 
                    React.createElement("div", {className: "scrollert", id: "nothing"}, 

                        React.createElement("img", {src: this.props.imgSrc, className: "image1"}), 
                        React.createElement("div", {className: "row image ipad"}, 
                            React.createElement("div", {className: "col-sm-3 col-xs-offset-1"}, 
                                React.createElement("div", {className: "pin1"}, 
                                    React.createElement("img", {src: "default/images/login/pin_1.png"})
                            )
                            ), 
                            React.createElement("div", {className: "col-sm-4 image1_quote"}, 
                                "“Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin”"
                            ), 
                            React.createElement("div", {className: "col-sm-3 col-xs-offset-1"}, 
                                React.createElement("div", {className: "pin2"}, 
                                    React.createElement("img", {src: "default/images/login/pin_2.png"})
                                )
                            )
                        )
                   )

                )
            )
        );
    }
});

var PageFliper = React.createClass({displayName: "PageFliper",
    componentDidMount: function() {
        Page.init();
    },
    render: function() {
        var pagesArr = [];
        var pagesOption = this.props.pages;
        pagesOption.forEach(function(page, index) {
            var el = React.createElement(SinglePage, {pageNum: index, imgSrc: page.imgSrc});
            pagesArr.push(el);
        });
        return (
            React.createElement("div", {id: "bb-bookblock", className: "bb-bookblock"}, 
                pagesArr
            )
        );
    }
});
