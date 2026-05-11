# QR Generator

Ferramenta simples para geração de QR Codes com suporte a logo centralizada, título e subtítulo configuráveis. Exporta PNG em alta resolução pronto para impressão.

---

## ✨ Funcionalidades

- Geração de QR Code a partir de qualquer URL
- Logo centralizada com fundo circular branco
- Nível de correção H (30%) — garante leitura mesmo com logo cobrindo o centro
- Título abaixo do QR configurável — deixe vazio para ocultar
- Toggle para exibir a URL como subtítulo
- Export em PNG 500×500px, pronto para impressão
- Nome do arquivo gerado automaticamente a partir da URL

---

## 🚀 Como usar

1. Abra o arquivo `gerar-qrcode.html` no navegador
2. Informe a URL desejada
3. Faça upload de uma logo (opcional)
4. Defina o título e ative o subtítulo se quiser
5. Clique em **↻ Gerar QR Code**
6. Clique em **⬇ Baixar QR Code (PNG)**

> Não requer instalação, servidor ou dependências locais.

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 / CSS3 / JavaScript | Interface e lógica |
| Canvas API | Composição do QR Code com logo |
| [QRCode.js](https://github.com/davidshimjs/qrcodejs) | Geração do QR Code |
