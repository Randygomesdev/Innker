import logoImg from '../imports/Logo.png'

export default function CoverSection() {
  return (
    <section
      style={{
        backgroundColor: '#024a34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(219,175,102,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(219,175,102,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Nav bar */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '32px 64px',
          borderBottom: '1px solid rgba(219,175,102,0.15)',
        }}
      >
        <span
          style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(245,245,245,0.4)',
          }}
        >
          Protocolo Palandi
        </span>
        <span
          style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(245,245,245,0.4)',
          }}
        >
          2026
        </span>
      </div>

      {/* Hero content */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px 64px',
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '48px',
          }}
        >
          <div style={{ width: '32px', height: '1px', backgroundColor: '#dbaf66' }} />
          <span
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#dbaf66',
            }}
          >
            Manual de Identidade Visual
          </span>
        </div>

        {/* Logo display */}
        <img
          src={logoImg}
          alt="Tupã — logo principal"
          style={{
            height: '120px',
            width: 'auto',
            objectFit: 'contain',
            objectPosition: 'left center',
            marginBottom: '64px',
            filter: 'drop-shadow(0 4px 32px rgba(219,175,102,0.2))',
          }}
        />

        <div style={{ maxWidth: '560px' }}>
          <h1
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 800,
              color: '#f5f5f5',
              lineHeight: 1.05,
              margin: '0 0 24px',
              letterSpacing: '-0.02em',
            }}
          >
            Identidade
            <br />
            <span style={{ color: '#dbaf66' }}>Visual</span>
          </h1>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 400,
              color: 'rgba(245,245,245,0.6)',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Este manual define as diretrizes visuais da marca Tupã — uma marca de produtos naturais com raízes na cultura indígena. As regras aqui descritas garantem consistência, respeito à identidade e clareza na comunicação.
          </p>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            gap: '64px',
            marginTop: '80px',
            paddingTop: '48px',
            borderTop: '1px solid rgba(219,175,102,0.2)',
            width: '100%',
          }}
        >
          {[
            { label: 'Partes', value: '05' },
            { label: 'Cores Oficiais', value: '04' },
            { label: 'Famílias Tipográficas', value: '02' },
            { label: 'Versões do Logo', value: '03' },
          ].map((item) => (
            <div key={item.label}>
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  color: '#dbaf66',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  color: 'rgba(245,245,245,0.4)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #dbaf66 0%, rgba(219,175,102,0.3) 60%, transparent 100%)',
        }}
      />
    </section>
  )
}
