import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-brand-manual',
  imports: [CommonModule],
  templateUrl: './brand-manual.html',
  styles: ``,
})
export class BrandManual {
  stats = [
    {label: 'Diretrizes', value: '05'},
    {label: 'Cores Oficiais', value: '03'},
    {label: 'Famílias Tipográficas', value: '01'},
    {label: 'Versões do Logo', value: '03'},
  ];

  colors = [                                                                                                                                                                                                                                  
    {                                                                                                                                                                                                                                         
      name: 'Vermelho Supremo',                                                                                                                                                                                                               
      hex: '#ED1C24',                                                                                                                                                                                                                         
      rgb: 'RGB 237 · 28 · 36',                                                                                                                                                                                                               
      cmyk: 'CMYK 0 · 99 · 91 · 0',                                                                                                                                                                                                           
      pantone: 'Pantone 485 C',                                                                                                                                                                                                               
      role: 'Cor de destaque principal da marca. Utilizada em botões de Call-To-Action (CTAs), links importantes, realces de interface e elementos identitários marcantes.',                                                                  
      classBg: 'bg-red-supreme',                                                                                                                                                                                                              
      classText: 'text-natural-white'                                                                                                                                                                                                         
    },                                                                                                                                                                                                                                        
    {                                                                                                                                                                                                                                         
      name: 'Preto Profundo',                                                                                                                                                                                                                 
      hex: '#191919',                                                                                                                                                                                                                         
      rgb: 'RGB 25 · 25 · 25',                                                                                                                                                                                                                
      cmyk: 'CMYK 0 · 0 · 0 · 90',                                                                                                                                                                                                            
      pantone: 'Pantone Black 6 C',                                                                                                                                                                                                           
      role: 'Base de contraste e sobriedade da marca. Empregada como cor de fundo para a landing page (Dark Mode por excelência) e para elementos textuais em fundos claros.',                                                                
      classBg: 'bg-deep-black',                                                                                                                                                                                                               
      classText: 'text-natural-white'                                                                                                                                                                                                         
    },                                                                                                                                                                                                                                        
    {                                                                                                                                                                                                                                         
      name: 'Branco Natural',                                                                                                                                                                                                                 
      hex: '#F5F5F5',                                                                                                                                                                                                                         
      rgb: 'RGB 245 · 245 · 245',                                                                                                                                                                                                             
      cmyk: 'CMYK 0 · 0 · 0 · 4',                                                                                                                                                                                                             
      pantone: 'Pantone Cool Gray 1 C',                                                                                                                                                                                                       
      role: 'Tom neutro de respiro. Utilizado em fundos claros alternativos, tipografia corrida sobre fundos escuros e no isolamento de espaçamentos negativos.',                                                                             
      classBg: 'bg-natural-white',                                                                                                                                                                                                            
      classText: 'text-deep-black',                                                                                                                                                                                                           
      hasBorder: true                                                                                                                                                                                                                         
    }                                                                                                                                                                                                                                         
  ];

  combinations = [                                                                                                                                                                                                                            
    { bg: 'bg-deep-black', fg: 'text-red-supreme', label: 'Preto + Vermelho', note: 'Alinhamento corporativo principal de alta distinção e contraste tecnológico.' },                                                                         
    { bg: 'bg-deep-black', fg: 'text-natural-white', label: 'Preto + Branco', note: 'Interface Dark Mode tradicional. Excelente legibilidade para textos corridos longos.' },                                                                 
    { bg: 'bg-red-supreme', fg: 'text-natural-white', label: 'Vermelho + Branco', note: 'Destaque e atração. Combinação recomendada para botões de CTA principais e banners.' },                                                              
    { bg: 'bg-natural-white', fg: 'text-deep-black', label: 'Branco + Preto', note: 'Interface Light Mode alternativa. Ideal para documentação e blocos longos de leitura.' },                                                                
    { bg: 'bg-natural-white', fg: 'text-red-supreme', label: 'Branco + Vermelho', note: 'Realces sutis, links ativos, tags e categorias em páginas de fundo claro.' }                                                                         
  ];

  fontWeights = [                                                                                                                                                                                                                             
    { weight: 300, label: 'Light', desc: 'Legendas de rodapé, notas técnicas e textos de apoio secundários.' },                                                                                                                               
    { weight: 400, label: 'Regular', desc: 'Corpo de texto corrido geral, parágrafos, blocos informativos e descrições.' },                                                                                                                   
    { weight: 500, label: 'Medium', desc: 'Textos de botões secundários, etiquetas (tags), tabelas e labels de formulário.' },                                                                                                                
    { weight: 600, label: 'SemiBold', desc: 'Subtítulos de seção, títulos de cards e botões primários em destaque.' },                                                                                                                        
    { weight: 700, label: 'Bold', desc: 'Headlines, títulos de seções principais da página e destaques pontuais.' },                                                                                                                          
    { weight: 800, label: 'ExtraBold', desc: 'Título principal do Hero do site e grandes chamadas estatísticas.' },                                                                                                                           
    { weight: 900, label: 'Black', desc: 'Uso exclusivo e pontual para palavras-chave de altíssimo impacto visual.' }                                                                                                                         
  ];

  buttonSpecs = [                                                                                                                                                                                                                             
    {                                                                                                                                                                                                                                         
      label: 'Botão Primário',                                                                                                                                                                                                                
      class: 'bg-red-supreme text-natural-white hover:bg-red-supreme/90',                                                                                                                                                                     
      role: 'Ação Principal',                                                                                                                                                                                                                 
      desc: 'Usado para a conversão de maior valor na página (ex: Contratar, Entrar em Contato).',                                                                                                                                            
      hover: 'Opacidade sutil de fundo'                                                                                                                                                                                                       
    },                                                                                                                                                                                                                                        
    {                                                                                                                                                                                                                                         
      label: 'Botão Secundário',                                                                                                                                                                                                              
      class: 'bg-transparent text-deep-black border-2 border-deep-black hover:bg-deep-black hover:text-natural-white',                                                                                                                        
      role: 'Ação Secundária',                                                                                                                                                                                                                
      desc: 'Usado para opções de suporte que complementam a ação principal (ex: Ver Projetos).',                                                                                                                                             
      hover: 'Preenche com preto sólido'                                                                                                                                                                                                      
    },                                                                                                                                                                                                                                        
    {                                                                                                                                                                                                                                         
      label: 'Botão Alternativo',                                                                                                                                                                                                             
      class: 'bg-deep-black text-natural-white hover:bg-deep-black/85',                                                                                                                                                                       
      role: 'Festaque Escuro',                                                                                                                                                                                                                
      desc: 'Usado como elemento de destaque de formulário ou em áreas onde o fundo é branco.',                                                                                                                                               
      hover: 'Brilho reduzido no hover'                                                                                                                                                                                                       
    },                                                                                                                                                                                                                                        
    {                                                                                                                                                                                                                                         
      label: 'Botão Ghost',                                                                                                                                                                                                                   
      class: 'bg-transparent text-deep-black/60 hover:text-deep-black',                                                                                                                                                                       
      role: 'Navegação / Links',                                                                                                                                                                                                              
      desc: 'Ações discretas de baixa prioridade como paginação, abas ou navegação do menu.',                                                                                                                                                 
      hover: 'Texto fica em preto opaco'                                                                                                                                                                                                      
    }                                                                                                                                                                                                                                         
  ];

  dontRules = [                                                                                                                                                                                                                               
    {                                                                                                                                                                                                                                         
      title: 'Não distorça o logotipo',                                                                                                                                                                                                       
      desc: 'Nunca altere a proporção vertical/horizontal do logotipo ou rotacione elementos isoladamente.',                                                                                                                                  
      imgClass: 'skew-x-12 scale-y-75 rotate-3',                                                                                                                                                                                              
      src: '/Logo-main.svg'                                                                                                                                                                                                                   
    },                                                                                                                                                                                                                                        
    {                                                                                                                                                                                                                                         
      title: 'Não aplique sombras ou blur',                                                                                                                                                                                                   
      desc: 'Evite efeitos visuais tridimensionais, gradientes informais ou desfoques artificiais sobre a marca.',                                                                                                                            
      imgClass: 'blur-[2px] opacity-70 filter drop-shadow-[0_8px_16px_rgba(237,28,36,0.85)]',                                                                                                                                                 
      src: '/Icon-Main.svg'                                                                                                                                                                                                                   
    },                                                                                                                                                                                                                                        
    {                                                                                                                                                                                                                                         
      title: 'Não altere as cores oficiais',                                                                                                                                                                                                  
      desc: 'O logotipo não deve ser pintado com cores estranhas à paleta oficial da Innker em nenhuma circunstância.',                                                                                                                       
      imgClass: 'hue-rotate-90 filter',                                                                                                                                                                                                       
      src: '/Logo-main.svg',                                                                                                                                                                                                                  
      bgClass: 'bg-violet-800'                                                                                                                                                                                                                
    }                                                                                                                                                                                                                                         
  ];

  doRules = [                                                                                                                                                                                                                                 
    {                                                                                                                                                                                                                                         
      title: 'Respeite o espaçamento',                                                                                                                                                                                                        
      desc: 'Sempre garanta uma margem de segurança ao redor do logotipo igual à altura do símbolo.',                                                                                                                                         
      imgClass: 'scale-100',                                                                                                                                                                                                                  
      src: '/Logo-main.svg',                                                                                                                                                                                                                  
      hasGrid: true                                                                                                                                                                                                                           
    },                                                                                                                                                                                                                                        
    {                                                                                                                                                                                                                                         
      title: 'Contraste sobre fundo escuro',                                                                                                                                                                                                  
      desc: 'Aplique a versão de logo branca sobre o Preto Profundo, mantendo a legibilidade intacta.',                                                                                                                                       
      imgClass: 'scale-100',                                                                                                                                                                                                                  
      src: '/Logo-Variation-2.svg',                                                                                                                                                                                                           
      bgClass: 'bg-deep-black'                                                                                                                                                                                                                
    },                                                                                                                                                                                                                                        
    {                                                                                                                                                                                                                                         
      title: 'Uso ideal do ícone e perfil',                                                                                                                                                                                                   
      desc: 'Utilize as variações de ícone centralizadas e circulares para fotos de perfil das redes oficiais.',                                                                                                                              
      imgClass: 'scale-90 w-16 h-16 rounded-full',                                                                                                                                                                                            
      src: '/Profile-Main.svg',                                                                                                                                                                                                               
      bgClass: 'bg-red-supreme/10'                                                                                                                                                                                                            
    }                                                                                                                                                                                                                                         
  ]; 
}
