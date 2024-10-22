new Vue({
    el: '#app',
    data: {
      name: '',
      story: '',
      submitted: false,
      errorMessage: ''
    },
    methods: {
      submitStory() {
        if (this.story.length < 3) {
          this.errorMessage = 'Your story must be at least 3 characters long!';
        } else {
          this.submitted = true;
          this.errorMessage = '';
        }
      }
    }
  });
  