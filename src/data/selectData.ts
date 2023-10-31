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