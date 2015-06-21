/**
 * <GlobalHeader menuItems={} bodyContainer=""/>
 * @param  {String} )                   
 * @return {[type]}   [description]
 */
var GlobalHeader = React.createClass({
    render: function() {
        return (
            <header className="navbar navbar-default navbar-fixed-top nav_mob header-logout">
                <div className="row">
                    <div className="col-md-4 cubet_search_main">
                        <a href="javascript:;" className="menu_btn"></a>
                        <HeaderMenu menuContainer={this.props.menuContainer} 
                            bodyContainer={this.props.bodyContainer} menuItems={this.props.menuItems} />
                    </div>
                    <div className="col-md-4 cubet_board">
                        <a href="" className="logo">
                        <img src="site-logo.png" /></a>
                    </div>
                    <a href="landing.html">
                        <span className="glyphicon glyphicon-log-in cubetlogin"></span>
                    </a>
                </div>
            </header>
        );
    }
});