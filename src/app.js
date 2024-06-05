import { LitElement,html } from "lit";
import {indiceMasa} from "./webComponents/indiceMasaCorporal.js";
import { imgGaleria} from "./webComponents/galeria.js";
import { tabla } from "./webComponents/tabla.js";

export class InterfazMenu extends LitElement{
    static properties={

    }
    constructor(){
        super()
        this._bindListeners()
    }
    _bindListeners(){
        this._masaClickHandler= this._masaClickHandler.bind(this)
        this._galeriaClickHandler= this._galeriaClickHandler.bind(this)
        this._tablaClickHandler= this._tablaClickHandler.bind(this)
    }
    render(){
        return html`
        <link rel="stylesheet" href="bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
        <div class="interfaz d-flex flex-column position-fixed">
            <nav class="navbar">
                <p class="">filtro</p> 
                <img src="" alt="">
            </nav>
            <div class="menu flex-column gap-2">
                <div>
                    <button class="eje1 btn btn-warning">Ejercicio 1</button>
                </div>
                <div>
                    <button class="eje2 btn btn-warning">Ejercicio 2</button>
                </div>
                <div>
                    <button class="eje3 btn btn-warning">Ejercicio 3</button>
                </div>
                <div>
                    <button class="eje4 btn btn-warning">Ejercicio 4</button>
                </div>
            </div>
        </div>
        `
    }
    updated(){
        const btnEje1=this.shadowRoot.querySelector('.eje1')
        const btnEje2=this.shadowRoot.querySelector('.eje2')
        const btnEje3=this.shadowRoot.querySelector('.eje3')

        btnEje1.addEventListener('click',this._masaClickHandler)
        btnEje2.addEventListener('click',this._galeriaClickHandler)
        btnEje3.addEventListener('click',this._tablaClickHandler)

    }
    _masaClickHandler(){
        const div=this.shadowRoot.querySelector('.interfaz')
        div.innerHTML=''
        customElements.define("indice-div",indiceMasa)
    }
    _galeriaClickHandler(){
        const div=this.shadowRoot.querySelector('.interfaz')
        div.innerHTML=''
        customElements.define('image-gallery', imgGaleria);
    }
    _tablaClickHandler(){
        const div=this.shadowRoot.querySelector('.interfaz')
        div.innerHTML=''
        customElements.define('tabla-div', tabla);
    }
}
customElements.define("interfaz-div",InterfazMenu)