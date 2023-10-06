import style from "./User.css";

function User({avatar, fn, ln, em}){
    return(
        <div class="userCard">
            <img class="ava" src={avatar} alt="U"></img>
            <div class="information">
                <span class="full-name">{fn + " " + ln}</span>
                <span class="em">{em}</span>
            </div>
        </div>
    );
}

export default User;