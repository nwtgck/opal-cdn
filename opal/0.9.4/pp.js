/* Generated by Opal 0.9.4 */
Opal.modules["pp"] = function(Opal) {
  Opal.dynamic_require_severity = "warning";
  var OPAL_CONFIG = { method_missing: true, arity_check: false, freezing: true, tainting: true };
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module, $klass = Opal.klass, $gvars = Opal.gvars;

  Opal.add_stubs(['$inspect', '$each', '$pp', '$<=', '$size', '$first', '$module_function', '$p', '$args', '$===', '$+', '$<<']);
  (function($base) {
    var $Kernel, self = $Kernel = $module($base, 'Kernel');

    var def = self.$$proto, $scope = self.$$scope;

    Opal.defn(self, '$pretty_inspect', function() {
      var self = this;

      return self.$inspect();
    });

    Opal.defn(self, '$pp', function() {
      var $a, $b, TMP_1, self = this, $splat_index = nil;

      var array_size = arguments.length - 0;
      if(array_size < 0) array_size = 0;
      var objs = new Array(array_size);
      for($splat_index = 0; $splat_index < array_size; $splat_index++) {
        objs[$splat_index] = arguments[$splat_index + 0];
      }
      ($a = ($b = objs).$each, $a.$$p = (TMP_1 = function(obj){var self = TMP_1.$$s || this;
if (obj == null) obj = nil;
      return $scope.get('PP').$pp(obj)}, TMP_1.$$s = self, TMP_1), $a).call($b);
      if ((($a = $rb_le(objs.$size(), 1)) !== nil && (!$a.$$is_boolean || $a == true))) {
        return objs.$first()
        } else {
        return objs
      };
    });

    self.$module_function("pp");
  })($scope.base);
  return (function($base, $super) {
    function $PP(){};
    var self = $PP = $klass($base, $super, 'PP', $PP);

    var def = self.$$proto, $scope = self.$$scope;

    return (function(self) {
      var $scope = self.$$scope, def = self.$$proto, $a;

      if ((($a = (typeof(console) === "undefined" || typeof(console.log) === "undefined")) !== nil && (!$a.$$is_boolean || $a == true))) {
        Opal.defn(self, '$pp', function(obj, out, width) {
          var $a, self = this;
          if ($gvars.stdout == null) $gvars.stdout = nil;

          if (out == null) {
            out = $gvars.stdout
          }
          if (width == null) {
            width = 79
          }
          return ($a = self).$p.apply($a, Opal.to_a(self.$args()));
        })
        } else {
        Opal.defn(self, '$pp', function(obj, out, width) {
          var $a, self = this;
          if ($gvars.stdout == null) $gvars.stdout = nil;

          if (out == null) {
            out = $gvars.stdout
          }
          if (width == null) {
            width = 79
          }
          if ((($a = $scope.get('String')['$==='](out)) !== nil && (!$a.$$is_boolean || $a == true))) {
            return $rb_plus($rb_plus(out, obj.$inspect()), "\n")
            } else {
            return out['$<<']($rb_plus(obj.$inspect(), "\n"))
          };
        })
      };
      return Opal.alias(self, 'singleline_pp', 'pp');
    })(Opal.get_singleton_class(self))
  })($scope.base, null);
};
