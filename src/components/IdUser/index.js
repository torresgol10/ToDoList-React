import { useTasks } from "hooks/useTasks";

export default function IdUser() {
    const { id } = useTasks();
    return (
        <span> {id}</span>
    )
}