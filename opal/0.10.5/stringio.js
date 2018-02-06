/* Generated by Opal 0.10.5 */
Opal.modules["stringio"] = function(Opal) {
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $range = Opal.range;

  Opal.add_stubs(['$include', '$new', '$call', '$close', '$attr_accessor', '$length', '$include?', '$!', '$check_readable', '$==', '$===', '$>=', '$raise', '$>', '$+', '$-', '$seek', '$enum_for', '$eof?', '$ord', '$[]', '$check_writable', '$String', '$write', '$closed_write?', '$closed_read?']);
  return (function($base, $super) {
    function $StringIO(){};
    var self = $StringIO = $klass($base, $super, 'StringIO', $StringIO);

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_2, TMP_3, TMP_4, TMP_5, TMP_6, TMP_7, TMP_8, TMP_9, TMP_10, TMP_11, TMP_12, TMP_13, TMP_14, TMP_15, TMP_16, TMP_17, TMP_18;

    def.position = def.string = def.closed = nil;
    self.$include((($scope.get('IO')).$$scope.get('Readable')));

    self.$include((($scope.get('IO')).$$scope.get('Writable')));

    Opal.defs(self, '$open', TMP_1 = function $$open(string, mode) {
      var self = this, $iter = TMP_1.$$p, block = $iter || nil, io = nil, res = nil;

      if (string == null) {
        string = "";
      }
      if (mode == null) {
        mode = nil;
      }
      TMP_1.$$p = null;
      io = self.$new(string, mode);
      res = block.$call(io);
      io.$close();
      return res;
    }, TMP_1.$$arity = -1);

    self.$attr_accessor("string");

    Opal.defn(self, '$initialize', TMP_2 = function $$initialize(string, mode) {
      var $a, $b, self = this;

      if (string == null) {
        string = "";
      }
      if (mode == null) {
        mode = "rw";
      }
      self.string = string;
      self.position = string.$length();
      if ((($a = ($b = mode['$include?']("r"), $b !== false && $b !== nil && $b != null ?mode['$include?']("w")['$!']() : $b)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return self.closed = "write"
      } else if ((($a = ($b = mode['$include?']("w"), $b !== false && $b !== nil && $b != null ?mode['$include?']("r")['$!']() : $b)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return self.closed = "read"
        } else {
        return nil
      };
    }, TMP_2.$$arity = -1);

    Opal.defn(self, '$eof?', TMP_3 = function() {
      var self = this;

      self.$check_readable();
      return self.position['$=='](self.string.$length());
    }, TMP_3.$$arity = 0);

    Opal.alias(self, 'eof', 'eof?');

    Opal.defn(self, '$seek', TMP_4 = function $$seek(pos, whence) {
      var $a, self = this, $case = nil;

      if (whence == null) {
        whence = (($scope.get('IO')).$$scope.get('SEEK_SET'));
      }
      $case = whence;if ((($scope.get('IO')).$$scope.get('SEEK_SET'))['$===']($case)) {if ((($a = $rb_ge(pos, 0)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        self.$raise((($scope.get('Errno')).$$scope.get('EINVAL')))
      };
      self.position = pos;}else if ((($scope.get('IO')).$$scope.get('SEEK_CUR'))['$===']($case)) {if ((($a = $rb_gt($rb_plus(self.position, pos), self.string.$length())) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        self.position = self.string.$length()
        } else {
        self.position = $rb_plus(self.position, pos)
      }}else if ((($scope.get('IO')).$$scope.get('SEEK_END'))['$===']($case)) {if ((($a = $rb_gt(pos, self.string.$length())) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        self.position = 0
        } else {
        self.position = $rb_minus(self.position, pos)
      }};
      return 0;
    }, TMP_4.$$arity = -2);

    Opal.defn(self, '$tell', TMP_5 = function $$tell() {
      var self = this;

      return self.position;
    }, TMP_5.$$arity = 0);

    Opal.alias(self, 'pos', 'tell');

    Opal.alias(self, 'pos=', 'seek');

    Opal.defn(self, '$rewind', TMP_6 = function $$rewind() {
      var self = this;

      return self.$seek(0);
    }, TMP_6.$$arity = 0);

    Opal.defn(self, '$each_byte', TMP_7 = function $$each_byte() {
      var $a, $b, self = this, $iter = TMP_7.$$p, block = $iter || nil, i = nil;

      TMP_7.$$p = null;
      if (block !== false && block !== nil && block != null) {
        } else {
        return self.$enum_for("each_byte")
      };
      self.$check_readable();
      i = self.position;
      while (!((($b = self['$eof?']()) !== nil && $b != null && (!$b.$$is_boolean || $b == true)))) {
      block.$call(self.string['$[]'](i).$ord());
      i = $rb_plus(i, 1);};
      return self;
    }, TMP_7.$$arity = 0);

    Opal.defn(self, '$each_char', TMP_8 = function $$each_char() {
      var $a, $b, self = this, $iter = TMP_8.$$p, block = $iter || nil, i = nil;

      TMP_8.$$p = null;
      if (block !== false && block !== nil && block != null) {
        } else {
        return self.$enum_for("each_char")
      };
      self.$check_readable();
      i = self.position;
      while (!((($b = self['$eof?']()) !== nil && $b != null && (!$b.$$is_boolean || $b == true)))) {
      block.$call(self.string['$[]'](i));
      i = $rb_plus(i, 1);};
      return self;
    }, TMP_8.$$arity = 0);

    Opal.defn(self, '$write', TMP_9 = function $$write(string) {
      var self = this, before = nil, after = nil;

      self.$check_writable();
      string = self.$String(string);
      if (self.string.$length()['$=='](self.position)) {
        self.string = $rb_plus(self.string, string);
        return self.position = $rb_plus(self.position, string.$length());
        } else {
        before = self.string['$[]']($range(0, $rb_minus(self.position, 1), false));
        after = self.string['$[]']($range($rb_plus(self.position, string.$length()), -1, false));
        self.string = $rb_plus($rb_plus(before, string), after);
        return self.position = $rb_plus(self.position, string.$length());
      };
    }, TMP_9.$$arity = 1);

    Opal.defn(self, '$read', TMP_10 = function $$read(length, outbuf) {
      var $a, self = this, string = nil, str = nil;

      if (length == null) {
        length = nil;
      }
      if (outbuf == null) {
        outbuf = nil;
      }
      self.$check_readable();
      if ((($a = self['$eof?']()) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return nil};
      string = (function() {if (length !== false && length !== nil && length != null) {
        str = self.string['$[]'](self.position, length);
        self.position = $rb_plus(self.position, length);
        return str;
        } else {
        str = self.string['$[]']($range(self.position, -1, false));
        self.position = self.string.$length();
        return str;
      }; return nil; })();
      if (outbuf !== false && outbuf !== nil && outbuf != null) {
        return outbuf.$write(string)
        } else {
        return string
      };
    }, TMP_10.$$arity = -1);

    Opal.defn(self, '$close', TMP_11 = function $$close() {
      var self = this;

      return self.closed = "both";
    }, TMP_11.$$arity = 0);

    Opal.defn(self, '$close_read', TMP_12 = function $$close_read() {
      var self = this;

      if (self.closed['$==']("write")) {
        return self.closed = "both"
        } else {
        return self.closed = "read"
      };
    }, TMP_12.$$arity = 0);

    Opal.defn(self, '$close_write', TMP_13 = function $$close_write() {
      var self = this;

      if (self.closed['$==']("read")) {
        return self.closed = "both"
        } else {
        return self.closed = "write"
      };
    }, TMP_13.$$arity = 0);

    Opal.defn(self, '$closed?', TMP_14 = function() {
      var self = this;

      return self.closed['$==']("both");
    }, TMP_14.$$arity = 0);

    Opal.defn(self, '$closed_read?', TMP_15 = function() {
      var $a, self = this;

      return ((($a = self.closed['$==']("read")) !== false && $a !== nil && $a != null) ? $a : self.closed['$==']("both"));
    }, TMP_15.$$arity = 0);

    Opal.defn(self, '$closed_write?', TMP_16 = function() {
      var $a, self = this;

      return ((($a = self.closed['$==']("write")) !== false && $a !== nil && $a != null) ? $a : self.closed['$==']("both"));
    }, TMP_16.$$arity = 0);

    Opal.defn(self, '$check_writable', TMP_17 = function $$check_writable() {
      var $a, self = this;

      if ((($a = self['$closed_write?']()) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return self.$raise($scope.get('IOError'), "not opened for writing")
        } else {
        return nil
      };
    }, TMP_17.$$arity = 0);

    return (Opal.defn(self, '$check_readable', TMP_18 = function $$check_readable() {
      var $a, self = this;

      if ((($a = self['$closed_read?']()) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return self.$raise($scope.get('IOError'), "not opened for reading")
        } else {
        return nil
      };
    }, TMP_18.$$arity = 0), nil) && 'check_readable';
  })($scope.base, $scope.get('IO'))
};
