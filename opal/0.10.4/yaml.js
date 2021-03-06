/* Generated by Opal 0.10.4 */
Opal.modules["native"] = function(Opal) {
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module, $range = Opal.range, $hash2 = Opal.hash2, $klass = Opal.klass, $gvars = Opal.gvars;

  Opal.add_stubs(['$try_convert', '$native?', '$respond_to?', '$to_n', '$raise', '$inspect', '$Native', '$proc', '$map!', '$end_with?', '$define_method', '$[]', '$convert', '$call', '$to_proc', '$new', '$each', '$native_reader', '$native_writer', '$extend', '$is_a?', '$map', '$alias_method', '$to_a', '$_Array', '$include', '$method_missing', '$bind', '$instance_method', '$[]=', '$slice', '$-', '$length', '$enum_for', '$===', '$>=', '$<<', '$each_pair', '$_initialize', '$name', '$exiting_mid', '$native_module']);
  (function($base) {
    var $Native, self = $Native = $module($base, 'Native');

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_2, TMP_3, TMP_4, TMP_5, TMP_19, TMP_20, TMP_21;

    Opal.defs(self, '$is_a?', TMP_1 = function(object, klass) {
      var self = this;

      
      try {
        return object instanceof self.$try_convert(klass);
      }
      catch (e) {
        return false;
      }
    ;
    }, TMP_1.$$arity = 2);

    Opal.defs(self, '$try_convert', TMP_2 = function $$try_convert(value, default$) {
      var self = this;

      if (default$ == null) {
        default$ = nil;
      }
      
      if (self['$native?'](value)) {
        return value;
      }
      else if (value['$respond_to?']("to_n")) {
        return value.$to_n();
      }
      else {
        return default$;
      }
    ;
    }, TMP_2.$$arity = -2);

    Opal.defs(self, '$convert', TMP_3 = function $$convert(value) {
      var self = this;

      
      if (self['$native?'](value)) {
        return value;
      }
      else if (value['$respond_to?']("to_n")) {
        return value.$to_n();
      }
      else {
        self.$raise($scope.get('ArgumentError'), "" + (value.$inspect()) + " isn't native");
      }
    ;
    }, TMP_3.$$arity = 1);

    Opal.defs(self, '$call', TMP_4 = function $$call(obj, key, $a_rest) {
      var self = this, args, $iter = TMP_4.$$p, block = $iter || nil;

      var $args_len = arguments.length, $rest_len = $args_len - 2;
      if ($rest_len < 0) { $rest_len = 0; }
      args = new Array($rest_len);
      for (var $arg_idx = 2; $arg_idx < $args_len; $arg_idx++) {
        args[$arg_idx - 2] = arguments[$arg_idx];
      }
      TMP_4.$$p = null;
      
      var prop = obj[key];

      if (prop instanceof Function) {
        var converted = new Array(args.length);

        for (var i = 0, l = args.length; i < l; i++) {
          var item = args[i],
              conv = self.$try_convert(item);

          converted[i] = conv === nil ? item : conv;
        }

        if (block !== nil) {
          converted.push(block);
        }

        return self.$Native(prop.apply(obj, converted));
      }
      else {
        return self.$Native(prop);
      }
    ;
    }, TMP_4.$$arity = -3);

    Opal.defs(self, '$proc', TMP_5 = function $$proc() {
      var $a, $b, TMP_6, self = this, $iter = TMP_5.$$p, block = $iter || nil;

      TMP_5.$$p = null;
      if (block !== false && block !== nil && block != null) {
        } else {
        self.$raise($scope.get('LocalJumpError'), "no block given")
      };
      return ($a = ($b = $scope.get('Kernel')).$proc, $a.$$p = (TMP_6 = function($c_rest){var self = TMP_6.$$s || this, args, $d, $e, TMP_7, instance = nil;

        var $args_len = arguments.length, $rest_len = $args_len - 0;
        if ($rest_len < 0) { $rest_len = 0; }
        args = new Array($rest_len);
        for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
          args[$arg_idx - 0] = arguments[$arg_idx];
        }
      ($d = ($e = args)['$map!'], $d.$$p = (TMP_7 = function(arg){var self = TMP_7.$$s || this;
if (arg == null) arg = nil;
        return self.$Native(arg)}, TMP_7.$$s = self, TMP_7.$$arity = 1, TMP_7), $d).call($e);
        instance = self.$Native(this);
        
        // if global is current scope, run the block in the scope it was defined
        if (this === Opal.global) {
          return block.apply(self, args);
        }

        var self_ = block.$$s;
        block.$$s = null;

        try {
          return block.apply(instance, args);
        }
        finally {
          block.$$s = self_;
        }
      ;}, TMP_6.$$s = self, TMP_6.$$arity = -1, TMP_6), $a).call($b);
    }, TMP_5.$$arity = 0);

    (function($base) {
      var $Helpers, self = $Helpers = $module($base, 'Helpers');

      var def = self.$$proto, $scope = self.$$scope, TMP_11, TMP_14, TMP_17, TMP_18;

      Opal.defn(self, '$alias_native', TMP_11 = function $$alias_native(new$, $old, $kwargs) {
        var $a, $b, TMP_8, $c, TMP_9, $d, TMP_10, self = this, $post_args, as, old;

        $post_args = Opal.slice.call(arguments, 1, arguments.length);
        $kwargs = Opal.extract_kwargs($post_args);
        if ($kwargs == null || !$kwargs.$$is_hash) {
          if ($kwargs == null) {
            $kwargs = $hash2([], {});
          } else {
            throw Opal.ArgumentError.$new('expected kwargs');
          }
        }
        if ((as = $kwargs.$$smap['as']) == null) {
          as = nil
        }
        if (0 < $post_args.length) {
          old = $post_args.splice(0,1)[0];
        }
        if (old == null) {
          old = new$;
        }
        if ((($a = old['$end_with?']("=")) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          return ($a = ($b = self).$define_method, $a.$$p = (TMP_8 = function(value){var self = TMP_8.$$s || this;
            if (self["native"] == null) self["native"] = nil;
if (value == null) value = nil;
          self["native"][old['$[]']($range(0, -2, false))] = $scope.get('Native').$convert(value);
            return value;}, TMP_8.$$s = self, TMP_8.$$arity = 1, TMP_8), $a).call($b, new$)
        } else if (as !== false && as !== nil && as != null) {
          return ($a = ($c = self).$define_method, $a.$$p = (TMP_9 = function($d_rest){var self = TMP_9.$$s || this, block, args, $e, $f, $g, value = nil;
            if (self["native"] == null) self["native"] = nil;

            block = TMP_9.$$p || nil, TMP_9.$$p = null;
            var $args_len = arguments.length, $rest_len = $args_len - 0;
            if ($rest_len < 0) { $rest_len = 0; }
            args = new Array($rest_len);
            for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
              args[$arg_idx - 0] = arguments[$arg_idx];
            }
          if ((($e = value = ($f = ($g = $scope.get('Native')).$call, $f.$$p = block.$to_proc(), $f).apply($g, [self["native"], old].concat(Opal.to_a(args)))) !== nil && $e != null && (!$e.$$is_boolean || $e == true))) {
              return as.$new(value.$to_n())
              } else {
              return nil
            }}, TMP_9.$$s = self, TMP_9.$$arity = -1, TMP_9), $a).call($c, new$)
          } else {
          return ($a = ($d = self).$define_method, $a.$$p = (TMP_10 = function($e_rest){var self = TMP_10.$$s || this, block, args, $f, $g;
            if (self["native"] == null) self["native"] = nil;

            block = TMP_10.$$p || nil, TMP_10.$$p = null;
            var $args_len = arguments.length, $rest_len = $args_len - 0;
            if ($rest_len < 0) { $rest_len = 0; }
            args = new Array($rest_len);
            for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
              args[$arg_idx - 0] = arguments[$arg_idx];
            }
          return ($f = ($g = $scope.get('Native')).$call, $f.$$p = block.$to_proc(), $f).apply($g, [self["native"], old].concat(Opal.to_a(args)))}, TMP_10.$$s = self, TMP_10.$$arity = -1, TMP_10), $a).call($d, new$)
        };
      }, TMP_11.$$arity = -2);

      Opal.defn(self, '$native_reader', TMP_14 = function $$native_reader($a_rest) {
        var $b, $c, TMP_12, self = this, names;

        var $args_len = arguments.length, $rest_len = $args_len - 0;
        if ($rest_len < 0) { $rest_len = 0; }
        names = new Array($rest_len);
        for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
          names[$arg_idx - 0] = arguments[$arg_idx];
        }
        return ($b = ($c = names).$each, $b.$$p = (TMP_12 = function(name){var self = TMP_12.$$s || this, $a, $d, TMP_13;
if (name == null) name = nil;
        return ($a = ($d = self).$define_method, $a.$$p = (TMP_13 = function(){var self = TMP_13.$$s || this;
            if (self["native"] == null) self["native"] = nil;

          return self.$Native(self["native"][name])}, TMP_13.$$s = self, TMP_13.$$arity = 0, TMP_13), $a).call($d, name)}, TMP_12.$$s = self, TMP_12.$$arity = 1, TMP_12), $b).call($c);
      }, TMP_14.$$arity = -1);

      Opal.defn(self, '$native_writer', TMP_17 = function $$native_writer($a_rest) {
        var $b, $c, TMP_15, self = this, names;

        var $args_len = arguments.length, $rest_len = $args_len - 0;
        if ($rest_len < 0) { $rest_len = 0; }
        names = new Array($rest_len);
        for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
          names[$arg_idx - 0] = arguments[$arg_idx];
        }
        return ($b = ($c = names).$each, $b.$$p = (TMP_15 = function(name){var self = TMP_15.$$s || this, $a, $d, TMP_16;
if (name == null) name = nil;
        return ($a = ($d = self).$define_method, $a.$$p = (TMP_16 = function(value){var self = TMP_16.$$s || this;
            if (self["native"] == null) self["native"] = nil;
if (value == null) value = nil;
          return self.$Native(self["native"][name] = value)}, TMP_16.$$s = self, TMP_16.$$arity = 1, TMP_16), $a).call($d, "" + (name) + "=")}, TMP_15.$$s = self, TMP_15.$$arity = 1, TMP_15), $b).call($c);
      }, TMP_17.$$arity = -1);

      Opal.defn(self, '$native_accessor', TMP_18 = function $$native_accessor($a_rest) {
        var $b, $c, self = this, names;

        var $args_len = arguments.length, $rest_len = $args_len - 0;
        if ($rest_len < 0) { $rest_len = 0; }
        names = new Array($rest_len);
        for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
          names[$arg_idx - 0] = arguments[$arg_idx];
        }
        ($b = self).$native_reader.apply($b, Opal.to_a(names));
        return ($c = self).$native_writer.apply($c, Opal.to_a(names));
      }, TMP_18.$$arity = -1);
    })($scope.base);

    Opal.defs(self, '$included', TMP_19 = function $$included(klass) {
      var self = this;

      return klass.$extend($scope.get('Helpers'));
    }, TMP_19.$$arity = 1);

    Opal.defn(self, '$initialize', TMP_20 = function $$initialize(native$) {
      var $a, self = this;

      if ((($a = $scope.get('Kernel')['$native?'](native$)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        $scope.get('Kernel').$raise($scope.get('ArgumentError'), "" + (native$.$inspect()) + " isn't native")
      };
      return self["native"] = native$;
    }, TMP_20.$$arity = 1);

    Opal.defn(self, '$to_n', TMP_21 = function $$to_n() {
      var self = this;
      if (self["native"] == null) self["native"] = nil;

      return self["native"];
    }, TMP_21.$$arity = 0);
  })($scope.base);
  (function($base) {
    var $Kernel, self = $Kernel = $module($base, 'Kernel');

    var def = self.$$proto, $scope = self.$$scope, TMP_22, TMP_25, TMP_26;

    Opal.defn(self, '$native?', TMP_22 = function(value) {
      var self = this;

      return value == null || !value.$$class;
    }, TMP_22.$$arity = 1);

    Opal.defn(self, '$Native', TMP_25 = function $$Native(obj) {
      var $a, $b, TMP_23, $c, TMP_24, self = this;

      if ((($a = obj == null) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return nil
      } else if ((($a = self['$native?'](obj)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return (($scope.get('Native')).$$scope.get('Object')).$new(obj)
      } else if ((($a = obj['$is_a?']($scope.get('Array'))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return ($a = ($b = obj).$map, $a.$$p = (TMP_23 = function(o){var self = TMP_23.$$s || this;
if (o == null) o = nil;
        return self.$Native(o)}, TMP_23.$$s = self, TMP_23.$$arity = 1, TMP_23), $a).call($b)
      } else if ((($a = obj['$is_a?']($scope.get('Proc'))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return ($a = ($c = self).$proc, $a.$$p = (TMP_24 = function($d_rest){var self = TMP_24.$$s || this, block, args, $e, $f;

          block = TMP_24.$$p || nil, TMP_24.$$p = null;
          var $args_len = arguments.length, $rest_len = $args_len - 0;
          if ($rest_len < 0) { $rest_len = 0; }
          args = new Array($rest_len);
          for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
            args[$arg_idx - 0] = arguments[$arg_idx];
          }
        return self.$Native(($e = ($f = obj).$call, $e.$$p = block.$to_proc(), $e).apply($f, Opal.to_a(args)))}, TMP_24.$$s = self, TMP_24.$$arity = -1, TMP_24), $a).call($c)
        } else {
        return obj
      };
    }, TMP_25.$$arity = 1);

    self.$alias_method("_Array", "Array");

    Opal.defn(self, '$Array', TMP_26 = function $$Array(object, $a_rest) {
      var $b, $c, self = this, args, $iter = TMP_26.$$p, block = $iter || nil;

      var $args_len = arguments.length, $rest_len = $args_len - 1;
      if ($rest_len < 0) { $rest_len = 0; }
      args = new Array($rest_len);
      for (var $arg_idx = 1; $arg_idx < $args_len; $arg_idx++) {
        args[$arg_idx - 1] = arguments[$arg_idx];
      }
      TMP_26.$$p = null;
      if ((($b = self['$native?'](object)) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
        return ($b = ($c = (($scope.get('Native')).$$scope.get('Array'))).$new, $b.$$p = block.$to_proc(), $b).apply($c, [object].concat(Opal.to_a(args))).$to_a()};
      return self.$_Array(object);
    }, TMP_26.$$arity = -2);
  })($scope.base);
  (function($base, $super) {
    function $Object(){};
    var self = $Object = $klass($base, $super, 'Object', $Object);

    var def = self.$$proto, $scope = self.$$scope, TMP_27, TMP_28, TMP_29, TMP_30, TMP_31, TMP_32, TMP_33, TMP_34, TMP_35, TMP_36, TMP_37, TMP_38, TMP_39, TMP_40, TMP_41;

    def["native"] = nil;
    self.$include(Opal.get('Native'));

    Opal.defn(self, '$==', TMP_27 = function(other) {
      var self = this;

      return self["native"] === $scope.get('Native').$try_convert(other);
    }, TMP_27.$$arity = 1);

    Opal.defn(self, '$has_key?', TMP_28 = function(name) {
      var self = this;

      return Opal.hasOwnProperty.call(self["native"], name);
    }, TMP_28.$$arity = 1);

    Opal.alias(self, 'key?', 'has_key?');

    Opal.alias(self, 'include?', 'has_key?');

    Opal.alias(self, 'member?', 'has_key?');

    Opal.defn(self, '$each', TMP_29 = function $$each($a_rest) {
      var $b, self = this, args, $iter = TMP_29.$$p, $yield = $iter || nil;

      var $args_len = arguments.length, $rest_len = $args_len - 0;
      if ($rest_len < 0) { $rest_len = 0; }
      args = new Array($rest_len);
      for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
        args[$arg_idx - 0] = arguments[$arg_idx];
      }
      TMP_29.$$p = null;
      if (($yield !== nil)) {
        
        for (var key in self["native"]) {
          Opal.yieldX($yield, [key, self["native"][key]])
        }
      ;
        return self;
        } else {
        return ($b = self).$method_missing.apply($b, ["each"].concat(Opal.to_a(args)))
      };
    }, TMP_29.$$arity = -1);

    Opal.defn(self, '$[]', TMP_30 = function(key) {
      var self = this;

      
      var prop = self["native"][key];

      if (prop instanceof Function) {
        return prop;
      }
      else {
        return Opal.get('Native').$call(self["native"], key)
      }
    ;
    }, TMP_30.$$arity = 1);

    Opal.defn(self, '$[]=', TMP_31 = function(key, value) {
      var $a, self = this, native$ = nil;

      native$ = $scope.get('Native').$try_convert(value);
      if ((($a = native$ === nil) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return self["native"][key] = value;
        } else {
        return self["native"][key] = native$;
      };
    }, TMP_31.$$arity = 2);

    Opal.defn(self, '$merge!', TMP_32 = function(other) {
      var self = this;

      
      other = $scope.get('Native').$convert(other);

      for (var prop in other) {
        self["native"][prop] = other[prop];
      }
    ;
      return self;
    }, TMP_32.$$arity = 1);

    Opal.defn(self, '$respond_to?', TMP_33 = function(name, include_all) {
      var self = this;

      if (include_all == null) {
        include_all = false;
      }
      return $scope.get('Kernel').$instance_method("respond_to?").$bind(self).$call(name, include_all);
    }, TMP_33.$$arity = -2);

    Opal.defn(self, '$respond_to_missing?', TMP_34 = function(name, include_all) {
      var self = this;

      if (include_all == null) {
        include_all = false;
      }
      return Opal.hasOwnProperty.call(self["native"], name);
    }, TMP_34.$$arity = -2);

    Opal.defn(self, '$method_missing', TMP_35 = function $$method_missing(mid, $a_rest) {
      var $b, $c, self = this, args, $iter = TMP_35.$$p, block = $iter || nil;

      var $args_len = arguments.length, $rest_len = $args_len - 1;
      if ($rest_len < 0) { $rest_len = 0; }
      args = new Array($rest_len);
      for (var $arg_idx = 1; $arg_idx < $args_len; $arg_idx++) {
        args[$arg_idx - 1] = arguments[$arg_idx];
      }
      TMP_35.$$p = null;
      
      if (mid.charAt(mid.length - 1) === '=') {
        return self['$[]='](mid.$slice(0, $rb_minus(mid.$length(), 1)), args['$[]'](0));
      }
      else {
        return ($b = ($c = Opal.get('Native')).$call, $b.$$p = block.$to_proc(), $b).apply($c, [self["native"], mid].concat(Opal.to_a(args)));
      }
    ;
    }, TMP_35.$$arity = -2);

    Opal.defn(self, '$nil?', TMP_36 = function() {
      var self = this;

      return false;
    }, TMP_36.$$arity = 0);

    Opal.defn(self, '$is_a?', TMP_37 = function(klass) {
      var self = this;

      return Opal.is_a(self, klass);
    }, TMP_37.$$arity = 1);

    Opal.alias(self, 'kind_of?', 'is_a?');

    Opal.defn(self, '$instance_of?', TMP_38 = function(klass) {
      var self = this;

      return self.$$class === klass;
    }, TMP_38.$$arity = 1);

    Opal.defn(self, '$class', TMP_39 = function() {
      var self = this;

      return self.$$class;
    }, TMP_39.$$arity = 0);

    Opal.defn(self, '$to_a', TMP_40 = function $$to_a(options) {
      var $a, $b, self = this, $iter = TMP_40.$$p, block = $iter || nil;

      if (options == null) {
        options = $hash2([], {});
      }
      TMP_40.$$p = null;
      return ($a = ($b = (($scope.get('Native')).$$scope.get('Array'))).$new, $a.$$p = block.$to_proc(), $a).call($b, self["native"], options).$to_a();
    }, TMP_40.$$arity = -1);

    return (Opal.defn(self, '$inspect', TMP_41 = function $$inspect() {
      var self = this;

      return "#<Native:" + (String(self["native"])) + ">";
    }, TMP_41.$$arity = 0), nil) && 'inspect';
  })($scope.get('Native'), $scope.get('BasicObject'));
  (function($base, $super) {
    function $Array(){};
    var self = $Array = $klass($base, $super, 'Array', $Array);

    var def = self.$$proto, $scope = self.$$scope, TMP_42, TMP_43, TMP_44, TMP_45, TMP_46, TMP_47, TMP_48;

    def.named = def["native"] = def.get = def.block = def.set = def.length = nil;
    self.$include($scope.get('Native'));

    self.$include($scope.get('Enumerable'));

    Opal.defn(self, '$initialize', TMP_42 = function $$initialize(native$, options) {
      var $a, $b, self = this, $iter = TMP_42.$$p, block = $iter || nil;

      if (options == null) {
        options = $hash2([], {});
      }
      TMP_42.$$p = null;
      ($a = ($b = self, Opal.find_super_dispatcher(self, 'initialize', TMP_42, false)), $a.$$p = null, $a).call($b, native$);
      self.get = ((($a = options['$[]']("get")) !== false && $a !== nil && $a != null) ? $a : options['$[]']("access"));
      self.named = options['$[]']("named");
      self.set = ((($a = options['$[]']("set")) !== false && $a !== nil && $a != null) ? $a : options['$[]']("access"));
      self.length = ((($a = options['$[]']("length")) !== false && $a !== nil && $a != null) ? $a : "length");
      self.block = block;
      if ((($a = self.$length() == null) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return self.$raise($scope.get('ArgumentError'), "no length found on the array-like object")
        } else {
        return nil
      };
    }, TMP_42.$$arity = -2);

    Opal.defn(self, '$each', TMP_43 = function $$each() {
      var self = this, $iter = TMP_43.$$p, block = $iter || nil;

      TMP_43.$$p = null;
      if (block !== false && block !== nil && block != null) {
        } else {
        return self.$enum_for("each")
      };
      
      for (var i = 0, length = self.$length(); i < length; i++) {
        Opal.yield1(block, self['$[]'](i));
      }
    ;
      return self;
    }, TMP_43.$$arity = 0);

    Opal.defn(self, '$[]', TMP_44 = function(index) {
      var $a, self = this, result = nil, $case = nil;

      result = (function() {$case = index;if ($scope.get('String')['$===']($case) || $scope.get('Symbol')['$===']($case)) {if ((($a = self.named) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return self["native"][self.named](index);
        } else {
        return self["native"][index];
      }}else if ($scope.get('Integer')['$===']($case)) {if ((($a = self.get) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return self["native"][self.get](index);
        } else {
        return self["native"][index];
      }}else { return nil }})();
      if (result !== false && result !== nil && result != null) {
        if ((($a = self.block) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          return self.block.$call(result)
          } else {
          return self.$Native(result)
        }
        } else {
        return nil
      };
    }, TMP_44.$$arity = 1);

    Opal.defn(self, '$[]=', TMP_45 = function(index, value) {
      var $a, self = this;

      if ((($a = self.set) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return self["native"][self.set](index, $scope.get('Native').$convert(value));
        } else {
        return self["native"][index] = $scope.get('Native').$convert(value);
      };
    }, TMP_45.$$arity = 2);

    Opal.defn(self, '$last', TMP_46 = function $$last(count) {
      var $a, $b, self = this, index = nil, result = nil;

      if (count == null) {
        count = nil;
      }
      if (count !== false && count !== nil && count != null) {
        index = $rb_minus(self.$length(), 1);
        result = [];
        while ((($b = $rb_ge(index, 0)) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
        result['$<<'](self['$[]'](index));
        index = $rb_minus(index, 1);};
        return result;
        } else {
        return self['$[]']($rb_minus(self.$length(), 1))
      };
    }, TMP_46.$$arity = -1);

    Opal.defn(self, '$length', TMP_47 = function $$length() {
      var self = this;

      return self["native"][self.length];
    }, TMP_47.$$arity = 0);

    Opal.alias(self, 'to_ary', 'to_a');

    return (Opal.defn(self, '$inspect', TMP_48 = function $$inspect() {
      var self = this;

      return self.$to_a().$inspect();
    }, TMP_48.$$arity = 0), nil) && 'inspect';
  })($scope.get('Native'), null);
  (function($base, $super) {
    function $Numeric(){};
    var self = $Numeric = $klass($base, $super, 'Numeric', $Numeric);

    var def = self.$$proto, $scope = self.$$scope, TMP_49;

    return (Opal.defn(self, '$to_n', TMP_49 = function $$to_n() {
      var self = this;

      return self.valueOf();
    }, TMP_49.$$arity = 0), nil) && 'to_n'
  })($scope.base, null);
  (function($base, $super) {
    function $Proc(){};
    var self = $Proc = $klass($base, $super, 'Proc', $Proc);

    var def = self.$$proto, $scope = self.$$scope, TMP_50;

    return (Opal.defn(self, '$to_n', TMP_50 = function $$to_n() {
      var self = this;

      return self;
    }, TMP_50.$$arity = 0), nil) && 'to_n'
  })($scope.base, null);
  (function($base, $super) {
    function $String(){};
    var self = $String = $klass($base, $super, 'String', $String);

    var def = self.$$proto, $scope = self.$$scope, TMP_51;

    return (Opal.defn(self, '$to_n', TMP_51 = function $$to_n() {
      var self = this;

      return self.valueOf();
    }, TMP_51.$$arity = 0), nil) && 'to_n'
  })($scope.base, null);
  (function($base, $super) {
    function $Regexp(){};
    var self = $Regexp = $klass($base, $super, 'Regexp', $Regexp);

    var def = self.$$proto, $scope = self.$$scope, TMP_52;

    return (Opal.defn(self, '$to_n', TMP_52 = function $$to_n() {
      var self = this;

      return self.valueOf();
    }, TMP_52.$$arity = 0), nil) && 'to_n'
  })($scope.base, null);
  (function($base, $super) {
    function $MatchData(){};
    var self = $MatchData = $klass($base, $super, 'MatchData', $MatchData);

    var def = self.$$proto, $scope = self.$$scope, TMP_53;

    def.matches = nil;
    return (Opal.defn(self, '$to_n', TMP_53 = function $$to_n() {
      var self = this;

      return self.matches;
    }, TMP_53.$$arity = 0), nil) && 'to_n'
  })($scope.base, null);
  (function($base, $super) {
    function $Struct(){};
    var self = $Struct = $klass($base, $super, 'Struct', $Struct);

    var def = self.$$proto, $scope = self.$$scope, TMP_55;

    return (Opal.defn(self, '$to_n', TMP_55 = function $$to_n() {
      var $a, $b, TMP_54, self = this, result = nil;

      result = {};
      ($a = ($b = self).$each_pair, $a.$$p = (TMP_54 = function(name, value){var self = TMP_54.$$s || this;
if (name == null) name = nil;if (value == null) value = nil;
      return result[name] = $scope.get('Native').$try_convert(value, value);}, TMP_54.$$s = self, TMP_54.$$arity = 2, TMP_54), $a).call($b);
      return result;
    }, TMP_55.$$arity = 0), nil) && 'to_n'
  })($scope.base, null);
  (function($base, $super) {
    function $Array(){};
    var self = $Array = $klass($base, $super, 'Array', $Array);

    var def = self.$$proto, $scope = self.$$scope, TMP_56;

    return (Opal.defn(self, '$to_n', TMP_56 = function $$to_n() {
      var self = this;

      
      var result = [];

      for (var i = 0, length = self.length; i < length; i++) {
        var obj = self[i];

        result.push($scope.get('Native').$try_convert(obj, obj));
      }

      return result;
    
    }, TMP_56.$$arity = 0), nil) && 'to_n'
  })($scope.base, null);
  (function($base, $super) {
    function $Boolean(){};
    var self = $Boolean = $klass($base, $super, 'Boolean', $Boolean);

    var def = self.$$proto, $scope = self.$$scope, TMP_57;

    return (Opal.defn(self, '$to_n', TMP_57 = function $$to_n() {
      var self = this;

      return self.valueOf();
    }, TMP_57.$$arity = 0), nil) && 'to_n'
  })($scope.base, null);
  (function($base, $super) {
    function $Time(){};
    var self = $Time = $klass($base, $super, 'Time', $Time);

    var def = self.$$proto, $scope = self.$$scope, TMP_58;

    return (Opal.defn(self, '$to_n', TMP_58 = function $$to_n() {
      var self = this;

      return self;
    }, TMP_58.$$arity = 0), nil) && 'to_n'
  })($scope.base, null);
  (function($base, $super) {
    function $NilClass(){};
    var self = $NilClass = $klass($base, $super, 'NilClass', $NilClass);

    var def = self.$$proto, $scope = self.$$scope, TMP_59;

    return (Opal.defn(self, '$to_n', TMP_59 = function $$to_n() {
      var self = this;

      return null;
    }, TMP_59.$$arity = 0), nil) && 'to_n'
  })($scope.base, null);
  (function($base, $super) {
    function $Hash(){};
    var self = $Hash = $klass($base, $super, 'Hash', $Hash);

    var def = self.$$proto, $scope = self.$$scope, TMP_60, TMP_61;

    self.$alias_method("_initialize", "initialize");

    Opal.defn(self, '$initialize', TMP_60 = function $$initialize(defaults) {
      var $a, $b, self = this, $iter = TMP_60.$$p, block = $iter || nil;

      TMP_60.$$p = null;
      
      if (defaults != null && defaults.constructor === Object) {
        var smap = self.$$smap,
            keys = self.$$keys,
            key, value;

        for (key in defaults) {
          value = defaults[key];

          if (value && value.constructor === Object) {
            smap[key] = $scope.get('Hash').$new(value);
          } else if (value && value.$$is_array) {
            value = value.map(function(item) {
              if (item && item.constructor === Object) {
                return $scope.get('Hash').$new(item);
              }

              return item;
            });
            smap[key] = value
          } else {
            smap[key] = self.$Native(value);
          }

          keys.push(key);
        }

        return self;
      }

      return ($a = ($b = self).$_initialize, $a.$$p = block.$to_proc(), $a).call($b, defaults);
    
    }, TMP_60.$$arity = -1);

    return (Opal.defn(self, '$to_n', TMP_61 = function $$to_n() {
      var self = this;

      
      var result = {},
          keys = self.$$keys,
          smap = self.$$smap,
          key, value;

      for (var i = 0, length = keys.length; i < length; i++) {
        key = keys[i];

        if (key.$$is_string) {
          value = smap[key];
        } else {
          key = key.key;
          value = key.value;
        }

        result[key] = $scope.get('Native').$try_convert(value, value);
      }

      return result;
    
    }, TMP_61.$$arity = 0), nil) && 'to_n';
  })($scope.base, null);
  (function($base, $super) {
    function $Module(){};
    var self = $Module = $klass($base, $super, 'Module', $Module);

    var def = self.$$proto, $scope = self.$$scope, TMP_62;

    return (Opal.defn(self, '$native_module', TMP_62 = function $$native_module() {
      var self = this;

      return Opal.global[self.$name()] = self;
    }, TMP_62.$$arity = 0), nil) && 'native_module'
  })($scope.base, null);
  (function($base, $super) {
    function $Class(){};
    var self = $Class = $klass($base, $super, 'Class', $Class);

    var def = self.$$proto, $scope = self.$$scope, TMP_63, TMP_64;

    Opal.defn(self, '$native_alias', TMP_63 = function $$native_alias(new_jsid, existing_mid) {
      var self = this;

      
      var aliased = self.$$proto['$' + existing_mid];
      if (!aliased) {
        self.$raise($scope.get('NameError').$new("undefined method `" + (existing_mid) + "' for class `" + (self.$inspect()) + "'", self.$exiting_mid()));
      }
      self.$$proto[new_jsid] = aliased;
    ;
    }, TMP_63.$$arity = 2);

    return (Opal.defn(self, '$native_class', TMP_64 = function $$native_class() {
      var self = this;

      self.$native_module();
      self["new"] = self.$new;
    }, TMP_64.$$arity = 0), nil) && 'native_class';
  })($scope.base, null);
  return $gvars.$ = $gvars.global = self.$Native(Opal.global);
};
/* Generated by Opal 0.10.4 */
Opal.modules["nodejs/yaml"] = function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module;

  Opal.add_stubs(['$require', '$node_require', '$native?', '$new']);
  self.$require("native");
  return (function($base) {
    var $YAML, self = $YAML = $module($base, 'YAML');

    var def = self.$$proto, $scope = self.$$scope, TMP_1;
    if (self.__yaml__ == null) self.__yaml__ = nil;

    self.__yaml__ = self.$node_require("js-yaml");

    var __yaml__ = self.__yaml__;

    Opal.defs(self, '$load_path', TMP_1 = function $$load_path(path) {
      var $a, self = this, loaded = nil;

      loaded = __yaml__.safeLoad($scope.get('File').__fs__.readFileSync(path, 'utf8'));
      if ((($a = self['$native?'](loaded)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        loaded = $scope.get('Hash').$new(loaded)};
      return loaded;
    }, TMP_1.$$arity = 1);
  })($scope.base);
};
/* Generated by Opal 0.10.4 */
Opal.modules["yaml"] = function(Opal) {
  var $a, self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$require']);
  if ((($a = ($scope.NodeJS != null)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
    return self.$require("nodejs/yaml")
    } else {
    return nil
  }
};
