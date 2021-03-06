/* Generated by Opal 0.11.0 */
Opal.modules["set"] = function(Opal) {
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy, $send = Opal.send, $module = Opal.module;

  Opal.add_stubs(['$include', '$new', '$nil?', '$===', '$raise', '$each', '$add', '$call', '$merge', '$class', '$respond_to?', '$subtract', '$dup', '$join', '$to_a', '$equal?', '$instance_of?', '$==', '$instance_variable_get', '$is_a?', '$size', '$all?', '$include?', '$[]=', '$-', '$enum_for', '$[]', '$<<', '$replace', '$delete', '$select', '$each_key', '$to_proc', '$empty?', '$eql?', '$instance_eval', '$clear', '$<', '$<=', '$keys']);
  
  (function($base, $super, $parent_nesting) {
    function $Set(){};
    var self = $Set = $klass($base, $super, 'Set', $Set);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_Set_$$_1, TMP_Set_initialize_2, TMP_Set_dup_4, TMP_Set_$_5, TMP_Set_inspect_6, TMP_Set_$eq$eq_8, TMP_Set_add_9, TMP_Set_classify_10, TMP_Set_collect$B_13, TMP_Set_delete_15, TMP_Set_delete$q_16, TMP_Set_delete_if_17, TMP_Set_add$q_20, TMP_Set_each_21, TMP_Set_empty$q_22, TMP_Set_eql$q_24, TMP_Set_clear_25, TMP_Set_include$q_26, TMP_Set_merge_28, TMP_Set_replace_29, TMP_Set_size_30, TMP_Set_subtract_32, TMP_Set_$_33, TMP_Set_superset$q_35, TMP_Set_proper_superset$q_37, TMP_Set_subset$q_39, TMP_Set_proper_subset$q_41, TMP_Set_to_a_42;

    def.hash = nil;
    
    self.$include(Opal.const_get_relative($nesting, 'Enumerable'));
    Opal.defs(self, '$[]', TMP_Set_$$_1 = function($a_rest) {
      var self = this, ary;

      var $args_len = arguments.length, $rest_len = $args_len - 0;
      if ($rest_len < 0) { $rest_len = 0; }
      ary = new Array($rest_len);
      for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
        ary[$arg_idx - 0] = arguments[$arg_idx];
      }
      return self.$new(ary)
    }, TMP_Set_$$_1.$$arity = -1);
    
    Opal.defn(self, '$initialize', TMP_Set_initialize_2 = function $$initialize(enum$) {
      var TMP_3, self = this, $iter = TMP_Set_initialize_2.$$p, block = $iter || nil;

      if (enum$ == null) {
        enum$ = nil;
      }
      if ($iter) TMP_Set_initialize_2.$$p = null;
      
      self.hash = Opal.const_get_relative($nesting, 'Hash').$new();
      if ($truthy(enum$['$nil?']())) {
        return nil};
      if ($truthy(Opal.const_get_relative($nesting, 'Enumerable')['$==='](enum$))) {
        } else {
        self.$raise(Opal.const_get_relative($nesting, 'ArgumentError'), "value must be enumerable")
      };
      if ($truthy(block)) {
        return $send(enum$, 'each', [], (TMP_3 = function(item){var self = TMP_3.$$s || this;
if (item == null) item = nil;
        return self.$add(block.$call(item))}, TMP_3.$$s = self, TMP_3.$$arity = 1, TMP_3))
        } else {
        return self.$merge(enum$)
      };
    }, TMP_Set_initialize_2.$$arity = -1);
    
    Opal.defn(self, '$dup', TMP_Set_dup_4 = function $$dup() {
      var self = this, result = nil;

      
      result = self.$class().$new();
      return result.$merge(self);
    }, TMP_Set_dup_4.$$arity = 0);
    
    Opal.defn(self, '$-', TMP_Set_$_5 = function(enum$) {
      var self = this;

      
      if ($truthy(enum$['$respond_to?']("each"))) {
        } else {
        self.$raise(Opal.const_get_relative($nesting, 'ArgumentError'), "value must be enumerable")
      };
      return self.$dup().$subtract(enum$);
    }, TMP_Set_$_5.$$arity = 1);
    Opal.alias(self, "difference", "-");
    
    Opal.defn(self, '$inspect', TMP_Set_inspect_6 = function $$inspect() {
      var self = this;

      return "" + "#<Set: {" + (self.$to_a().$join(",")) + "}>"
    }, TMP_Set_inspect_6.$$arity = 0);
    
    Opal.defn(self, '$==', TMP_Set_$eq$eq_8 = function(other) {
      var $a, TMP_7, self = this;

      if ($truthy(self['$equal?'](other))) {
        return true
      } else if ($truthy(other['$instance_of?'](self.$class()))) {
        return self.hash['$=='](other.$instance_variable_get("@hash"))
      } else if ($truthy(($truthy($a = other['$is_a?'](Opal.const_get_relative($nesting, 'Set'))) ? self.$size()['$=='](other.$size()) : $a))) {
        return $send(other, 'all?', [], (TMP_7 = function(o){var self = TMP_7.$$s || this;
          if (self.hash == null) self.hash = nil;
if (o == null) o = nil;
        return self.hash['$include?'](o)}, TMP_7.$$s = self, TMP_7.$$arity = 1, TMP_7))
        } else {
        return false
      }
    }, TMP_Set_$eq$eq_8.$$arity = 1);
    
    Opal.defn(self, '$add', TMP_Set_add_9 = function $$add(o) {
      var self = this, $writer = nil;

      
      
      $writer = [o, true];
      $send(self.hash, '[]=', Opal.to_a($writer));
      $writer[$rb_minus($writer["length"], 1)];;
      return self;
    }, TMP_Set_add_9.$$arity = 1);
    Opal.alias(self, "<<", "add");
    
    Opal.defn(self, '$classify', TMP_Set_classify_10 = function $$classify() {
      var TMP_11, TMP_12, self = this, $iter = TMP_Set_classify_10.$$p, block = $iter || nil, result = nil;

      if ($iter) TMP_Set_classify_10.$$p = null;
      
      if ((block !== nil)) {
        } else {
        return self.$enum_for("classify")
      };
      result = $send(Opal.const_get_relative($nesting, 'Hash'), 'new', [], (TMP_11 = function(h, k){var self = TMP_11.$$s || this, $writer = nil;
if (h == null) h = nil;if (k == null) k = nil;
      
        $writer = [k, self.$class().$new()];
        $send(h, '[]=', Opal.to_a($writer));
        return $writer[$rb_minus($writer["length"], 1)];}, TMP_11.$$s = self, TMP_11.$$arity = 2, TMP_11));
      $send(self, 'each', [], (TMP_12 = function(item){var self = TMP_12.$$s || this;
if (item == null) item = nil;
      return result['$[]'](Opal.yield1(block, item)).$add(item)}, TMP_12.$$s = self, TMP_12.$$arity = 1, TMP_12));
      return result;
    }, TMP_Set_classify_10.$$arity = 0);
    
    Opal.defn(self, '$collect!', TMP_Set_collect$B_13 = function() {
      var TMP_14, self = this, $iter = TMP_Set_collect$B_13.$$p, block = $iter || nil, result = nil;

      if ($iter) TMP_Set_collect$B_13.$$p = null;
      
      if ((block !== nil)) {
        } else {
        return self.$enum_for("collect!")
      };
      result = self.$class().$new();
      $send(self, 'each', [], (TMP_14 = function(item){var self = TMP_14.$$s || this;
if (item == null) item = nil;
      return result['$<<'](Opal.yield1(block, item))}, TMP_14.$$s = self, TMP_14.$$arity = 1, TMP_14));
      return self.$replace(result);
    }, TMP_Set_collect$B_13.$$arity = 0);
    Opal.alias(self, "map!", "collect!");
    
    Opal.defn(self, '$delete', TMP_Set_delete_15 = function(o) {
      var self = this;

      
      self.hash.$delete(o);
      return self;
    }, TMP_Set_delete_15.$$arity = 1);
    
    Opal.defn(self, '$delete?', TMP_Set_delete$q_16 = function(o) {
      var self = this;

      if ($truthy(self['$include?'](o))) {
        
        self.$delete(o);
        return self;
        } else {
        return nil
      }
    }, TMP_Set_delete$q_16.$$arity = 1);
    
    Opal.defn(self, '$delete_if', TMP_Set_delete_if_17 = function $$delete_if() {try {

      var $a, TMP_18, TMP_19, self = this, $iter = TMP_Set_delete_if_17.$$p, $yield = $iter || nil;

      if ($iter) TMP_Set_delete_if_17.$$p = null;
      
      ($truthy($a = ($yield !== nil)) ? $a : Opal.ret(self.$enum_for("delete_if")));
      $send($send(self, 'select', [], (TMP_18 = function(o){var self = TMP_18.$$s || this;
if (o == null) o = nil;
      return Opal.yield1($yield, o);}, TMP_18.$$s = self, TMP_18.$$arity = 1, TMP_18)), 'each', [], (TMP_19 = function(o){var self = TMP_19.$$s || this;
        if (self.hash == null) self.hash = nil;
if (o == null) o = nil;
      return self.hash.$delete(o)}, TMP_19.$$s = self, TMP_19.$$arity = 1, TMP_19));
      return self;
      } catch ($returner) { if ($returner === Opal.returner) { return $returner.$v } throw $returner; }
    }, TMP_Set_delete_if_17.$$arity = 0);
    
    Opal.defn(self, '$add?', TMP_Set_add$q_20 = function(o) {
      var self = this;

      if ($truthy(self['$include?'](o))) {
        return nil
        } else {
        return self.$add(o)
      }
    }, TMP_Set_add$q_20.$$arity = 1);
    
    Opal.defn(self, '$each', TMP_Set_each_21 = function $$each() {
      var self = this, $iter = TMP_Set_each_21.$$p, block = $iter || nil;

      if ($iter) TMP_Set_each_21.$$p = null;
      
      if ((block !== nil)) {
        } else {
        return self.$enum_for("each")
      };
      $send(self.hash, 'each_key', [], block.$to_proc());
      return self;
    }, TMP_Set_each_21.$$arity = 0);
    
    Opal.defn(self, '$empty?', TMP_Set_empty$q_22 = function() {
      var self = this;

      return self.hash['$empty?']()
    }, TMP_Set_empty$q_22.$$arity = 0);
    
    Opal.defn(self, '$eql?', TMP_Set_eql$q_24 = function(other) {
      var TMP_23, self = this;

      return self.hash['$eql?']($send(other, 'instance_eval', [], (TMP_23 = function(){var self = TMP_23.$$s || this;
        if (self.hash == null) self.hash = nil;

      return self.hash}, TMP_23.$$s = self, TMP_23.$$arity = 0, TMP_23)))
    }, TMP_Set_eql$q_24.$$arity = 1);
    
    Opal.defn(self, '$clear', TMP_Set_clear_25 = function $$clear() {
      var self = this;

      
      self.hash.$clear();
      return self;
    }, TMP_Set_clear_25.$$arity = 0);
    
    Opal.defn(self, '$include?', TMP_Set_include$q_26 = function(o) {
      var self = this;

      return self.hash['$include?'](o)
    }, TMP_Set_include$q_26.$$arity = 1);
    Opal.alias(self, "member?", "include?");
    
    Opal.defn(self, '$merge', TMP_Set_merge_28 = function $$merge(enum$) {
      var TMP_27, self = this;

      
      $send(enum$, 'each', [], (TMP_27 = function(item){var self = TMP_27.$$s || this;
if (item == null) item = nil;
      return self.$add(item)}, TMP_27.$$s = self, TMP_27.$$arity = 1, TMP_27));
      return self;
    }, TMP_Set_merge_28.$$arity = 1);
    
    Opal.defn(self, '$replace', TMP_Set_replace_29 = function $$replace(enum$) {
      var self = this;

      
      self.$clear();
      self.$merge(enum$);
      return self;
    }, TMP_Set_replace_29.$$arity = 1);
    
    Opal.defn(self, '$size', TMP_Set_size_30 = function $$size() {
      var self = this;

      return self.hash.$size()
    }, TMP_Set_size_30.$$arity = 0);
    Opal.alias(self, "length", "size");
    
    Opal.defn(self, '$subtract', TMP_Set_subtract_32 = function $$subtract(enum$) {
      var TMP_31, self = this;

      
      $send(enum$, 'each', [], (TMP_31 = function(item){var self = TMP_31.$$s || this;
if (item == null) item = nil;
      return self.$delete(item)}, TMP_31.$$s = self, TMP_31.$$arity = 1, TMP_31));
      return self;
    }, TMP_Set_subtract_32.$$arity = 1);
    
    Opal.defn(self, '$|', TMP_Set_$_33 = function(enum$) {
      var self = this;

      
      if ($truthy(enum$['$respond_to?']("each"))) {
        } else {
        self.$raise(Opal.const_get_relative($nesting, 'ArgumentError'), "value must be enumerable")
      };
      return self.$dup().$merge(enum$);
    }, TMP_Set_$_33.$$arity = 1);
    
    Opal.defn(self, '$superset?', TMP_Set_superset$q_35 = function(set) {
      var $a, TMP_34, self = this;

      
      ($truthy($a = set['$is_a?'](Opal.const_get_relative($nesting, 'Set'))) ? $a : self.$raise(Opal.const_get_relative($nesting, 'ArgumentError'), "value must be a set"));
      if ($truthy($rb_lt(self.$size(), set.$size()))) {
        return false};
      return $send(set, 'all?', [], (TMP_34 = function(o){var self = TMP_34.$$s || this;
if (o == null) o = nil;
      return self['$include?'](o)}, TMP_34.$$s = self, TMP_34.$$arity = 1, TMP_34));
    }, TMP_Set_superset$q_35.$$arity = 1);
    Opal.alias(self, ">=", "superset?");
    
    Opal.defn(self, '$proper_superset?', TMP_Set_proper_superset$q_37 = function(set) {
      var $a, TMP_36, self = this;

      
      ($truthy($a = set['$is_a?'](Opal.const_get_relative($nesting, 'Set'))) ? $a : self.$raise(Opal.const_get_relative($nesting, 'ArgumentError'), "value must be a set"));
      if ($truthy($rb_le(self.$size(), set.$size()))) {
        return false};
      return $send(set, 'all?', [], (TMP_36 = function(o){var self = TMP_36.$$s || this;
if (o == null) o = nil;
      return self['$include?'](o)}, TMP_36.$$s = self, TMP_36.$$arity = 1, TMP_36));
    }, TMP_Set_proper_superset$q_37.$$arity = 1);
    Opal.alias(self, ">", "proper_superset?");
    
    Opal.defn(self, '$subset?', TMP_Set_subset$q_39 = function(set) {
      var $a, TMP_38, self = this;

      
      ($truthy($a = set['$is_a?'](Opal.const_get_relative($nesting, 'Set'))) ? $a : self.$raise(Opal.const_get_relative($nesting, 'ArgumentError'), "value must be a set"));
      if ($truthy($rb_lt(set.$size(), self.$size()))) {
        return false};
      return $send(self, 'all?', [], (TMP_38 = function(o){var self = TMP_38.$$s || this;
if (o == null) o = nil;
      return set['$include?'](o)}, TMP_38.$$s = self, TMP_38.$$arity = 1, TMP_38));
    }, TMP_Set_subset$q_39.$$arity = 1);
    Opal.alias(self, "<=", "subset?");
    
    Opal.defn(self, '$proper_subset?', TMP_Set_proper_subset$q_41 = function(set) {
      var $a, TMP_40, self = this;

      
      ($truthy($a = set['$is_a?'](Opal.const_get_relative($nesting, 'Set'))) ? $a : self.$raise(Opal.const_get_relative($nesting, 'ArgumentError'), "value must be a set"));
      if ($truthy($rb_le(set.$size(), self.$size()))) {
        return false};
      return $send(self, 'all?', [], (TMP_40 = function(o){var self = TMP_40.$$s || this;
if (o == null) o = nil;
      return set['$include?'](o)}, TMP_40.$$s = self, TMP_40.$$arity = 1, TMP_40));
    }, TMP_Set_proper_subset$q_41.$$arity = 1);
    Opal.alias(self, "<", "proper_subset?");
    Opal.alias(self, "+", "|");
    Opal.alias(self, "union", "|");
    return (Opal.defn(self, '$to_a', TMP_Set_to_a_42 = function $$to_a() {
      var self = this;

      return self.hash.$keys()
    }, TMP_Set_to_a_42.$$arity = 0), nil) && 'to_a';
  })($nesting[0], null, $nesting);
  return (function($base, $parent_nesting) {
    var $Enumerable, self = $Enumerable = $module($base, 'Enumerable');

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_Enumerable_to_set_43;

    
    Opal.defn(self, '$to_set', TMP_Enumerable_to_set_43 = function $$to_set(klass, $a_rest) {
      var self = this, args, $iter = TMP_Enumerable_to_set_43.$$p, block = $iter || nil;

      if (klass == null) {
        klass = Opal.const_get_relative($nesting, 'Set');
      }
      var $args_len = arguments.length, $rest_len = $args_len - 1;
      if ($rest_len < 0) { $rest_len = 0; }
      args = new Array($rest_len);
      for (var $arg_idx = 1; $arg_idx < $args_len; $arg_idx++) {
        args[$arg_idx - 1] = arguments[$arg_idx];
      }
      if ($iter) TMP_Enumerable_to_set_43.$$p = null;
      return $send(klass, 'new', [self].concat(Opal.to_a(args)), block.$to_proc())
    }, TMP_Enumerable_to_set_43.$$arity = -1)
  })($nesting[0], $nesting);
};
