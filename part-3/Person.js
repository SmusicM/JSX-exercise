const Person = (props) =>{
    let answer;
    let cutName;
    if(props.age > 18){
        answer = "Please Go Vote!"
    }
    if(props.age<18){
        answer = "Please wait to vote, go have fun kiddo"
    }
    if(props.name.length >6){
      cutName = props.name.substring(0,6);
    }else{
        cutName = props.name;
    }
    return(
        <div>
            <p>Learn some information about this person</p>
            <p> Hey {cutName}! You are {props.age} years old so...  {answer}</p>
            <p>Hobbies</p>
            <ul> {props.hobbies.map(h=>
            (
                <li>
                    <p>{h}</p>
                </li>
            )
            )}</ul>
        </div>
    )
}