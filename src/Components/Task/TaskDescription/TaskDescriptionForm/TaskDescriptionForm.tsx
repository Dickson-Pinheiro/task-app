import styled from 'styled-components'

interface TaskDescriptionForm {
    editTaskValueSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    editValue: string
    editTaskValueBlur: () => void
    editValueState: (value: string) => void    
}

export default function TaskDescriptionForm({ editTaskValueBlur, editTaskValueSubmit, editValue, editValueState }: TaskDescriptionForm) {
    return (
        <EditForm onSubmit={editTaskValueSubmit} data-testid="form-create-task">
            <input type='text' value={editValue} onChange={(e) => editValueState(e.target.value)} autoFocus onBlur={editTaskValueBlur} data-testid="input-form-edit"/>
        </EditForm>
    )
}

const EditForm = styled.form`
    width: 100%;
    input {
        width: 100%;
        height: 40px;
        border-radius: 4px;
        padding-left: 10px;
        padding-right: 10px;
    }
`