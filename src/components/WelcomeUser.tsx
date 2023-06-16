interface UserProps {
    name: string,
    age: number
}

function WelcomeUser(props: UserProps) {
    return (
        <div>
            <h1>Welcume {props.name}</h1>
            <p>Apparememnt vpis aurez {props.age + 2} dans 2 ans</p>
        </div>
    )

}
export default WelcomeUser;

