var HeaderMenu = React.createClass({displayName: "HeaderMenu",

    render: function() {
        return (
            React.createElement("a", {href: "javascript:;", className: "menu_btn", onClick: this.handleMenuClick})
            
        );
    }, 
    componentDidMount: function() {
        var menuItems = this.props.menuItems;
        var itemsArr = [];
        menuItems.forEach(function(item, index) {
            var el = React.createElement("li", {id: "item-" + index}, React.createElement("a", {href: item.url}, item.name));
            itemsArr.push(el);
        })
        var menuBodyContainer = document.getElementById(this.props.bodyContainer);
        if (menuBodyContainer) {
            React.render(
                React.createElement("div", {id: "menu"}, 
                    React.createElement("a", {href: "javascript:;", className: "close", onClick: this.handleCloseClick}), 
                    React.createElement("ul", null, 
                      React.createElement("li", {className: "active"}, 
                        React.createElement("a", {href: ""}, "Home")
                      )
                    ), 
                    React.createElement("ul", {className: "nav_scoll"}, 
                        itemsArr
                    )
                ),
                menuBodyContainer
            );
        }
        this.ml, 
        this.mr,
        this.mrb, 
        this.mlb, 
        this.mlp, 
        this.mrp = null;
        $(".close").css("display", "none");

        this.isMenuOpen = false;
    },
    handleMenuClick: function() {

        if (this.isMenuOpen == false)
        {
            if ($.browser.mozilla && (!this.ml || !this.mr)) {
                if ($('#container').length > 0)
                {
                    this.mr = this.ml = $("#container").position().left;
                }
                if ($('.leftmenu_adjst').length > 0)
                {
                    this.mrb = this.mlb = $(".leftmenu_adjst").position().left;
                }
                if ($('#pop_container').length > 0)
                {
                    this.mrp = this.mlp = $("#pop_container").position().left;
                }

            } else {
                this.ml = $("#container").css('margin-left');
                this.mr = $("#container").css('margin-right');
                if ($('.leftmenu_adjst').length > 0)
                {
                    this.mlb = $(".leftmenu_adjst").css('margin-left');
                    this.mrb = $(".leftmenu_adjst").css('margin-right');
                }
                if ($('#pop_container').length > 0)
                {
                    this.mlp = $("#pop_container").css('margin-left');
                    this.mrp = $("#pop_container").css('margin-right');
                }

            }
            //alert('je suis dans le bon cas')
            $("#menu").clearQueue().animate({
                left: '0'
            })
            $("#container").clearQueue().animate({
                "margin-left": '290px',
                "margin-right": '-290px'
            })
            if ($('.leftmenu_adjst').length > 0)
            {
                $(".leftmenu_adjst").clearQueue().animate({
                    "margin-left": '290px',
                    "margin-right": '-290px'
                })
            }
            if ($('#pop_container').length > 0)
            {
                $("#pop_container").clearQueue().animate({
                    "margin-left": '290px',
                    "margin-right": '-290px'
                })
            }

            $(".menu_btn").fadeOut(200);
            $(".close").fadeIn(300);

            this.isMenuOpen = true;
        }
    },
    handleCloseClick: function() {
        if (this.isMenuOpen == true)
        {
            $("#menu").clearQueue().animate({
                left: '-240px'
            })
            $("#container").clearQueue().animate({
                "margin-right": this.mr,
                "margin-left": this.ml
            })
            $(".leftmenu_adjst").clearQueue().animate({
                "margin-right": this.mrb,
                "margin-left": this.mlb
            })
            $("#pop_container").clearQueue().animate({
                "margin-right": this.mrp,
                "margin-left": this.mlp
            })


            $(".close").fadeOut(200);
            $(".menu_btn").fadeIn(300);
            setTimeout(function() {
                $("#container").css({"margin": "0 auto"});
                $(".leftmenu_adjst").css({"margin": "0 1%"});
                $("#pop_container").css({"margin": "0 1%"});
                this.ml = this.mr = false;
            }, 500);
            this.isMenuOpen = false;
        }
    }
});