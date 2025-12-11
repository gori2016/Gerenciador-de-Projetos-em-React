import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
function ProjectForm() {
    return (
        <div>
            <form className={styles.form} action="">

                <Input type="text" text="Nome do Projeto:" name="name" placeholder="Digite o nome do projeto" />

                <Input type="number" text="Orçamento do projeto:" name="budget" placeholder="Insira o orçamento total" />
                <Select name="category_id" text="Selecione a categoria" />

                <SubmitButton text="Enviar"/>

            </form>
        </div>
    )
}

export default ProjectForm