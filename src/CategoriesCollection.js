/**
 * <CategoriesCollection categoriesData={}>
 * @param  {[type]} ) {                   var catData [description]
 * @return {[type]}   [description]
 */
var CategoriesCollection = React.createClass({

    render: function() {
        var catData = this.props.categoriesData;
        var catArr = [];
        catData.forEach(function(category, index) {
            var el = <CategoryPin pinData={category} key={index + 1}/>;
            catArr.push(el);
        });
        return (
            <div id="container" className="cont-fixed leftmenu_adjst" >
                <div>
                    {catArr}
                </div>
                <div id="loadmoreajaxloader" style={{'display':'none'}}>
                    <center>
                        <img src="../default/images/loader.jpeg" />
                    </center>
                </div>
            </div>
        );
    }

});