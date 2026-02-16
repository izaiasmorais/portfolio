# Portfolio - Regras do Projeto

## Estrutura de features

Cada feature em `src/features/<feature>/` deve seguir esta organização:

```
src/features/<feature>/
├── components/    # Componentes React (.tsx)
├── types/         # Tipagens e interfaces (.ts)
├── data/          # Dados estáticos / mocks (.ts)
```

- **Tipagens** sempre em `types/index.ts`, nunca inline no componente
- **Dados estáticos** (arrays, objetos de configuração) sempre em `data/index.ts`, nunca inline no componente
- **Componentes** devem ser pequenos e focados. Se um componente ultrapassa ~80 linhas, extraia subcomponentes
- O componente principal de cada feature (que monta a seção) deve se chamar `container.tsx`

## Componentes

- Usar `Link` do `next/link` ao invés de `<a>` para links (internos e externos)
- Usar `Image` do `next/image` para todas as imagens
- Cada componente em seu próprio arquivo
- Exportar componentes como named exports (não default)
- `Button` de `@/shared/components/ui/button` sempre deve ter `cursor-pointer`
- Sempre usar componentes shadcn-ui para elementos de UI (dropdown, dialog, tooltip, etc.) — ficam em `src/shared/components/ui/`

## Estilização

- Tailwind CSS apenas, sem CSS modules ou styled-components
- Usar `cn()` de `@/shared/utils/cn` para classes condicionais
- Ícones via `@hugeicons/react` com `@hugeicons/core-free-icons`

## i18n

- Traduções ficam em `src/shared/i18n/locales/{en,pt-BR}/`
- Tipagens de i18n (ex: `SkillCategoryKey`) ficam em `src/shared/i18n/types.ts`
- Ao adicionar/remover categorias, labels ou seções, **sempre atualizar**: o tipo em `types.ts`, o locale EN e o locale PT-BR
- SVGs de skills ficam em `public/skills/`. Para ícones com problemas em dark mode, criar versões `-light.svg` e `-dark.svg`

## Geral

- Linguagem: TypeScript strict, sem `any`
- Sem comentários no código
- Package manager: pnpm
- Sem "Co-Authored-By" ou assinaturas em commits
