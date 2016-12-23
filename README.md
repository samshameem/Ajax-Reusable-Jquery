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

This executes a callback function on success.

Any options you provide to 'ajax' will override the defaults jquery ajax.

Default ajax options
type = 'POST'
dataType = 'json'

Dependencies: Jquery 1.0 +
