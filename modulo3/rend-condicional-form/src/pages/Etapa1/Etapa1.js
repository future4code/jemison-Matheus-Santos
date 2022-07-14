function Etapa1() {
    return (
        <div>
            <h1>Etapa 1 - Dados Gerais</h1>
            <ol>
                <li>
                    <label>Qual o seu nome?</label>
                    <input type="text" name="nome" id="nome" required />
                </li>

                <li>
                    <label>Qual a sua idade?</label>
                    <input type="number" name="idade" id="idade" required />
                </li>

                <li>
                    <label>Qual o seu e-mail?</label>
                    <input type="email" name="email" id="email" required />
                </li>

                <li>
                    <label>Qual a sua escolaridade?</label>
                    <select name="escolaridade" id="escolaridade">
                        <option value="EMI">Ensino Médio Incompleto</option>
                        <option value="EMC">Ensino Médio Completo</option>
                        <option value="SI">Superior Incompleto</option>
                        <option value="SC">Superior Completo</option>
                    </select>
                </li>
            </ol>
        </div>
    );
}

export default Etapa1;
