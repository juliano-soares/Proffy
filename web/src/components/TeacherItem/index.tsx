import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/37117169?s=460&u=854d506be11fa601c1265d0e1939fb400ab9638d&v=4" alt="Juliano Soares"/>
        <div>
          <strong>Juliano Soares</strong>
          <span>Química</span>
          <p>
            Entusiasta das melhores tecnologias de química avançada.abs
            <br/><br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="whatsapp"/>
              Entrar em contato
            
            </button>
          </footer>
        </div>
      </header>
    </article>
  )
}

export default TeacherItem;