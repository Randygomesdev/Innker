import { SectionHeader } from './Part1Logo'

const colors = [
  {
    name: 'Verde Tupã',
    hex: '#024a34',
    rgb: 'RGB 2 · 74 · 52',
    cmyk: 'CMYK 97 · 0 · 30 · 71',
    pantone: 'Pantone 3435 C',
    role: 'Cor primária. Fundos institucionais, elementos de destaque e aplicações principais.',
    textColor: '#f5f5f5',
  },
  {
    name: 'Amarelo Âmbar',
    hex: '#dbaf66',
    rgb: 'RGB 219 · 175 · 102',
    cmyk: 'CMYK 0 · 20 · 53 · 14',
    pantone: 'Pantone 7509 C',
    role: 'Cor de acento. Títulos em fundos escuros, elementos gráficos e detalhes premium.',
    textColor: '#191919',
  },
  {
    name: 'Branco Natural',
    hex: '#f5f5f5',
    rgb: 'RGB 245 · 245 · 245',
    cmyk: 'CMYK 0 · 0 · 0 · 4',
    pantone: 'Pantone 9200 C',
    role: 'Fundo neutro. Papelaria, backgrounds de página e espaços negativos.',
    textColor: '#191919',
  },
  {
    name: 'Preto Profundo',
    hex: '#191919',
    rgb: 'RGB 25 · 25 · 25',
    cmyk: 'CMYK 0 · 0 · 0 · 90',
    pantone: 'Pantone Black 6 C',
    role: 'Tipografia de corpo, elementos de contraste e fundos alternativos.',
    textColor: '#f5f5f5',
  },
]

const combinations = [
  { bg: '#024a34', fg: '#dbaf66', label: 'Verde + Âmbar', note: 'Combinação primária da marca. Alta distinção e personalidade.' },
  { bg: '#024a34', fg: '#f5f5f5', label: 'Verde + Branco', note: 'Comunicação institucional. Clareza e autoridade.' },
  { bg: '#024a34', fg: '#191919', label: 'Verde + Preto', note: 'Uso restrito. Alta intensidade para elementos críticos.' },
  { bg: '#dbaf66', fg: '#191919', label: 'Âmbar + Preto', note: 'Call-to-actions e destaques em materiais luminosos.' },
  { bg: '#dbaf66', fg: '#024a34', label: 'Âmbar + Verde', note: 'Inversão da primária. Igual força, perspectiva diferente.' },
  { bg: '#191919', fg: '#dbaf66', label: 'Preto + Âmbar', note: 'Materiais premium. Elegância com calor dourado.' },
  { bg: '#191919', fg: '#f5f5f5', label: 'Preto + Branco', note: 'Preto e branco clássico. Máxima legibilidade.' },
  { bg: '#f5f5f5', fg: '#024a34', label: 'Branco + Verde', note: 'Papelaria e UI. Leveza com identidade marcante.' },
]

export default function Part2Colors() {
  return (
    <section style={{ backgroundColor: '#191919', padding: '100px 64px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionHeader
          number="02"
          label="Paleta de Cores"
          title="Cores Oficiais da Marca"
          description="A paleta da Tupã é inspirada na natureza — o verde das matas, o âmbar da terra e a luz solar. Utilize exclusivamente as cores definidas abaixo nas comunicações oficiais da marca."
          dark
        />

        {/* Color swatches */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2px',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '80px',
          }}
        >
          {colors.map((color) => (
            <div key={color.hex} style={{ backgroundColor: color.hex, padding: '40px 32px', display: 'flex', flexDirection: 'column', minHeight: '320px' }}>
              <div style={{ flex: 1 }} />
              <div>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: color.textColor,
                    opacity: 0.5,
                    marginBottom: '8px',
                  }}
                >
                  Cor oficial
                </div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: color.textColor, marginBottom: '4px', letterSpacing: '-0.01em' }}>
                  {color.name}
                </div>
                <div
                  style={{
                    fontSize: '28px',
                    fontWeight: 300,
                    color: color.textColor,
                    opacity: 0.7,
                    fontFamily: 'monospace',
                    letterSpacing: '0.02em',
                    marginBottom: '24px',
                  }}
                >
                  {color.hex.toUpperCase()}
                </div>
                <div
                  style={{
                    borderTop: `1px solid ${color.textColor === '#f5f5f5' ? 'rgba(245,245,245,0.15)' : 'rgba(25,25,25,0.12)'}`,
                    paddingTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  {[color.rgb, color.cmyk, color.pantone].map((val) => (
                    <div key={val} style={{ fontSize: '11px', fontWeight: 500, color: color.textColor, opacity: 0.55, letterSpacing: '0.04em' }}>
                      {val}
                    </div>
                  ))}
                  <div style={{ fontSize: '11px', color: color.textColor, opacity: 0.45, lineHeight: 1.5, marginTop: '8px' }}>
                    {color.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Combinations */}
        <div>
          <h3
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#f5f5f5',
              marginBottom: '8px',
            }}
          >
            Combinações Aprovadas
          </h3>
          <p style={{ fontSize: '14px', color: 'rgba(245,245,245,0.45)', lineHeight: 1.7, marginBottom: '40px' }}>
            As combinações a seguir são as aprovadas para uso em comunicações da marca. Cada par garante contraste adequado e coerência visual.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
            {combinations.map((combo) => (
              <div
                key={combo.label}
                style={{
                  backgroundColor: combo.bg,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: combo.bg === '#f5f5f5' ? '1px solid rgba(25,25,25,0.08)' : 'none',
                }}
              >
                <div style={{ padding: '32px 24px 24px' }}>
                  <div
                    style={{
                      fontSize: '32px',
                      fontWeight: 800,
                      color: combo.fg,
                      lineHeight: 1,
                      marginBottom: '8px',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Aa
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: combo.fg,
                      marginBottom: '4px',
                    }}
                  >
                    {combo.label}
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.15)',
                    padding: '16px 24px',
                  }}
                >
                  <div style={{ fontSize: '11px', color: combo.fg, opacity: 0.7, lineHeight: 1.5 }}>{combo.note}</div>
                  <div
                    style={{
                      display: 'flex',
                      gap: '8px',
                      marginTop: '12px',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: combo.fg,
                        opacity: 0.5,
                        fontFamily: 'monospace',
                      }}
                    >
                      BG {combo.bg.toUpperCase()}
                    </div>
                    <div style={{ fontSize: '10px', color: combo.fg, opacity: 0.3 }}>·</div>
                    <div
                      style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: combo.fg,
                        opacity: 0.5,
                        fontFamily: 'monospace',
                      }}
                    >
                      FG {combo.fg.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
