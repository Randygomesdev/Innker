import logoImg from '../imports/Logo.png'

export default function BrandFooter() {
  return (
    <footer
      style={{
        backgroundColor: '#024a34',
        borderTop: '1px solid rgba(219,175,102,0.2)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(219,175,102,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(219,175,102,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Gold accent top line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #dbaf66 0%, rgba(219,175,102,0.3) 60%, transparent 100%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '48px 64px',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: '32px',
        }}
      >
        {/* Left: Developer credit */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,245,245,0.3)' }}>
            Desenvolvido por
          </span>
          <a
            href="https://www.linkedin.com/in/allisonribeiro"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#dbaf66',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'opacity 0.15s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.7' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
          >
            Allison Ribeiro ↗
          </a>
        </div>

        {/* Center: Manual info */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(245,245,245,0.55)', letterSpacing: '0.04em', lineHeight: 1.6 }}>
            Manual de Identidade Visual
          </span>
          <span style={{ fontSize: '11px', color: 'rgba(245,245,245,0.3)', letterSpacing: '0.06em' }}>
            Uso interno e controlado · 2026
          </span>
        </div>

        {/* Right: Logo */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '16px' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,245,245,0.3)', marginBottom: '4px' }}>
              Protocolo Palandi
            </div>
          </div>
          <img
            src={logoImg}
            alt="Tupã — Protocolo Palandi"
            style={{ height: '36px', width: 'auto', objectFit: 'contain', opacity: 0.85 }}
          />
        </div>
      </div>

      {/* Bottom rule */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          borderTop: '1px solid rgba(245,245,245,0.06)',
          padding: '16px 64px',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <span style={{ fontSize: '10px', color: 'rgba(245,245,245,0.2)', letterSpacing: '0.08em' }}>
          © 2026 Tupã Produtos Naturais · Todos os direitos reservados
        </span>
      </div>
    </footer>
  )
}
