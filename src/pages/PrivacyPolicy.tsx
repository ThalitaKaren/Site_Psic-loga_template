import React from 'react';
import { SEO } from '../components/shared/SEO';

export const PrivacyPolicy: React.FC = () => {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Início',
        'item': 'https://drahelenamendes.com.br'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Política de Privacidade',
        'item': 'https://drahelenamendes.com.br/politica-de-privacidade'
      }
    ]
  };

  return (
    <>
      <SEO
        title="Política de Privacidade & LGPD"
        description="Termos de segurança de dados e privacidade sob a regulamentação da LGPD (Lei Geral de Proteção de Dados) da clínica Dra. Helena Mendes."
        canonicalPath="/politica-de-privacidade"
        schemaJson={breadcrumbSchema}
      />

      <div className="pt-32 pb-24 bg-background text-charcoal min-h-screen text-left">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-charcoal mb-8">
            Política de Privacidade & Proteção de Dados (LGPD)
          </h1>
          <div className="h-[2px] w-20 bg-primary/40 rounded mb-10" />

          <div className="prose prose-slate max-w-none text-charcoal-light font-light leading-relaxed space-y-6">
            <p>
              Esta política estabelece o compromisso do consultório clínico de <strong>Dra. Helena Mendes (CRP 06/123456)</strong> com a privacidade, confidencialidade e segurança dos dados pessoais coletados de seus pacientes e usuários do site, em conformidade estrita com a <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD)</strong> e as normativas do <strong>Conselho Federal de Psicologia (CFP)</strong>.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-charcoal pt-6">1. Coleta de Informações no Formulário</h2>
            <p>
              Os dados coletados no formulário de agendamento de consultas (Nome, E-mail, Telefone, Período de preferência e Especialidade de interesse) são preenchidos voluntariamente pelo usuário. 
            </p>
            <p>
              Essas informações possuem como finalidade única e exclusiva o contato preliminar para verificar compatibilidade de horários, responder a dúvidas administrativas e agendar a primeira sessão terapêutica.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-charcoal pt-6">2. Sigilo Profissional e Armazenamento</h2>
            <p>
              Em conformidade com o <strong>Art. 9º do Código de Ética Profissional do Psicólogo</strong>, é dever resguardar o sigilo sobre as informações recebidas do paciente. Os dados do formulário de contato são tratados de forma confidencial e restrita.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Não compartilhamos, vendemos ou cedemos dados pessoais a quaisquer terceiros sob nenhuma circunstância.</li>
              <li>As informações enviadas pelo formulário eletrônico chegam diretamente em um canal seguro e exclusivo gerenciado pela psicóloga e sua equipe administrativa autorizada.</li>
              <li>Prontuários clínicos e anotações técnicas das sessões são gerados e armazenados offline ou em plataformas específicas de prontuário eletrônico em conformidade com as exigências do CFP, de forma totalmente desvinculada deste site público.</li>
            </ul>

            <h2 className="font-serif text-2xl font-semibold text-charcoal pt-6">3. Cookies e Navegação</h2>
            <p>
              Este site pode utilizar cookies mínimos necessários para garantir a navegação estável e analisar o tráfego do site de forma anônima (como contagem de visitas e tempo de permanência), sem monitorar hábitos pessoais ou coletar dados identificáveis de rastreamento de anúncios.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-charcoal pt-6">4. Direitos do Titular dos Dados</h2>
            <p>
              De acordo com o Artigo 18 da LGPD, você tem o direito de solicitar a qualquer momento:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmação da existência de tratamento de seus dados.</li>
              <li>Acesso aos dados pessoais mantidos por nós.</li>
              <li>Correção de dados incompletos ou desatualizados.</li>
              <li>Eliminação de dados pessoais tratados com o seu consentimento prévio.</li>
            </ul>
            <p>
              Para exercer qualquer um desses direitos, envie uma mensagem de solicitação para o e-mail: <a href="mailto:contato@drahelenamendes.com.br" className="text-primary hover:underline">contato@drahelenamendes.com.br</a>.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-charcoal pt-6">5. Atualizações desta Política</h2>
            <p>
              Reservamo-nos o direito de modificar esta política de privacidade periodicamente para adequação legal ou atualização tecnológica. A data da última atualização será listada no rodapé deste documento.
            </p>

            <div className="pt-8 border-t border-sand-200 text-xs text-muted-foreground">
              Última atualização: 02 de Julho de 2026.
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
