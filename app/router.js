var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('schedule');
  //this.route('roles');
  this.route('rules');
  //this.route('contact');
  this.route('deliverables');
  this.route('team');
  this.route('test');
  //this.resource('index', {
  //  path: '/',
  //  queryParams: ['anchor']
  //});
  // this.resource('posts', function() {
  //   this.route('new');
  // });
});

export default Router;
