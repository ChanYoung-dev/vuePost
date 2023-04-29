// import focus from '@/directives/focus';
import color from '@/directives/color';

export default {
  install(app) {
    //app.directives('foucs' focus);
    app.directive('color', color);
  },
};
