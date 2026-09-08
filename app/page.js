export default function Home() {
  const phone = "551197020771";
  const formattedPhone = "(11) 97020-7711";
  const email = "7raizespisonobre@gmail.com";
  const whatsappUrl = `https://wa.me/${phone}`;

  return (
    <div>
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noreferrer" 
        className="whatsapp-float"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        <span>Atendimento</span>
      </a>

      <header>
        <div className="logo font-serif">
          7 RAÍZES <span>| PISO NOBRE</span>
        </div>
        <nav>
          <a href="#servicos">Serviços</a>
          <a href="#antes-depois">Antes & Depois</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section className="hero-split">
        <div className="hero-left">
          <img 
            src="/imagens/Ambientes.jpg" 
            alt="Piso Nobre Restaurado"
            onError={(e) => { e.target.src = '/imagens/depois-piso-01.jpg'; }}
          />
        </div>

        <div className="hero-right">
          <span style={{ fontSize: '0.7rem', letterSpacing: '2px', color: '#655E5A', marginBottom: '10px', textTransform: 'uppercase' }}>
            Cuidado Técnico • Acabamento Impecável
          </span>
          <h1 className="hero-title font-serif">
            A Arte do<br />Piso Nobre
          </h1>
          <p className="hero-sub">
            Recuperação, Restauração e Revitalização Premium de Pisos de Madeira.
          </p>
          <div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary">
              Agendar Avaliação
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-link">
              Ou Fale no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-sec">
        <div className="section-padding">
          <h2 className="sec-title font-serif">Serviços Especializados</h2>
          <div className="grid-3">
            <div className="card-item">
              <div className="card-body">
                <h3 className="font-serif" style={{ fontSize: '1.1rem', marginBottom: '8px', textTransform: 'uppercase' }}>01. Raspagem Técnica</h3>
                <p style={{ fontSize: '0.85rem', color: '#655E5A', fontWeight: 300 }}>Remoção controlada de resíduos e nivelamento preciso da madeira pura.</p>
              </div>
            </div>

            <div className="card-item">
              <div className="card-body">
                <h3 className="font-serif" style={{ fontSize: '1.1rem', marginBottom: '8px', textTransform: 'uppercase' }}>02. Revitalização</h3>
                <p style={{ fontSize: '0.85rem', color: '#655E5A', fontWeight: 300 }}>Tratamento dos veios para resgatar o tom quente e original da madeira.</p>
              </div>
            </div>

            <div className="card-item">
              <div className="card-body">
                <h3 className="font-serif" style={{ fontSize: '1.1rem', marginBottom: '8px', textTransform: 'uppercase' }}>03. Acabamento Nobre</h3>
                <p style={{ fontSize: '0.85rem', color: '#655E5A', fontWeight: 300 }}>Aplicação de vernizes e resinas de alta proteção com brilho suave e duradouro.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="antes-depois" className="section-padding">
        <h2 className="sec-title font-serif">A Transformação do Piso</h2>
        <div className="grid-2">
          <div className="card-item">
            <img src="/imagens/antes-piso-01.jpg" alt="Antes" className="card-img" />
            <div className="card-body">
              <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#655E5A', letterSpacing: '1px' }}>
                Antes — Estado Inicial com Desgaste
              </p>
            </div>
          </div>

          <div className="card-item">
            <img src="/imagens/depois-piso-01.jpg" alt="Depois" className="card-img" />
            <div className="card-body">
              <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#5A4234', fontWeight: 'bold', letterSpacing: '1px' }}>
                Depois — Restauração e Brilho Nobre
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-sec">
        <div className="section-padding">
          <h2 className="sec-title font-serif">Portfólio de Projetos</h2>
          <div className="grid-3">
            <div className="card-item">
              <img src="/imagens/escada-01.jpg" alt="Escadas" className="card-img" />
              <div className="card-body">
                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#655E5A' }}>Escadas & Degraus</p>
              </div>
            </div>

            <div className="card-item">
              <img src="/imagens/Ambientes.jpg" alt="Salas e Ambientes" className="card-img" />
              <div className="card-body">
                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#655E5A' }}>Salas & Ambientes Sociais</p>
              </div>
            </div>

            <div className="card-item">
              <img src="/imagens/depois-piso-01.jpg" alt="Tacos e Assoalhos" className="card-img" />
              <div className="card-body">
                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#655E5A' }}>Tacos & Assoalhos Especiais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contato" style={{ backgroundColor: '#FAF8F5', borderTop: '1px solid #E8E2D9', padding: '60px 20px 30px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="font-serif" style={{ fontSize: '1.8rem', textTransform: 'uppercase', marginBottom: '15px' }}>
            Entre em Contato
          </h2>
          <p style={{ color: '#655E5A', fontSize: '0.9rem', marginBottom: '30px' }}>
            Solicite um orçamento direto para a restauração do seu ambiente.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginBottom: '40px', fontSize: '0.85rem' }}>
            <div>
              <strong style={{ display: 'block', textTransform: 'uppercase', letterSpacing: '1px', color: '#5A4234' }}>WhatsApp</strong>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" style={{ color: '#231F20', textDecoration: 'none' }}>
                {formattedPhone}
              </a>
            </div>

            <div>
              <strong style={{ display: 'block', textTransform: 'uppercase', letterSpacing: '1px', color: '#5A4234' }}>E-mail</strong>
              <a href={`mailto:${email}`} style={{ color: '#231F20', textDecoration: 'none' }}>
                {email}
              </a>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #E8E2D9', paddingTop: '20px', fontSize: '0.7rem', color: '#655E5A', letterSpacing: '1px' }}>
            © 7 RAÍZES PISO NOBRE — TODOS OS DIREITOS RESERVADOS.
          </div>
        </div>
      </footer>
    </div>
  );
              }
