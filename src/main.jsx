import {startAccess} from "./access-standard.js";
import{StrictMode}from"react";import{createRoot}from"react-dom/client";import App,{supabase} from"./App.jsx";import"./styles.css";import"./forte-ui.css";if(supabase)startAccess({client:supabase,app:"carga-direta",content:document.getElementById("root")}).ready.then(()=>createRoot(document.getElementById("root")).render(<StrictMode><App/></StrictMode>));
else document.getElementById("root").textContent="Conexão não configurada. Contate o administrador.";


