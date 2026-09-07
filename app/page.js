const services = [
  {
    number: "01",
    title: "Raspagem",
    text: "Remoção técnica das camadas desgastadas, preparando a madeira para receber uma nova vida.",
  },
  {
    number: "02",
    title: "Revitalização",
    text: "Recuperação da aparência e da presença da madeira sem esconder sua identidade natural.",
  },
  {
    number: "03",
    title: "Acabamento",
    text: "Proteção e acabamento escolhidos de acordo com o ambiente, uso e resultado desejado.",
  },
  {
    number: "04",
    title: "Escadas & Decks",
    text: "Tratamento especializado para estruturas de madeira internas e áreas externas.",
  },
];

const process = [
  {
    number: "01",
    title: "Avaliação",
    text: "Entendemos o estado atual da madeira e o que pode ser recuperado.",
  },
  {
    number: "02",
    title: "Preparação",
    text: "Cada superfície é preparada para receber o tratamento adequado.",
  },
  {
    number: "03",
    title: "Restauração",
    text: "Executamos a raspagem, correções e etapas necessárias para recuperar a madeira.",
  },
  {
    number: "04",
    title: "Acabamento",
    text: "A última etapa protege a superfície e revela novamente sua beleza.",
  },
];

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="brand">
            <span className="brand-mark">7</span>

            <span className="brand-text">
              <strong>RAÍZES</strong>
              <small>PISO NOBRE</small>
            </span>
          </a>

          <nav className="desktop-nav">
            <a href="#servicos">Serviços</a>
            <a href="#processo">Processo</a>
            <a href="#resultados">Resultados</a>
            <a href="#contato">Contato</a>
          </nav>

          <a href="#contato" className="header-button">
            Solicitar avaliação
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-line" />

        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">
              Especialistas em madeira
            </div>

            <h1>
              A beleza da madeira
              <span>pode voltar a viver.</span>
            </h1>

            <p className="hero-description">
              Raspagem, revitalização e acabamento de pisos de madeira
              realizados com técnica, cuidado e atenção aos detalhes.
            </p>

            <div className="hero-actions">
              <a href="#contato" className="button button-primary">
                Solicitar avaliação
                <span>→</span>
              </a>

              <a href="#resultados" className="button button-ghost">
                Ver resultados
              </a>
            </div>

            <div className="hero-note">
              <span className="gold-dot" />
              Pisos • Assoalhos • Escadas • Decks
            </div>
          </div>

          {/* ESPAÇO PARA FOTO PRINCIPAL */}
          <div className="hero-image-placeholder">
            <div className="placeholder-content">
              <span>7 RAÍZES</span>
              <strong>IMAGEM PRINCIPAL</strong>
              <small>Fotografia real do trabalho</small>
            </div>

            <div className="image-frame-corner top-left" />
            <div className="image-frame-corner bottom-right" />
          </div>
        </div>

        <div className="hero-bottom">
          <div className="container hero-bottom-inner">
            <span>Restauração</span>
            <span>Precisão</span>
            <span>Experiência</span>
            <span>Acabamento</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro section">
        <div className="container intro-grid">
          <div>
            <span className="eyebrow">O valor da madeira</span>

            <h2>
              Nem todo piso precisa
              <span>ser substituído.</span>
            </h2>
          </div>

          <div className="intro-text">
            <p>
              A madeira envelhece. Ganha marcas, perde brilho, acumula
              camadas e sofre com os anos de uso.
            </p>

            <p>
              Mas, quando sua estrutura ainda permite recuperação, existe
              outra possibilidade: <strong>restaurar.</strong>
            </p>

            <p>
              Nosso trabalho é revelar novamente aquilo que já existe no
              ambiente.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="services section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Especialidades</span>

              <h2>
                Trabalho técnico.
                <span>Resultado visível.</span>
              </h2>
            </div>

            <p>
              Cada madeira possui características próprias. Por isso,
              tratamos cada trabalho como um projeto, não como um serviço
              genérico.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="card-number">{service.number}</span>

                <div className="service-card-bottom">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>

                <span className="card-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="processo" className="process section">
        <div className="container">
          <div className="process-header">
            <span className="eyebrow">Nosso processo</span>

            <h2>
              Da primeira avaliação
              <span>ao último acabamento.</span>
            </h2>
          </div>

          <div className="process-grid">
            {process.map((item) => (
              <article className="process-item" key={item.number}>
                <span className="process-number">
                  {item.number}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section id="resultados" className="transformation section">
        <div className="container">
          <div className="transformation-header">
            <span className="eyebrow">Transformação</span>

            <h2>
              Do desgaste
              <span>à renovação.</span>
            </h2>

            <p>
              Em breve, esta seção mostrará trabalhos reais da 7 Raízes:
              o estado inicial, o processo e o resultado final.
            </p>
          </div>

          <div className="transformation-grid">
            <div className="photo-placeholder">
              <span>01</span>
              <strong>ANTES</strong>
              <small>Foto real</small>
            </div>

            <div className="photo-placeholder">
              <span>02</span>
              <strong>PROCESSO</strong>
              <small>Foto real</small>
            </div>

            <div className="photo-placeholder photo-placeholder-featured">
              <span>03</span>
              <strong>DEPOIS</strong>
              <small>Foto real</small>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience section">
        <div className="container experience-grid">
          <div className="experience-number">
            <span>7</span>
            <small>RAÍZES</small>
          </div>

          <div className="experience-copy">
            <span className="eyebrow">Experiência que permanece</span>

            <h2>
              Madeira não é apenas
              <span>um acabamento.</span>
            </h2>

            <p>
              É parte da história de um ambiente. Nosso objetivo é
              preservar essa história enquanto recuperamos a presença,
              o acabamento e a beleza da superfície.
            </p>

            <p>
              O resultado não precisa parecer novo.
              <strong> Precisa parecer bem cuidado.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery section">
        <div className="container">
          <div className="gallery-heading">
            <span className="eyebrow">Trabalhos realizados</span>

            <h2>
              Madeira real.
              <span>Resultados reais.</span>
            </h2>
          </div>

          <div className="gallery-grid">
            <div className="gallery-placeholder large">
              <span>01</span>
              <strong>PROJETO</strong>
            </div>

            <div className="gallery-placeholder">
              <span>02</span>
              <strong>PROJETO</strong>
            </div>

            <div className="gallery-placeholder">
              <span>03</span>
              <strong>PROJETO</strong>
            </div>

            <div className="gallery-placeholder wide">
              <span>04</span>
              <strong>PROJETO</strong>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="contact section">
        <div className="contact-glow" />

        <div className="container contact-inner">
          <span className="eyebrow">Seu próximo projeto</span>

          <h2>
            Seu piso merece
            <span>uma nova história.</span>
          </h2>

          <p>
            Envie algumas fotos do ambiente e conte o que você gostaria
            de recuperar. Vamos entender o trabalho e orientar os
            próximos passos.
          </p>

          <a href="#" className="button button-primary contact-button">
            Falar pelo WhatsApp
            <span>→</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="brand-mark">7</span>

            <div>
              <strong>RAÍZES PISO NOBRE</strong>
              <small>
                Raspagem • Revitalização • Acabamento
              </small>
            </div>
          </div>

          <div className="footer-right">
            <span>Madeira. Técnica. Cuidado.</span>
            <span>© 2026 7 Raízes Piso Nobre</span>
          </div>
        </div>
      </footer>
    </main>
  );
        }
