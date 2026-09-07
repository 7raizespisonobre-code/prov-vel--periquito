export default function Home() {
  return (
    <main>
      <header
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 10,
          borderBottom: "1px solid rgba(201, 164, 92, 0.18)",
        }}
      >
        <div
          className="container"
          style={{
            minHeight: "82px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <div>
            <div
              style={{
                color: "var(--gold-light)",
                fontSize: "0.78rem",
                letterSpacing: "0.22em",
                fontWeight: "700",
              }}
            >
              7 RAÍZES
            </div>

            <div
              style={{
                color: "var(--text)",
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                marginTop: "3px",
              }}
            >
              PISO NOBRE
            </div>
          </div>

          <a
            href="#contato"
            className="button"
            style={{
              minHeight: "44px",
              padding: "0 18px",
              fontSize: "0.82rem",
            }}
          >
            Solicitar avaliação
          </a>
        </div>
      </header>

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 75% 35%, rgba(201, 164, 92, 0.13), transparent 32%), linear-gradient(135deg, #0b0b0a 0%, #11100d 55%, #0b0b0a 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            border: "1px solid rgba(201, 164, 92, 0.10)",
            right: "-150px",
            top: "18%",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            border: "1px solid rgba(201, 164, 92, 0.08)",
            right: "-70px",
            top: "28%",
          }}
        />

        <div className="container">
          <div
            style={{
              maxWidth: "780px",
              paddingTop: "80px",
            }}
          >
            <p
              style={{
                margin: "0 0 22px",
                color: "var(--gold-light)",
                fontSize: "0.82rem",
                letterSpacing: "0.25em",
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            >
              Especialistas em pisos de madeira
            </p>

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(3rem, 10vw, 6.8rem)",
                lineHeight: "0.94",
                letterSpacing: "-0.055em",
                fontWeight: "700",
              }}
            >
              Seu piso
              <br />
              <span style={{ color: "var(--gold-light)" }}>
                pode voltar a impressionar.
              </span>
            </h1>

            <p
              style={{
                maxWidth: "650px",
                margin: "30px 0 0",
                color: "var(--text-muted)",
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                lineHeight: "1.75",
              }}
            >
              Raspagem, revitalização e acabamento de pisos de madeira com
              técnica, cuidado e atenção aos detalhes que valorizam o ambiente.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                marginTop: "34px",
              }}
            >
              <a href="#contato" className="button">
                Solicitar avaliação
              </a>

              <a
                href="#servicos"
                className="button button-secondary"
              >
                Conhecer serviços
              </a>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "28px",
                marginTop: "55px",
                paddingTop: "24px",
                borderTop: "1px solid rgba(201, 164, 92, 0.16)",
              }}
            >
              <div>
                <strong
                  style={{
                    display: "block",
                    color: "var(--text)",
                    fontSize: "1rem",
                  }}
                >
                  Madeira
                </strong>
                <span
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.82rem",
                  }}
                >
                  Pisos e assoalhos
                </span>
              </div>

              <div>
                <strong
                  style={{
                    display: "block",
                    color: "var(--text)",
                    fontSize: "1rem",
                  }}
                >
                  Restauração
                </strong>
                <span
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.82rem",
                  }}
                >
                  Recuperação e revitalização
                </span>
              </div>

              <div>
                <strong
                  style={{
                    display: "block",
                    color: "var(--text)",
                    fontSize: "1rem",
                  }}
                >
                  Acabamento
                </strong>
                <span
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.82rem",
                  }}
                >
                  Proteção e valorização
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="section">
        <div className="container">
          <p
            style={{
              margin: "0 0 12px",
              color: "var(--gold-light)",
              fontSize: "0.78rem",
              letterSpacing: "0.2em",
              fontWeight: "700",
              textTransform: "uppercase",
            }}
          >
            O que fazemos
          </p>

          <h2 className="section-title">
            Cuidado técnico para
            <br />
            madeira de verdade.
          </h2>

          <p className="section-subtitle">
            Cada piso possui características, desgastes e necessidades
            diferentes. O trabalho começa entendendo a madeira e termina com
            um acabamento pensado para valorizar o ambiente.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1px",
              marginTop: "48px",
              background: "var(--border)",
              border: "1px solid var(--border)",
            }}
          >
            {[
              {
                number: "01",
                title: "Raspagem",
                text: "Remoção cuidadosa de camadas desgastadas para preparar a madeira.",
              },
              {
                number: "02",
                title: "Revitalização",
                text: "Recuperação visual de pisos que perderam aparência e acabamento.",
              },
              {
                number: "03",
                title: "Acabamento",
                text: "Aplicação de produtos adequados para proteção e resultado final.",
              },
              {
                number: "04",
                title: "Áreas externas",
                text: "Tratamento de decks, escadas e outras estruturas de madeira.",
              },
            ].map((service) => (
              <div
                key={service.number}
                style={{
                  background: "var(--surface)",
                  padding: "32px 26px",
                  minHeight: "220px",
                }}
              >
                <span
                  style={{
                    color: "var(--gold)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                  }}
                >
                  {service.number}
                </span>

                <h3
                  style={{
                    margin: "24px 0 12px",
                    fontSize: "1.35rem",
                    color: "var(--text)",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "var(--text-muted)",
                    fontSize: "0.92rem",
                    lineHeight: "1.7",
                  }}
                >
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="section"
        style={{
          borderTop: "1px solid var(--border)",
          background: "var(--surface)",
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <p
              style={{
                margin: "0 0 14px",
                color: "var(--gold-light)",
                fontSize: "0.78rem",
                letterSpacing: "0.2em",
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            >
              Vamos conversar
            </p>

            <h2 className="section-title">
              Seu piso merece
              <br />
              uma nova história.
            </h2>

            <p
              className="section-subtitle"
              style={{ marginInline: "auto" }}
            >
              Envie algumas fotos do piso e conte um pouco sobre o que você
              precisa. A partir disso, podemos orientar os próximos passos.
            </p>

            <div style={{ marginTop: "32px" }}>
              <a href="#" className="button">
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer
        style={{
          padding: "28px 0",
          borderTop: "1px solid var(--border)",
          background: "var(--background)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
            color: "var(--text-muted)",
            fontSize: "0.78rem",
          }}
        >
          <span>7 Raízes Piso Nobre</span>
          <span>Raspagem • Revitalização • Acabamento</span>
        </div>
      </footer>
    </main>
  );
            }
