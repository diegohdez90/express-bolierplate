/* eslint-disable no-undef */
import axios from  'axios';

const app = new Vue({
  delimiters: ['${', '}'],
  el: '#request',
  data: {
    successMessage: '',
    globalError: '',
    fields: [
      {
        label: 'Nombre',
        name: 'requestName',
        placeholder: 'Nombre completo',
        value: '',
        error: '',
      },
      {
        label: 'Hotel',
        name: 'hotel',
        placeholder: 'Nombre completo del Hotel',
        value: '',
        error: '',
      },
      {
        label: 'Puesto',
        name: 'role',
        placeholder: 'Puesto en el hotel',
        value: '',
        error: '',
      },
      {
        label: 'Telefono de contacto',
        name: 'hotelContactPhone',
        placeholder: 'Telefono de contacto del hotel',
        value: '',
        error: '',
      },
      {
        label: 'Email',
        name: 'email',
        placeholder: 'Correo electronico',
        value: '',
        error: '',
      },
    ],
  },
  methods: {
    update: (e, index) => {
      app.fields[index].value = e.target.value;
    },
    post: (e) => {
      e.preventDefault();
      app.fields.map((field) => {
        field.error = '';
      });
      axios.post('/request', {
        requestName: app.fields[0].value,
        hotel: app.fields[1].value,
        role: app.fields[2].value,
        hotelContactPhone: app.fields[3].value,
        email: app.fields[4].value,
      })
        .then((res) => {
          app.successMessage = res.data.message;
        })
        .catch((err) => {
          if (typeof err.response.data === 'string') {
            app.globalError = err.response.statusText;
          } else {
            const { data: errors } = err.response;
            if (typeof errors === 'object') {
              app.fields.map((field) => {
                if (field.name in errors)
                  field.error = errors[field.name].message;
              });
            }
          }
        });
    },
  },
});

export default app;
