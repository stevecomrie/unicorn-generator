<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }

  header {
    text-align: center;
    padding   : 20px 0;

    ul {
      margin         : 0;
      padding        : 0;
      display        : flex;
      justify-content: center;
      align-items    : center;
      text-align     : center;

      li {
        margin : 0 15px;
        padding: 0;

        a {
          &.active {
            font-weight: bold;
            text-decoration : underline;
          }

          &:hover {
            color          : #000;
            text-decoration: underline;
          }
        }
      }
    }
  }

  footer {
    min-height   : 20px;
    text-align   : center;
    font-size    : 14px;
    margin-bottom: 20px;

    a {
      color: #666;
      text-decoration: underline;

      &:hover {
        color : #00d1b2;
      }
    }
  }

  main {
    padding-bottom: 80px;
    max-width     : 760px;
    margin        : 0 auto;
  }

  .container {
    margin         : 0 auto;
    min-height     : calc( 100vh - 100px );
    display        : flex;
    justify-content: center;
    align-items    : center;
    text-align     : center;
  }

  div.content {

    .title {
      font-family   : 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      color         : #35495e;
      letter-spacing: 1px;
    }

    .subtitle {
      font-weight   : 300;
      font-size     : 1.75em;
      padding-bottom: 15px;
      line-height: 1.5em;
    }

    h3 {
      margin-top : 20px;
      font-weight: 300;
      font-size  : 1.25em;
      margin-bottom : 0;
    }
  }

  .links {
    padding-top: 30px;
  }
</style>
