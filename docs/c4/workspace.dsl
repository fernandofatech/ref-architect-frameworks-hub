/*
 * Gerado por fernando-moretes/platform como ponto de partida. ESTE arquivo e
 * seu: o rollout so cria se nao existir, nunca sobrescreve.
 *
 * Modelo C4 de ref-architect-frameworks-hub. Renderize em https://c4.home.lab (Structurizr Lite)
 * ou cole em https://structurizr.com/dsl.
 */
workspace "ref-architect-frameworks-hub" "Reference hub for AWS Well-Architected, TOGAF, C4, ArchiMate, DDD, 12-Factor and Cynefin." {

    model {
        usuario = person "Usuário"
        sistema = softwareSystem "ref-architect-frameworks-hub" "Reference hub for AWS Well-Architected, TOGAF, C4, ArchiMate, DDD, 12-Factor and Cynefin." {
            app = container "Aplicação" "Descreva o que roda aqui" "ci-node.yml"
        }
        usuario -> sistema.app "Usa"
    }

    views {
        systemContext sistema "contexto" {
            include *
            autoLayout lr
        }
        container sistema "containers" {
            include *
            autoLayout lr
        }
        styles {
            element "Person" { shape person; background #08427b; color #ffffff }
            element "Software System" { background #1168bd; color #ffffff }
            element "Container" { background #438dd5; color #ffffff }
        }
    }
}
