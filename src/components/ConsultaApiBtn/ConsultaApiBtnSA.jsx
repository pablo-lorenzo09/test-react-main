import styles from "./consultaApiBtn.module.css"
import { useState } from "react"
import Swal from "sweetalert2";

export default function ConsultaApiBtn() {


    const [usuarios, setUsuarios] = useState([]);
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(false);


    async function buscarUsuarios() {
        setCarregando(true);
        setErro("");

        try {

            // const resposta = await fetch("https://httpbin.org/status/401");

            // Consultar a API utilizando o metodo fetch --> resposta é uma promise 
            Swal.fire({
                title: "Buscando...",
                didOpen: () => {
                    Swal.showLoading()
                },
            })
            const resposta = await fetch("https://jsonplaceholder.typicode.com/users")
            console.log(resposta)

            if (!resposta.ok) {
                if (resposta.status === 500) {
                    Swal.fire({
                        icon: "error",
                        title: "Erro",
                        text: "O banco de dados ou servidor falhou."
                    });
                    throw new Error("Erro 500: O banco de dados ou servidor falhou.");

                }

                if (resposta.status === 401) {
                    Swal.fire({
                        icon: "error",
                        title: "Erro",
                        text: "Usuário não autorizado!"
                    });
                    throw new Error("Erro 401: Usuário não autorizado.");
                }

                Swal.fire({
                    icon: "error",
                    title: "Erro",
                    text: "O banco de dados ou servidor interno falhou! Tente novamente mais tarde."
                });
                throw new Error(`Erro ${resposta.status}: URL não Encontrada ou inválida.`)


                // 
            }

            const dados = await resposta.json()
            setUsuarios(dados)
            if (dados) {
                Swal.close()
                Swal.fire({
                    title: "Consulta concluida!!",
                    icon: "success"
                });
            }

        }

        catch (error) {
            console.log(error.message)
            // 
             if (erro.message === "Failed to fetch" || !navigation.onLine) {
                Swal.fire({
                    title: "Falha na Conexão",
                    text: "Não foi possível conectar ao servidor. Verifique sua internet.",
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonText: "Tentar Novamente",
                    cancelButtonText: "Ok"
                }).then((result) => {
                    if (result.isConfirmed) buscarUsuarios();
                });
                // 
            } else {
                setErro(error.message)
            }
        }

        finally {
            setCarregando(false);
        }
    }

    return (

        <main className={styles.container}>

            <h1 className={styles.titulo}>Consulta de API</h1>

            <section className={styles.card}>
                {/* Dispara a requisição sob demanda através do handler */}
                <button
                    className={styles.buscarButton}
                    onClick={buscarUsuarios}
                    disabled={carregando}
                >
                    {carregando ? "Buscando..." : "Consultar"}

                </button>

                <h2>Usuários da JSON Placeholder</h2>

                {carregando && <p>Carregando usuários...</p>}
                {erro && <p className={styles.erro}>{erro}</p>}
                {!carregando && !erro && (
                    <ul className={styles.lista}>
                        {/* Para cada item da lista vai retornar uma li completa (h3 e p) */}
                        {usuarios.map((usuario) => (
                            <li key={usuario.id} className={styles.item}>
                                <h3>{usuario.name}</h3>
                                <p>
                                    <strong>E-mail:</strong> {usuario.email}
                                </p>
                                <p>
                                    <strong>Cidade:</strong> {usuario.address.city}
                                </p>
                            </li>
                        ))}

                    </ul>
                )}

            </section>
        </main>
    )
};


// 