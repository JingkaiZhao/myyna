var SinglePage = React.createClass({
    render: function() {
        var pageNum = this.props.pageNum;
        var pageId = "item" + pageNum;
        var imageSrc = this.props.imgSsrc;
        return (
            <div className="bb-item" id={pageId}>
                <div className="content">
                    <div className="scrollert" id="nothing">

                        <img src={imageSrc} className="image1" />
                        <div className="row image ipad">
                            <div className="col-sm-3 col-xs-offset-1">
                                <div className="pin1">
                                    <img src="default/images/login/pin_1.png" />
                            </div>
                            </div>
                            <div className="col-sm-4 image1_quote">
                                “Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin”
                            </div>
                            <div className="col-sm-3 col-xs-offset-1">
                                <div className="pin2">
                                    <img src="default/images/login/pin_2.png" />
                                </div>
                            </div>
                        </div>
                   </div>

                </div>
            </div>
        );
    }
});