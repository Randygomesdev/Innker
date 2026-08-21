import logoImg from '../imports/Logo.png'
import logoSymbol from '../imports/Logo_Lateral_da_Camiseta.png'
import { SectionHeader } from './Part1Logo'

interface RuleCardProps {
  type: 'do' | 'dont'
  title: string
  description: string
  children: React.ReactNode
}

function RuleCard({ type, title, description, children }: RuleCardProps) {
  const isDo = type === 'do'
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        overflow: 'hidden',
        border: isDo ? '1px solid rgba(2,74,52,0.12)' : '1px solid rgba(220,38,38,0.12)',
      }}
    >
      {/* Visual area */}
      <div
        style={{
          backgroundColor: isDo ? '#f5f5f5' : '#fef2f2',
          padding: '40px',
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Badge */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: isDo ? '#024a34' : '#dc2626',
            borderRadius: '100px',
            padding: '4px 12px 4px 8px',
          }}
        >
          <span style={{ fontSize: '14px', lineHeight: 1 }}>{isDo ? '✓' : '✗'}</span>
          <span
            style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#ffffff',
            }}
          >
            {isDo ? 'Correto' : 'Incorreto'}
          </span>
        </div>
        {children}
      </div>
      {/* Label */}
      <div style={{ padding: '20px 24px', borderTop: isDo ? '2px solid #024a34' : '2px solid #dc2626' }}>
        <div style={{ fontSize: '13px', fontWeight: 700, color: isDo ? '#024a34' : '#dc2626', marginBottom: '4px' }}>{title}</div>
        <div style={{ fontSize: '12px', color: 'rgba(25,25,25,0.55)', lineHeight: 1.5 }}>{description}</div>
      </div>
    </div>
  )
}

export default function Part4DosAndDonts() {
  return (
    <section style={{ backgroundColor: '#191919', padding: '100px 64px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionHeader
          number="04"
          label="Uso do Logotipo"
          title="O que Fazer e Não Fazer"
          description="O logotipo da Tupã foi cuidadosamente desenhado e não deve ser alterado de nenhuma forma. Qualquer modificação compromete a integridade da marca. Siga rigorosamente as diretrizes abaixo."
          dark
        />

        {/* Don'ts */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#dc2626',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                color: '#fff',
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              ✗
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#f5f5f5', margin: 0 }}>Proibições — Nunca faça isso</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            <RuleCard
              type="dont"
              title="Não redesenhe o logotipo"
              description="Jamais trace, recrie ou modifique os elementos gráficos do símbolo ou do wordmark manualmente."
            >
              <div style={{ textAlign: 'center', position: 'relative' }}>
                <img
                  src={logoSymbol}
                  alt="Logo incorreto — redesenhado"
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'contain',
                    filter: 'hue-rotate(180deg) saturate(0.3)',
                    transform: 'skewX(-8deg) scaleY(0.85)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '64px',
                    color: 'rgba(220,38,38,0.35)',
                  }}
                >
                  ✗
                </div>
              </div>
            </RuleCard>

            <RuleCard
              type="dont"
              title="Não suavize ou aplique efeitos"
              description="Sem blur, sombras, brilhos, gradientes ou qualquer filtro aplicado sobre o logotipo original."
            >
              <div style={{ textAlign: 'center', position: 'relative' }}>
                <img
                  src={logoSymbol}
                  alt="Logo incorreto — com efeito"
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'contain',
                    filter: 'blur(3px) drop-shadow(0 8px 20px rgba(219,175,102,0.8))',
                    opacity: 0.7,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '64px',
                    color: 'rgba(220,38,38,0.35)',
                  }}
                >
                  ✗
                </div>
              </div>
            </RuleCard>

            <RuleCard
              type="dont"
              title="Não altere as cores oficiais"
              description="O logotipo não deve ser aplicado em cores fora da paleta oficial da Tupã, em nenhuma circunstância."
            >
              <div style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{ backgroundColor: '#7c3aed', borderRadius: '8px', padding: '12px', display: 'inline-flex' }}>
                  <img
                    src={logoImg}
                    alt="Logo incorreto — cores erradas"
                    style={{ width: '140px', objectFit: 'contain', filter: 'hue-rotate(90deg)' }}
                  />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '64px',
                    color: 'rgba(220,38,38,0.35)',
                  }}
                >
                  ✗
                </div>
              </div>
            </RuleCard>

            <RuleCard
              type="dont"
              title="Não distorça proporções"
              description="O logotipo deve sempre manter suas proporções originais. Nunca estique, comprima ou deforme."
            >
              <div style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{ backgroundColor: '#024a34', borderRadius: '8px', padding: '12px', display: 'inline-flex' }}>
                  <img
                    src={logoImg}
                    alt="Logo incorreto — proporcões distorcidas"
                    style={{ width: '200px', height: '40px', objectFit: 'fill' }}
                  />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '64px',
                    color: 'rgba(220,38,38,0.35)',
                  }}
                >
                  ✗
                </div>
              </div>
            </RuleCard>

            <RuleCard
              type="dont"
              title="Não use em fundos conflitantes"
              description="Evite fundos com padrões complexos, fotos de baixo contraste ou cores que confundam com o logotipo."
            >
              <div style={{ textAlign: 'center', position: 'relative' }}>
                <div
                  style={{
                    background: 'linear-gradient(135deg, #f59e0b, #10b981, #3b82f6, #ec4899)',
                    borderRadius: '8px',
                    padding: '20px',
                    display: 'inline-flex',
                  }}
                >
                  <img src={logoImg} alt="Logo em fundo conflitante" style={{ width: '140px', objectFit: 'contain' }} />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '64px',
                    color: 'rgba(220,38,38,0.35)',
                  }}
                >
                  ✗
                </div>
              </div>
            </RuleCard>

            <RuleCard
              type="dont"
              title="Não adicione textos ao símbolo"
              description="Nenhum texto, tagline ou elemento externo deve ser adicionado ao redor ou sobre o símbolo sem aprovação."
            >
              <div style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{ backgroundColor: '#024a34', borderRadius: '8px', padding: '12px', display: 'inline-block', position: 'relative' }}>
                  <img src={logoSymbol} alt="Logo incorreto — com texto adicional" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                  <div style={{ position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#dc2626', color: '#fff', fontSize: '9px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', whiteSpace: 'nowrap', letterSpacing: '0.1em' }}>
                    PROMOÇÃO ESPECIAL!
                  </div>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '64px',
                    color: 'rgba(220,38,38,0.35)',
                  }}
                >
                  ✗
                </div>
              </div>
            </RuleCard>
          </div>
        </div>

        {/* Dos */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#024a34',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                color: '#fff',
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              ✓
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#f5f5f5', margin: 0 }}>Aplicações Corretas — Faça assim</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            <RuleCard
              type="do"
              title="Fundo verde institucional"
              description="Versão principal. Logo horizontal branco sobre fundo verde #024a34 é a aplicação oficial primária."
            >
              <div style={{ backgroundColor: '#024a34', borderRadius: '8px', padding: '20px 32px', display: 'inline-flex' }}>
                <img src={logoImg} alt="Logo correto — fundo verde" style={{ width: '160px', objectFit: 'contain' }} />
              </div>
            </RuleCard>

            <RuleCard
              type="do"
              title="Fundo branco ou neutro"
              description="O símbolo dourado e o wordmark são visíveis sobre fundos claros. Use sem modificações."
            >
              <div style={{ backgroundColor: '#f5f5f5', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', padding: '20px 32px', display: 'inline-flex' }}>
                <img src={logoImg} alt="Logo correto — fundo branco" style={{ width: '160px', objectFit: 'contain' }} />
              </div>
            </RuleCard>

            <RuleCard
              type="do"
              title="Símbolo em uso standalone"
              description="O símbolo quadrado pode ser usado isoladamente em aplicações onde o espaço é reduzido."
            >
              <div style={{ backgroundColor: '#024a34', borderRadius: '8px', padding: '16px', display: 'inline-flex' }}>
                <img src={logoSymbol} alt="Símbolo correto — standalone" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
              </div>
            </RuleCard>

            <RuleCard
              type="do"
              title="Zona de proteção respeitada"
              description="Sempre mantenha o espaço mínimo de 1X ao redor do logotipo, livre de outros elementos."
            >
              <div style={{ position: 'relative', padding: '20px', border: '1.5px dashed #dbaf66', borderRadius: '4px' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '10px',
                    fontWeight: 700,
                    color: '#dbaf66',
                    backgroundColor: '#f5f5f5',
                    padding: '0 6px',
                  }}
                >
                  ZONA X
                </div>
                <div style={{ backgroundColor: '#024a34', borderRadius: '6px', padding: '12px 20px', display: 'inline-flex' }}>
                  <img src={logoImg} alt="Logo com zona" style={{ width: '120px', objectFit: 'contain' }} />
                </div>
              </div>
            </RuleCard>

            <RuleCard
              type="do"
              title="Fundo âmbar / dourado"
              description="Em materiais premium, o logotipo pode ser aplicado sobre fundo âmbar usando versão verde ou preta do wordmark."
            >
              <div style={{ backgroundColor: '#dbaf66', borderRadius: '8px', padding: '20px 32px', display: 'inline-flex' }}>
                <img src={logoImg} alt="Logo correto — fundo âmbar" style={{ width: '160px', objectFit: 'contain', filter: 'brightness(0) saturate(1)' }} />
              </div>
            </RuleCard>

            <RuleCard
              type="do"
              title="Proporcões e arquivos originais"
              description="Sempre utilize os arquivos originais fornecidos (AI, SVG, PNG). Nunca trace ou recrie o logo manualmente."
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                {['SVG', 'AI', 'PNG', 'PDF'].map((ext) => (
                  <div key={ext} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#024a34' }} />
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#024a34', fontFamily: 'monospace' }}>logo-tupa.{ext.toLowerCase()}</span>
                  </div>
                ))}
              </div>
            </RuleCard>
          </div>
        </div>
      </div>
    </section>
  )
}
