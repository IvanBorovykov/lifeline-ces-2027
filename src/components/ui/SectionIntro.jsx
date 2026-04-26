export function SectionIntro({ index, eyebrow, title, body, inverse = false, align = 'left' }) {
  return <header className={`section-intro ${inverse ? 'section-intro--inverse' : ''} section-intro--${align}`}>
    <div className="section-intro__label"><span>{index}</span><p>{eyebrow}</p></div>
    <h2>{title}</h2>
    {body && <p className="section-intro__body">{body}</p>}
  </header>
}
