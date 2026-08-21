import { SectionHeader } from './Part1Logo'

interface ButtonSpecProps {
  label: string
  variant: 'primary' | 'secondary' | 'ghost' | 'danger'
  size: 'lg' | 'md' | 'sm' | 'xs'
}

const sizeMap = {
  lg: { height: 52, paddingV: 16, paddingH: 32, fontSize: 16, radius: 6, border: 0, label: 'Large' },
  md: { height: 44, paddingV: 12, paddingH: 24, fontSize: 14, radius: 6, border: 0, label: 'Medium' },
  sm: { height: 36, paddingV: 8, paddingH: 16, fontSize: 12, radius: 6, border: 0, label: 'Small' },
  xs: { height: 28, paddingV: 4, paddingH: 12, fontSize: 11, radius: 4, border: 0, label: 'XSmall' },
}

const variantMap = {
  primary: {
    bg: '#024a34', color: '#f5f5f5', borderColor: 'transparent',
    hoverBg: '#013526', label: 'Primário',
    desc: 'Ação principal da página. Máxima hierarquia visual.',
  },
  secondary: {
    bg: 'transparent', color: '#024a34', borderColor: '#024a34',
    hoverBg: 'rgba(2,74,52,0.06)', label: 'Secundário',
    desc: 'Ação de suporte. Complementa o botão primário.',
  },
  ghost: {
    bg: '#dbaf66', color: '#191919', borderColor: 'transparent',
    hoverBg: '#c9a05c', label: 'Âmbar / Acento',
    desc: 'Destaque alternativo. Uso em CTAs de conversão.',
  },
  danger: {
    bg: 'transparent', color: 'rgba(25,25,25,0.55)', borderColor: 'transparent',
    hoverBg: 'rgba(0,0,0,0.05)', label: 'Terciário / Ghost',
    desc: 'Ação discreta. Links e ações de baixa prioridade.',
  },
}

function ButtonSpec({ label, variant, size }: ButtonSpecProps) {
  const s = sizeMap[size]
  const v = variantMap[variant]

  const borderWidth = variant === 'secondary' ? 2 : 0

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Button visual */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '32px',
          backgroundColor: variant === 'primary' || variant === 'ghost' ? '#f5f5f5' : '#f5f5f5',
          borderRadius: '12px',
          border: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <button
          style={{
            height: `${s.height}px`,
            paddingTop: `${s.paddingV}px`,
            paddingBottom: `${s.paddingV}px`,
            paddingLeft: `${s.paddingH}px`,
            paddingRight: `${s.paddingH}px`,
            fontSize: `${s.fontSize}px`,
            fontWeight: 600,
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: '0.04em',
            backgroundColor: v.bg,
            color: v.color,
            border: borderWidth > 0 ? `${borderWidth}px solid ${v.borderColor}` : 'none',
            borderRadius: `${s.radius}px`,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </button>
      </div>

      {/* Specs table */}
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          border: '1px solid rgba(0,0,0,0.06)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            backgroundColor: '#024a34',
            padding: '10px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#f5f5f5', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {v.label} · {s.label}
          </span>
          <span style={{ fontSize: '10px', color: '#dbaf66', fontWeight: 600, letterSpacing: '0.08em' }}>ESPECIFICAÇÕES</span>
        </div>
        {[
          ['Altura', `${s.height}px`],
          ['Padding vertical', `${s.paddingV}px`],
          ['Padding horizontal', `${s.paddingH}px`],
          ['Font size', `${s.fontSize}px`],
          ['Font weight', '600 · SemiBold'],
          ['Border radius', `${s.radius}px`],
          ['Border width', borderWidth > 0 ? `${borderWidth}px` : 'nenhuma'],
          ['Cor de fundo', v.bg === 'transparent' ? 'Transparente' : v.bg.toUpperCase()],
          ['Cor do texto', v.color.toUpperCase()],
          ['Cor da borda', v.borderColor === 'transparent' ? '—' : v.borderColor.toUpperCase()],
        ].map(([key, val], i) => (
          <div
            key={key}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              padding: '8px 16px',
              backgroundColor: i % 2 === 0 ? '#ffffff' : '#fafafa',
              borderBottom: '1px solid rgba(0,0,0,0.04)',
            }}
          >
            <span style={{ fontSize: '11px', color: 'rgba(25,25,25,0.45)', fontWeight: 500 }}>{key}</span>
            <span style={{ fontSize: '11px', color: '#191919', fontWeight: 600, fontFamily: 'monospace' }}>{val}</span>
          </div>
        ))}
        <div style={{ padding: '12px 16px', backgroundColor: 'rgba(2,74,52,0.04)' }}>
          <span style={{ fontSize: '11px', color: 'rgba(25,25,25,0.5)', lineHeight: 1.5 }}>{v.desc}</span>
        </div>
      </div>
    </div>
  )
}

const typeHierarchy = [
  {
    tag: 'H1',
    size: 64,
    weight: 800,
    lineHeight: 1.05,
    letterSpacing: '-0.03em',
    family: 'SHAMANS',
    usage: 'Título principal de página ou hero',
    sample: 'Raízes da Terra',
    color: '#024a34',
  },
  {
    tag: 'H2',
    size: 48,
    weight: 800,
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    family: 'SHAMANS',
    usage: 'Título de seção principal',
    sample: 'Produtos Naturais',
    color: '#024a34',
  },
  {
    tag: 'H3',
    size: 36,
    weight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
    family: 'Montserrat',
    usage: 'Subtítulo e título de bloco',
    sample: 'Nossa Coleção',
    color: '#024a34',
  },
  {
    tag: 'H4',
    size: 24,
    weight: 700,
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
    family: 'Montserrat',
    usage: 'Título de componente ou card',
    sample: 'Extrato de Andiroba',
    color: '#191919',
  },
  {
    tag: 'H5',
    size: 18,
    weight: 600,
    lineHeight: 1.4,
    letterSpacing: '0',
    family: 'Montserrat',
    usage: 'Subtítulo interno e rótulo de grupo',
    sample: 'Ingredientes Selecionados',
    color: '#191919',
  },
  {
    tag: 'H6',
    size: 14,
    weight: 600,
    lineHeight: 1.5,
    letterSpacing: '0.02em',
    family: 'Montserrat',
    usage: 'Microsubtítulo e navegação',
    sample: 'Linha Amazônica',
    color: '#191919',
  },
  {
    tag: 'Corpo',
    size: 16,
    weight: 400,
    lineHeight: 1.75,
    letterSpacing: '0',
    family: 'Montserrat',
    usage: 'Texto corrido e descrições',
    sample: 'A Tupã seleciona ingredientes nativos da flora brasileira para criar produtos que respeitam a biodiversidade e valorizam o conhecimento ancestral dos povos originários.',
    color: '#191919',
  },
  {
    tag: 'Corpo · SM',
    size: 14,
    weight: 400,
    lineHeight: 1.7,
    letterSpacing: '0',
    family: 'Montserrat',
    usage: 'Texto de apoio e legendas longas',
    sample: 'Todos os nossos produtos passam por certificação orgânica e são produzidos com respeito às comunidades locais que cultivam os insumos.',
    color: '#191919',
  },
  {
    tag: 'Label',
    size: 11,
    weight: 600,
    lineHeight: 1.4,
    letterSpacing: '0.12em',
    family: 'Montserrat',
    usage: 'Rótulos, tags e elementos de UI',
    sample: 'PRODUTO ORGÂNICO · AMAZÔNIA',
    color: '#024a34',
    uppercase: true,
  },
  {
    tag: 'Caption',
    size: 11,
    weight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.02em',
    family: 'Montserrat',
    usage: 'Notas, créditos e rodapés',
    sample: 'Informações nutricionais por 100ml. Manter refrigerado após aberto.',
    color: 'rgba(25,25,25,0.5)',
  },
]

export default function Part5Digital() {
  return (
    <section style={{ backgroundColor: '#f5f5f5', padding: '100px 64px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionHeader
          number="05"
          label="Materiais Digitais e UI"
          title="Sistema de Componentes"
          description="Especificações precisas para botões, tipografia e hierarquia visual em interfaces digitais. Cada detalhe foi definido para garantir consistência entre designers e desenvolvedores."
        />

        {/* Buttons */}
        <div style={{ marginBottom: '96px' }}>
          <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#024a34', marginBottom: '8px' }}>
            Botões — Primários
          </h3>
          <p style={{ fontSize: '14px', color: 'rgba(25,25,25,0.55)', lineHeight: 1.7, marginBottom: '40px' }}>
            Botões primários usam o verde institucional. Os tamanhos seguem uma escala proporcional — height, padding e font-size aumentam juntos para manter o equilíbrio visual em qualquer contexto.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            <ButtonSpec label="Confirmar pedido" variant="primary" size="lg" />
            <ButtonSpec label="Adicionar ao carrinho" variant="primary" size="md" />
            <ButtonSpec label="Ver produto" variant="primary" size="sm" />
            <ButtonSpec label="Ver mais" variant="primary" size="xs" />
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#024a34', marginBottom: '8px' }}>
            Botões — Secundários e Variações
          </h3>
          <p style={{ fontSize: '14px', color: 'rgba(25,25,25,0.55)', lineHeight: 1.7, marginBottom: '40px' }}>
            Botões secundários usam borda de 2px e fundo transparente. O botão âmbar é reservado para CTAs de conversão de alta prioridade. O ghost é para ações discretas.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
            <ButtonSpec label="Saiba mais" variant="secondary" size="lg" />
            <ButtonSpec label="Comparar produtos" variant="secondary" size="md" />
            <ButtonSpec label="Comprar agora" variant="ghost" size="lg" />
            <ButtonSpec label="Cancelar" variant="danger" size="md" />
          </div>
        </div>

        {/* Typography hierarchy */}
        <div>
          <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#024a34', marginBottom: '8px' }}>
            Hierarquia Tipográfica Digital
          </h3>
          <p style={{ fontSize: '14px', color: 'rgba(25,25,25,0.55)', lineHeight: 1.7, marginBottom: '40px' }}>
            Sistema completo de hierarquia para interfaces digitais. SHAMANS para títulos de impacto, Montserrat para todo o restante. As especificações abaixo são a referência canônica — devem ser implementadas usando variáveis CSS ou tokens de design.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {typeHierarchy.map((t, i) => (
              <div
                key={t.tag}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: i === 0 ? '16px 16px 0 0' : i === typeHierarchy.length - 1 ? '0 0 16px 16px' : '0',
                  border: '1px solid rgba(2,74,52,0.07)',
                  borderTop: i === 0 ? '1px solid rgba(2,74,52,0.07)' : 'none',
                  overflow: 'hidden',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr 280px', alignItems: 'center', gap: '0' }}>
                  {/* Tag */}
                  <div
                    style={{
                      backgroundColor: '#024a34',
                      padding: '24px 20px',
                      alignSelf: 'stretch',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: '4px',
                    }}
                  >
                    <span style={{ fontSize: '13px', fontWeight: 800, color: '#dbaf66', letterSpacing: '0.05em' }}>{t.tag}</span>
                    <span style={{ fontSize: '10px', color: 'rgba(245,245,245,0.4)', fontWeight: 500 }}>{t.family}</span>
                  </div>

                  {/* Sample */}
                  <div style={{ padding: '24px 32px', minHeight: '80px', display: 'flex', alignItems: 'center' }}>
                    <span
                      style={{
                        fontSize: `clamp(${Math.max(t.size * 0.6, 12)}px, ${t.size * 0.07}vw, ${t.size}px)`,
                        fontWeight: t.weight,
                        fontFamily: t.family === 'SHAMANS' ? "'SHAMANS', 'Montserrat', sans-serif" : "'Montserrat', sans-serif",
                        lineHeight: t.lineHeight,
                        letterSpacing: t.letterSpacing,
                        color: t.color,
                        textTransform: t.uppercase ? 'uppercase' : 'none',
                        display: 'block',
                      }}
                    >
                      {t.sample}
                    </span>
                  </div>

                  {/* Specs */}
                  <div
                    style={{
                      borderLeft: '1px solid rgba(2,74,52,0.07)',
                      padding: '16px 20px',
                      alignSelf: 'stretch',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: '4px',
                      backgroundColor: 'rgba(2,74,52,0.02)',
                    }}
                  >
                    {[
                      ['size', `${t.size}px`],
                      ['weight', String(t.weight)],
                      ['line-height', String(t.lineHeight)],
                      ['tracking', t.letterSpacing || '0'],
                    ].map(([k, v]) => (
                      <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                        <span style={{ fontSize: '10px', color: 'rgba(25,25,25,0.35)', fontWeight: 500 }}>{k}</span>
                        <span style={{ fontSize: '10px', color: '#191919', fontWeight: 700, fontFamily: 'monospace' }}>{v}</span>
                      </div>
                    ))}
                    <div style={{ marginTop: '4px', paddingTop: '8px', borderTop: '1px solid rgba(2,74,52,0.08)' }}>
                      <span style={{ fontSize: '10px', color: 'rgba(25,25,25,0.4)', lineHeight: 1.4 }}>{t.usage}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CSS tokens reference */}
          <div
            style={{
              backgroundColor: '#191919',
              borderRadius: '16px',
              padding: '40px',
              marginTop: '32px',
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#dbaf66', marginBottom: '20px' }}>
              Tokens CSS Recomendados
            </div>
            <pre
              style={{
                fontSize: '12px',
                color: '#f5f5f5',
                fontFamily: 'monospace',
                lineHeight: 1.8,
                margin: 0,
                whiteSpace: 'pre-wrap',
                opacity: 0.85,
              }}
            >
{`:root {
  /* Tipografia */
  --font-display: 'SHAMANS', 'Montserrat', sans-serif;
  --font-body: 'Montserrat', sans-serif;

  /* Escala */
  --text-h1: 64px;   --weight-h1: 800;  --tracking-h1: -0.03em;
  --text-h2: 48px;   --weight-h2: 800;  --tracking-h2: -0.02em;
  --text-h3: 36px;   --weight-h3: 700;  --tracking-h3: -0.01em;
  --text-h4: 24px;   --weight-h4: 700;
  --text-h5: 18px;   --weight-h5: 600;
  --text-h6: 14px;   --weight-h6: 600;
  --text-body: 16px; --lh-body: 1.75;
  --text-sm:  14px;  --lh-sm:   1.70;
  --text-label: 11px; --tracking-label: 0.12em;

  /* Cores */
  --color-green:  #024a34;
  --color-amber:  #dbaf66;
  --color-white:  #f5f5f5;
  --color-black:  #191919;

  /* Botões */
  --btn-lg-h: 52px;  --btn-lg-px: 32px; --btn-lg-fs: 16px;
  --btn-md-h: 44px;  --btn-md-px: 24px; --btn-md-fs: 14px;
  --btn-sm-h: 36px;  --btn-sm-px: 16px; --btn-sm-fs: 12px;
  --btn-xs-h: 28px;  --btn-xs-px: 12px; --btn-xs-fs: 11px;
  --btn-radius: 6px;
  --btn-fw: 600;
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
