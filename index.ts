import { Assalariado } from "./src/model/Assalariado";
import { Comissionado } from "./src/model/Comissionado";
import { Horista } from "./src/model/Horista";

const a1 = new Assalariado (`Wesley`, `8760364` ,3400 )

a1.setNome(`Antonio`);
a1.setCpf(`2634987`);
a1.setSalario(5300);
console.log(`Nome: ${a1.getNome()}, CPF: ${a1.getCpf()}`);
console.log(`Salario: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);

const c1 = new Comissionado (`Slipknot`, `78326429`, 3900,9.20);
c1.setNome(`herbert`);
c1.setCpf(`762929749`);
c1.setTotalVendas(5344);
c1.setTaxaComissao(8.90);
console.log(`Nome: ${c1.getNome()}, CPF: ${c1.getCpf()}`);
console.log(`Comissão: ${c1.getTaxaComissao()} Total Vendas: ${c1.getTotalVendas()}`);
console.log(`Vencimento: ${c1.vencimento()}`);

const c2 = new Horista (`Aleatorio`, `Aleatoriozinho`, 22334, 1234);
c2.setNome(`Ramdom`);
c2.setCpf(`Ramdomzinho`);
c2.setValorHora(1200);
c2.setHorasTrabalhadas(2300);
console.log(`Nome: ${c2.getNome()}, CPF: ${c2.getCpf()}`);
console.log(`Valor Hora ${c2.getValorHora()}, Horas Trabalhadas ${c2.getHorasTrabalhadas()}`);
console.log(`Vencimento ${c2.vencimento()}`);