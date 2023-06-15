import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet";

function ProfilePage() {
    const { userTag } = useParams()
    return (
        <div>
            <h1> {userTag} Page</h1>
            <Helmet >
                <title>profile</title>
                <meta name="description" content="The profile of someone" />
            </Helmet>
        </div>
    )
}
export default ProfilePage;