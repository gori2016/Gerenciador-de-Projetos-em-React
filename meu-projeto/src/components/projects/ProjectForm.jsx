function ProjectForm() {
    return (
        <div>
            <form action="">
                <div>
                    <input class="form-control" type="text" placeholder="Digite o nome do projeto" aria-label="default input example" />
                </div>

                <div>
                    <input class="form-control" type="text" placeholder="Digite o nome do projeto" aria-label="default input example" />
                </div>

                <div>
                    <input class="form-control" type="number" placeholder="Digite o orçamento total" aria-label="default input example" />
                </div>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Selecione a categoria</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <input type="submit" className="btn btn-primary" value="Enviar Projeto" />

            </form>
        </div>
    )
}

export default ProjectForm