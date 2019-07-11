 <template>
  <div>
    <header>
      <ul>
        <li><nuxt-link to="/"   >home</nuxt-link></li>
        <li><nuxt-link to="/api"  class="active">api</nuxt-link></li>
      </ul>
    </header>
    <div class="container">
      <main>
        <div class="content">
          <h1 class="is-size-1 has-text-primary">
            Random Unicorn Generator<br>
            API Reference
          </h1>

          <h2 class="subtitle" v-if="!name">
            You can generate a random unicorn via the API by making a GET request to the following endpoint:
          </h2>

          <code>
            https://www.random-unicorn.com/api/v1/generate
          </code>

          <h3>Sample JSON Output</h3>

          <code class="json">
            <pre>
{
   name : "Zephyra"
   attribute1 : "relaxed"
   attribute2 : "patient"
   color1 : "#48e17c"
   color2 : "#0df2c5"
   color3 : "#41079a"
   color4 : "#fa9a37"
   color5 : "#c3805c"
   color6 : "#4b5a96"
}</pre>
          </code>

        </div>
      </main>
    </div>

    <footer>
      <a href="https://github.com/stevecomrie/unicorn-generator">source code available on github</a>
    </footer>
  </div>
</template>

<script>
  import axios   from 'axios'
  import Unicorn from '~/components/Unicorn.vue'

  export default {
    data () {
        return {
          button     : "Let's Get Started!",
          showUnicorn: false,
          name       : '',
          attribute1 : '',
          attribute2 : '',
          color1     : '',
          color2     : '',
          color3     : '',
          color4     : '',
          color5     : '',
          color6     : '',
        }
    },

    methods: {
      generate: function (event) {
        if( this.showUnicorn ) {
          document.querySelector('#generate').disabled = true;
          document.querySelector('#unicorn').classList.add( 'hiding' );
        } else {
          this.getunicorn();
        }
      },

      load: function (event) {
        if( document.querySelector('#unicorn').classList.contains( 'hiding' ) ) {
          this.getunicorn();
        }
      },

      getunicorn: function(event) {
        axios
          .get('https://www.random-unicorn.com/api/generate')
          .then(response => {
            this.name        = response.data.name;
            this.attribute1  = response.data.attribute1;
            this.attribute2  = response.data.attribute2;
            this.color1      = response.data.color1;
            this.color2      = response.data.color2;
            this.color3      = response.data.color3;
            this.color4      = response.data.color4;
            this.color5      = response.data.color5;
            this.color6      = response.data.color6;
            this.showUnicorn = true;
            this.button      = "Do Magic Again";

            document.querySelector('#unicorn').classList.remove( 'hiding' );
            document.querySelector('#generate').disabled = false;
          });
      },
    },

    components: {
      Unicorn
    }
  }
</script>

<style lang="scss" scoped>

  div.content {
    h3 {
      margin-top: 50px;
      margin-bottom : 10px;
    }
  }

  code {
    margin-bottom: 50px;
    font-size: 18px;
  }

  code.json {
    display: block;
    background: #333;
    margin    : 0 auto;
    max-width : 300px;
    text-align: left;
    padding   : 20px;

    pre {
      background : transparent;
      color      : #fff;
      padding    : 0;
      font-family: monospace;
      font-size  : 14px;
    }
  }

</style>
