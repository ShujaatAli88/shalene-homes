export default function SectionHeader({ eyebrow, title, subtitle, light = false, align = 'center' }) {
  return (
    <div className={`section-header${align === 'left' ? ' section-header--left' : ''}`}>
      {eyebrow && (
        <div className={`eyebrow${light ? ' eyebrow--light' : ''}${align === 'left' ? ' eyebrow--left' : ''}`}>
          {eyebrow}
        </div>
      )}
      <h2 className={`section-title${light ? ' section-title--white' : ''}`}>{title}</h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </div>
  )
}
