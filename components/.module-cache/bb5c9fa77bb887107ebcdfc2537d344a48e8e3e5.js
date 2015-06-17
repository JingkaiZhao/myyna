var PageFliper = React.createClass({displayName: "PageFliper",
    componentDidMount: function() {
        //
        this.props.initObj.init();
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
