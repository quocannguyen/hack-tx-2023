import { ChangeEvent, FormEventHandler } from "react";
import Input from "./input";
import styles from "./styles.module.css"

interface InputProps {
    id: string,
    value: any,
}

export default function InputForm({
    onSubmit,
    onChange,
    inputs
}: {
    onSubmit: FormEventHandler<HTMLFormElement>,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    inputs: InputProps[]
}) {

    return (
        <form className={styles.input_form}
            // className={}
            onSubmit={onSubmit}>
            <section className={styles.sectionForm}>
                {inputs.map(({id, value}) => (
                    <Input 
                        key={id}
                        name={id}
                        type={id}
                        id={id}
                        value={value} 
                        onChange={onChange} 
                        placeholder={id} 
                    />
                ))}
                <button type="submit">Submit</button>
            </section>
        </form>
    )
}