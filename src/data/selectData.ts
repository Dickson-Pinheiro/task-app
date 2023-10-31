export type Priority = "urgente" | "alta" | "media" | "baixa"

export interface PriorityOption {
    value:  Priority,
    label: string
}

export const prioritiesOptions: PriorityOption[] = [
    {
        value: 'urgente',
        label: 'Urgente'
    },
    {
        value: 'alta',
        label: 'Alta'
    },
    {
        value: 'media',
        label: 'Media'
    },
    {
        value: 'baixa',
        label: 'Baixa'
    }
];

export type Status = "concluído" | "andamento" | "todos"

export interface StatusOption {
    value: Status,
    label: string
}

export const statusOptions: StatusOption[] = [
    {
        value: 'andamento',
        label: 'Em andamento'
    },
    {
        value: 'concluído',
        label: 'Concluído',
    },
    {
        value: 'todos',
        label: 'Todos'
    }
]