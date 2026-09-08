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
          <a href="#transformacao">Projetos</a>
          <a href="#contato">WhatsApp</a>
        </nav>
      </header>

      {/* Hero Section Split (Layout Idêntico ao Mockup) */}
      <section className="hero-container">
        {/* Lado Esquerdo: Imagem da Madeira / Escada */}
        <div className="hero-bg-image" />

        {/* Lado Direito: Texto Moderno e Botões */}
        <div className="hero-content">
          <h1 className="hero-title font-serif">
            A Arte do<br />Piso Nobre
          </h1>
          <p className="hero-subtitle">
            Recuperação, Restauração e Revitalização Premium de Pisos de Madeira.
          </p>
          <div>
            <a 
              href="https://wa.me/5500000000000" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-main"
            >
              Saiba Mais
            </a>
            <a 
              href="https://wa.me/5500000000000" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-secondary-link"
            >
              Ou fale no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Serviços Especializados */}
      <section id="servicos" className="bg-secondary">
        <div className="section-padding">
          <h2 className="section-title font-serif">Serviços Especializados</h2>
          <div className="grid-3">
            <div style={{ background: '#FAF8F5', padding: '35px', border: '1px solid #E8E2D9' }}>
              <h3 className="font-serif" style={{ fontSize: '1.2rem', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>01. Raspagem Técnica</h3>
              <p style={{ fontSize: '0.85rem', color: '#655E5A', fontWeight: 300 }}>Remoção controlada de resíduos antigos e nivelamento preciso da madeira pura.</p>
            </div>
            <div style={{ background: '#FAF8F5', padding: '35px', border: '1px solid #E8E2D9' }}>
              <h3 className="font-serif" style={{ fontSize: '1.2rem', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>02. Revitalização</h3>
              <p style={{ fontSize: '0.85rem', color: '#655E5A', fontWeight: 300 }}>Tratamento profundo dos veios para restaurar a cor viva e a nobreza natural.</p>
            </div>
            <div style={{ background: '#FAF8F5', padding: '35px', border: '1px solid #E8E2D9' }}>
              <h3 className="font-serif" style={{ fontSize: '1.2rem', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>03. Acabamento Nobre</h3>
              <p style={{ fontSize: '0.85rem', color: '#655E5A', fontWeight: 300 }}>Aplicação de resinas e vernizes de alta resistência com toque suave e acetinado.</p>
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
            <div className="card-caption" style={{ color: '#5A4234', fontWeight: '600' }}>Depois — Restauração Concluída</div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer id="contato" style={{ padding: '50px 20px', textAlign: 'center', borderTop: '1px solid #E8E2D9', fontSize: '0.75rem', color: '#655E5A', letterSpacing: '1px' }}>
        © 7 RAÍZES PISO NOBRE — TODOS OS DIREITOS RESERVADOS.
      </footer>
    </div>
  );
}
