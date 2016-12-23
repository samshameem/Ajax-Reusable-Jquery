# Ajax-Reusable-Jquery
Jquery prototype reusable ajax function.


How to use it.

_request({
  ajax:{
    url: 'php/initiate/check',
    data: formData
  },
  function (data) {
    console.log(data);
  }
});


Any options you provide to 'ajax' will override the defaults jquery ajax.
