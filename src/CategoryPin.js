/**
 * <CategoryPin pinData={} key=""/>
 * @pinData {
 *      carouselImgSrc,
 *      carouselNavUrl,
 *      pinDescription,
 *      createDate,
 *      pinnedBy,
 *      pinnedOnto,
 *  }
 */
var CategoryPin = React.createClass({
    render: function() {
        var data = this.props.pinData;
        return (
            <div className="element clearfix" id={"category-" + this.props.key}>

                <div id="myCarousel2_557460a5fce885ab59fe0d7b" className="carousel slide custom">

                    <div className="carousel-inner">

                        <div  className="active item" >
                            <a href="">
                                <img src={data.carouselImgSrc} /></a>
                        </div>

                        <div style={{'display': 'none'}} data-toggle="modal" data-target="#myModal"></div>
                        <a href={data.carouselNavUrl} className="time_1  time_1_change_width " ><i></i></a>

                    </div>
                </div>
                <div className="post-content">

                    <a href={data.carouselNavUrl}>
                        <p>{data.pinDescription}</p>
                    </a>

                </div>

                <div className="post-info-inner clearfix">
                    <span className="glyphicon glyphicon-dashboard date"></span>
                    <span className="text" >
                        <a href="">{data.createDate}</a>
                    </span>
                    {/* like button */}
                    <a href="javascript:void(0)" className="glyphicon glyphicon-heart date " style={{'pointerEvents':'none'}} id="like_557460a5fce885ab59fe0d7b" onclick="pinlike('557460a5fce885ab59fe0d7b', this)"></a>
                    {/* like counts */}
                    <span className="text" >
                        <a className="pincount" id="pincount_557460a5fce885ab59fe0d7b" style={{'pointerEvents':'none'}} href="">4</a>
                    </span>

                    <a href="http://www.jasminebee.org" target="_blank">
                        <span className="glyphicon glyphicon-link date"></span>
                    </a>

                    <div className="clear"></div>
                    <a className="flag" href=""></a>
                </div>

                <PersonDetailSmall person={data.pinnedBy} url='../login-2.html' displayText='Pinned by' extraClass='' />
                <PersonDetailSmall person={data.pinnedOnto} url='../board/5574606bfce885ab59fe0b6f.html' displayText='Pinned onto' extraClass='board_show'/>

            </div>
        );
    }
});