/**
 * <CategoriesCollection categoriesData={}>
 * @param  {[type]} ) {                   var catData [description]
 * @return {[type]}   [description]
 */
var CategoriesCollection = React.createClass({displayName: "CategoriesCollection",

    render: function() {
        var catData = this.props.categoriesData;
        var catArr = [];
        catData.forEach(function(category, index) {
            var el = React.createElement(CategoryPin, {pinData: category, key: index + 1});
            catArr.push(el);
        });
        return (
            React.createElement("div", {id: "container", className: "cont-fixed"}, 
                React.createElement("div", null, 
                    catArr
                ), 
                React.createElement("div", {id: "loadmoreajaxloader", style: {'display':'none'}}, 
                    React.createElement("center", null, 
                        React.createElement("img", {src: "../default/images/loader.jpeg"})
                    )
                )
            )
        );
    }

});