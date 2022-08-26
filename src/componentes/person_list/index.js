import React from "react";
import Person from "../person";

import "./index.css"

export default function Person_list({Props}) {
    return (
        <>
            
            {typeof Props !== "undefined" &&
                Props.map((person) => (
                    <div className="container">
                        
                        <Person
                            key={person.id_pessoa}
                            id={person.id_pessoa}
                            nome={person.nome}
                            rg={person.rg}
                            cpf={person.cpf}
                            data_nascimento={person.data_nascimento}
                            data_admissao={person.data_admissao}
                            funcao={person.funcao}
                        
                        />
                        
                    </div>
            ))}
        
        </>
    )
}