import {Feather} from "@expo/vector-icons";
import {InputContainer, Input, InputButton} from "./styles";

type InputAddTaskProps = {
    placeholder?: string;
    onSubmitEditing: (task: string) => void;
    handleTaskAdd: () => void;
    value?: string;
}

export function InputAddTask({placeholder = "Adicionar Tarefa", onSubmitEditing, handleTaskAdd, value}: InputAddTaskProps) {
    return (
        
        <InputContainer>
            <Input 
                placeholder={placeholder}
                placeholderTextColor='white'
                keyboardType="default" 
                onChangeText={(text) => onSubmitEditing(text)}
                value={value}
                // onSubmitEditing={(event) => onSubmitEditing(event.nativeEvent.text)}
            />
            <InputButton onPress={handleTaskAdd}>
                <Feather name="plus-square" size={24} color="white" />
            </InputButton>
        </InputContainer>
    );
}


