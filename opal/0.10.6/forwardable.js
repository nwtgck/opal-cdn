/* Generated by Opal 0.10.6 */
Opal.modules["forwardable"] = function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module;

  Opal.add_stubs(['$each', '$respond_to?', '$def_instance_delegator', '$include?', '$start_with?', '$to_s', '$define_method', '$__send__', '$to_proc', '$instance_variable_get', '$def_single_delegator', '$define_singleton_method']);
  (function($base) {
    var $Forwardable, self = $Forwardable = $module($base, 'Forwardable');

    var def = self.$$proto, $scope = self.$$scope, TMP_3, TMP_5, TMP_8;

    Opal.defn(self, '$instance_delegate', TMP_3 = function $$instance_delegate(hash) {
      var $a, $b, TMP_1, self = this;

      return ($a = ($b = hash).$each, $a.$$p = (TMP_1 = function(methods, accessor){var self = TMP_1.$$s || this, $c, $d, TMP_2;
if (methods == null) methods = nil;if (accessor == null) accessor = nil;
      if ((($c = methods['$respond_to?']("each")) !== nil && $c != null && (!$c.$$is_boolean || $c == true))) {
          } else {
          methods = [methods]
        };
        return ($c = ($d = methods).$each, $c.$$p = (TMP_2 = function(method){var self = TMP_2.$$s || this;
if (method == null) method = nil;
        return self.$def_instance_delegator(accessor, method)}, TMP_2.$$s = self, TMP_2.$$arity = 1, TMP_2), $c).call($d);}, TMP_1.$$s = self, TMP_1.$$arity = 2, TMP_1), $a).call($b);
    }, TMP_3.$$arity = 1);

    Opal.defn(self, '$def_instance_delegators', TMP_5 = function $$def_instance_delegators(accessor, $a_rest) {
      var $b, $c, TMP_4, self = this, methods;

      var $args_len = arguments.length, $rest_len = $args_len - 1;
      if ($rest_len < 0) { $rest_len = 0; }
      methods = new Array($rest_len);
      for (var $arg_idx = 1; $arg_idx < $args_len; $arg_idx++) {
        methods[$arg_idx - 1] = arguments[$arg_idx];
      }
      return ($b = ($c = methods).$each, $b.$$p = (TMP_4 = function(method){var self = TMP_4.$$s || this, $a;
if (method == null) method = nil;
      if ((($a = ["__send__", "__id__"]['$include?'](method)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          return nil;};
        return self.$def_instance_delegator(accessor, method);}, TMP_4.$$s = self, TMP_4.$$arity = 1, TMP_4), $b).call($c);
    }, TMP_5.$$arity = -2);

    Opal.defn(self, '$def_instance_delegator', TMP_8 = function $$def_instance_delegator(accessor, method, ali) {
      var $a, $b, TMP_6, $c, TMP_7, self = this;

      if (ali == null) {
        ali = method;
      }
      if ((($a = accessor.$to_s()['$start_with?']("@")) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return ($a = ($b = self).$define_method, $a.$$p = (TMP_6 = function($c_rest){var self = TMP_6.$$s || this, block, args, $d, $e;

          block = TMP_6.$$p || nil, TMP_6.$$p = null;
          var $args_len = arguments.length, $rest_len = $args_len - 0;
          if ($rest_len < 0) { $rest_len = 0; }
          args = new Array($rest_len);
          for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
            args[$arg_idx - 0] = arguments[$arg_idx];
          }
        return ($d = ($e = self.$instance_variable_get(accessor)).$__send__, $d.$$p = block.$to_proc(), $d).apply($e, [method].concat(Opal.to_a(args)))}, TMP_6.$$s = self, TMP_6.$$arity = -1, TMP_6), $a).call($b, ali)
        } else {
        return ($a = ($c = self).$define_method, $a.$$p = (TMP_7 = function($d_rest){var self = TMP_7.$$s || this, block, args, $e, $f;

          block = TMP_7.$$p || nil, TMP_7.$$p = null;
          var $args_len = arguments.length, $rest_len = $args_len - 0;
          if ($rest_len < 0) { $rest_len = 0; }
          args = new Array($rest_len);
          for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
            args[$arg_idx - 0] = arguments[$arg_idx];
          }
        return ($e = ($f = self.$__send__(accessor)).$__send__, $e.$$p = block.$to_proc(), $e).apply($f, [method].concat(Opal.to_a(args)))}, TMP_7.$$s = self, TMP_7.$$arity = -1, TMP_7), $a).call($c, ali)
      };
    }, TMP_8.$$arity = -3);

    Opal.alias(self, 'delegate', 'instance_delegate');

    Opal.alias(self, 'def_delegators', 'def_instance_delegators');

    Opal.alias(self, 'def_delegator', 'def_instance_delegator');
  })($scope.base);
  return (function($base) {
    var $SingleForwardable, self = $SingleForwardable = $module($base, 'SingleForwardable');

    var def = self.$$proto, $scope = self.$$scope, TMP_11, TMP_13, TMP_16;

    Opal.defn(self, '$single_delegate', TMP_11 = function $$single_delegate(hash) {
      var $a, $b, TMP_9, self = this;

      return ($a = ($b = hash).$each, $a.$$p = (TMP_9 = function(methods, accessor){var self = TMP_9.$$s || this, $c, $d, TMP_10;
if (methods == null) methods = nil;if (accessor == null) accessor = nil;
      if ((($c = methods['$respond_to?']("each")) !== nil && $c != null && (!$c.$$is_boolean || $c == true))) {
          } else {
          methods = [methods]
        };
        return ($c = ($d = methods).$each, $c.$$p = (TMP_10 = function(method){var self = TMP_10.$$s || this;
if (method == null) method = nil;
        return self.$def_single_delegator(accessor, method)}, TMP_10.$$s = self, TMP_10.$$arity = 1, TMP_10), $c).call($d);}, TMP_9.$$s = self, TMP_9.$$arity = 2, TMP_9), $a).call($b);
    }, TMP_11.$$arity = 1);

    Opal.defn(self, '$def_single_delegators', TMP_13 = function $$def_single_delegators(accessor, $a_rest) {
      var $b, $c, TMP_12, self = this, methods;

      var $args_len = arguments.length, $rest_len = $args_len - 1;
      if ($rest_len < 0) { $rest_len = 0; }
      methods = new Array($rest_len);
      for (var $arg_idx = 1; $arg_idx < $args_len; $arg_idx++) {
        methods[$arg_idx - 1] = arguments[$arg_idx];
      }
      return ($b = ($c = methods).$each, $b.$$p = (TMP_12 = function(method){var self = TMP_12.$$s || this, $a;
if (method == null) method = nil;
      if ((($a = ["__send__", "__id__"]['$include?'](method)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          return nil;};
        return self.$def_single_delegator(accessor, method);}, TMP_12.$$s = self, TMP_12.$$arity = 1, TMP_12), $b).call($c);
    }, TMP_13.$$arity = -2);

    Opal.defn(self, '$def_single_delegator', TMP_16 = function $$def_single_delegator(accessor, method, ali) {
      var $a, $b, TMP_14, $c, TMP_15, self = this;

      if (ali == null) {
        ali = method;
      }
      if ((($a = accessor.$to_s()['$start_with?']("@")) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return ($a = ($b = self).$define_singleton_method, $a.$$p = (TMP_14 = function($c_rest){var self = TMP_14.$$s || this, block, args, $d, $e;

          block = TMP_14.$$p || nil, TMP_14.$$p = null;
          var $args_len = arguments.length, $rest_len = $args_len - 0;
          if ($rest_len < 0) { $rest_len = 0; }
          args = new Array($rest_len);
          for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
            args[$arg_idx - 0] = arguments[$arg_idx];
          }
        return ($d = ($e = self.$instance_variable_get(accessor)).$__send__, $d.$$p = block.$to_proc(), $d).apply($e, [method].concat(Opal.to_a(args)))}, TMP_14.$$s = self, TMP_14.$$arity = -1, TMP_14), $a).call($b, ali)
        } else {
        return ($a = ($c = self).$define_singleton_method, $a.$$p = (TMP_15 = function($d_rest){var self = TMP_15.$$s || this, block, args, $e, $f;

          block = TMP_15.$$p || nil, TMP_15.$$p = null;
          var $args_len = arguments.length, $rest_len = $args_len - 0;
          if ($rest_len < 0) { $rest_len = 0; }
          args = new Array($rest_len);
          for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
            args[$arg_idx - 0] = arguments[$arg_idx];
          }
        return ($e = ($f = self.$__send__(accessor)).$__send__, $e.$$p = block.$to_proc(), $e).apply($f, [method].concat(Opal.to_a(args)))}, TMP_15.$$s = self, TMP_15.$$arity = -1, TMP_15), $a).call($c, ali)
      };
    }, TMP_16.$$arity = -3);

    Opal.alias(self, 'delegate', 'single_delegate');

    Opal.alias(self, 'def_delegators', 'def_single_delegators');

    Opal.alias(self, 'def_delegator', 'def_single_delegator');
  })($scope.base);
};
