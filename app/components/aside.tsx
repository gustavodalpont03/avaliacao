import React from "react";

export default function Aside() {
    return (
        <ul className="w-64 bg-slate-100">
            <li> <a href="/admin/">Home</a> </li>
            <li> <a href="/admin/monitor/new">Cadastrar Monitor</a> </li>
            <li> <a href="/admin/monitor">Listar Monitor</a> </li>
            <li> <a href="/admin/director/new">Cadastrar Diretores</a> </li>
            <li> <a href="/admin/director">Listar Diretores</a> </li>
        </ul>
    )
}