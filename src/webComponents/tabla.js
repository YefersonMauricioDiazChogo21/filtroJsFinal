import { LitElement,html,css } from "lit";

export class tabla extends LitElement{
    static properties={

    }
    constructor(){
        super()
        this._bindlisteners()
    }
    static styles=css`
    table { 
        width: 100%; 
        border-collapse: collapse; 
    }
    th, td { 
        border: 1px solid #ccc; 
        padding: 8px; 
        text-align: left; 
    }
    .input-row { 
        display: flex; 
        margin-bottom: 10px; 
    }
    .input-row input { 
        margin-right: 10px; 
    }
    `
    _bindlisteners(){
        this._agregarClickHandler=this._agregarClickHandler.bind(this)
        this._editarClickHandler=this._editarClickHandler.bind(this)
    }
    render(){
        return html `
        <link rel="stylesheet" href="bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
        <div class="tabla">
          <div class="row">
            <form class="form-data input-row">
                <input class="form-control" type="text" name="nombre" id="name-input" placeholder="Nombre">
                <input class="form-control" type="text" name="edad"  id="age-input" placeholder="Edad">
                <button class="btn btn-primary add-row" id="add-row">Agregar</button>
            </form>
          </div>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody class="t-body">
            </tbody>
          </table>
        </div>
        `
    }
    updated(){
        const btnAgregar=this.shadowRoot.querySelector('.add-row')
        btnAgregar.addEventListener('click',this._agregarClickHandler)
    }
    
    _agregarClickHandler(e){
        e.preventDefault()
        const divT=this.shadowRoot.querySelector('.t-body')

        const form=this.shadowRoot.querySelector('.form-data')
        const data= Object.fromEntries(new FormData(form).entries())
        const datos=JSON.parse(JSON.stringify(data))
        const {nombre,edad} =datos
        const tBody=document.createElement('tr')
        tBody.innerHTML=`
            <td>${nombre}</th>
            <td>${edad}</th>
            <td><button class="btn btn-danger" id="add-row">Eliminar</button></th>
        `
        divT.insertAdjacentElement('beforeend',tBody)

    }
    _editarClickHandler(){

    }
    clear(){
        const input1=this.shadowRoot.querySelector('#name-input')
        const input2=this.shadowRoot.querySelector('#age-input')
        input1.value=''
        input2.value=''
    }
}