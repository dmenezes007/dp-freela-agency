# DP Freela Agency

Landing page em React + Vite com animações e componentes interativos.

## Stack

- React 19
- Vite 6
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Requisitos

- Node.js 20+
- npm 10+

## Rodando localmente

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra http://localhost:3000

## Build de produção

```bash
npm run build
```

O build será gerado na pasta `dist/`.

## Deploy na Vercel

### Opção 1: via GitHub (recomendado)

1. Faça push deste repositório para o GitHub.
2. No dashboard da Vercel, clique em **Add New... > Project**.
3. Importe o repositório `dmenezes007/dp-freela-agency`.
4. A Vercel deve detectar automaticamente:
   - Framework: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Clique em **Deploy**.

### Opção 2: via CLI da Vercel

```bash
npm i -g vercel
vercel
```

Para produção:

```bash
vercel --prod
```

## Scripts

- `npm run dev`: ambiente de desenvolvimento
- `npm run build`: build de produção
- `npm run preview`: pré-visualização local do build
- `npm run lint`: checagem de tipos com TypeScript
- `npm run clean`: remove a pasta `dist`
