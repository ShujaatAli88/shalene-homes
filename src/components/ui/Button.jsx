export default function Button({ children, variant = 'primary', size, full, href, onClick, type = 'button' }) {
  const cls = [
    'btn',
    `btn--${variant}`,
    size  ? `btn--${size}` : '',
    full  ? 'btn--full' : '',
  ].filter(Boolean).join(' ')

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
