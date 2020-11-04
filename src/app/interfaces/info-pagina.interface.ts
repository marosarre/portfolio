export interface InfoPagina {
    titulo?:         string;
    email?:          string;
    nombre_corto?:   string;
    pagina_autor?:   string;
    facebook?:       string;
    twitter?:        string;
    instagram?:      string;
    tumblr?:         string;
    equipo_trabajo?: any[];
}

export interface InfoPersonal {
    frase?:      string;
    instagram?: string;
    nombre?:     string;
    subtitulo?:  string;
    url?:        string;
}

export interface ProductosIdx {
    categoria?: string;
    cod?:       string;
    titulo?:    string;
    url?:       string;
}
export interface Productos {
    categoria?:  string;
    desc1?:      string;
    desc2?:      string;
    producto?:   string;
    resumen?:    string;
    subtitulo1?: string;
    subtitulo2?: string;
}