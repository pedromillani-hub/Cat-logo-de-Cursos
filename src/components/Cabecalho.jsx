function Cabecalho({ titulo, descricao }) {
  return (
    <header className="cabecalho">
      <div className="cabecalho-conteudo">
        <span className="cabecalho-selo">Tecnologia • Formação profissional</span>
        <h1>{titulo}</h1>
        <p>{descricao}</p>
      </div>
    </header>
  )
}

export default Cabecalho
