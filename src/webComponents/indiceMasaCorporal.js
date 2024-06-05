import { LitElement,html } from "lit";

export class indiceMasa extends LitElement{
    static properties={
        
    }
    constructor(){
        super()
        this._bindListeners()
    }
    _bindListeners(){
        this._calcularClickHandler= this._calcularClickHandler.bind(this)
    }
    render(){
        return html`
        <link rel="stylesheet" href="bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
        <div class="imc d-flex justify-content-center flex-column align-items-center gap-5">
            <h1>Indice de masa corporal</h1>
            <img src="img/imc.jpg" alt="">
            <form class="form-data row">
                <div class="col-6">
                    <label class="form-label" for="peso">Peso en Kl</label>
                    <input class="form-control" type="number" name="peso" id="peso" placeholder="Ingrese su peso en kilos">
                </div>
                <div class="col-6">
                    <label class="form-label" for="altura">Altura en M</label>
                    <input class="form-control" type="number" name="altura" id="altura" placeholder="ingrese su altura en metros">
                </div>
                <br>
                <div>
                    <button class="calcular btn btn-primary">Calcular</button>
                </div>
                <div class="resultado d-flex justify-content-center flex-column align-items-center">
                </div>
            </form>
        </div>
        `
    }
    updated(){
        const btnEje1=this.shadowRoot.querySelector('.calcular')
        btnEje1.addEventListener('click',this._calcularClickHandler)
    }
    _calcularClickHandler(e){
        e.preventDefault()
        const form=this.shadowRoot.querySelector('.form-data')
        const data= Object.fromEntries(new FormData(form).entries())
        const datos=JSON.parse(JSON.stringify(data))
        const {peso,altura} =datos
        const imc=peso/(altura*altura)
        console.log(imc)
        let resultado=''
        let img=''
        if (imc<18.5){
            resultado='Bajo de peso'
            img='img/imc.png'
        }else if(imc>18.5 && imc<25){
            resultado='Normal'
            img='img/normal.png'
        }else if(imc>24.9 && imc<30){
            resultado='Sobrepeso'
            img='img/sobrepeso.png'
        }else if(imc>29.9 && imc<35){
            resultado='Obesidad I'
            img='img/obesidad1.png'
        }else if(imc>34.9 && imc<40){
            resultado='Obesidad II'
            img='img/obesidad2.png'
        }else{
            resultado='Obesidad III'
            img='img/obesidad3.png'
        }
        
        const div=this.shadowRoot.querySelector('.resultado')
        div.innerHTML=`
                <img src="${img}" style="width: 100px;" alt="">
                <h3>${resultado}</h3>
        `
    }
}
