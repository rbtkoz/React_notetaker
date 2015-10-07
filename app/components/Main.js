/**
 * Created by alex.kozovski on 10/6/15.
 */
var React = require('react');

var Main = React.createClass({
    //this renders Home or whatever route has been determined by Route

        render: function(){
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                        MENU
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

module.exports = Main;