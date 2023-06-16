
import { Helmet } from "react-helmet";

function ProfilePage() {
    return (
        <div>
            <h1>Bonjour Alexis</h1>
            <Helmet >
                <title>profile</title>
                <meta name="description" content="The profile of someone" />
            </Helmet>
        </div>
    )
}
export default ProfilePage;