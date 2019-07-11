 <template>
  <div class="container content">
    <div>
      <h1 class="title has-text-primary">
        Random Unicorn Generator
      </h1>
      <h2 class="subtitle " v-if="!randomName">
        Click the button below to generate a random unicorn!
      </h2>

      <div v-if="randomName">
        <p>
          Your Random Unicorn is named: <strong>{{randomName}}</strong>.<br>
          {{randomName}} is a pretty unicorn.
        </p>
      </div>

      <div class="unicorn" v-if="showUnicorn">

        <Unicorn
          :color1="randomcolor()"
          :color2="randomcolor()"
          :color3="randomcolor()"
          :color4="randomcolor()"
          :color5="randomcolor()"
          :color6="randomcolor()"
        />



      </div>

      <div class="links">
        <button @click="generate()" class="button is-primary">{{buttonName}}</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Unicorn from '~/components/Unicorn.vue'

  export default {
    data () {
        return {
          buttonName  : "Let's Get Started!",
          showUnicorn : false,
          randomName  : '',
          randomColour: "#000",
          names       : ['Aasifa','Adara','Adiana','Aerowen','Agele','Agnes','Agrafena','Aguane','Airlia','Alberta','Aletha','Alica','Alize','Alona','Althea','Alva','Amalthea','Amara','Ametza','Andra','Angelina','Anselma','Anwen','Aranka','Argante','Ariana','Artemis','Astra','Astraea','Audrey','Aura','Aurae','Aurai','Aurina','Ayla','Benicia','Bianca','Bijou','Blythe','Bonita','Branda','Branka','Breanna','Brina','Bryanne','Calypso','Candra','Caprina','Casilda','Cassandra','Cassia','Cassiopeia','Celeste','Celina','Chiara','Chione','Chipper','Chryseis','Claribel','Clarissa','Clementine','Cornelia','Cortesia','Crystal','Danika','Della','Dessa','Deva','Diana','Doire','Drisana','Dryade','Dulcea','Duscha','Eldora','Electra','Elwyn','Enigma','Epimelide','Epona','Essa','Estrellita','Etana','Eternia','Evania','Fae','Faith','Fatima','Faye','Fleta','Floriana','Galatea','Gemma','Gratiana','Grizelda','Gwendolen','Gwyneth','Hesperide','Hippolyta','Hope','Hylzarie','Ianira','Imena','Irene','Isa','Itzel','Jada','Javiera','Jewel','Kachina','Kanya','Kenzie','Keren','Kimber','Langaria','Laqueta','Larissa','Leila','Lily','Lotus','Lucia','Luna','Lunaria','Luned','Mae','Magena','Margaret','Marya','Mawu','Megan','Menae','Mika','Mitra','Miyuki','Mona','Moriba','Mystique','Nadira','Noga','Nola','Olivia','Olwen','Opal','Oriella','Pearl','Phaedra','Philipa','Phoebe','Primara','Quarralia','Quirina','Raina','Rhiannon','Rohesia','Rosalba','Rosalind','Roshan','Roxana','Ruby','Samantha','Samara','Shakti','Shanna','Sheehan','Sidra','Silvia','Simona','Speranza','Suelita','Suki','Sveta','Sylvanine','Tacita','Tryne','Ugolina','Unity','Uriela','Usha','Valeria','Valory','Vanora','Veila','Vespera','Willow','Xanthippe','Xaviera','Xenia','Xylia','Yakira','Yaser','Yashiana','Yasmin','Yoriara','Yvette','Zanna','Zephyra','Zinerva','Zora','Zulema','Zuri'],
        }
    },

    methods: {
      randomcolor: function() {
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        return `rgb(${r},${g},${b})`
      },

      generate: function (event) {
        this.showUnicorn = true;
        this.buttonName = "Do Magic Again";
        let namesLength = this.names.length;
        this.randomName = this.names[Math.floor(Math.random()*namesLength)];
      }
    },

    components: {
      Unicorn
    }
  }
</script>

<style>
  .container {
    margin         : 0 auto;
    min-height     : 100vh;
    display        : flex;
    justify-content: center;
    align-items    : center;
    text-align     : center;
  }

  .title {
    font-family   : 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display       : block;
    font-weight   : 300;
    font-size     : 100px;
    color         : #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight   : 300;
    font-size     : 42px;
    color         : #526488;
    word-spacing  : 5px;
    padding-bottom: 15px;
  }

  svg {
    max-height: 60vh;
    margin-top: 20px;
  }

  .links {
    padding-top: 45px;
  }
</style>
