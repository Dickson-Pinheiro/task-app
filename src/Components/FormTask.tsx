import styled from "styled-components";
import { prioritiesOptions, Priority, PriorityOption } from '../data/selectData';
import Select from 'react-select';
import { useState } from "react";
import { ICreateTask } from "../services/taskService";
import { useCreateTask } from "../hooks/useCreateTask";

export interface ITask {
    task: string
    priority: Priority
    id: string,
    priorityValue: number,
    done: boolean
}

export default function FormTask(){
    const [text, setText] = useState<string>('');
    const [defaultPriority, setDefaultPriority] = useState<PriorityOption>(prioritiesOptions[1])
    const { mutate } = useCreateTask()

    function formSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const task: ICreateTask = {
            task: text,
            priority: defaultPriority.value,
        } 
        mutate(task)
        setText('')
    }

    function changePriority(e: PriorityOption){
        setDefaultPriority(e)
    }

    return(
        <FormCreateTask onSubmit={formSubmit}>
            <ContainerForm>
                <input type='text' placeholder='Qual a sua task?' value={text} onChange={e => setText(e.target.value)} required/>
                <CustomSelect options={prioritiesOptions} defaultValue={prioritiesOptions[1]} classNamePrefix={'select'} onChange={e => changePriority(e as PriorityOption)}/>
                <button type='submit'>Criar</button>
            </ContainerForm>
        </FormCreateTask>
    )
}

const FormCreateTask = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    box-sizing: border-box;
`

const ContainerForm = styled.div`
    display: flex;
    width: 100%;
    gap: 8px;
    justify-content: center;
    align-items: center;
    padding: 15px;
    input[type='text']{
        width: 100%;
        max-width: 320px;
        height: 35px;
        border-radius: 8px;
        padding-left: 5px;
        padding-right: 5px;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        border: 1px solid #661ca6;
    }
    button {
        height: 38px;
        border: none;
        background: ${props => props.theme['background-create-task-button']};
        color: ${props => props.theme.white};
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        border-radius: 8px;
        width: 90px;
        cursor: pointer;
    }

    @media(max-width: 480px){
        flex-direction: column;
        align-items: baseline;
    }
`

const CustomSelect = styled(Select)`
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    min-width: 120px;
    .select__control, .select__value-container {
        height: 30px;
    }
    .select__value-container {
        height: 40px;
    }

    .select__input-container {
        height: 35px;
    }

    @media(max-width: 380px){
        & .select__control {
            width: 100%!important;
        }
    }
`