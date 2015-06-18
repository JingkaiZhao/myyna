var FindPwdModal = React.createClass({
    render: function() {
        return (
            <div className="modal fade" id="Forgot" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog login">
                    <div className="modal-content">
                        <form name="forgotform" id="forgotform">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">x</button>
                                <h4 id="myModalLabel">Forgot Password</h4>
                            </div>
                            <div className="modal-body signup">
                                <div className="row">
                                    <div className="col-md-8 col-md-offset-2">
                                        <div className="search-new">
                                            <div className="msg"></div>
                                            <input type="text" name="email" className="form-control sign_up required email" placeholder="E-mail" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn submit" id="forgotSubmit" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});