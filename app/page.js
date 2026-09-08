export default function Home() {
  return (
    <div>
      {/* Navegação */}
      <header>
        <div className="logo font-serif">
          7 RAÍZES <span>| PISO NOBRE</span>
        </div>
        <nav>
          <a href="#servicos">Serviços</a>
          <a href="#transformacao">Transformação</a>
          <a href="#portfolio">Projetos</a>
          <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">WhatsApp</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#655E5A' }}>
            Cuidado Técnico • Acabamento Impecável
          </span>
          <h1 className="font-serif">A Arte do Piso Nobre</h1>
          <p>
            Recuperação, restauração e revitalização premium de pisos de madeira. Devolvemos o valor e a sofisticação ao seu ambiente.
          </p>
          <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer" className="btn-primary">
            Solicitar Avaliação
          </a>
        </div>
        <div>
          <img src="/imagens/Herói.jpg" alt="Piso Nobre de Madeira" className="hero-img" />
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-secondary">
        <div className="section-padding">
          <h2 className="section-title font-serif">Serviços Especializados</h2>
          <div className="grid-3">
            <div style={{ background: '#FAF8F5', padding: '30px', border: '1px solid #E8E2D9' }}>
              <h3 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '10px' }}>01. Raspagem Técnica</h3>
              <p style={{ fontSize: '0.85rem', color: '#655E5A' }}>Remoção controlada de resíduos antigos e nivelamento preciso da madeira.</p>
            </div>
            <div style={{ background: '#FAF8F5', padding: '30px', border: '1px solid #E8E2D9' }}>
              <h3 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '10px' }}>02. Revitalização</h3>
              <p style={{ fontSize: '0.85rem', color: '#655E5A' }}>Tratamento dos veios e tonalidades para restaurar o brilho e a presença natural.</p>
            </div>
            <div style={{ background: '#FAF8F5', padding: '30px', border: '1px solid #E8E2D9' }}>
              <h3 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '10px' }}>03. Acabamento Nobre</h3>
              <p style={{ fontSize: '0.85rem', color: '#655E5A' }}>Aplicação de resinas e vernizes de alta resistência com Toque de Ouro/Acetinado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Antes e Depois */}
      <section id="transformacao" className="section-padding">
        <h2 className="section-title font-serif">A Transformação do Piso</h2>
        <div className="grid-2">
          <div>
            <img src="/imagens/antes-piso-01.jpg" alt="Antes" className="card-img" />
            <div className="card-caption">Antes — Estado Inicial do Piso</div>
          </div>
          <div>
            <img src="/imagens/depois-piso-01.jpg" alt="Depois" className="card-img" />
            <div className="card-caption" style={{ color: '#5A4234', fontWeight: 'bold' }}>Depois — Restauração Concluída</div>
          </div>
        </div>
      </section>

      {/* Portfólio */}
      <section id="portfolio" className="bg-secondary">
        <div className="section-padding">
          <h2 className="section-title font-serif">A Madeira em Diferentes Espaços</h2>
          <div className="grid-3">
            <div>
              <img src="/imagens/escada-01.jpg" alt="Escada de Madeira" className="card-img" />
              <div className="card-caption">Escadas e Degraus</div>
            </div>
            <div>
              <img src="/imagens/Ambientes.jpg" alt="Ambiente de Luxo" className="card-img" />
              <div className="card-caption">Salas e Ambientes Internos</div>
            </div>
            <div>
              <img src="/imagens/depois-piso-02.jpg" alt="Piso Trabalhado" className="card-img" />
              <div className="card-caption">Tacos e Assoalhos Trabalhados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer style={{ padding: '40px', textAlign: 'center', borderTop: '1px solid #E8E2D9', fontSize: '0.8rem', color: '#655E5A' }}>
        © 7 Raízes Piso Nobre — Todos os direitos reservados.
      </footer>
    </div>
  );
        }
