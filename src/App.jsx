import './App.css'
import Cabecalho from './components/Cabecalho'
import CardCurso from './components/CardCurso'
import Destaque from './components/Destaque'
import Rodape from './components/Rodape'

const cursos = [
  { nome: 'Desenvolvimento de Sistemas', duracao: '1200 horas', modalidade: 'Presencial', nivel: 'Técnico', vagas: 12 },
  { nome: 'Redes de Computadores', duracao: '1200 horas', modalidade: 'Presencial', nivel: 'Técnico', vagas: 5 },
  { nome: 'Manutenção de Computadores', duracao: '160 horas', modalidade: 'Presencial', nivel: 'Qualificação', vagas: 0 },
  { nome: 'Programação Web', duracao: '200 horas', modalidade: 'Híbrido', nivel: 'Qualificação', vagas: 20 },
  { nome: 'Banco de Dados', duracao: '180 horas', modalidade: 'EAD', nivel: 'Qualificação', vagas: 8 },
  { nome: 'Desenvolvimento Mobile', duracao: '200 horas', modalidade: 'Híbrido', nivel: 'Qualificação', vagas: 15 },
]

const destaques = [
  { icone: '🚀', titulo: 'Aprenda fazendo', texto: 'Desenvolva projetos durante sua formação.' },
  { icone: '💼', titulo: 'Mercado de trabalho', texto: 'Conteúdos alinhados às demandas da indústria.' },
  { icone: '🎓', titulo: 'Professores experientes', texto: 'Aprenda com quem atua na área de tecnologia.' },
]

function App() {
  return (
    <>
      <Cabecalho
        titulo="Catálogo de Cursos"
        descricao="Conheça algumas formações disponíveis na área de tecnologia."
      />

      <main>
        <section>
          <h2 className="secao-titulo">Cursos disponíveis</h2>
          <div className="lista-cursos">
            {cursos.map((curso) => (
              <CardCurso key={curso.nome} {...curso} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="secao-titulo">Por que estudar com a gente</h2>
          <div className="destaques">
            {destaques.map((d) => (
              <Destaque key={d.titulo} icone={d.icone} titulo={d.titulo} texto={d.texto} />
            ))}
          </div>
        </section>
      </main>

      <Rodape />
    </>
  )
}

export default App
