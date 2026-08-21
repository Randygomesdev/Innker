import { SectionHeader } from './Part1Logo'

const shamansWeights = [
  { weight: 100, label: 'Thin', desc: 'Títulos de grande formato em aplicações minimalistas' },
  { weight: 200, label: 'ExtraLight', desc: 'Headlines editoriais com leveza e refinamento' },
  { weight: 300, label: 'Light', desc: 'Subtítulos e texto de apoio de destaque' },
  { weight: 400, label: 'Regular', desc: 'Uso padrão em logotipo e comunicações principais' },
  { weight: 500, label: 'Medium', desc: 'Equilíbrio entre presença e elegância' },
  { weight: 600, label: 'SemiBold', desc: 'Títulos de seção com autoridade moderada' },
  { weight: 700, label: 'Bold', desc: 'Ênfase principal em títulos e headlines' },
  { weight: 800, label: 'ExtraBold', desc: 'Impacto máximo em peças de comunicação' },
  { weight: 900, label: 'Black', desc: 'Uso excepcional em campanhas de alto contraste' },
]

const montserratWeights = [
  { weight: 300, label: 'Light', style: 'normal', sample: 'Texto informativo e legendas' },
  { weight: 400, label: 'Regular', style: 'normal', sample: 'Corpo de texto e parágrafos corridos' },
  { weight: 400, label: 'Regular Italic', style: 'italic', sample: 'Citações e ênfases sutis em texto' },
  { weight: 500, label: 'Medium', style: 'normal', sample: 'Labels, tags e elementos de interface' },
  { weight: 600, label: 'SemiBold', style: 'normal', sample: 'Subtítulos e nomenclaturas de produto' },
  { weight: 700, label: 'Bold', style: 'normal', sample: 'Destaques internos e calls-to-action' },
  { weight: 700, label: 'Bold Italic', style: 'italic', sample: 'Ênfase forte em conteúdo editorial' },
  { weight: 800, label: 'ExtraBold', style: 'normal', sample: 'Números e estatísticas em destaque' },
  { weight: 900, label: 'Black', style: 'normal', sample: 'Peças gráficas de alto impacto' },
]

export default function Part3Typography() {
  return (
    <section style={{ backgroundColor: '#f5f5f5', padding: '100px 64px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionHeader
          number="03"
          label="Tipografia"
          title="Sistema Tipográfico"
          description="A Tupã utiliza duas famílias tipográficas complementares: SHAMANS como fonte primária display, e Montserrat como fonte secundária para textos funcionais. Juntas constroem uma hierarquia clara entre expressão cultural e legibilidade."
        />

        {/* SHAMANS section */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#dbaf66', marginBottom: '8px' }}>
                Fonte Primária
              </div>
              <h3 style={{ fontSize: '36px', fontWeight: 800, color: '#024a34', margin: 0, letterSpacing: '-0.01em' }}>SHAMANS</h3>
            </div>
            <div
              style={{
                backgroundColor: '#024a34',
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#dbaf66',
              }}
            >
              Instalação Local Necessária
            </div>
          </div>

          {/* Big specimen */}
          <div
            style={{
              backgroundColor: '#024a34',
              borderRadius: '16px',
              padding: '60px 48px',
              marginBottom: '24px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div
              style={{
                fontSize: 'clamp(80px, 12vw, 160px)',
                fontWeight: 900,
                fontFamily: "'SHAMANS', 'Montserrat', sans-serif",
                color: '#dbaf66',
                lineHeight: 0.85,
                letterSpacing: '0.08em',
                opacity: 0.15,
                position: 'absolute',
                right: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                userSelect: 'none',
              }}
            >
              TQ
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div
                style={{
                  fontSize: 'clamp(48px, 7vw, 96px)',
                  fontWeight: 700,
                  fontFamily: "'SHAMANS', 'Montserrat', sans-serif",
                  color: '#f5f5f5',
                  lineHeight: 1,
                  letterSpacing: '0.06em',
                  marginBottom: '16px',
                }}
              >
                TUPÃ
              </div>
              <div
                style={{
                  fontSize: 'clamp(18px, 2.5vw, 28px)',
                  fontWeight: 300,
                  fontFamily: "'SHAMANS', 'Montserrat', sans-serif",
                  color: '#dbaf66',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                }}
              >
                Produtos Naturais
              </div>
            </div>
          </div>

          {/* Character set */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '32px 40px',
              marginBottom: '24px',
              border: '1px solid rgba(2,74,52,0.08)',
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(25,25,25,0.35)', marginBottom: '16px' }}>
              Caracteres
            </div>
            <div
              style={{
                fontSize: '28px',
                fontWeight: 400,
                fontFamily: "'SHAMANS', 'Montserrat', sans-serif",
                color: '#024a34',
                lineHeight: 1.4,
                letterSpacing: '0.12em',
                wordSpacing: '0.3em',
              }}
            >
              A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
            </div>
            <div
              style={{
                fontSize: '24px',
                fontWeight: 400,
                fontFamily: "'SHAMANS', 'Montserrat', sans-serif",
                color: 'rgba(2,74,52,0.5)',
                letterSpacing: '0.12em',
                wordSpacing: '0.3em',
                marginTop: '12px',
              }}
            >
              0 1 2 3 4 5 6 7 8 9 ! @ # % & *
            </div>
          </div>

          {/* Weight table */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {shamansWeights.map((w, i) => (
              <div
                key={w.label}
                style={{
                  backgroundColor: i % 2 === 0 ? '#ffffff' : 'rgba(255,255,255,0.6)',
                  padding: '20px 32px',
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr auto',
                  alignItems: 'center',
                  gap: '24px',
                  borderRadius: i === 0 ? '12px 12px 0 0' : i === shamansWeights.length - 1 ? '0 0 12px 12px' : '0',
                  border: '1px solid rgba(2,74,52,0.06)',
                  borderTop: i === 0 ? '1px solid rgba(2,74,52,0.06)' : 'none',
                }}
              >
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#dbaf66', marginBottom: '2px' }}>
                    {w.weight}
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(25,25,25,0.4)' }}>{w.label}</div>
                </div>
                <div
                  style={{
                    fontSize: '24px',
                    fontWeight: w.weight,
                    fontFamily: "'SHAMANS', 'Montserrat', sans-serif",
                    color: '#024a34',
                    letterSpacing: '0.06em',
                  }}
                >
                  TUPÃ — Raízes da Terra
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(25,25,25,0.4)', maxWidth: '200px', textAlign: 'right', lineHeight: 1.4 }}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Montserrat section */}
        <div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#dbaf66', marginBottom: '8px' }}>
                Fonte Secundária
              </div>
              <h3 style={{ fontSize: '36px', fontWeight: 800, color: '#024a34', margin: 0, letterSpacing: '-0.02em', fontFamily: "'Montserrat', sans-serif" }}>
                Montserrat
              </h3>
            </div>
            <div
              style={{
                backgroundColor: '#024a34',
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#dbaf66',
              }}
            >
              Google Fonts · Gratuita
            </div>
          </div>

          <p style={{ fontSize: '14px', color: 'rgba(25,25,25,0.55)', lineHeight: 1.7, marginBottom: '40px', maxWidth: '600px' }}>
            Montserrat é a fonte secundária da Tupã — usada em corpo de texto, interfaces digitais, materiais impressos e toda comunicação onde legibilidade é prioridade. Sua geometria moderna complementa o caráter tribal da SHAMANS.
          </p>

          {/* Big specimen */}
          <div
            style={{
              backgroundColor: '#dbaf66',
              borderRadius: '16px',
              padding: '60px 48px',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                fontSize: 'clamp(40px, 6vw, 80px)',
                fontWeight: 800,
                fontFamily: "'Montserrat', sans-serif",
                color: '#024a34',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                marginBottom: '16px',
              }}
            >
              Produtos da terra,
              <br />
              respeito às origens.
            </div>
            <div
              style={{
                fontSize: '18px',
                fontWeight: 400,
                fontFamily: "'Montserrat', sans-serif",
                color: 'rgba(2,74,52,0.7)',
                lineHeight: 1.6,
              }}
            >
              A natureza como essência. A tradição como guia.
            </div>
          </div>

          {/* Weight table */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {montserratWeights.map((w, i) => (
              <div
                key={`${w.weight}-${w.style}-${i}`}
                style={{
                  backgroundColor: i % 2 === 0 ? '#ffffff' : 'rgba(255,255,255,0.6)',
                  padding: '20px 32px',
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr auto',
                  alignItems: 'center',
                  gap: '24px',
                  borderRadius: i === 0 ? '12px 12px 0 0' : i === montserratWeights.length - 1 ? '0 0 12px 12px' : '0',
                  border: '1px solid rgba(2,74,52,0.06)',
                  borderTop: i === 0 ? '1px solid rgba(2,74,52,0.06)' : 'none',
                }}
              >
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#dbaf66', marginBottom: '2px' }}>
                    {w.weight}
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(25,25,25,0.4)' }}>{w.label}</div>
                </div>
                <div
                  style={{
                    fontSize: '22px',
                    fontWeight: w.weight,
                    fontStyle: w.style,
                    fontFamily: "'Montserrat', sans-serif",
                    color: '#191919',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {w.sample}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: 'rgba(25,25,25,0.4)',
                    fontFamily: 'monospace',
                    letterSpacing: '0.04em',
                  }}
                >
                  {w.weight} · {w.style}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
