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