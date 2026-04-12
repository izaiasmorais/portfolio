# Plano de Correções de Segurança - Portfolio

## Contexto

O portfolio possui um formulário de contato que envia emails via Resend (server action). A análise identificou que a superfície de ataque é pequena (sem banco de dados, sem autenticação), mas há falhas reais que permitem abuso do formulário e ausência de headers de segurança padrão da indústria.

---

## 1. Rate Limiting no Server Action (CRÍTICO)

**Problema:** Sem rate limiting, um bot pode disparar milhares de emails esgotando a cota do Resend e gerando spam.

**Arquivo:** `src/features/contact/actions/send-email.ts`

**Solução:** Implementar rate limiting in-memory simples (Map com IP/timestamp). Para um portfolio sem infra de Redis, um rate limiter em memória é suficiente.

- Criar `src/features/contact/actions/rate-limit.ts` com uma classe simples que armazena timestamps por chave
- Limitar a ~5 requisições por hora por IP
- Usar `headers()` do Next.js para obter o IP (`x-forwarded-for`)
- Retornar `{ success: false }` quando o limite for atingido

---

## 2. Validação de Input - Max Length (CRÍTICO)

**Problema:** Sem `max()` nos schemas Zod, um atacante pode enviar payloads gigantes (MBs de texto).

**Arquivos:**
- `src/features/contact/data/index.ts` (schema client)
- `src/features/contact/actions/send-email.ts` (schema server)

**Solução:** Adicionar limites máximos:
- `name`: `.max(100)`
- `email`: `.max(254)` (RFC 5321)
- `message`: `.max(5000)`

Aplicar nos dois schemas (client e server).

---

## 3. Sanitização de Input no Email (MÉDIO)

**Problema:** O `name` do usuário é interpolado no `subject` do email. Embora o Zod valide tipo string, caracteres como `\r\n` podem causar header injection.

**Arquivo:** `src/features/contact/actions/send-email.ts`

**Solução:** Sanitizar o `name` removendo `\r` e `\n` antes de usar no subject. O Resend SDK já escapa headers internamente, mas defesa em profundidade é o padrão correto.

```ts
const sanitizedName = name.replace(/[\r\n]/g, "")
```

---

## 4. Mover Email Hardcoded para Env (MÉDIO)

**Problema:** `izaiaslima356@gmail.com` hardcoded no código fonte.

**Arquivo:** `src/features/contact/actions/send-email.ts:26`

**Solução:** Mover para `CONTACT_EMAIL` no `.env` e usar `process.env.CONTACT_EMAIL` no server action. Adicionar fallback para evitar quebra.

---

## 5. Security Headers no Next.js (MÉDIO)

**Problema:** Sem headers de segurança, o site fica vulnerável a clickjacking (iframe), MIME sniffing, e não aproveita HSTS.

**Arquivo:** `next.config.ts`

**Solução:** Adicionar configuração de `headers()` no next.config.ts:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-DNS-Prefetch-Control: on
```

Nota: CSP completa pode ser adicionada depois — requer mapeamento cuidadoso de todos os domínios usados (fonts, analytics, images). Não incluir agora para não quebrar funcionalidades.

---

## 6. Honeypot Anti-Bot no Formulário (BAIXO)

**Problema:** Sem proteção contra bots automatizados.

**Arquivos:**
- `src/features/contact/components/contact-form.tsx`
- `src/features/contact/actions/send-email.ts`

**Solução:** Adicionar campo honeypot invisível (campo oculto com CSS que bots preenchem). Se preenchido, rejeitar silenciosamente no server. Mais leve que CAPTCHA e não prejudica UX.

- Adicionar campo `website` (ou similar) ao form com `className` que esconde via CSS (`sr-only opacity-0 absolute`)
- No server action, se `website` tiver valor, retornar `{ success: true }` (enganar o bot)

---

## Arquivos a Modificar

| Arquivo | Mudança |
|---------|---------|
| `src/features/contact/actions/send-email.ts` | Rate limit, sanitização, max length, honeypot check, env var |
| `src/features/contact/actions/rate-limit.ts` | **Novo** - Rate limiter in-memory |
| `src/features/contact/data/index.ts` | Max length no schema client |
| `src/features/contact/types/index.ts` | Adicionar campo honeypot ao tipo |
| `src/features/contact/components/contact-form.tsx` | Campo honeypot hidden |
| `src/features/contact/components/contact-form-fields.tsx` | Renderizar campo honeypot |
| `next.config.ts` | Security headers |
| `.env` | Adicionar `CONTACT_EMAIL` |

## Verificação

1. `bun dev` e testar formulário de contato normalmente (deve funcionar)
2. Testar envio com campo honeypot preenchido (deve aceitar silenciosamente sem enviar email)
3. `bun check` deve passar limpo
4. `bun build` deve compilar sem erros
5. Verificar headers de segurança acessando o site e inspecionando response headers no DevTools
