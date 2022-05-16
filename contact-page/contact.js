
document.querySelector('#cb1').addEventListener('blur', validatecheckbox);
document.querySelector('#cb2').addEventListener('blur', validatecheckbox);


function validatecheckbox(e) {

  const cb1 = document.querySelector('#cb1');
  const cb2 = document.querySelector('#cb2');

  
  if (cb1.checked == true && cb2.checked ==true) {
    cb1.classList.remove('is-invalid');
    cb1.classList.add('is-valid');
    cb2.classList.remove('is-invalid');
    cb2.classList.add('is-valid');
    return true;
  } else {
    cb1.classList.remove('is-valid');
    cb1.classList.add('is-invalid');
    cb2.classList.remove('is-valid');
    cb2.classList.add('is-invalid');
    return false;
  }
}

document.querySelector('#cb1').addEventListener('blur', validatecheckbox);
document.querySelector('#cb2').addEventListener('blur', validatecheckbox);


function validateradio(e) {

  const paywithcard = document.querySelector('#paywithcard');
  const paywithbankaccount = document.querySelector('#paywithbankaccount');

  
  if (cb1.checked == true || cb2.checked ==true) {
    paywithcard.classList.remove('is-invalid');
    paywithcard.classList.add('is-valid');
    paywithbankaccount.classList.remove('is-invalid');
    paywithbankaccount.classList.add('is-valid');
    return true;
  } else {
    paywithcard.classList.remove('is-valid');
    paywithcard.classList.add('is-invalid');
    paywithbankaccount.classList.remove('is-valid');
    paywithbankaccount.classList.add('is-invalid');
    return false;
  }
}


function show(shown, hiden, radio) {
  if (document.getElementById(radio).checked == true) {
    document.getElementById(shown).style.display = "block";
    document.getElementById(hiden).style.display = "none";
  }
}




document.querySelector('#firstname').addEventListener('blur', validateFirstname);
const reSpaces = /^\S*$/;
const reNumChars = /^[a-zA-Z ]{3,30}$/;

function validateFirstname(e) {

  const firstName = document.querySelector('#firstname');
  
  if (reSpaces.test(firstName.value)&&(reNumChars.test(firstName.value))) {
    firstName.classList.remove('is-invalid');
    firstName.classList.add('is-valid');
    return true;
  } else {
    firstName.classList.remove('is-valid');
    firstName.classList.add('is-invalid');
    return false;
  }
}


document.querySelector('#lastname').addEventListener('blur', validatelastname);


function validatelastname(e) {

  const lastName = document.querySelector('#lastname');
  
  if (reSpaces.test(lastName.value)&&(reNumChars.test(lastName.value))) {
    lastName.classList.remove('is-invalid');
    lastName.classList.add('is-valid');
    return true;
  } else {
    lastName.classList.remove('is-valid');
    lastName.classList.add('is-invalid');
    return false;
  }
}

document.querySelector('#surname').addEventListener('blur', validatesurname);


function validatesurname(e) {

  const surname = document.querySelector('#surname');
  
  if (reSpaces.test(surname.value)&&(reNumChars.test(surname.value))) {
    surname.classList.remove('is-invalid');
    surname.classList.add('is-valid');
    return true;
  } else {
    surname.classList.remove('is-valid');
    surname.classList.add('is-invalid');
    return false;
  }
}

document.querySelector('#adress').addEventListener('blur',validateadress);


function validateadress(e) {

  const adress = document.querySelector('#adress');
  
  if  ((reNumChars.test(adress.value))){
    adress.classList.remove('is-invalid');
    adress.classList.add('is-valid');
    return true;
  } else {
    adress.classList.remove('is-valid');
    adress.classList.add('is-invalid');
    return false;
  }
}


document.querySelector('#city').addEventListener('blur',validatecity);


function validatecity(e) {

  const city = document.querySelector('#city');
  
  if  ((reNumChars.test(city.value))){
    city.classList.remove('is-invalid');
    city.classList.add('is-valid');
    return true;
  } else {
    city.classList.remove('is-valid');
    city.classList.add('is-invalid');
    return false;
  }
}


document.querySelector('#county').addEventListener('blur',validatecounty);


function validatecounty(e) {

  const county = document.querySelector('#county');
  
  if  ((reNumChars.test(county.value))){
    county.classList.remove('is-invalid');
    county.classList.add('is-valid');
    return true;
  } else {
    county.classList.remove('is-valid');
    county.classList.add('is-invalid');
    return false;
  }
}


document.querySelector('#country').addEventListener('blur',validatecountry);


function validatecountry(e) {

  const country = document.querySelector('#country');
  
  if  ((reNumChars.test(country.value))){
    country.classList.remove('is-invalid');
    country.classList.add('is-valid');
    return true;
  } else {
    country.classList.remove('is-valid');
    country.classList.add('is-invalid');
    return false;
  }
}

document.querySelector('#phonenumber').addEventListener('blur',validatephonenumber);


function validatephonenumber(e) {
  const phoneenumber = /^(?=.*\d).{8,}$/;
  const phonenumber = document.querySelector('#phonenumber');
  
  if  ((phoneenumber.test(phonenumber.value))){
    phonenumber.classList.remove('is-invalid');
    phonenumber.classList.add('is-valid');
    return true;
  } else {
    phonenumber.classList.remove('is-valid');
    phonenumber.classList.add('is-invalid');
    return false;
  }
}








// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if ( 
            !validateFirstname() ||
             !validatelastname() ||
             !validatesurname() ||
             !validateadress() ||
             !validatecity() ||
             !validatecounty() ||
             !validatecountry() ||
             !validatephonenumber() ||
             !validatecheckbox() ||
             !validateradio()
            

        ) {
          event.preventDefault()
          event.stopPropagation()
        }
        else{
          form.classList.add('was-validated')

        }

      }, false)
    })
})();














const Revisa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
const reCardHolder= /(?<! )[-a-zA-Z' ]{2,26}/;
const ReCVC= /^[0-9]{3,4}$/;
const reDate=/(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/;




// visa card holder namer validation

document.querySelector('#cardHolder').addEventListener('blur', validateardHolderName);

function validateardHolderName(e) {

    const cardHolder = document.querySelector('#cardHolder');
    if ((reCardHolder.test(cardHolder.value))) {
        cardHolder.classList.remove('is-invalid');
        cardHolder.classList.add('is-valid');
        return true;
    } else {
        cardHolder.classList.remove('is-valid');
        cardHolder.classList.add('is-invalid');
        return false;
    }
}


// visa card validation

document.querySelector('#cardNumber').addEventListener('blur', validateVisaCard);

function validateVisaCard(e) {

    const cardNumber = document.querySelector('#cardNumber');
    if ((Revisa.test(cardNumber.value))) {
        cardNumber.classList.remove('is-invalid');
        cardNumber.classList.add('is-valid');
        return true;
    } else {
        cardNumber.classList.remove('is-valid');
        cardNumber.classList.add('is-invalid');
        return false;
    }
}




//validate Date:

document.querySelector('#expirationDate').addEventListener('blur', validateExpirationDate);

function validateExpirationDate(e) {

    const expirationDate = document.querySelector('#expirationDate');
    // Create a new Date that converts the input date
    var dob =new Date(expirationDate.value);

    // Extract pieces of the date:
    var month = dob.getMonth()+1; // months start counting from zero!
    var day   = dob.getDate();  
    var year  = dob.getFullYear();

    var exdate=day+"/"+month+"/"+year;

    if (reDate.test(exdate))  {
        expirationDate.classList.remove('is-invalid');
        expirationDate.classList.add('is-valid');
        return true;
    } else {
        expirationDate.classList.remove('is-valid');
        expirationDate.classList.add('is-invalid');
        return false;
    }
}

// visa card holder namer validation

document.querySelector('#cvc').addEventListener('blur', validateCVC);

function validateCVC(e) {

    const cvc= document.querySelector('#cvc');
    if ((ReCVC.test(cvc.value))) {
        cvc.classList.remove('is-invalid');
        cvc.classList.add('is-valid');
        return true;
    } else {
        cvc.classList.remove('is-valid');
        cvc.classList.add('is-invalid');
        return false;
    }
}



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('#payment-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {

                if (
                    ((!validateardHolderName()))
                    || ((!validateVisaCard()))
                    || ((!validateExpirationDate()))
                    || ((!validateCVC()))
                ) {
                    event.preventDefault()
                    event.stopPropagation()

                } else {
                    form.classList.add('was-validated')
                }



            }, false)
        })
})();














