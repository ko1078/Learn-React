import profilePic from './assets/profile.jpg';
function Card(){


return(

<div className="card">
    <img className="card-image" src={profilePic} alt ="profile picture"></img>
    <h2 className="card-title">George</h2>
    <p className="card-text">I program Lasers and play videogames.</p>

</div>
);




}

export default Card