# Innker Tecnologia — Software House

Este projeto compreende a Landing Page oficial, o Manual de Identidade Visual (Styleguide) e as páginas legais da **Innker Tecnologia**, uma software house dedicada ao desenvolvimento de ecossistemas digitais de alta performance.

---

## 🛠️ Stack Tecnológica

- **Framework:** [Angular 21](https://angular.dev/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Fonte Oficial:** Montserrat (via Google Fonts)
- **Gerenciador de Pacotes:** npm

---

## 🗺️ Estrutura de Rotas

A aplicação utiliza o roteamento nativo do Angular com carregamento preguiçoso (*Lazy Loading*) para melhor performance do carregamento inicial:

- **`/` (Home):** Landing Page provisória ("Em Breve") com animações modernas e glow neon.
- **`/brand` (Manual da Marca):** Styleguide vivo contendo paleta de cores (HEX, RGB, CMYK, Pantone), regras de contraste, escala tipográfica, conformidade do logotipo e especificações dos componentes de UI (botões interativos).
- **`/privacy` (Política de Privacidade):** Página legal obrigatória para integrações e aprovação de aplicativos na API oficial da Meta (WhatsApp, Facebook Login, etc.).
- **`/terms` (Termos de Uso):** Termos e condições gerais de uso das ferramentas e integrações da Innker.

---

## ⚙️ Configuração Local

### Pré-requisitos
Certifique-se de ter o **Node.js** (versão 18 ou superior) instalado em sua máquina.

### Passos para Instalação

1. Clone o repositório do projeto:
   ```bash
   git clone https://github.com/randygomesdev/Innker.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

4. Abra o navegador em: [http://localhost:4200/](http://localhost:4200/)

---

## 🚀 Build e Produção

Para compilar o projeto com todas as otimizações de produção (minificação, tree-shaking e divisão de chunks):

```bash
npm run build
```

Os arquivos finais serão gerados no diretório `dist/innker`.

---

## ☁️ Deploy na Vercel

O deploy contínuo desta aplicação está configurado para a Vercel, realizando builds automáticos a cada commit na branch principal (`main` ou `master`).
