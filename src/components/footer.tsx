
export default function Footer() {
    return (
        <footer className="text-sm md:text-lg bg-gradient-to-r from-blue-400 to-blue-800 text-white p-2 md:p-5">
            <p>
                Projeto desenvolvido por <em>Amane</em>, para ver mais projetos
                &nbsp;
                <a
                    className="text-yellow-200 hover:text-green-400 transition duration-200 font-bold"
                    target="_blank"
                    href="https://github.com/AmaneBrazil"
                >
                    clique aqui
                </a>
            </p>
            <p className="mt-3">
                © 2024 Amane. Todos os direitos reservados.
            </p>
        </footer>
    );
}