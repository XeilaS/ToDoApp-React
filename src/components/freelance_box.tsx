import { Link } from "react-router-dom";
import UserInterface from "../interface/user.interface";




function Freelance({ user }: { user: UserInterface }) {
    const adress = user.address.street + " " + user.address.city + " " + user.address.zipcode;
    return (
        <div className="freelance-box">
            <div className="clr-black">
                <div><span><strong>#{user.id}</strong>   </span> <span className="freelance title"><strong>{user.company.bs}</strong></span></div>
                <span>{user.name}&nbsp;</span>
                <span>{user.username}</span>
            </div>
            <hr />
            <div className="clr-black">
                <div>Adresse email :   {user.email}</div>
                <div>Téléphone portable :  {user.phone}</div>
                <div>Website :  {user.website}</div>
                <div>Adresse :  {adress}</div>s
            </div>
            <hr />
            <div className="freelance-box company">
                <div ><strong>{user.company.name}</strong></div>
                <div>{user.company.catchPhrase}</div>
            </div>
            <div>
                <Link to="/userPage">Voir plus</Link>
            </div>
        </div >
    )
}


export default Freelance