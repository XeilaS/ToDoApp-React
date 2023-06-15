
interface ToDoProps {
    id?: number,
    title: string,
    isDone: boolean,
}

function ToDo(props: ToDoProps) {
    const status = props.isDone ? "à retirer" : "à faire";
    return (
        <div>
            <span>{props.id}</span>
            <span>{props.title}</span>
            <span>{status}</span>
        </div>
    )
}


export default ToDo