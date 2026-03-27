// Classe Aluno
class Aluno {
    constructor(nome, idade, curso, instituicao, periodo) {
        // Atributos básicos do aluno
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.instituicao = instituicao;
        this.periodo = periodo;
    }

    // Método para clonar o objeto (Prototype)
    clone() {
        return Object.assign(
            Object.create(Object.getPrototypeOf(this)),
            this
        );
    }
}

// Classe Singleton para gerenciar alunos
class GerenciarAlunos {
    constructor() {
        // Verifica se já existe uma instância criada
        if (GerenciarAlunos.instance) {
            return GerenciarAlunos.instance;
        }

        this.listaAlunos = [];
        GerenciarAlunos.instance = this;
    }

    // Adiciona aluno na lista
    adicionarAluno(aluno) {
        this.listaAlunos.push(aluno);
        console.log(`Aluno ${aluno.nome} matriculado com sucesso!`);
    }

    // Lista todos os alunos cadastrados
    listarAlunos() {
        console.log("\nAlunos matriculados:");
        this.listaAlunos.forEach(aluno => {
            console.log(
                `Nome: ${aluno.nome}, Idade: ${aluno.idade}, Curso: ${aluno.curso}, Instituição: ${aluno.instituicao}, Período: ${aluno.periodo}`
            );
        });
    }
}

// Testando o Singleton
const siga1 = new GerenciarAlunos();
const siga2 = new GerenciarAlunos();

console.log("Possui mais de um Siga?", siga1 === siga2); // Deve ser true


// Criando um aluno protótipo
const alunoPrototipo = new Aluno(
    "James Rodriguez",
    22,
    "Dev. Sistemas",
    "Campus Anchieta",
    "Manhã"
);

// Criando clones do protótipo
const aluno1 = alunoPrototipo.clone();
aluno1.nome = "Leonardo";
aluno1.idade = 20;

const aluno2 = alunoPrototipo.clone();
aluno2.nome = "Ricardo";
aluno2.idade = 22;
aluno2.curso = "Administração";
aluno2.instituicao = "Logística";
aluno2.periodo = "Matutino";

const aluno3 = alunoPrototipo.clone();
aluno3.nome = "Taynah";
aluno3.idade = 25;
aluno3.instituicao = "Fatec Diadema";

// Adicionando os clones ao Singleton
siga1.adicionarAluno(aluno1);
siga1.adicionarAluno(aluno2);
siga1.adicionarAluno(aluno3);

// Listando alunos matriculados
siga1.listarAlunos();

// Verificando se o protótipo original não foi alterado
console.log("\nProtótipo original permanece:");
console.log(alunoPrototipo);
