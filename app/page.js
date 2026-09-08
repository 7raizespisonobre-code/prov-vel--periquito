const imagens = {
  hero: "/imagens/Herói.jpg",

  antes: [
    "/imagens/antes-piso-01.jpg",
    "/imagens/antes-piso-02.jpg",
  ],

  depois: [
    "/imagens/depois-piso.jpg",
    "/imagens/depois-piso-01.jpg",
    "/imagens/depois-piso-02.jpg",
  ],

  ambientes: [
    "/imagens/ambiente-01.jpg",
    "/imagens/ambiente-02.jpg",
    "/imagens/Ambientes.jpg",
  ],

  escadas: [
    "/imagens/escada-01.jpg",
    "/imagens/escada-02.jpg",
  ],

  detalhes: [
    "/imagens/detalhes-madeira-02.jpg",
  ],
};

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-image">
          <img
            src={imagens.hero}
            alt="Piso de madeira restaurado em ambiente sofisticado"
          />
        </div>

        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="eyebrow">7 RAÍZES • PISO NOBRE</p>

          <h1>Seu piso pode voltar a impressionar.</h1>

          <p className="hero-text">
            Raspagem, restauração, revitalização e acabamento de pisos de
            madeira com técnica, cuidado e atenção aos detalhes.
          </p>

          <div className="hero-actions">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              Solicitar avaliação
            </a>

            <a href="#servicos" className="button button-secondary">
              Conhecer serviços
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="intro section">
        <div className="section-heading">
          <p className="eyebrow">MADEIRA DE VERDADE</p>

          <h2>
            Madeira não é apenas acabamento.
            <br />
            É parte do ambiente.
          </h2>

          <p>
            Um piso de madeira bem cuidado transforma a percepção de um espaço.
            Nosso trabalho é recuperar essa presença, respeitando a madeira,
            seus detalhes e sua história.
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="services section">
        <div className="section-heading">
          <p className="eyebrow">O QUE FAZEMOS</p>

          <h2>Cuidado técnico para madeira de verdade.</h2>
        </div>

        <div className="service-grid">
          <article className="service-card">
            <span>01</span>

            <h3>Raspagem</h3>

            <p>
              Remoção controlada de camadas antigas para preparar a madeira
              para uma nova etapa.
            </p>
          </article>

          <article className="service-card">
            <span>02</span>

            <h3>Revitalização</h3>

            <p>
              Recuperação da aparência da madeira, valorizando textura,
              desenho e presença do piso.
            </p>
          </article>

          <article className="service-card">
            <span>03</span>

            <h3>Acabamento</h3>

            <p>
              Proteção e acabamento pensados para devolver beleza e valor ao
              ambiente.
            </p>
          </article>

          <article className="service-card">
            <span>04</span>

            <h3>Áreas externas</h3>

            <p>
              Tratamento e revitalização de superfícies de madeira em áreas
              externas e decks.
            </p>
          </article>
        </div>
      </section>

      {/* ANTES E DEPOIS */}
      <section className="transformation section">
        <div className="section-heading">
          <p className="eyebrow">A TRANSFORMAÇÃO</p>

          <h2>
            Antes.
            <br />
            Depois.
            <br />
            A diferença aparece.
          </h2>

          <p>
            Um piso desgastado pode recuperar sua presença. O resultado está
            nos detalhes da madeira e na transformação do ambiente.
          </p>
        </div>

        <div className="before-after-grid">
          <article className="before-after-card">
            <div className="before-after-image">
              <img
                src={imagens.antes[0]}
                alt="Piso de madeira antes da restauração"
              />
            </div>

            <div className="before-after-content">
              <span>01 • ANTES</span>

              <h3>O piso como encontramos.</h3>

              <p>
                Marcas, desgaste e perda de acabamento fazem parte da história
                de muitos pisos.
              </p>
            </div>
          </article>

          <article className="before-after-card">
            <div className="before-after-image">
              <img
                src={imagens.depois[0]}
                alt="Piso de madeira depois da restauração"
              />
            </div>

            <div className="before-after-content">
              <span>02 • DEPOIS</span>

              <h3>Madeira novamente em destaque.</h3>

              <p>
                O acabamento devolve ao ambiente a presença e a beleza que a
                madeira pode oferecer.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* PROJETOS */}
      <section className="portfolio section">
        <div className="section-heading">
          <p className="eyebrow">PROJETOS REALIZADOS</p>

          <h2>Madeira em diferentes espaços.</h2>

          <p>
            Cada ambiente apresenta desafios diferentes. O trabalho precisa
            respeitar a madeira e o espaço onde ela está.
          </p>
        </div>

        <div className="portfolio-grid">
          <article className="portfolio-large">
            <img
              src={imagens.depois[1]}
              alt="Piso de madeira restaurado"
            />
          </article>

          <article>
            <img
              src={imagens.ambientes[0]}
              alt="Ambiente com piso de madeira"
            />
          </article>

          <article>
            <img
              src={imagens.escadas[0]}
              alt="Escada de madeira revitalizada"
            />
          </article>

          <article>
            <img
              src={imagens.depois[2]}
              alt="Detalhe de piso de madeira restaurado"
            />
          </article>

          <article>
            <img
              src={imagens.ambientes[1]}
              alt="Ambiente com madeira restaurada"
            />
          </article>
        </div>
      </section>

      {/* ESCADAS */}
      <section className="feature section">
        <div className="feature-image">
          <img
            src={imagens.escadas[1]}
            alt="Escada de madeira revitalizada"
          />
        </div>

        <div className="feature-content">
          <p className="eyebrow">DETALHES QUE FAZEM DIFERENÇA</p>

          <h2>A madeira continua sendo o protagonista.</h2>

          <p>
            Pisos, escadas e outros elementos de madeira podem ganhar uma nova
            presença quando recebem o cuidado adequado.
          </p>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Falar sobre meu projeto →
          </a>
        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="authority section">
        <div className="section-heading">
          <p className="eyebrow">POR QUE 7 RAÍZES?</p>

          <h2>Um trabalho que começa pelo cuidado.</h2>
        </div>

        <div className="authority-grid">
          <div>
            <strong>01</strong>

            <h3>Olhar para a madeira</h3>

            <p>
              Cada piso tem características próprias. O processo precisa
              respeitar essa realidade.
            </p>
          </div>

          <div>
            <strong>02</strong>

            <h3>Execução cuidadosa</h3>

            <p>
              Preparação, raspagem e acabamento fazem parte de um mesmo
              processo.
            </p>
          </div>

          <div>
            <strong>03</strong>

            <h3>Resultado que aparece</h3>

            <p>
              O objetivo é que a transformação seja percebida assim que você
              entra no ambiente.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta section">
        <div>
          <p className="eyebrow">SEU PISO MERECE UMA NOVA HISTÓRIA</p>

          <h2>
            Seu piso pode estar mais perto de uma nova vida do que parece.
          </h2>

          <p>
            Envie algumas fotos do seu piso pelo WhatsApp e conte um pouco
            sobre o ambiente. A partir disso, podemos avaliar o projeto.
          </p>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            Enviar fotos pelo WhatsApp
          </a>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="footer">
        <div>
          <strong>7 RAÍZES</strong>
          <span>PISO NOBRE</span>
        </div>

        <p>Raspagem • Revitalização • Acabamento</p>
      </footer>
    </main>
  );
        }
