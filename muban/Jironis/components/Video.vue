<template>
  <section class="app-video">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <!-- why bottle video -->
                <div class="theme-video-wrap">
                  <a href="https://www.youtube.com/watch?v=kzYQxZPZtNM" class="mediabox video-btn"><i class="fa fa-play"></i></a>

                </div>
                <!-- end of why bottle video -->
            </div>
        </div>
    </div>
</section>
</template>

<script>

    export default {
      name: "Video",
      mounted() {
        MediaBox('.mediabox');
      }

    }
</script>

<style scoped>

</style>
