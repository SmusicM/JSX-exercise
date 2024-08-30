const Tweet = (props) => {
    let newdate = new Date().toLocaleDateString()
    return(
        <div className="tweetCard">
       <h3 className="tweetUsername">@{props.username}</h3>
       <h4 className="tweetName">{props.name}</h4>
       <p className="tweetDate">date: {newdate}</p>
       <p className = "tweetMessage">{props.message}</p>
       </div>
    )
}