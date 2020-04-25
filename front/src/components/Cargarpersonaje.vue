<template>
  <div id="cargarPersonaje">
    <b-container>
      <br />
      <h1 class="text-left">Cargar Personaje</h1>
      <b-form class="w-50 p-3 mb-1" @submit.prevent="submit">
        <b-form-group label="Episodio*" class="episodioForm">
          <b-form-input type="text" v-model.trim="episodio" disabled></b-form-input>
        </b-form-group>

        <b-form-group label="Personaje*" class="episodioForm">
          <b-form-input
            class="{'is-invalid' : validationStatus($v.personaje)}"
            :state="personajeState"
            placeholder="Ingrese un personaje, Ejemplo: Yoda"
            type="text"
            v-model="$v.personaje.$model"
          ></b-form-input>
          <div
            v-if="!$v.personaje.required"
            class="invalid-feedback"
          >El campo nombre es obligatorio.</div>
          <!--<div v-if="!$v.personaje.minLength" class="invalid-feedback">El nombre necesita como mínimo {{$v.personaje.$params.minLength.min}} letras</div>-->
        </b-form-group>
        <b-button @click="postPersonaje()" type="submit" variant="primary">Guardar</b-button>
      </b-form>
      <br />
      <div>
        <h2 class="text-fluid">Personajes en el Episodio</h2>
        <b-list-group style="max-width: 520px;" class="mt-6">
          <b-list-group-item
            class="d-flex align-items-center"
            v-for="item in personajeEps"
            :key="item"
          >
            <b-avatar size="sm" variant="warning" src="https://i.pinimg.com/originals/8a/f8/a8/8af8a879efcf05d3f080292f4dfaa74e.jpg" class="mr-3"></b-avatar>
            <span class="mr-auto">{{item}}</span>
            <b-badge>
              <b-button @click="deletePersonaje(item)" variant="danger">Eliminar</b-button>
            </b-badge>
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import { required } from "vuelidate/lib/validators";

export default {
  name: "personaje",
  data() {
    return {
      episodio: this.$route.params.id,
      personaje: "",
      personajeEps: []
    };
  },
  validations: {
    personaje: { required }
  },
  created() {
    this.getPersonajeEps();
  },
  mounted() {},
  computed: {
    personajeState() {
      return this.personaje.length > 0 ? true : false;
    }
  },
  methods: {
    validationStatus: function(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },

    submit: function() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;

      this.$swal("Personaje guardado");
    },

    deletePersonaje(personaje) {
      var _this = this;
      axios
        .delete("http://localhost:3000/baja/" + this.episodio + "/" + personaje)
        .then(function(res) {
          _this.getPersonajeEps();
          console.log(res);
        })
        .catch(function(err) {
          console.log(err);
        });

      this.$swal("Personaje eliminado");
    },

    postPersonaje() {
      var _this = this;
      if (this.episodio && this.personaje) {
        axios
          .post("http://localhost:3000/cargar", {
            episodio: this.episodio,
            personaje: this.personaje
          })
          .then(function(res) {        
            _this.personaje = "";    
            _this.getPersonajeEps();
            console.log(res);
          })
          .catch(function(err) {
            console.log(err);
          });
      } else {
        console.log("error");
      }
    },

    getPersonajeEps() {
      console.log("anda");
      axios
        .get("http://localhost:3000/listar?episodio=" + this.episodio)
        .then(response => {
          console.log("anda2");
          console.log(response.data);
          this.personajeEps = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>


<style scoped>
.episodioForm{
  color: white;
}

h1 {
  color: white;
}
h2{
  color: white;
}
</style>