import { Helmet } from "react-helmet";
import WelcomeUser from "../../components/WelcomeUser";

function HomePage() {
    return (
        <div>
            <Helmet >
                <title>profile</title>
                <meta name="description" content="The profile of someone" />
            </Helmet>
            <h1>
                Home Page
            </h1>
            <WelcomeUser name="Monsieur" age={23} />
        </div>
    )
}
export default HomePage;