export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  tags: string[];
  gradientFrom: string; // Gradient color values for premium card covers
  gradientTo: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'o-impacto-do-perfeccionismo-na-saude-mental',
    title: 'O Custo Invisível do Perfeccionismo na Saúde Mental',
    excerpt: 'Quando a busca incessante pela excelência deixa de ser uma qualidade motivadora e se torna uma fonte contínua de ansiedade e autossabotagem.',
    category: 'Autoestima',
    readTime: '6 min de leitura',
    date: '28 Jun 2026',
    author: 'Dra. Helena Mendes',
    tags: ['Perfeccionismo', 'Ansiedade', 'Autocobrança', 'Autoestima'],
    gradientFrom: 'from-amber-100',
    gradientTo: 'to-orange-100',
    content: `
O perfeccionismo é frequentemente vendido como uma virtude nas entrevistas de emprego e na cultura de alta performance. "Sou perfeccionista" soa como um selo de compromisso e dedicação total. No entanto, na clínica psicológica, o perfeccionismo é quase sempre visto por outra lente: a de uma couraça rígida que esconde um medo profundo da rejeição e da inadequação.

Diferente da busca saudável por excelência (onde há prazer no processo e aceitação dos erros), o perfeccionismo neurótico se caracteriza por padrões irreais de exigência, punição interna implacável e a convicção de que o próprio valor está diretamente atrelado ao resultado final das coisas.

### O Ciclo Vicioso do Perfeccionismo

O perfeccionista costuma viver em um ciclo desgastante estruturado em quatro etapas:

1. **Expectativas Irrealistas:** Estabelecimento de metas inalcançáveis para si mesmo ou para os outros.
2. **Pressão e Ansiedade:** O peso da meta gera um estresse crônico que prejudica o desempenho natural.
3. **Foco na Falha:** Mesmo que 98% de um projeto seja impecável, o perfeccionista focará obsessivamente nos 2% que falharam.
4. **Autocrítica e Procrastinação:** Pelo medo avassalador de errar, a pessoa adia o início de tarefas importantes ou se pune excessivamente após executá-las, corroendo sua autoestima.

### Como a Terapia Ajuda a Flexibilizar a Mente?

Na clínica, trabalhamos para ajudar o paciente a migrar do perfeccionismo para a **satisfação ótima**. O tratamento não visa fazer você realizar um trabalho desleixado, mas libertar você da neurose de que qualquer erro é uma catástrofe existencial. 

Algumas das frentes de atuação incluem:

* **Desconstrução do "Tudo ou Nada":** Aprender a enxergar as nuances e as áreas cinzentas da vida, sem classificar tudo como absoluto sucesso ou absoluto fracasso.
* **Cultivo da Autocompaixão:** Desenvolver uma voz interna que console e apoie diante das falhas, em vez de uma voz que chicoteie.
* **Exposição Gradual ao Erro:** Experimentar pequenas falhas controladas para perceber que o mundo não acaba e que você permanece seguro e digno de afeto mesmo falhando.
    `
  },
  {
    slug: 'como-a-terapia-cognitivo-comportamental-pode-ajudar-na-ansiedade',
    title: 'A Ciência por Trás da Terapia no Controle da Ansiedade',
    excerpt: 'Entenda como as abordagens baseadas em evidências científicas ajudam a reestruturar pensamentos disfuncionais e regular o sistema nervoso.',
    category: 'Ansiedade',
    readTime: '5 min de leitura',
    date: '15 Jun 2026',
    author: 'Dra. Helena Mendes',
    tags: ['Terapia Cognitivo-Comportamental', 'Ansiedade', 'Regulação Emocional', 'Ciência'],
    gradientFrom: 'from-emerald-50',
    gradientTo: 'to-teal-100',
    content: `
A ansiedade clínica não é apenas um sentimento de "nervosismo" temporário; é um estado de alerta constante do sistema nervoso autônomo, que percebe ameaças em situações corriqueiras. Para tratar esse quadro com eficácia, a ciência psicológica desenvolveu abordagens estruturadas, sendo a Terapia Cognitivo-Comportamental (TCC) e a Terapia de Aceitação e Compromisso (ACT) referências de eficácia padrão ouro no mundo inteiro.

Neste artigo, vamos desmistificar o que de fato acontece dentro do consultório durante o tratamento da ansiedade e como essas técnicas agem no seu cérebro.

### O Modelo Cognitivo: A Lente Através da Qual Vemos o Mundo

O princípio fundamental da TCC é simples, mas revolucionário: **não são os fatos em si que nos causam sofrimento, mas a interpretação que fazemos deles.**

Quando uma pessoa sofre de ansiedade crônica, ela tende a operar sob dois vieses cognitivos principais:
1. **Superestimar a probabilidade de perigo:** Acreditar que o pior cenário possível tem quase 100% de chance de ocorrer.
2. **Subestimar a própria capacidade de enfrentamento:** Acreditar que, se o pior cenário ocorrer, ela não conseguirá suportá-lo e irá desmoronar.

### As Ferramentas do Processo Terapêutico

Durante as sessões, trabalhamos com três pilares principais:

* **Reestruturação Cognitiva:** Juntos, analisamos criticamente os pensamentos de catastrofização, buscando evidências reais a favor e contra eles. Aprendemos a construir pensamentos mais realistas e funcionais.
* **Exposição Prevenção de Resposta:** Treinamos o cérebro a tolerar o desconforto da ansiedade sem fugir das situações, provando ao sistema nervoso, de forma empírica, que a ameaça imaginada não se concretiza.
* **Técnicas de Aterramento e Respiração:** Exercícios de respiração diafragmática e atenção plena que ativam o sistema nervoso parassimpático, sinalizando ao corpo que ele está seguro.
    `
  },
  {
    slug: 'limites-nos-relacionamentos-como-dizer-nao-com-amor',
    title: 'A Importância dos Limites nos Relacionamentos Afetivos',
    excerpt: 'Dizer "não" para os outros pode ser a maior demonstração de amor e respeito por si mesmo. Aprenda a definir limites saudáveis.',
    category: 'Relacionamentos',
    readTime: '4 min de leitura',
    date: '02 Jun 2026',
    author: 'Dra. Helena Mendes',
    tags: ['Relacionamentos', 'Limites', 'Comunicação Assertiva', 'Autocuidado'],
    gradientFrom: 'from-blue-50',
    gradientTo: 'to-indigo-100',
    content: `
Muitas pessoas associam a palavra "limite" a afastamento, frieza ou egoísmo. Crescemos sob o mito de que, para amar verdadeiramente alguém (seja um parceiro, filho ou amigo), devemos estar 100% disponíveis e dispostos a anular nossas próprias necessidades. 

No entanto, a prática clínica revela o oposto: **a ausência de limites é uma das principais causas de ressentimento, exaustão e término de relacionamentos.** Sem limites claros, o amor sufoca sob o peso das cobranças implícitas e da anulação pessoal.

### O que são Limites Saudáveis?

Limites são, em essência, as "regras de engajamento" que definem o que é confortável e seguro para você em uma relação, e o que não é. Eles determinam onde você termina e onde o outro começa.

Quando você não define limites:
* Acumula ressentimento silencioso, que eventualmente explode em discussões desproporcionais.
* Desenvolve exaustão física e mental por assumir responsabilidades que pertencem ao outro.
* Perde a conexão com sua própria identidade, vivendo apenas para satisfazer expectativas externas.

### Passo a Passo para Impor Limites Assertivos

1. **Identifique Seus Limites:** Observe em quais momentos você sente raiva, frustração ou vontade de fugir. Esses sentimentos costumam ser indicadores de que um limite seu foi cruzado.
2. **Seja Claro e Direto:** Evite justificativas excessivas ou desculpas. Um limite assertivo deve ser comunicado de forma tranquila e firme. Exemplo: *"Eu adoraria te ajudar com esse projeto, mas no momento estou no meu limite de tarefas e não poderei assumir isso."*
3. **Tolere a Culpa Inicial:** É normal sentir culpa ao começar a dizer "não". Entenda que essa culpa não significa que você fez algo errado, mas sim que está rompendo um antigo padrão de agradar a todos a qualquer custo.
    `
  },
  {
    slug: 'esgotamento-profissional-sinais-que-voce-esta-no-limite',
    title: 'Esgotamento Profissional: Sinais que Você Está no Limite',
    excerpt: 'Saiba como diferenciar o cansaço cotidiano da Síndrome de Burnout e descubra como iniciar sua recuperação emocional.',
    category: 'Carreira',
    readTime: '7 min de leitura',
    date: '20 Mai 2026',
    author: 'Dra. Helena Mendes',
    tags: ['Burnout', 'Estresse', 'Trabalho', 'Saúde Mental'],
    gradientFrom: 'from-rose-50',
    gradientTo: 'to-red-100',
    content: `
Em uma sociedade que idolatra a produtividade e a pressa, o cansaço passou a ser encarado quase como um troféu de honra. Trabalhamos horas extras, respondemos mensagens profissionais tarde da noite e abrimos mão do lazer sob o pretexto de "garantir o futuro". 

Mas qual é o preço emocional dessa dinâmica? 

Quando o cansaço simples se acumula sem descanso adequado, ele se transforma em **estresse crônico** e, em última instância, na **Síndrome de Burnout**, um estado de colapso físico e psicológico associado ao trabalho.

### Cansaço Comum vs. Burnout: Qual a Diferença?

É crucial saber diferenciar o desgaste normal do dia a dia da instalação do esgotamento patológico:

* **O Cansaço Comum:** É restaurado após uma boa noite de sono ou um fim de semana de folga. A pessoa mantém sua motivação geral e sua conexão emocional com o trabalho e colegas.
* **O Burnout:** É um cansaço que não passa após repouso. Ele vem acompanhado de **despersonalização** (cinismo, apatia, frieza em relação às tarefas e clientes) e de um sentimento constante de **ineficácia profissional** (achar que nada do que faz tem valor ou está bom o suficiente).

### Os Três Pilares da Recuperação

Se você se identificou com os sinais de Burnout, o processo de melhora envolve ações estruturadas:

1. **Afastamento ou Redefinição de Carga:** É essencial reduzir a exposição ao fator estressor. Isso pode envolver conversar sobre divisão de tarefas, delegar responsabilidades ou, sob orientação médica, um período de licença.
2. **Apoio Psicoterápico:** A terapia ajuda a compreender por que você aceitou a sobrecarga (ex: necessidade de aprovação, medo de demissão, perfeccionismo rígido) e ensina a restabelecer limites.
3. **Regulação Biológica:** Priorizar o sono de qualidade, alimentação adequada e atividades físicas leves para reduzir os níveis de cortisol no sangue e recuperar o equilíbrio do sistema nervoso.
    `
  }
];
