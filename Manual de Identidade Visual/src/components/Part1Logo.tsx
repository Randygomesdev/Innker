import logoImg from '../imports/Logo.png'
import logoSymbol from '../imports/Logo_Lateral_da_Camiseta.png'

const SECTION_STYLE: React.CSSProperties = {
  backgroundColor: '#f5f5f5',
  padding: '100px 64px',
}

const INNER: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
}

interface LogoCardProps {
  title: string
  subtitle: string
  bg: string
  children: React.ReactNode
  tag?: string
}

function LogoCard({ title, subtitle, bg, children, tag }: LogoCardProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      <div
        style={{
          backgroundColor: bg,
          borderRadius: '12px 12px 0 0',
          padding: '64px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '280px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(128,128,128,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(128,128,128,0.06) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {tag && (
          <span
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: bg === '#f5f5f5' ? 'rgba(2,74,52,0.4)' : 'rgba(245,245,245,0.4)',
              backgroundColor: bg === '#f5f5f5' ? 'rgba(2,74,52,0.08)' : 'rgba(245,245,245,0.08)',
              padding: '4px 10px',
              borderRadius: '4px',
            }}
          >
            {tag}
          </span>
        )}
        <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
      </div>
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '0 0 12px 12px',
          padding: '20px 24px',
          borderTop: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div style={{ fontSize: '13px', fontWeight: 700, color: '#191919', marginBottom: '4px' }}>{title}</div>
        <div style={{ fontSize: '12px', fontWeight: 400, color: 'rgba(25,25,25,0.5)', lineHeight: 1.5 }}>{subtitle}</div>
      </div>
    </div>
  )
}

function SectionHeader({ number, label, title, description, dark }: { number: string; label: string; title: string; description: string; dark?: boolean }) {
  const titleColor = dark ? '#f5f5f5' : '#024a34'
  const numColor = dark ? 'rgba(245,245,245,0.25)' : 'rgba(25,25,25,0.3)'
  const descColor = dark ? 'rgba(245,245,245,0.45)' : 'rgba(25,25,25,0.55)'
  return (
    <div style={{ marginBottom: '64px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: numColor }}>
          {number}
        </span>
        <div style={{ width: '24px', height: '1px', backgroundColor: '#dbaf66' }} />
        <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#dbaf66' }}>
          {label}
        </span>
      </div>
      <h2
        style={{
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: 800,
          color: titleColor,
          lineHeight: 1.1,
          margin: '0 0 16px',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
      <p style={{ fontSize: '16px', color: descColor, lineHeight: 1.7, margin: 0, maxWidth: '560px' }}>{description}</p>
    </div>
  )
}

export { SectionHeader }

export default function Part1Logo() {
  return (
    <section style={SECTION_STYLE}>
      <div style={INNER}>
        <SectionHeader
          number="01"
          label="Logotipo"
          title="Aplicações do Logotipo"
          description="O logotipo da Tupã existe em três versões distintas, cada uma adaptada a diferentes suportes e contextos de uso. Utilize sempre o arquivo original fornecido — nunca recrie, redesenhe ou altere proporções."
        />

        {/* 3 logo cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '80px',
          }}
        >
          {/* Version 1: Horizontal on dark */}
          <LogoCard
            title="Versão Principal — Horizontal"
            subtitle="Uso em fundos escuros, materiais premium e comunicação institucional."
            bg="#024a34"
            tag="Versão 01"
          >
            <img
              src={logoImg}
              alt="Tupã logo horizontal versão principal"
              style={{ width: '100%', maxWidth: '280px', objectFit: 'contain' }}
            />
          </LogoCard>

          {/* Version 2: Symbol only on green */}
          <LogoCard
            title="Versão Símbolo — Marca Quadrada"
            subtitle="Uso em bordados, estampas, favicons, perfis digitais e aplicações reduzidas."
            bg="#024a34"
            tag="Versão 02"
          >
            <img
              src={logoSymbol}
              alt="Tupã símbolo quadrado"
              style={{ width: '160px', height: '160px', objectFit: 'contain' }}
            />
          </LogoCard>

          {/* Version 3: Horizontal on white */}
          <LogoCard
            title="Versão Positiva — Fundo Claro"
            subtitle="Uso em papelaria, embalagens, fundos neutros e materiais impressos claros."
            bg="#f5f5f5"
            tag="Versão 03"
          >
            <img
              src={logoImg}
              alt="Tupã logo horizontal versão positiva"
              style={{ width: '100%', maxWidth: '280px', objectFit: 'contain' }}
            />
          </LogoCard>
        </div>

        {/* Typography note */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '40px',
            marginBottom: '80px',
            border: '1px solid rgba(2,74,52,0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '4px', height: '40px', backgroundColor: '#dbaf66', borderRadius: '2px' }} />
            <div>
              <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#dbaf66', marginBottom: '4px' }}>
                Tipografia do Logotipo
              </div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#024a34' }}>Fonte Primária: SHAMANS</div>
            </div>
          </div>
          <p style={{ fontSize: '14px', color: 'rgba(25,25,25,0.6)', lineHeight: 1.7, margin: 0 }}>
            O logotipo utiliza a família tipográfica <strong style={{ color: '#191919' }}>SHAMANS</strong> — uma fonte display com caráter geométrico e tribal, alinhada à identidade cultural da marca Tupã. O wordmark "TUPÃ" é parte do arquivo original e não deve ser retipografado, redimensionado isoladamente ou substituído por outra fonte.
          </p>
        </div>

        {/* Protection zone */}
        <div style={{ marginBottom: '80px' }}>
          <h3
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#024a34',
              marginBottom: '8px',
            }}
          >
            Zona de Proteção
          </h3>
          <p style={{ fontSize: '14px', color: 'rgba(25,25,25,0.55)', marginBottom: '40px', lineHeight: 1.7 }}>
            A zona de proteção define o espaço mínimo ao redor do logotipo que deve permanecer livre de quaisquer outros elementos visuais — textos, imagens, bordas ou elementos gráficos. A unidade de medida <strong style={{ color: '#191919' }}>X</strong> é equivalente à altura da letra maiúscula do wordmark.
          </p>

          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '60px',
              border: '1px solid rgba(2,74,52,0.08)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '32px',
            }}
          >
            {/* Zone visualization */}
            <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Outer zone boundary */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-40px',
                  border: '1.5px dashed #dbaf66',
                  borderRadius: '4px',
                }}
              />
              {/* X markers */}
              {/* Top */}
              <div style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '1px', height: '40px', backgroundColor: '#dbaf66', opacity: 0.5 }} />
              </div>
              {/* X labels */}
              <div style={{ position: 'absolute', top: '-56px', left: '50%', transform: 'translateX(-50%)', fontSize: '11px', fontWeight: 700, color: '#dbaf66', letterSpacing: '0.05em' }}>X</div>
              <div style={{ position: 'absolute', bottom: '-56px', left: '50%', transform: 'translateX(-50%)', fontSize: '11px', fontWeight: 700, color: '#dbaf66', letterSpacing: '0.05em' }}>X</div>
              <div style={{ position: 'absolute', left: '-56px', top: '50%', transform: 'translateY(-50%)', fontSize: '11px', fontWeight: 700, color: '#dbaf66', letterSpacing: '0.05em' }}>X</div>
              <div style={{ position: 'absolute', right: '-56px', top: '50%', transform: 'translateY(-50%)', fontSize: '11px', fontWeight: 700, color: '#dbaf66', letterSpacing: '0.05em' }}>X</div>

              {/* Logo */}
              <div
                style={{
                  backgroundColor: '#024a34',
                  borderRadius: '6px',
                  padding: '24px 40px',
                }}
              >
                <img
                  src={logoImg}
                  alt="Tupã logo — zona de proteção"
                  style={{ width: '220px', objectFit: 'contain' }}
                />
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '48px',
                marginTop: '40px',
                paddingTop: '32px',
                borderTop: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#dbaf66', marginBottom: '6px' }}>Unidade X</div>
                <div style={{ fontSize: '13px', color: 'rgba(25,25,25,0.6)', lineHeight: 1.5 }}>Altura da letra maiúscula<br />do wordmark TUPÃ</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#dbaf66', marginBottom: '6px' }}>Espaçamento</div>
                <div style={{ fontSize: '13px', color: 'rgba(25,25,25,0.6)', lineHeight: 1.5 }}>Mínimo de 1X em todos<br />os quatro lados</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#dbaf66', marginBottom: '6px' }}>Aplicação</div>
                <div style={{ fontSize: '13px', color: 'rgba(25,25,25,0.6)', lineHeight: 1.5 }}>Nenhum elemento deve<br />cruzar essa fronteira</div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimum size */}
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#024a34', marginBottom: '8px' }}>Tamanho Mínimo</h3>
          <p style={{ fontSize: '14px', color: 'rgba(25,25,25,0.55)', marginBottom: '40px', lineHeight: 1.7 }}>
            Abaixo dos tamanhos mínimos indicados, a legibilidade do logotipo é comprometida. Nunca aplique o logotipo em tamanhos menores que os definidos.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {/* Digital minimum */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '32px', border: '1px solid rgba(2,74,52,0.08)' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#dbaf66', marginBottom: '20px' }}>Digital</div>
              <div style={{ backgroundColor: '#024a34', borderRadius: '6px', padding: '16px 24px', display: 'inline-flex', marginBottom: '20px' }}>
                <img src={logoImg} alt="Logo mínimo digital" style={{ width: '120px', objectFit: 'contain' }} />
              </div>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#024a34', marginBottom: '4px' }}>120px</div>
                <div style={{ fontSize: '12px', color: 'rgba(25,25,25,0.5)' }}>Largura mínima para telas e interfaces digitais</div>
              </div>
            </div>

            {/* Print minimum */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '32px', border: '1px solid rgba(2,74,52,0.08)' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#dbaf66', marginBottom: '20px' }}>Impresso</div>
              <div style={{ backgroundColor: '#024a34', borderRadius: '6px', padding: '12px 20px', display: 'inline-flex', marginBottom: '20px' }}>
                <img src={logoImg} alt="Logo mínimo impresso" style={{ width: '90px', objectFit: 'contain' }} />
              </div>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#024a34', marginBottom: '4px' }}>30mm</div>
                <div style={{ fontSize: '12px', color: 'rgba(25,25,25,0.5)' }}>Largura mínima para impressão em materiais físicos</div>
              </div>
            </div>

            {/* Symbol minimum */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '32px', border: '1px solid rgba(2,74,52,0.08)' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#dbaf66', marginBottom: '20px' }}>Símbolo Isolado</div>
              <div style={{ marginBottom: '20px' }}>
                <img src={logoSymbol} alt="Símbolo mínimo" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
              </div>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#024a34', marginBottom: '4px' }}>24px / 8mm</div>
                <div style={{ fontSize: '12px', color: 'rgba(25,25,25,0.5)' }}>Tamanho mínimo do símbolo em uso standalone</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
