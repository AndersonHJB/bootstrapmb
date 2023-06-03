<template>
  <section v-observe-visibility="onVisibilityChange" class="border-top pt-120 pb-80">
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-6">
                <!-- single counetr -->
                <div class="single-counter text-center">
                    <span class="counter">
                      <countTo :startVal='0' :endVal='startCounter ? 4789 : 0' :duration='3000'></countTo>
                    </span>
                    <p>Downloads</p>
                </div><!-- single counetr -->
            </div>
            <div class="col-md-3 col-sm-6">
                <!-- single counetr -->
                <div class="single-counter text-center">
                    <span class="counter">
                      <countTo :startVal='0' :endVal='startCounter ? 6389 : 0' :duration='3000'></countTo>
                    </span>
                    <p>Liks</p>
                </div><!-- single counetr -->
            </div>
            <div class="col-md-3 col-sm-6">
                <!-- single counetr -->
                <div class="single-counter text-center">
                    <span class="counter">
                      <countTo :startVal='0' :endVal='startCounter ? 900 : 0' :duration='3000'></countTo>
                    </span>
                    <p>5 Star Reating</p>
                </div><!-- single counetr -->
            </div>
            <div class="col-md-3 col-sm-6">
                <!-- single counetr -->
                <div class="single-counter text-center">
                    <span class="counter">
                      <countTo :startVal='0' :endVal='startCounter ? 489 : 0' :duration='3000'></countTo>
                    </span>
                    <p>Awards</p>
                </div><!-- single counetr -->
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container -->

</section>
</template>

<script>
  import countTo from 'vue-count-to';
  import { ObserveVisibility } from 'vue-observe-visibility'

    export default {
      name: "Counter",
      components: { countTo },
      directives: {
        ObserveVisibility
      },
      data() {
        return{
          startCounter: false
        }
      },
      methods: {
        onVisibilityChange (isVisible) {
          if (isVisible){
            this.startCounter = true;
          }

        },
      },
    }
</script>

<style scoped>

</style>
