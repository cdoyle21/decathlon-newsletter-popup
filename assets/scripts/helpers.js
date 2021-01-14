function isValidEmail(val) {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (val.value.match(mailformat)) {
    document.querySelector('.Rectangle').style.border = 'solid 2px green';
    document.querySelector('.Please-type-an-e-mai').style.display = 'none';
    document.querySelector('.Background').style.color = 'black';
    document.form1.email.focus();
    return true;
  } else {
    document.querySelector('.Rectangle').style.border = 'solid 2px red';
    document.querySelector('.Please-type-an-e-mai').style.display = 'grid';
    document.form1.email.focus();
    return false;
  }
}
