// Css
import './Experiencia.css'


function Experiencia() {

    const experiencias = [
        {
            cargo: "Jovem Aprendiz, Desenvolvedor Web",
            empresa: "Hoepers",
            periodo: "Out/2023 – Out/2025",
            atividades: [
                "Desenvolvimento e manutenção de interfaces web com React e Material UI, usando componentes reutilizáveis.",
                "Integração do front-end com APIs REST fornecidas pela equipe de backend.",
                "Correção de bugs e melhoria contínua da experiência do usuário.",
                "Trabalho com equipes multidisciplinares na entrega de novas funcionalidades dentro do prazo.",
            ]
        },
        {
            cargo: "Auxiliar de Suporte Técnico em TI",
            empresa: "Conab",
            periodo: "2026 – atualmente",
            atividades: [
                "Atendimento e resolução de problemas de hardware e software dos usuários.",
                "Instalação e configuração de softwares, computadores e impressoras.",
            ]
        },
    ]

    return (
        <section className="experiencia-section">
            <h1>Experiência</h1>

            <ul className="experiencia-lista">
                {experiencias.map((item) => (
                    <li key={item.empresa} className="experiencia-item">
                        <h2>{item.cargo}</h2>
                        <p className="experiencia-meta">
                            <span className="experiencia-empresa">{item.empresa}</span>
                            <span className="experiencia-periodo">{item.periodo}</span>
                        </p>
                        <ul className="experiencia-atividades">
                            {item.atividades.map((atividade) => (
                                <li key={atividade}>{atividade}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Experiencia