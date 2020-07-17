import {Cliente} from "./Cliente.js"
import{ContaCorrente} from "./conta/ContaCorrente.js"
import {ContaPoupanca} from "./conta/ContaPoupanca.js"
import { Conta } from "./conta/Conta.js";
import { ContaSalario } from "./conta/ContaSalario.js";


const cliente01 = new Cliente("Maria", 12234567809);
const cliente02 = new Cliente("Marcos", 12245667809);

const conta03 = new Conta();
conta03.cliente = new Cliente();
conta03.cliente.nome = "Alice";
conta03.cliente.cpf = 123456789;
conta03.agencia = 102;

const contaCorrenteMaria = new ContaCorrente(0, cliente01, 1001);
contaCorrenteMaria.depositar(500);
contaCorrenteMaria.sacer(100);
const conta02 = new Conta(102, cliente02);

const ContaPoupanca = new ContaPoupanca(50,cliente1,1001);
const contaSalario = new ContaSalario(cliente02)
contaSalario.depositar(100);
contaSalario.sacar(10);

//FUNCIONARIOS
import {Gerente} from "./funcionarios/Gerente.js"
import {Gerente} from "./funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao"

const diretor = new Diretor("Rodrigo", 1000, 12345678909)
diretor.cadastrarSenha("234567")
const gerente = new Gerente("Carla", 5000, 12345678908)

const estaLogado = SistemaAutenticacao.login(diretor, "234567");






