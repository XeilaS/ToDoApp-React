
import { Helmet } from "react-helmet";
import Freelance from "../../components/freelance_box";

function FreelancePage() {
    return (
        <div>
            <Helmet >
                <title>Freelance Page</title>
                <meta name="description" content="balbablalba" />
            </Helmet>
            <h1>
                Freelance Page
            </h1>

            <Freelance
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


        </div>
    )
}
export default FreelancePage;