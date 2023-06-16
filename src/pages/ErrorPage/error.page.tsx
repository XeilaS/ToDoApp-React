
import { Helmet } from "react-helmet";

function ErrorPage() {
    return (
        <div>
            <h1> Error 404 </h1>
            <Helmet >
                <title>Error</title>
                <meta name="description" content="You get an error" />
            </Helmet>
        </div>
    )
}
export default ErrorPage;