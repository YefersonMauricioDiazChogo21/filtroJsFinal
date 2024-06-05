import { LitElement,html,css } from "lit";

export class tabla extends LitElement{
    static properties={
        cont:{}

    }
    constructor(){
        super()
        this._bindlisteners()
        this.cont=0
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
        this._eliminarClickHandler=this._eliminarClickHandler.bind(this)
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
          <table class="tablas">
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
        const divTablas=this.shadowRoot.querySelector('.tablas')
        btnAgregar.addEventListener('click',this._agregarClickHandler)
        divTablas.addEventListener('click',this._eliminarClickHandler)
    }
    
    _agregarClickHandler(e){
        e.preventDefault()
        const id=Date.now().toString(16)
        const divT=this.shadowRoot.querySelector('.t-body')
        const form=this.shadowRoot.querySelector('.form-data')
        const data= Object.fromEntries(new FormData(form).entries())
        const datos=JSON.parse(JSON.stringify(data))
        const {nombre,edad} =datos
        const tBody=`
        <tr class="row${id}">
            <td>${nombre}</th>
            <td>${edad}</th>
            <td><button class="btn btn-danger delete-row" data-id="${id}" name="eliminar" id="delete-row">Eliminar</button></td>
        </tr>
        `
        console.log(divT)
        divT.insertAdjacentHTML('beforeend',tBody)

    }
    _eliminarClickHandler(e){
        console.log(e.target.id)
        if (e.target.id=='delete-row'){
            const id=e.target.dataset.id
            const divEli=this.shadowRoot.querySelector(`.row1`)
            console.log(divEli)
            divEli.innerHTML=''
        }
    }
    clear(){
        const input1=this.shadowRoot.querySelector('#name-input')
        const input2=this.shadowRoot.querySelector('#age-input')
        input1.value=''
        input2.value=''
    }
}