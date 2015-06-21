/**
 * <CategoryDetailBoard name="" desc="" followerCount="" likedCount="" follower={} />
 * @return {[type]} [description]
 */
var CategoryDetailBoard = React.createClass({

    render: function() {
        return (
            <div id="board_container" className="leftmenu_adjst">
                <div className="row row_min" style={{'visibility': 'hidden'}}>
                    <div className="col-md-12 board_small">
                        <span className="glyphicon glyphicon-th-list board_small_m"></span>
                        {this.props.name}
                    </div>
                </div>
                <div className="row row_lrg">
                    <div className="col-md-3 board">
                    <img  src="../categories/category-2.png" /></div>
                    <div className="col-md-5 board">
                        <h2>{this.props.name}</h2>
                        <h3></h3>
                        <p>{this.props.desc}</p>

                    </div>

                    <div className="col-md-2  col-md-offset-2 board_right">
                        <PersonDetailFollower person={this.props.follower} 
                            followerCount={this.props.followerCount} likedCount={this.props.likedCount} />
                    </div>
                </div>
            </div>

        );
    }

});