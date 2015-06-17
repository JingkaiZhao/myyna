var PageFliper = React.createClass({displayName: "PageFliper",
    componentDidMount: function() {
        //
        var oPage = Page();
        oPage.init();
    },
    render: function() {
        var pagesArr = [];
        var pagesOption = this.props.pages;
        pagesOption.forEach(function(page, index) {
            var el = React.createElement(SinglePage, {pageNum: index, imgSrc: page.imgSrc});
            pagesArr.push(el);
        });
        return (
            React.createElement("div", {className: "bb-custom-wrapper"}, 
                React.createElement("div", {id: "bb-bookblock", className: "bb-bookblock"}, 
                    pagesArr
                ), 
                React.createElement("nav", null, 
                    React.createElement("span", {id: "bb-nav-prev"}, "←"), 
                    React.createElement("span", {id: "bb-nav-next"}, "→")
                )
            )
             
        );
    }
});
