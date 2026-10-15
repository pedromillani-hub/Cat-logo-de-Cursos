function Destaque({ icone, titulo, texto }) {
  return (
    <div className="destaque">
      <span className="destaque-icone" aria-hidden="true">{icone}</span>
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </div>
  )
}

export default Destaque
