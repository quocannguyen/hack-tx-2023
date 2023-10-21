'use client'

interface InputProps {
    name: string
    type: any
    id: string
    value: any
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    textarea?: boolean
    big?: boolean
}

export default function Input({
    name, type, id, value, onChange, placeholder, textarea, big
}: InputProps) {
    return (
        <input 
            name={name} 
            type={type} 
            id={id} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder} 
            // className={}
        />
    )
}