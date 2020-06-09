
const checkboxes = document.querySelectorAll('.checkbox__input');
checkboxes.forEach(element => element.removeAttribute("required"));

const styles = color => {
  const style = document.createElement('style');
  style.id = 'form-send-request-styles';
  style.type = 'text/css';
  style.textContent = `
    /* Form render request data styles */
    .preloader{
      width: 100%;
      text-align: center;
      color: ${color};
      margin: 5px 0;
    }
  `;
  document.head.appendChild(style);
};

const successPopup = () => {
  const modal = document.querySelector('.popup-thank');

  modal.style.cssText = `visibility: visible;`;

  modal.addEventListener(`click`, e => {
    if(e.target.classList.contains('close-thank')){
      modal.style.cssText = 'visibility: hidden;';
    }else if (e.target.classList.contains('popup-thank')){
      modal.style.cssText = 'visibility: hidden;';
    }
  });
}; 

const form = () => {
  const forms = document.querySelectorAll('form');

  let loaderHtml = '';

  const addStatus = (form, status, color = 'red') => {
    styles(color);
    const preloader = `<div class="preloader">${status}</div>`;

      if (document.querySelector('.preloader')) {
        return;
      }

    form.insertAdjacentHTML(`afterbegin`, preloader);
    loaderHtml = document.querySelector('.preloader');

    setTimeout(() => {
      loaderHtml.remove();
    }, 5000);
    
  };


  forms.forEach(form => {

    const postData = data => {
      return fetch('./server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data,
        mode: 'cors'
      }); 
    };
    
    
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log([...event.target.elements]);
      
      const checkbox = [...event.target.elements].filter(item => item.type === 'checkbox');
      
      if (!checkbox[0].checked) {
        addStatus(form, 'Согласитесь на обработку данных');
        return;
      } 
      const formTel = [...event.target.elements].filter((item) => item.name === 'phone');
      if (phoneValidation(formTel)) {
        addStatus(form, 'Неверный номер телефона');
        return;
      } 
      const formData = new FormData(form);

      // let body = {};
      // for (let val of formData.entries()) {
      //   body[val[0]] = val[1];
      // }

      const outputData = () => {
        successPopup();
        addStatus(form, 'Спасибо, мы получили ваш запрос!', 'green');
        form.reset();
      };

      const error = () => {
        addStatus(form, 'Ошибка запроса', 'red');
        form.reset();
      };
      

      postData(formData)
        .then((response) => {
          if (response.status !== 200) {
              throw 'error !!! ';
          }          
          outputData();
        })
        .catch(error);

    });
  });

  const phoneValidation = (tel) => {
    let str = tel[0].value.length;
    if (str === 18) {
      return false;
    } else {
      return true;
    }

  };  
};

export default form;