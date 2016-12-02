class Events extends React.Component {


  render () {
    // debugger;
    return (
      <div className="hold-events">
        {this.props.events.map(function(event){
          return (
            <div key={event.id} className="paper col-md-3">
            <img src={event.picture}/>
            <h2>{event.sports_cat}</h2>
            <h2><span className={event.sports_cat.toLowerCase()}></span></h2>
            <h3><a href={"/events/" + event.id}>{event.event_name}</a></h3>
            <hr/>
            <h5>Location : {event.event_address}</h5>
            <h5>Players needed : <span className="player-circle">{event.players_req}</span></h5>
            <p>Details : {event.details}</p>
            <a href={"/events/" + event.id} className="standard-btn">
       <span className="left title">View Event</span>
       <span className="right icon fa fa-eye"></span>
     </a>
     <br/><br/><br/>
            </div>
          )
        }
        )}
      </div>
    )
  }
}