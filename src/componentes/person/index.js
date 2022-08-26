import React from "react";

import FormDialog from "../dialog";
import "./index.css"


export default function Person(Person) {
    const [open, setOpen] = React.useState(false);
     
    const handleClickEdit = () => {
        setOpen(true)
    }
    const data_admissao_ = (Person.data_admissao.substr(0,10))
    const data_nascimento_ = (Person.data_nascimento.substr(0,10))
    const data_admissao = new Date(Person.data_admissao)
    const data_admissao_formatado = (data_admissao.toLocaleDateString('pt-BR'))
    
    var nome = Person.nome;
    var tmp = nome.split(" ");
    nome = tmp[0]

    return (
        <>
            <FormDialog open={open} setOpen={setOpen}
        id={Person.id}
        nome={Person.nome} 
        rg={Person.rg}
        cpf={Person.cpf}
        data_nascimento={data_nascimento_}
        data_admissao={data_admissao_}
        funcao={Person.funcao}
            />
            <div className="container1">
                <div className="container2">
                    <div className="dado"><h>{nome}</h></div>
                </div>
                <div className="container3">
                    <div className="dado">{data_admissao_formatado}</div>
                </div>
                
                
                <div className="botao" onClick={() => handleClickEdit()}> editar</div>
        
            </div>
        </>
        
    )
}