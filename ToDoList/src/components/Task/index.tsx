import {Feather} from "@expo/vector-icons";
import {Container, TaskText, TaskDone, TaskDelete} from "./styles";

export function Task({taskName}: {taskName: string}){
    return(
        <Container>
            <TaskDone>
                <Feather name="square" size={24} color="white" />
            </TaskDone>
            <TaskText>{taskName}</TaskText>
            <TaskDelete>
                <Feather name="trash-2" size={24} color="white" />
            </TaskDelete>
        </Container>
    );
}
