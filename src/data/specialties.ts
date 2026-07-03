export interface SpecialtyFAQ {
  question: string;
  answer: string;
}

export interface Specialty {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: string; // Lucide icon mapping
  symptoms: string[];
  whenToSeekHelp: string;
  howTherapyWorks: string;
  faqs: SpecialtyFAQ[];
}

export const specialties: Specialty[] = [
  {
    slug: 'ansiedade',
    title: 'Ansiedade',
    shortDescription: 'Acolhimento e ferramentas práticas para acalmar a mente, compreender os gatilhos e recuperar o equilíbrio no seu dia a dia.',
    longDescription: 'A ansiedade é uma resposta natural do corpo frente a desafios, porém, quando se torna persistente e desproporcional, pode comprometer sua qualidade de vida, relacionamentos e saúde física. O processo terapêutico oferece um espaço seguro para investigar a raiz desses sintomas e desenvolver mecanismos saudáveis de enfrentamento.',
    iconName: 'Brain',
    symptoms: [
      'Preocupação excessiva e pensamentos acelerados de difícil controle.',
      'Sintomas físicos frequentes como taquicardia, tensão muscular e falta de ar.',
      'Dificuldade para dormir ou sensação de cansaço constante.',
      'Evitação de situações sociais ou profissionais por insegurança ou medo.'
    ],
    whenToSeekHelp: 'Se você percebe que a preocupação com o futuro impede sua concentração no presente, gera desgaste físico ou causa episódios de pânico, a terapia pode ajudar a restabelecer o equilíbrio emocional.',
    howTherapyWorks: 'Trabalhamos na identificação dos pensamentos automáticos e comportamentos que alimentam o ciclo de ansiedade. Ensinamos técnicas de regulação emocional e mindfulness, ajudando você a se posicionar de forma mais segura perante seus próprios pensamentos.',
    faqs: [
      {
        question: 'A terapia para ansiedade gera resultados em quanto tempo?',
        answer: 'O tempo varia para cada indivíduo, mas muitos pacientes relatam alívio e maior clareza mental nas primeiras semanas ao aplicar as técnicas de regulação e autoconhecimento ensinadas nas sessões.'
      },
      {
        question: 'É possível curar a ansiedade por completo?',
        answer: 'O objetivo da terapia não é eliminar as emoções (a ansiedade tem uma função adaptativa), mas sim transformá-la para que ela não controle suas decisões, deixando de causar sofrimento e limitação.'
      }
    ]
  },
  {
    slug: 'depressao',
    title: 'Depressão',
    shortDescription: 'Um suporte terapêutico humanizado para resgatar o sentido, a vitalidade e a conexão interna em momentos de profunda dor emocional.',
    longDescription: 'A depressão vai muito além de uma tristeza passageira. Trata-se de um estado que afeta a vitalidade, a percepção de si mesmo e a capacidade de sentir prazer no cotidiano. No tratamento, buscamos um acolhimento empático que permita ao paciente reencontrar sua própria força de forma gradual e segura.',
    iconName: 'Heart',
    symptoms: [
      'Tristeza profunda ou sentimento de vazio na maior parte do dia.',
      'Perda de interesse ou prazer em atividades que antes eram prazerosas.',
      'Alterações marcantes no sono (insônia ou hipersonia) e no apetite.',
      'Sentimento persistente de culpa, inutilidade ou desamparo.'
    ],
    whenToSeekHelp: 'Quando a apatia e o desânimo se tornam companheiros diários, dificultando a realização de tarefas básicas ou corroendo suas esperanças em relação ao futuro.',
    howTherapyWorks: 'A terapia cria uma ponte de reconexão consigo mesmo. Investigamos os fatores biopsicossociais envolvidos, incentivamos pequenas ações diárias que resgatam o bem-estar e trabalhamos a reestruturação cognitiva para diminuir a autocrítica severa.',
    faqs: [
      {
        question: 'A psicoterapia substitui o uso de medicamentos?',
        answer: 'Em casos moderados a graves, a terapia atua de forma complementar ao tratamento psiquiátrico (medicamentoso). O acompanhamento multidisciplinar costuma trazer os melhores resultados.'
      },
      {
        question: 'Como a terapia ajuda se eu não tenho forças para falar?',
        answer: 'O terapeuta respeita o seu tempo e ritmo. A sessão pode começar com pequenos passos, silêncios acolhedores e a construção de um vínculo seguro que aponte caminhos sem pressões.'
      }
    ]
  },
  {
    slug: 'burnout',
    title: 'Burnout & Estresse Profissional',
    shortDescription: 'Estratégias para identificar o esgotamento no trabalho, definir limites saudáveis e restabelecer o equilíbrio entre a vida profissional e pessoal.',
    longDescription: 'A Síndrome de Burnout é o resultado do estresse crônico associado ao ambiente de trabalho que não foi gerenciado com sucesso. Ela se caracteriza pelo esgotamento físico e mental, distanciamento emocional da profissão e sentimentos de ineficácia.',
    iconName: 'Activity',
    symptoms: [
      'Exaustão emocional extrema e falta de energia crônica para trabalhar.',
      'Sentimentos de cinismo ou negatividade em relação ao próprio trabalho.',
      'Sensação de ineficácia e falta de realização profissional.',
      'Dores de cabeça constantes, distúrbios digestivos e imunidade baixa.'
    ],
    whenToSeekHelp: 'Quando o domingo à noite se torna fonte de angústia severa, o trabalho parece um peso insuportável e a sua saúde física começa a dar sinais de colapso devido à sobrecarga.',
    howTherapyWorks: 'Trabalhamos na reavaliação da sua relação com o trabalho, no desenvolvimento de habilidades para colocar limites, na gestão do estresse diário e na readequação da rotina para incluir autocuidado e descanso real.',
    faqs: [
      {
        question: 'Preciso pedir demissão para me recuperar do Burnout?',
        answer: 'Nem sempre. A terapia foca em mudar sua relação com o trabalho, gerenciar limites e criar estratégias de enfrentamento. Caso haja necessidade de mudanças de carreira ou afastamento médico, isso será discutido e avaliado com cautela.'
      },
      {
        question: 'Como diferenciar estresse comum de Burnout?',
        answer: 'O estresse costuma passar após um período de descanso ou férias. O Burnout persiste mesmo após o repouso e vem acompanhado de um distanciamento afetivo e despersonalização em relação ao trabalho.'
      }
    ]
  },
  {
    slug: 'relacionamentos',
    title: 'Dificuldades nos Relacionamentos',
    shortDescription: 'Desenvolvimento de inteligência emocional e comunicação assertiva para nutrir vínculos mais saudáveis, equilibrados e satisfatórios.',
    longDescription: 'Relacionar-se é uma arte complexa. Vínculos amorosos, familiares ou profissionais podem ser fontes de profundo afeto, mas também de conflito e mágoa. A terapia ajuda a decifrar padrões repetitivos de comportamento e a construir pontes de comunicação honesta.',
    iconName: 'Users',
    symptoms: [
      'Conflitos frequentes e dificuldade de chegar a consensos.',
      'Padrões repetitivos de escolher parceiros que causam sofrimento.',
      'Dificuldade em expressar sentimentos ou impor limites claros.',
      'Medo intenso da rejeição, do abandono ou da entrega afetiva.'
    ],
    whenToSeekHelp: 'Se você sente que suas conexões com outras pessoas trazem mais desgaste do que apoio, ou se percebe que repete dinâmicas tóxicas sem saber como rompê-las.',
    howTherapyWorks: 'Analisamos seu histórico relacional e estilo de apego. Desenvolvemos ferramentas de comunicação não-violenta e de regulação emocional para que suas reações sejam pautadas na escolha consciente, e não no piloto automático da reatividade.',
    faqs: [
      {
        question: 'A terapia é focada apenas em casal?',
        answer: 'Não. Essa terapia é focada no indivíduo e em como ele se posiciona em seus diversos relacionamentos (familiares, amorosos, de amizade e profissionais).'
      },
      {
        question: 'Como a terapia individual melhora minhas relações?',
        answer: 'Ao se compreender melhor, você passa a reconhecer suas projeções, desenvolve empatia, aprende a impor limites e a se comunicar sem agressividade ou submissão, transformando a dinâmica ao seu redor.'
      }
    ]
  },
  {
    slug: 'autoestima',
    title: 'Autoestima & Autoconfiança',
    shortDescription: 'Criação de uma autocrítica gentil, desconstrução de padrões de perfeccionismo e fortalecimento do seu valor intrínseco.',
    longDescription: 'A autoestima não se resume a gostar da própria imagem no espelho; trata-se de como avaliamos nosso valor, nossa capacidade e nossa dignidade para receber afeto e sucesso. Uma baixa autoestima pode limitar severamente suas escolhas de vida.',
    iconName: 'Sparkles',
    symptoms: [
      'Crítica interna implacável e foco exclusivo em defeitos ou falhas.',
      'Tendência exagerada ao perfeccionismo e medo paralisante de errar.',
      'Dificuldade em aceitar elogios e sensação frequente de inadequação.',
      'Colocar a necessidade dos outros sempre à frente das suas próprias.'
    ],
    whenToSeekHelp: 'Quando você sabota suas próprias oportunidades de crescimento (na carreira ou no amor) por acreditar que não é bom o suficiente, ou quando vive buscando aprovação externa constante.',
    howTherapyWorks: 'Desconstruímos as crenças limitantes formadas ao longo da sua história. Trabalhamos a autocompaixão, identificamos seus reais pontos fortes e treinamos atitudes de autoafirmação no seu cotidiano.',
    faqs: [
      {
        question: 'É possível mudar a autoimagem depois de adulto?',
        answer: 'Perfeitamente. A autoestima é maleável. Por meio da neuroplasticidade e de novos aprendizados emocionais em terapia, você reconstrói a visão sobre si mesmo e aprende a valorizar suas conquistas.'
      }
    ]
  },
  {
    slug: 'luto',
    title: 'Luto & Perdas',
    shortDescription: 'Um espaço de acolhimento respeitoso para transitar pela dor da perda, honrar sua história e reorganizar a vida com suavidade.',
    longDescription: 'O luto é um processo natural diante do rompimento de um vínculo significativo — seja pela morte de alguém querido, pelo fim de um casamento ou pela perda de um projeto de vida. Passar por esse deserto acompanhado de escuta profissional qualificada evita o congelamento da dor.',
    iconName: 'Compass',
    symptoms: [
      'Tristeza intensa e sensação de desorientação diante da ausência.',
      'Dificuldade extrema em aceitar a nova realidade.',
      'Sentimento de culpa ou raiva não expressos sobre a perda.',
      'Apatia generalizada ou isolamento persistente de amigos e familiares.'
    ],
    whenToSeekHelp: 'Se o tempo passa e a dor da perda permanece tão avassaladora que impede você de realizar atividades diárias ou de encontrar novos momentos de alegria.',
    howTherapyWorks: 'Não tentamos apagar a dor ou acelerar o processo. Validamos as emoções, ajudamos a ressignificar a ausência, integramos a perda à sua história de vida e apoiamos a reconstrução de um cotidiano funcional.',
    faqs: [
      {
        question: 'Quanto tempo dura o luto normal?',
        answer: 'O luto não tem prazo fixo. O importante não é a duração cronológica, mas se você está conseguindo processar as fases da perda ou se está paralisado nelas, o que caracteriza o luto complicado.'
      }
    ]
  },
  {
    slug: 'transtornos-alimentares',
    title: 'Transtornos Alimentares & Imagem Corporal',
    shortDescription: 'Relação pacífica com a comida e com o próprio corpo através de um acompanhamento terapêutico integrado e compassivo.',
    longDescription: 'A comida e a imagem corporal podem se tornar fontes de obsessão e sofrimento quando há uma desconexão interna profunda. O foco do tratamento é restaurar a paz com o corpo e com os hábitos alimentares de forma integrada.',
    iconName: 'Shield',
    symptoms: [
      'Obsessão por calorias, peso, dietas restritivas ou imagem corporal.',
      'Episódios de compulsão alimentar seguidos por severo sentimento de culpa.',
      'Distorção da imagem no espelho (nunca se sentir satisfeito ou adequado).',
      'Uso da comida como única via de regulação para ansiedade ou tristeza.'
    ],
    whenToSeekHelp: 'Quando a alimentação e o medo de engordar passam a ditar sua agenda, impedem encontros sociais e geram sofrimento psíquico ou riscos à saúde física.',
    howTherapyWorks: 'Investigamos o papel emocional que o controle ou a falta de controle alimentar desempenha em sua vida. Trabalhamos na aceitação corporal, na regulação das emoções e na desmistificação de regras alimentares rígidas.',
    faqs: [
      {
        question: 'A terapia ajuda a emagrecer?',
        answer: 'O foco da psicoterapia é restaurar sua saúde mental e uma relação equilibrada com a comida e o corpo. A regulação do peso pode ser uma consequência natural do equilíbrio emocional, mas não é a meta principal do tratamento.'
      }
    ]
  },
  {
    slug: 'estresse',
    title: 'Gestão do Estresse',
    shortDescription: 'Ferramentas de autorregulação biológica e mental para enfrentar pressões cotidianas com resiliência e clareza.',
    longDescription: 'O estresse excessivo afeta a nossa biologia, diminuindo a imunidade e prejudicando as decisões. Na terapia, buscamos restabelecer o equilíbrio do sistema nervoso e redefinir prioridades de vida.',
    iconName: 'Sun',
    symptoms: [
      'Irritabilidade constante, impaciência e oscilações bruscas de humor.',
      'Dores físicas difusas, especialmente nos ombros, costas e mandíbula.',
      'Dificuldade extrema de concentração e falhas frequentes de memória.',
      'Sensação permanente de urgência e sobrecarga generalizada.'
    ],
    whenToSeekHelp: 'Quando as pequenas demandas do dia a dia geram irritação desproporcional ou quando o estresse começa a cobrar um preço alto na sua saúde corporal e familiar.',
    howTherapyWorks: 'Treinamos técnicas de biofeedback e respiração, reestruturamos a organização pessoal e trabalhamos na mudança de crenças de controle absoluto que geram exaustão crônica.',
    faqs: [
      {
        question: 'O estresse pode ser curado rápido?',
        answer: 'Pequenas mudanças no estilo de vida e nas reações mentais às pressões já trazem alívio rápido. A terapia apoia a manutenção desse novo estilo de forma duradoura.'
      }
    ]
  },
  {
    slug: 'autoconhecimento',
    title: 'Autoconhecimento & Desenvolvimento',
    shortDescription: 'Uma jornada profunda de reflexão para compreender sua história, descobrir seus valores reais e criar uma vida autêntica.',
    longDescription: 'Você não precisa estar em sofrimento extremo para fazer terapia. A busca por autoconhecimento é uma escolha ativa de quem deseja entender seus padrões de vida, clarear seus valores e tomar decisões alinhadas à sua essência.',
    iconName: 'Compass',
    symptoms: [
      'Desejo de entender por que repete certos comportamentos indesejados.',
      'Sensação de insatisfação existencial generalizada ou falta de rumo.',
      'Necessidade de tomar decisões importantes na carreira ou vida pessoal.',
      'Busca por maior inteligência emocional e maturidade psicológica.'
    ],
    whenToSeekHelp: 'A qualquer momento em que você sinta necessidade de olhar para dentro, organizar seus pensamentos com auxílio profissional neutro e planejar novas etapas de vida.',
    howTherapyWorks: 'Realizamos perguntas reflexivas, resgatamos sua história familiar para entender suas lentes interpretativas e desenhamos um mapa de valores para guiar suas ações futuras.',
    faqs: [
      {
        question: 'Qual a diferença entre autoconhecimento e tratamento de transtorno?',
        answer: 'O tratamento de transtorno foca em reduzir o sofrimento clínico debilitante. O autoconhecimento foca na expansão de potencialidades, reflexão existencial e refinamento das escolhas de vida.'
      }
    ]
  }
];
