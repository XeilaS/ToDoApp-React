
import { Helmet } from "react-helmet";
import Freelance from "../../components/freelance_box";
import { useEffect, useState } from "react";
import UserInterface from "../../interface/user.interface";
import axios from "axios";



function FreelancePage() {
    const [users, setUsers] = useState<UserInterface[]>([])
    const [loading, setLoading] = useState(true);
    const loadData = async () => {
        await axios.get("https://jsonplaceholder.typicode.com/users")
            .then((reponse) => setUsers(reponse.data))
        setLoading(false);
    }
    useEffect(() => { // premiere fonction à l'execution du dom ? 
        loadData()
        return;
    }, [])
    if (loading) <h1>Loading...</h1>
    return (
        <div>
            <Helmet >
                <title>Freelance Page</title>
                <meta name="description" content="balbablalba" />
            </Helmet>
            <h1>
                Freelance Page
            </h1>

            <div>
                {users.map((user, index) => {
                    return <Freelance key={index} user={user} />
                })}
            </div>




            {/* <Freelance
                id={1}
                name={"Le king"}
                username={"XeilaS"}
                email={"blabla@email.lo"}
                phone={"49583057435"}
                company={{
                    name: "Adeo",
                    catchphrase: "On est des big brains",
                    bs: "cacaacacacacaaca"
                }} website={"Ecole-it.com"} adress={{
                    street: "251 rue Louis Lagrange",
                    city: "valenciennes",
                    zipcode: "59300"
                }} />
         */}

        </div>
    )
}
export default FreelancePage;