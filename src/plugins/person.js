export default {
  install(app, options) {
    const persons = {
      name: '짐코딩',
      say() {
        alert(this.name);
      },
      ...options,
    };
    console.log('person!!!!!!', persons.name);
    app.config.globalProperties.$person = persons;
    app.provide('person', persons);
  },
};
