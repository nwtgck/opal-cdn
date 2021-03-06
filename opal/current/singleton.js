/* Generated by Opal 0.11.3 */
Opal.modules["singleton"] = function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$raise', '$class', '$__init__', '$instance_eval', '$new', '$extend']);
  return (function($base, $parent_nesting) {
    var $Singleton, self = $Singleton = $module($base, 'Singleton');

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_Singleton_clone_1, TMP_Singleton_dup_2;

    
    
    Opal.defn(self, '$clone', TMP_Singleton_clone_1 = function $$clone() {
      var self = this;

      return self.$raise(Opal.const_get_relative($nesting, 'TypeError'), "" + "can't clone instance of singleton " + (self.$class()))
    }, TMP_Singleton_clone_1.$$arity = 0);
    
    Opal.defn(self, '$dup', TMP_Singleton_dup_2 = function $$dup() {
      var self = this;

      return self.$raise(Opal.const_get_relative($nesting, 'TypeError'), "" + "can't dup instance of singleton " + (self.$class()))
    }, TMP_Singleton_dup_2.$$arity = 0);
    (function($base, $parent_nesting) {
      var $SingletonClassMethods, self = $SingletonClassMethods = $module($base, 'SingletonClassMethods');

      var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_SingletonClassMethods_clone_3, TMP_SingletonClassMethods_inherited_4;

      
      
      Opal.defn(self, '$clone', TMP_SingletonClassMethods_clone_3 = function $$clone() {
        var self = this, $iter = TMP_SingletonClassMethods_clone_3.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

        if ($iter) TMP_SingletonClassMethods_clone_3.$$p = null;
        // Prepare super implicit arguments
        for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
          $zuper[$zuper_i] = arguments[$zuper_i];
        }
        return Opal.const_get_relative($nesting, 'Singleton').$__init__($send(self, Opal.find_super_dispatcher(self, 'clone', TMP_SingletonClassMethods_clone_3, false), $zuper, $iter))
      }, TMP_SingletonClassMethods_clone_3.$$arity = 0);
      
      Opal.defn(self, '$inherited', TMP_SingletonClassMethods_inherited_4 = function $$inherited(sub_klass) {
        var self = this, $iter = TMP_SingletonClassMethods_inherited_4.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

        if ($iter) TMP_SingletonClassMethods_inherited_4.$$p = null;
        // Prepare super implicit arguments
        for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
          $zuper[$zuper_i] = arguments[$zuper_i];
        }
        
        $send(self, Opal.find_super_dispatcher(self, 'inherited', TMP_SingletonClassMethods_inherited_4, false), $zuper, $iter);
        return Opal.const_get_relative($nesting, 'Singleton').$__init__(sub_klass);
      }, TMP_SingletonClassMethods_inherited_4.$$arity = 1);
    })($nesting[0], $nesting);
    (function(self, $parent_nesting) {
      var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP___init___7, TMP_included_8;

      
      
      Opal.defn(self, '$__init__', TMP___init___7 = function $$__init__(klass) {
        var TMP_5, TMP_instance_6, self = this;

        
        $send(klass, 'instance_eval', [], (TMP_5 = function(){var self = TMP_5.$$s || this;

        return (self.singleton__instance__ = nil)}, TMP_5.$$s = self, TMP_5.$$arity = 0, TMP_5));
        Opal.defs(klass, '$instance', TMP_instance_6 = function $$instance() {
          var self = this;
          if (self.singleton__instance__ == null) self.singleton__instance__ = nil;

          
          if ($truthy(self.singleton__instance__)) {
            return self.singleton__instance__};
          return (self.singleton__instance__ = self.$new());
        }, TMP_instance_6.$$arity = 0);
        return klass;
      }, TMP___init___7.$$arity = 1);
      return (Opal.defn(self, '$included', TMP_included_8 = function $$included(klass) {
        var self = this, $iter = TMP_included_8.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

        if ($iter) TMP_included_8.$$p = null;
        // Prepare super implicit arguments
        for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
          $zuper[$zuper_i] = arguments[$zuper_i];
        }
        
        $send(self, Opal.find_super_dispatcher(self, 'included', TMP_included_8, false), $zuper, $iter);
        klass.$extend(Opal.const_get_relative($nesting, 'SingletonClassMethods'));
        return Opal.const_get_relative($nesting, 'Singleton').$__init__(klass);
      }, TMP_included_8.$$arity = 1), nil) && 'included';
    })(Opal.get_singleton_class(Opal.const_get_relative($nesting, 'Singleton')), $nesting);
  })($nesting[0], $nesting)
};
