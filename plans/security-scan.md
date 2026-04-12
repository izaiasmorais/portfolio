# Security Scan - Checklist de Vulnerabilidades

Checklist agnóstico para auditoria de segurança em aplicações web. Aplicável a qualquer stack (Next.js, Nuxt, Remix, etc.).

---

## 1. Rate Limiting em Endpoints Públicos

**Risco:** Abuso automatizado — spam, exaustão de cota de serviços externos (email, SMS, APIs pagas), brute force.

**O que verificar:**
- [ ] Formulários públicos (contato, login, cadastro, recuperação de senha) possuem rate limiting
- [ ] APIs públicas limitam requisições por IP/sessão
- [ ] Respostas de rate limit não vazam informação (retornar erro genérico)

**Abordagens:**
- In-memory (Map/sliding window) para apps simples sem infra compartilhada
- Redis/Upstash para apps com múltiplas instâncias
- Middleware global ou por rota

---

## 2. Validação de Input com Limites Máximos

**Risco:** Payloads gigantes causam DoS, consumo excessivo de memória, estourar limites de serviços downstream.

**O que verificar:**
- [ ] Todo campo de texto tem `max length` definido (client e server)
- [ ] Validação existe em ambas as camadas (client-side para UX, server-side para segurança)
- [ ] Uploads de arquivo têm limite de tamanho
- [ ] Arrays/listas têm limite de itens

**Referências de limites:**
- Nome: ~100 chars
- Email: 254 chars (RFC 5321)
- Textarea genérico: 5.000–10.000 chars
- Upload de arquivo: definir por caso de uso

---

## 3. Sanitização de Input em Contextos Sensíveis

**Risco:** Header injection (email), SQL injection, XSS, template injection.

**O que verificar:**
- [ ] Input de usuário usado em headers de email (subject, replyTo, from) é sanitizado contra `\r\n`
- [ ] Input renderizado em HTML é escapado (React/Vue fazem por padrão, mas `dangerouslySetInnerHTML`/`v-html` quebram isso)
- [ ] Input usado em queries SQL usa prepared statements / ORM
- [ ] Input usado em URLs é encodado (`encodeURIComponent`)
- [ ] Input usado em comandos shell é proibido ou rigorosamente sanitizado

---

## 4. Credenciais e Segredos Fora do Código

**Risco:** Exposição de API keys, emails privados, tokens em repositórios públicos.

**O que verificar:**
- [ ] API keys, tokens e senhas estão em variáveis de ambiente (`.env`), nunca hardcoded
- [ ] `.env` e `.env.local` estão no `.gitignore`
- [ ] Emails de destinatário, webhooks e endpoints configuráveis estão em env vars
- [ ] Nenhum secret é exposto no client-side (prefixo `NEXT_PUBLIC_`, `VITE_`, etc. só para dados públicos)
- [ ] Git history não contém secrets antigos (usar `git log -S "API_KEY"` para verificar)

---

## 5. Security Headers HTTP

**Risco:** Clickjacking (iframe), MIME sniffing, downgrade de HTTPS, leaking de referrer.

**O que verificar:**
- [ ] `X-Frame-Options: DENY` — impede embedding em iframes
- [ ] `X-Content-Type-Options: nosniff` — impede MIME sniffing
- [ ] `Strict-Transport-Security` — força HTTPS
- [ ] `Referrer-Policy: strict-origin-when-cross-origin` — controla vazamento de URL
- [ ] `Permissions-Policy` — desabilita APIs desnecessárias (camera, microphone, geolocation)
- [ ] `Content-Security-Policy` — restringe origens de scripts, styles, imagens (implementar por último, requer mapeamento de domínios)

**Onde configurar:**
- Next.js: `headers()` no `next.config.ts`
- Nuxt: `routeRules` no `nuxt.config.ts`
- Genérico: middleware ou config do servidor/CDN (Vercel, Cloudflare, Nginx)

---

## 6. Proteção Anti-Bot em Formulários

**Risco:** Submissões automatizadas por bots — spam, abuso de recursos.

**O que verificar:**
- [ ] Formulários públicos possuem pelo menos uma camada anti-bot
- [ ] Links com `target="_blank"` incluem `rel="noopener noreferrer"`
- [ ] Botões fora de forms têm `type="button"` explícito

**Abordagens (do mais leve ao mais pesado):**
- Honeypot: campo invisível que bots preenchem — se preenchido, rejeitar silenciosamente
- Tempo mínimo: rejeitar submissões feitas em menos de 2-3 segundos após carregar o form
- CAPTCHA (reCAPTCHA v3, Turnstile): quando as abordagens anteriores não bastam
