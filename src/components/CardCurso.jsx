function CardCurso({ nome, duracao, modalidade, nivel, vagas }) {
  const temVagas = vagas > 0

  return (
    <article className="card-curso">
      <span className="card-nivel">{nivel}</span>
      <h2>{nome}</h2>

      <dl className="card-info">
        <div>
          <dt>Duração</dt>
          <dd>{duracao}</dd>
        </div>
        <div>
          <dt>Modalidade</dt>
          <dd>{modalidade}</dd>
        </div>
      </dl>

      <p className={temVagas ? 'vagas disponivel' : 'vagas completa'}>
        <span className="vagas-ponto" aria-hidden="true"></span>
        {temVagas ? `Vagas disponíveis: ${vagas}` : 'Turma completa'}
      </p>
    </article>
  )
}

export default CardCurso
