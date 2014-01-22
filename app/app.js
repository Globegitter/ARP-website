import Resolver from 'resolver';

//Ember.FEATURES['query-params-new'] = true;

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver['default']
});

//Ember.ENV = {FEATURES: {'query-params-new': true}};
//Ember.ENV.ENABLE_ALL_FEATURES = true;
//Ember.ENV.FEATURES['query-params-new'] = true;

export default App;
