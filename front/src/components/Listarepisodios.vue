<template>
<div id="listar" class="listarApp">
  <b-container>
    <br>  
    <b-row class="mt-12">
        <b-list-group v-for="item in episodios" :key=item>
        <b-col>
            <b-card
             v-bind:img-src="item.imagen"
             img-top
             style="max-height 20rem ; max-width: 20rem;"
             class="mb-4"
            >
            <p class="text-center">{{item.nombre}}</p>
            <b-button class="botonAgregar" @click="agregarNuevo(item.episodio)" size="sm" block variant="success">Agregar Personaje</b-button>
            </b-card>                
        </b-col>
        </b-list-group>
    </b-row>
  </b-container>
  </div>
</template>

<script>
export default {
  name: 'Listar',
  data(){
      return{
          episodios: [
              {
                  id: 1,
                  imagen: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64262d99-a10c-47d6-a58d-bb6d7cdbb829/d9toe20-8a5976c8-cf52-498d-84ab-51f101623d79.jpg/v1/fill/w_1024,h_1450,q_75,strp/star_wars_i___the_phantom_menace_by_fallenv3gas_d9toe20-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ1MCIsInBhdGgiOiJcL2ZcLzY0MjYyZDk5LWExMGMtNDdkNi1hNThkLWJiNmQ3Y2RiYjgyOVwvZDl0b2UyMC04YTU5NzZjOC1jZjUyLTQ5OGQtODRhYi01MWYxMDE2MjNkNzkuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.oo9Xp-uImh_8LX2wsaxLPU6N51-quVnx93bEdWizYyY",
                  episodio: "I",
                  nombre: "La Amenaza fantasma"
              },
              {
                  id: 2,
                  imagen: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64262d99-a10c-47d6-a58d-bb6d7cdbb829/d9taedx-48eb0957-d131-41e7-bd68-c16a428c2643.jpg/v1/fill/w_1024,h_1450,q_75,strp/star_wars_ii___attack_of_the_clones_by_fallenv3gas_d9taedx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ1MCIsInBhdGgiOiJcL2ZcLzY0MjYyZDk5LWExMGMtNDdkNi1hNThkLWJiNmQ3Y2RiYjgyOVwvZDl0YWVkeC00OGViMDk1Ny1kMTMxLTQxZTctYmQ2OC1jMTZhNDI4YzI2NDMuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.XfWl1R9iHtWjt92VqYrFm0E_xTbeDWpQHkdh8nPrdjU",
                  episodio: "II",
                  nombre: "El ataque de los clones"
              },
              {
                  id: 3,
                  imagen: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64262d99-a10c-47d6-a58d-bb6d7cdbb829/d9t220f-e3779e4f-bf46-4d4f-8198-55c7b7979aca.jpg/v1/fill/w_1024,h_1450,q_75,strp/star_wars_iii___revenge_of_the_sith_by_fallenv3gas_d9t220f-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ1MCIsInBhdGgiOiJcL2ZcLzY0MjYyZDk5LWExMGMtNDdkNi1hNThkLWJiNmQ3Y2RiYjgyOVwvZDl0MjIwZi1lMzc3OWU0Zi1iZjQ2LTRkNGYtODE5OC01NWM3Yjc5NzlhY2EuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Zbg4cvwqtcH__foAFUKcXRjnREilj8_xhoxPju3I2XM",
                  episodio: "III",
                  nombre: "La venganza de los Sith"
              },
              {
                  id: 4,
                  imagen: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64262d99-a10c-47d6-a58d-bb6d7cdbb829/d9t22r0-fbb0cae8-e991-4b4a-8824-b1a4f21adbc5.jpg/v1/fill/w_1024,h_1450,q_75,strp/star_wars_iv___a_new_hope_by_fallenv3gas_d9t22r0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ1MCIsInBhdGgiOiJcL2ZcLzY0MjYyZDk5LWExMGMtNDdkNi1hNThkLWJiNmQ3Y2RiYjgyOVwvZDl0MjJyMC1mYmIwY2FlOC1lOTkxLTRiNGEtODgyNC1iMWE0ZjIxYWRiYzUuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.mYQjJCONVE08_AYhBveLM0MGjd2En72aR5MzAlMIwR8",
                  episodio: "IV",
                  nombre: "Una nueva esperanza"
              },
              {
                  id: 5,
                  imagen: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64262d99-a10c-47d6-a58d-bb6d7cdbb829/d9spaz7-f4dd43b1-90d8-41f5-97c0-fae501e5b618.jpg/v1/fill/w_1024,h_1450,q_75,strp/star_wars_v___the_empire_strikes_back_by_fallenv3gas_d9spaz7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ1MCIsInBhdGgiOiJcL2ZcLzY0MjYyZDk5LWExMGMtNDdkNi1hNThkLWJiNmQ3Y2RiYjgyOVwvZDlzcGF6Ny1mNGRkNDNiMS05MGQ4LTQxZjUtOTdjMC1mYWU1MDFlNWI2MTguanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.oXYYqabxtbsZwkUmJ2nXldyi4fxm8cnZju4T3tSEpro",
                  episodio: "V",
                  nombre: "El imperio contraataca"
              },
              {
                  id: 6,
                  imagen: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64262d99-a10c-47d6-a58d-bb6d7cdbb829/d9sk61b-e6e65128-68cc-48a4-a662-e70d0e95e34a.jpg/v1/fill/w_1024,h_1450,q_75,strp/star_wars_vi___return_of_the_jedi_by_fallenv3gas_d9sk61b-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ1MCIsInBhdGgiOiJcL2ZcLzY0MjYyZDk5LWExMGMtNDdkNi1hNThkLWJiNmQ3Y2RiYjgyOVwvZDlzazYxYi1lNmU2NTEyOC02OGNjLTQ4YTQtYTY2Mi1lNzBkMGU5NWUzNGEuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4R-xe8XkeqvNgToYUXs6M6LqszoL_JDHFQxgkbjQXtI",
                  episodio: "VI",
                  nombre: "El retorno del Jedi"
              },
              {
                  id: 7,
                  imagen: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64262d99-a10c-47d6-a58d-bb6d7cdbb829/d9scvpo-326cbc69-c301-4a10-88bb-ad81356ab924.jpg/v1/fill/w_1024,h_1450,q_75,strp/star_wars_vii___the_force_awakens_by_fallenv3gas_d9scvpo-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ1MCIsInBhdGgiOiJcL2ZcLzY0MjYyZDk5LWExMGMtNDdkNi1hNThkLWJiNmQ3Y2RiYjgyOVwvZDlzY3Zwby0zMjZjYmM2OS1jMzAxLTRhMTAtODhiYi1hZDgxMzU2YWI5MjQuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0q_3efueckT3VigabvsSi312KHoDWAjaeEVN9R-3xZU",
                  episodio: "VII",
                  nombre: "El despestar de la Fuerza"
              },
              {
                  id: 8,
                  imagen: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64262d99-a10c-47d6-a58d-bb6d7cdbb829/ddlaq5f-31c54acc-df6a-4e74-b0d1-dd17fbbb445c.jpg/v1/fill/w_1280,h_1813,q_75,strp/star_wars_viii___the_last_jedi_by_fallenv3gas_ddlaq5f-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMyIsInBhdGgiOiJcL2ZcLzY0MjYyZDk5LWExMGMtNDdkNi1hNThkLWJiNmQ3Y2RiYjgyOVwvZGRsYXE1Zi0zMWM1NGFjYy1kZjZhLTRlNzQtYjBkMS1kZDE3ZmJiYjQ0NWMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6SEj-Odz_3XCCEuRxs1azyAFFvFg5oT7wHnzeSdViSA",
                  episodio: "VIII",
                  nombre: "Los últimos Jedi"
              },
              {
                  id: 9,
                  imagen: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64262d99-a10c-47d6-a58d-bb6d7cdbb829/ddlfzrp-43452719-92ff-46d8-bf67-e7b479028a70.jpg/v1/fill/w_1280,h_1813,q_75,strp/star_wars_ix___rise_of_skywalker_by_fallenv3gas_ddlfzrp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMyIsInBhdGgiOiJcL2ZcLzY0MjYyZDk5LWExMGMtNDdkNi1hNThkLWJiNmQ3Y2RiYjgyOVwvZGRsZnpycC00MzQ1MjcxOS05MmZmLTQ2ZDgtYmY2Ny1lN2I0NzkwMjhhNzAuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.B8G1j9dwCMSRVQztimm2ltqn4JnSbC-nrdlFr5NnShc",
                  episodio: "IX",
                  nombre: "El ascenso de Skywalker"
              }
          ]
      }
  },
  methods: {
      agregarNuevo(episodio){
          console.log(episodio)
          this.$router.push('/listar/'+ episodio)
      }
  }
}
</script>

<style scoped>
    
    p{
        font-size: 30;
        font-weight: bold;
        text-shadow: gray 1px 1px 1px;
        text-transform: uppercase;
    }    

    .botonAgregar{
        font-size: 20px;
        color: #ffffff;
        text-shadow: #000000 6px;
        background-color: #119200;
        border-radius: 6px;
        border: 2px solid #3ba000;
    }    
    
</style>

