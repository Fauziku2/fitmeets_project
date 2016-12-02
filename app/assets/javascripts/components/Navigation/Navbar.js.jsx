var Navbar = React.createClass({


  render: function() {
    return (

    <nav className="navbar navbar-inverse navbar-fixed-top navbar fitmeets-nav-main">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle fitmeets-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

        <a href={this.props.rootlink} className="navbar-brand"><Img src="/assets/fitmeets-logo.png" /></a>


        </div>


        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav fitmeets-nav">
            <li><a href="/aboutus">About Us</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/events/new">Create Event</a></li>
              <li><a href="#">Join Event</a></li>
          </ul>



            { this.props.current_user ? <ul className="nav navbar-nav fitmeets-nav navbar-right"><li className="welcome-current">Welcome, {this.props.current_user.email} !</li>
               <li><a href={this.props.profilelink}>My Profile</a></li> <li><a href={this.props.logoutlink} data-method="delete">Log Out</a></li></ul> : <ul className="nav navbar-nav fitmeets-nav navbar-right"><li><a href={this.props.loginlink}>Log In</a></li>
<li><a href={this.props.signuplink}>Register</a> </li>
</ul> }



    </div>


</div>
    </nav>

    );
  }

});
