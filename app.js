//Apenas para treinar vou utilizar uma factory function para criar varias calculadoras
//Porem não seria necessário já que uma calculadora é um objeto e não precisaria de outra
//Se eu quero referênciar uma chave dentro do objeto deve -se usar a palavra this antes
//Factory function precisa utilizar um return
function criaCalculadora() { 
    return {
        display: document.querySelector('.input'),
        btnClear: document.querySelector('.btn-del'),
        
        //Metodos do objeto
        inicia(){
            this.clickBotoes();
            this.pressionaEnter();
        },
        
        clickBotoes(){
            //This = calculadora
            document.addEventListener('click',(e)=>{
                const el = e.target 

                if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
                
                if(el.classList.contains('btn-clear')) this.clear();

                if(el.classList.contains('btn-del')) this.deleteUm();
                
                if(el.classList.contains('btn-eq')) this.realizaConta();

                this.display.focus();
            }); 
        },
        //bind(this)) // Esse metodo do JS faz com que esse metodo utilize outro this e não oque está estabelecido dentro do metodo
        //NO arrow function não é necessário usar pq ele utiliza o this que esta dentro da função

        btnParaDisplay(valor){
           this.display.value += valor
        },

        clear() {
            this.display.value = ' ';
        },

        deleteUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta() {
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
        },
        pressionaEnter() {
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();