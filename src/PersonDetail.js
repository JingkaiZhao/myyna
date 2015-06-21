/**
 * <PersonDetailSmall person={} url='' displayText='' extraClass='' />
 *
 */
var PersonDetailSmall = React.createClass({
    render: function() {
        var person = this.props.person;
        return (
            <div className={"persnl_details clearfix " + this.props.extraClass}>
                <a href={this.props.url} className="subtle">

                <img src={person.avatar} /></a>
                <div className="contns">
                    <p>{this.props.displayText}</p>
                    <a href={this.props.url} className="subtle">{person.name}</a>
                </div>
            </div>
        );
    }
});

/**
 * <PersonDetailFollower person={} followerCount="" likedCount=""/>
 * @param  {[type]} ) {                   var person [description]
 * @return {[type]}   [description]
 */
var PersonDetailFollower = React.createClass({
    render: function() {
        var person =  this.props.person;
        return (
            <div>
                <img width="68px" height="68px"  src={person.avatar} />

                <div className="follower">
                    <h2>{person.name}</h2>
                    <span className="icon-users"></span>
                    <span className="icon_board_text boardfollowecount">{this.props.followerCount}</span>
                    <span className="glyphicon glyphicon-tags icon_board"></span>
                    <span className="icon_board_text">{this.props.likedCount}</span>
                </div>
            </div>
        );
    }
});