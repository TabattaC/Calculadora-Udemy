function Calculadora(){
    // Atributos
    this.display = document.querySelector('.input');
    this.btnClear = document.querySelector('.btn-del');
    
    
    //Metodos
    
    this.inicia = () => {
        this.clickbotoes();
        this.pressionaEnter();
    }
    
    this.clickbotoes = () =>{
        document.addEventListener('click',(e)=>{
            const el = e.target 

            if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
            
            if(el.classList.contains('btn-clear')) this.clear();

            if(el.classList.contains('btn-del')) this.deleteUm();
            
            if(el.classList.contains('btn-eq')) this.realizaConta();

            this.display.focus();
        }); 
    };

    this.btnParaDisplay = (valor) => this.display.value += valor
     

    this.clear = () => this.display.value = ' ';
    

    this.deleteUm= () => this.display.value = this.display.value.slice(0, -1)
    

    this.realizaConta= ()=> {
        let conta = this.display.value;
        try{
            conta = eval(conta);

            if(!conta) {
                alert('Conta invalida');
                return;
            }
            this.display.value = String(conta);  
        } catch(e){
            alert('Conta invalida');
            return;

        }
    };

    this.pressionaEnter =()=> {
        this.display.addEventListener('keyup', e =>{
            if(e.keyCode === 13){
                this.realizaConta();
            }
        });
    }
}

const calc1 = new Calculadora();
calc1.inicia();