import { useState } from "react"

const RedefinirSenhaColaborador = () => {
    const [userName, setUserName] = useState(localStorage.getItem('userName'))
    const [userPass, setUserPass] = useState(localStorage.getItem('userPass'))

    if(userName && userPass) {
        console.log(userName, userPass)
    }

    return (
        <section>
            <h1>Redefinir Senha</h1>
            <div>
                <form>
                    <input type="password" placeholder="Senha Atual"/>
                    <input type="password" placeholder="Nova Senha"/>
                    <input type="password" placeholder="Confirme a Senha"/>
                    <button>Confirmar</button>
                </form>
            </div>
        </section>
    )
}

export default RedefinirSenhaColaborador