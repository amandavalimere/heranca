import { Assalariado } from "./src/model/Assalariado";

const a1 = new Assalariado (`Wesley`, `8760364` ,3400 )

a1.setNome(`Antonio`);
a1.setCpf(`2634987`);
a1.setSalario(5300);
console.log(`Nome: ${a1.getNome()}, CPF: ${a1.getCpf()}`);
console.log(`Salario: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);