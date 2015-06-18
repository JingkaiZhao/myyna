var PageFliper = React.createClass({
    componentDidMount: function() {
        //
        // var oPage = Page();
        // oPage.init();
    },
    render: function() {
        var pagesArr = [];
        var pagesOption = this.props.pages;
        pagesOption.forEach(function(page, index) {
            var el = <SinglePage pageNum={index} imgSrc={page.imgSrc} />;
            pagesArr.push(el);
        });
        return (
            <div className="bb-custom-wrapper">
                <div id="bb-bookblock" className="bb-bookblock">
                    {pagesArr}
                </div>
                <nav>
                    <span id="bb-nav-prev">&larr;</span>
                    <span id="bb-nav-next">&rarr;</span>
                </nav>
            </div>   
        );
    }
});
