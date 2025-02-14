# Sistema de Gerenciamento de Planos de Telefonia

Este projeto consiste em um sistema interativo para o gerenciamento de planos de telefonia, com foco no desenvolvimento front-end. O sistema inclui um dashboard rico em UX/UI, formulários intuitivos e uma experiência responsiva. O back-end é simulado utilizando JSON Server, permitindo que o desenvolvimento front-end seja o principal foco.

## Tecnologias Utilizadas

- **Front-End:**
  - [X] Angular 17+
  - [X] Angular Material (ou outra biblioteca de UI moderna)
  - [X] Biblioteca de gráficos: amCharts
  - [X] CSS Responsivo: Grid/Flexbox, Tailwind (diferencial)
  - [X] Gerenciamento de estado: Services, RxJS (NgRx é um plus)

- **Back-End Simulado:**
  - [X] JSON Server (ou outra API mockada no Angular)
  - [X] Arquivo `db.json` para simular os dados do backend

## Funcionalidades

### 1. Dashboard Interativo

- [X] **Gráfico de Pizza:** Proporção de clientes por plano.
- [X] **Gráfico de Barras:** Clientes cadastrados por mês no último ano.
- [X] **Indicadores Numéricos (Cards estilizados):**
  - [X] Total de clientes cadastrados.
  - [X] Total de planos disponíveis.
  - [X] Média de planos por cliente.

**Extras (Opcionais):**

- Filtros e Interatividade:
  - Período dinâmico (últimos 30 dias, 6 meses, 1 ano).
  - Filtro por tipo de plano.
  - Animações e transições suaves.

### 2. Gerenciamento de Planos

- **Formulário responsivo** para cadastro e edição (com validação e feedback visual).
- **Tabela interativa:**
  - Paginação e ordenação.
  - Busca e filtros (por nome e preço).
  - Ações rápidas (editar/excluir).

### 3. Gerenciamento de Clientes

- **Formulário intuitivo** para cadastro e edição (com máscaras para CPF e telefone).
- **Tabela interativa:**
  - Busca e filtros (por nome e CPF).
  - Paginação e ações rápidas.

### 4. Associação de Clientes a Planos

- **Interface drag-and-drop** para associar clientes a planos (Diferencial).
- **Listagem visual** de clientes e seus planos.
- Permitir desassociar clientes de planos.

## Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado
- Angular CLI instalado (`npm install -g @angular/cli`)
- JSON Server instalado (`npm install -g json-server`)

### Passos para Execução

1. **Clone o repositório:**

   ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    
    npm install

    json-server --watch db.json

    ng serve
    ```

### O backend será aberta na porta:3000 acesse <http://localhost:3000>

### O Front será sera aberta na pagina 4200- acesse <http://localhost:4200>
