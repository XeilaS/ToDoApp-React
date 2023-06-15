
interface FreelanceProps {
    id?: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    adress: {
        street: string,
        city: string,
        zipcode: string
    }
    company: {
        name: string,
        catchphrase: string,
        bs: string,
    },
}


function Freelance(props: FreelanceProps) {
    const adress = props.adress.street + " " + props.adress.city + " " + props.adress.zipcode;
    return (
        <div className="freelance-box">
            <div className="clr-black">
                <div><span><strong>#{props.id}</strong>   </span> <span className="freelance title"><strong>{props.company.bs}</strong></span></div>
                <span>{props.name}&nbsp;</span>
                <span>{props.username}</span>
            </div>
            <hr />
            <div className="clr-black">
                <div>Adresse email :   {props.email}</div>
                <div>Téléphone portable :  {props.phone}</div>
                <div>Website :  {props.website}</div>
                <div>Adresse :  {adress}</div>
            </div>
            <hr />
            <div className="freelance-box company">
                <div ><strong>{props.company.name}</strong></div>
                <div>{props.company.catchphrase}</div>
            </div>
        </div >
    )
}


export default Freelance