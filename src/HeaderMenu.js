var HeaderMenu = React.createClass({

    render: function() {
        return (
            <a href="javascript:;" className="menu_btn" onClick={this.handleMenuClick}></a>
            
        );
    }, 
    componentDidMount: function() {
        var menuItems = this.props.menuItems;
        var itemsArr = [];
        menuItems.forEach(function(item, index) {
            var el = <li id={"item-" + index}><a href={item.url}>{item.name}</a></li>;
            itemsArr.push(el);
        })
        var menuContainer = document.getElementById(this.props.menuContainer);
        if (menuContainer) {
            React.render(
                <div id="menu">
                    <a href="javascript:;" className="close" onClick={this.handleCloseClick}></a>
                    <ul>
                      <li className="active">
                        <a href="">Home</a>
                      </li>
                    </ul>
                    <ul className="nav_scoll">
                        {itemsArr}
                    </ul>
                </div>,
               menuContainer 
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
                if ($('#' + this.props.bodyContainer).length > 0)
                {
                    this.mr = this.ml = $("#" + this.props.bodyContainer).position().left;
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
                this.ml = $("#" + this.props.bodyContainer).css('margin-left');
                this.mr = $("#" + this.props.bodyContainer).css('margin-right');
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
            $("#" + this.props.bodyContainer).clearQueue().animate({
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
            $("#" + this.props.bodyContainer).clearQueue().animate({
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
            var bdCtnr = this.props.bodyContainer;
            setTimeout(function() {
                $("#" + bdCtnr).css({"margin": "0 auto"});
                $(".leftmenu_adjst").css({"margin": "0 1%"});
                $("#pop_container").css({"margin": "0 1%"});
                this.ml = this.mr = false;
            }, 500);
            this.isMenuOpen = false;
        }
    }
});