export default function Aside() {
    return (
        <ul className="w-64 bg-slate-100">
            <li> <a href="/admin/">Home</a> </li>
            <li> <a href="/admin/director/new">Cadastrar Diretores</a> </li>
            <li> <a href="/admin/director">Listar Diretores</a> </li>
        </ul>
    )
}