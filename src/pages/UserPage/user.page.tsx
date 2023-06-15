
import { Helmet } from "react-helmet";
import Freelance from "../../components/freelance_box";
import { useEffect, useState } from "react";
import UserInterface from "../../interface/user.interface";
import axios from "axios";



function UserPage() {
    const [users, setUsers] = useState<UserInterface[]>([])
    
    const loadData = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts/:id")
            .then((reponse) => setUsers(reponse.data))
    
    }
    useEffect(() => {
        loadData();
    }, [])

    return (
        <div>
            <Helmet >
                <title>User Freelance Page</title>
                <meta name="description" content="sffjobfhgsnl" />
            </Helmet>
            <h1>
                User Freelance Page
            </h1>
            <div>


            </div>



        </div>
    )
}
export default UserPage;