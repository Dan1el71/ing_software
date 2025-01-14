import { Router } from "express";
import peliculaCarteleraControlador from "../controller/PeliculaCarteleraControlador";

class PeliculaCarteleraRuta {
    public apiRutaPeliculaCartelera: Router;

    constructor(){
        this.apiRutaPeliculaCartelera = Router();
        this.misRutas();
    }

    private misRutas(): void{
        this.apiRutaPeliculaCartelera.get("/getall", peliculaCarteleraControlador.dameCarteleras);
        this.apiRutaPeliculaCartelera.get("/getall/:idPeliculaCartelera", peliculaCarteleraControlador.dameUna);
        this.apiRutaPeliculaCartelera.post("/addcito", peliculaCarteleraControlador.cogeTuCartelera);
        this.apiRutaPeliculaCartelera.delete("/delete/:idPeliculaCartelera", peliculaCarteleraControlador.borraTuCartelera);
        this.apiRutaPeliculaCartelera.delete("/borreloSinMiedo", peliculaCarteleraControlador.borraTodo);
        this.apiRutaPeliculaCartelera.put("/update", peliculaCarteleraControlador.actualizaTuCartelera);
        this.apiRutaPeliculaCartelera.put("/updateMasivo", peliculaCarteleraControlador.actualizaTuCarteleraMasivo);
        this.apiRutaPeliculaCartelera.put("/updateMasivoCine", peliculaCarteleraControlador.actualizaTuCarteleraMasivoCine);
        this.apiRutaPeliculaCartelera.get("/paginacion", peliculaCarteleraControlador.paginacionDeCarteleras);
    }
}

const peliculaCarteleraRuta = new PeliculaCarteleraRuta();
export default peliculaCarteleraRuta.apiRutaPeliculaCartelera;