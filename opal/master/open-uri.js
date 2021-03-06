/* Generated by Opal 0.11.0 */
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
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy;

  Opal.add_stubs(['$include', '$new', '$call', '$close', '$attr_accessor', '$length', '$include?', '$!', '$check_readable', '$==', '$===', '$>=', '$raise', '$>', '$+', '$-', '$seek', '$enum_for', '$eof?', '$ord', '$[]', '$check_writable', '$String', '$write', '$closed_write?', '$closed_read?']);
  return (function($base, $super, $parent_nesting) {
    function $StringIO(){};
    var self = $StringIO = $klass($base, $super, 'StringIO', $StringIO);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_StringIO_open_1, TMP_StringIO_initialize_2, TMP_StringIO_eof$q_3, TMP_StringIO_seek_4, TMP_StringIO_tell_5, TMP_StringIO_rewind_6, TMP_StringIO_each_byte_7, TMP_StringIO_each_char_8, TMP_StringIO_write_9, TMP_StringIO_read_10, TMP_StringIO_close_11, TMP_StringIO_close_read_12, TMP_StringIO_close_write_13, TMP_StringIO_closed$q_14, TMP_StringIO_closed_read$q_15, TMP_StringIO_closed_write$q_16, TMP_StringIO_check_writable_17, TMP_StringIO_check_readable_18;

    def.position = def.string = def.closed = nil;
    
    self.$include(Opal.const_get_qualified(Opal.const_get_relative($nesting, 'IO'), 'Readable'));
    self.$include(Opal.const_get_qualified(Opal.const_get_relative($nesting, 'IO'), 'Writable'));
    Opal.defs(self, '$open', TMP_StringIO_open_1 = function $$open(string, mode) {
      var self = this, $iter = TMP_StringIO_open_1.$$p, block = $iter || nil, io = nil, res = nil;

      if (string == null) {
        string = "";
      }
      if (mode == null) {
        mode = nil;
      }
      if ($iter) TMP_StringIO_open_1.$$p = null;
      
      io = self.$new(string, mode);
      res = block.$call(io);
      io.$close();
      return res;
    }, TMP_StringIO_open_1.$$arity = -1);
    self.$attr_accessor("string");
    
    Opal.defn(self, '$initialize', TMP_StringIO_initialize_2 = function $$initialize(string, mode) {
      var $a, self = this;

      if (string == null) {
        string = "";
      }
      if (mode == null) {
        mode = "rw";
      }
      
      self.string = string;
      self.position = string.$length();
      if ($truthy(($truthy($a = mode['$include?']("r")) ? mode['$include?']("w")['$!']() : $a))) {
        return (self.closed = "write")
      } else if ($truthy(($truthy($a = mode['$include?']("w")) ? mode['$include?']("r")['$!']() : $a))) {
        return (self.closed = "read")
        } else {
        return nil
      };
    }, TMP_StringIO_initialize_2.$$arity = -1);
    
    Opal.defn(self, '$eof?', TMP_StringIO_eof$q_3 = function() {
      var self = this;

      
      self.$check_readable();
      return self.position['$=='](self.string.$length());
    }, TMP_StringIO_eof$q_3.$$arity = 0);
    Opal.alias(self, "eof", "eof?");
    
    Opal.defn(self, '$seek', TMP_StringIO_seek_4 = function $$seek(pos, whence) {
      var self = this, $case = nil;

      if (whence == null) {
        whence = Opal.const_get_qualified(Opal.const_get_relative($nesting, 'IO'), 'SEEK_SET');
      }
      
      $case = whence;
      if (Opal.const_get_qualified(Opal.const_get_relative($nesting, 'IO'), 'SEEK_SET')['$===']($case)) {
      if ($truthy($rb_ge(pos, 0))) {
        } else {
        self.$raise(Opal.const_get_qualified(Opal.const_get_relative($nesting, 'Errno'), 'EINVAL'))
      };
      self.position = pos;}
      else if (Opal.const_get_qualified(Opal.const_get_relative($nesting, 'IO'), 'SEEK_CUR')['$===']($case)) {if ($truthy($rb_gt($rb_plus(self.position, pos), self.string.$length()))) {
        self.position = self.string.$length()
        } else {
        self.position = $rb_plus(self.position, pos)
      }}
      else if (Opal.const_get_qualified(Opal.const_get_relative($nesting, 'IO'), 'SEEK_END')['$===']($case)) {if ($truthy($rb_gt(pos, self.string.$length()))) {
        self.position = 0
        } else {
        self.position = $rb_minus(self.position, pos)
      }};
      return 0;
    }, TMP_StringIO_seek_4.$$arity = -2);
    
    Opal.defn(self, '$tell', TMP_StringIO_tell_5 = function $$tell() {
      var self = this;

      return self.position
    }, TMP_StringIO_tell_5.$$arity = 0);
    Opal.alias(self, "pos", "tell");
    Opal.alias(self, "pos=", "seek");
    
    Opal.defn(self, '$rewind', TMP_StringIO_rewind_6 = function $$rewind() {
      var self = this;

      return self.$seek(0)
    }, TMP_StringIO_rewind_6.$$arity = 0);
    
    Opal.defn(self, '$each_byte', TMP_StringIO_each_byte_7 = function $$each_byte() {
      var $a, self = this, $iter = TMP_StringIO_each_byte_7.$$p, block = $iter || nil, i = nil;

      if ($iter) TMP_StringIO_each_byte_7.$$p = null;
      
      if ($truthy(block)) {
        } else {
        return self.$enum_for("each_byte")
      };
      self.$check_readable();
      i = self.position;
      while (!($truthy(self['$eof?']()))) {
        
        block.$call(self.string['$[]'](i).$ord());
        i = $rb_plus(i, 1);
      };
      return self;
    }, TMP_StringIO_each_byte_7.$$arity = 0);
    
    Opal.defn(self, '$each_char', TMP_StringIO_each_char_8 = function $$each_char() {
      var $a, self = this, $iter = TMP_StringIO_each_char_8.$$p, block = $iter || nil, i = nil;

      if ($iter) TMP_StringIO_each_char_8.$$p = null;
      
      if ($truthy(block)) {
        } else {
        return self.$enum_for("each_char")
      };
      self.$check_readable();
      i = self.position;
      while (!($truthy(self['$eof?']()))) {
        
        block.$call(self.string['$[]'](i));
        i = $rb_plus(i, 1);
      };
      return self;
    }, TMP_StringIO_each_char_8.$$arity = 0);
    
    Opal.defn(self, '$write', TMP_StringIO_write_9 = function $$write(string) {
      var self = this, before = nil, after = nil;

      
      self.$check_writable();
      string = self.$String(string);
      if (self.string.$length()['$=='](self.position)) {
        
        self.string = $rb_plus(self.string, string);
        return (self.position = $rb_plus(self.position, string.$length()));
        } else {
        
        before = self.string['$[]'](Opal.Range.$new(0, $rb_minus(self.position, 1), false));
        after = self.string['$[]'](Opal.Range.$new($rb_plus(self.position, string.$length()), -1, false));
        self.string = $rb_plus($rb_plus(before, string), after);
        return (self.position = $rb_plus(self.position, string.$length()));
      };
    }, TMP_StringIO_write_9.$$arity = 1);
    
    Opal.defn(self, '$read', TMP_StringIO_read_10 = function $$read(length, outbuf) {
      var self = this, string = nil, str = nil;

      if (length == null) {
        length = nil;
      }
      if (outbuf == null) {
        outbuf = nil;
      }
      
      self.$check_readable();
      if ($truthy(self['$eof?']())) {
        return nil};
      string = (function() {if ($truthy(length)) {
        
        str = self.string['$[]'](self.position, length);
        self.position = $rb_plus(self.position, length);
        return str;
        } else {
        
        str = self.string['$[]'](Opal.Range.$new(self.position, -1, false));
        self.position = self.string.$length();
        return str;
      }; return nil; })();
      if ($truthy(outbuf)) {
        return outbuf.$write(string)
        } else {
        return string
      };
    }, TMP_StringIO_read_10.$$arity = -1);
    
    Opal.defn(self, '$close', TMP_StringIO_close_11 = function $$close() {
      var self = this;

      return (self.closed = "both")
    }, TMP_StringIO_close_11.$$arity = 0);
    
    Opal.defn(self, '$close_read', TMP_StringIO_close_read_12 = function $$close_read() {
      var self = this;

      if (self.closed['$==']("write")) {
        return (self.closed = "both")
        } else {
        return (self.closed = "read")
      }
    }, TMP_StringIO_close_read_12.$$arity = 0);
    
    Opal.defn(self, '$close_write', TMP_StringIO_close_write_13 = function $$close_write() {
      var self = this;

      if (self.closed['$==']("read")) {
        return (self.closed = "both")
        } else {
        return (self.closed = "write")
      }
    }, TMP_StringIO_close_write_13.$$arity = 0);
    
    Opal.defn(self, '$closed?', TMP_StringIO_closed$q_14 = function() {
      var self = this;

      return self.closed['$==']("both")
    }, TMP_StringIO_closed$q_14.$$arity = 0);
    
    Opal.defn(self, '$closed_read?', TMP_StringIO_closed_read$q_15 = function() {
      var $a, self = this;

      return ($truthy($a = self.closed['$==']("read")) ? $a : self.closed['$==']("both"))
    }, TMP_StringIO_closed_read$q_15.$$arity = 0);
    
    Opal.defn(self, '$closed_write?', TMP_StringIO_closed_write$q_16 = function() {
      var $a, self = this;

      return ($truthy($a = self.closed['$==']("write")) ? $a : self.closed['$==']("both"))
    }, TMP_StringIO_closed_write$q_16.$$arity = 0);
    
    Opal.defn(self, '$check_writable', TMP_StringIO_check_writable_17 = function $$check_writable() {
      var self = this;

      if ($truthy(self['$closed_write?']())) {
        return self.$raise(Opal.const_get_relative($nesting, 'IOError'), "not opened for writing")
        } else {
        return nil
      }
    }, TMP_StringIO_check_writable_17.$$arity = 0);
    return (Opal.defn(self, '$check_readable', TMP_StringIO_check_readable_18 = function $$check_readable() {
      var self = this;

      if ($truthy(self['$closed_read?']())) {
        return self.$raise(Opal.const_get_relative($nesting, 'IOError'), "not opened for reading")
        } else {
        return nil
      }
    }, TMP_StringIO_check_readable_18.$$arity = 0), nil) && 'check_readable';
  })($nesting[0], Opal.const_get_relative($nesting, 'IO'), $nesting)
};

/* Generated by Opal 0.11.0 */
Opal.modules["open-uri"] = function(Opal) {
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module, $truthy = Opal.truthy, $send = Opal.send, $hash2 = Opal.hash2, $klass = Opal.klass;

  Opal.add_stubs(['$require', '$private', '$respond_to?', '$=~', '$open_uri', '$to_proc', '$open_uri_original_open', '$module_function', '$open_loop', '$rewind', '$close_io', '$close!', '$closed?', '$close', '$request', '$==', '$build_response', '$raise', '$new', '$<<', '$io', '$status=', '$-', '$meta_add_field', '$attr_reader', '$+', '$length', '$===', '$init', '$extend', '$instance_eval', '$status', '$base_uri', '$base_uri=', '$each', '$metas', '$meta_add_field2', '$attr_accessor', '$charset', '$find_encoding', '$set_encoding', '$force_encoding', '$string', '$find', '$downcase', '$[]=', '$join', '$meta_setup_encoding', '$[]', '$utc', '$at', '$content_type_parse', '$scheme', '$open', '$read']);
  
  self.$require("stringio");
  (function($base, $parent_nesting) {
    var $Kernel, self = $Kernel = $module($base, 'Kernel');

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_Kernel_open_1;

    
    self.$private();
    Opal.alias(self, "open_uri_original_open", "open");
    (function(self, $parent_nesting) {
      var def = self.$$proto, $nesting = [self].concat($parent_nesting);

      return Opal.alias(self, "open_uri_original_open", "open")
    })(Opal.get_singleton_class(self), $nesting);
    
    Opal.defn(self, '$open', TMP_Kernel_open_1 = function $$open(name, $a_rest) {
      var $b, self = this, rest, $iter = TMP_Kernel_open_1.$$p, block = $iter || nil;

      var $args_len = arguments.length, $rest_len = $args_len - 1;
      if ($rest_len < 0) { $rest_len = 0; }
      rest = new Array($rest_len);
      for (var $arg_idx = 1; $arg_idx < $args_len; $arg_idx++) {
        rest[$arg_idx - 1] = arguments[$arg_idx];
      }
      if ($iter) TMP_Kernel_open_1.$$p = null;
      if ($truthy(($truthy($b = name['$respond_to?']("to_str")) ? /^[A-Za-z][A-Za-z0-9+\-\.]*:\/\//['$=~'](name) : $b))) {
        return $send(Opal.const_get_relative($nesting, 'OpenURI'), 'open_uri', [name].concat(Opal.to_a(rest)), block.$to_proc())
        } else {
        return $send(self, 'open_uri_original_open', [name].concat(Opal.to_a(rest)), block.$to_proc())
      }
    }, TMP_Kernel_open_1.$$arity = -2);
    self.$module_function("open");
  })($nesting[0], $nesting);
  return (function($base, $parent_nesting) {
    var $OpenURI, self = $OpenURI = $module($base, 'OpenURI');

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_OpenURI_open_uri_2, TMP_OpenURI_close_io_3, TMP_OpenURI_open_loop_4, TMP_OpenURI_build_response_5, TMP_OpenURI_request_6;

    
    Opal.defs(self, '$open_uri', TMP_OpenURI_open_uri_2 = function $$open_uri(name, $a_rest) {
      var self = this, rest, $iter = TMP_OpenURI_open_uri_2.$$p, $yield = $iter || nil, io = nil;

      var $args_len = arguments.length, $rest_len = $args_len - 1;
      if ($rest_len < 0) { $rest_len = 0; }
      rest = new Array($rest_len);
      for (var $arg_idx = 1; $arg_idx < $args_len; $arg_idx++) {
        rest[$arg_idx - 1] = arguments[$arg_idx];
      }
      if ($iter) TMP_OpenURI_open_uri_2.$$p = null;
      
      io = self.$open_loop(name, $hash2([], {}));
      io.$rewind();
      if (($yield !== nil)) {
        
        return (function() { try {
        return Opal.yield1($yield, io);
        } finally {
          self.$close_io(io)
        }; })();
        } else {
        return io
      };
    }, TMP_OpenURI_open_uri_2.$$arity = -2);
    Opal.defs(self, '$close_io', TMP_OpenURI_close_io_3 = function $$close_io(io) {
      var self = this;

      if ($truthy(io['$respond_to?']("close!"))) {
        return io['$close!']()
      } else if ($truthy(io['$closed?']())) {
        return nil
        } else {
        return io.$close()
      }
    }, TMP_OpenURI_close_io_3.$$arity = 1);
    Opal.defs(self, '$open_loop', TMP_OpenURI_open_loop_4 = function $$open_loop(uri, options) {
      var $a, $b, self = this, req = nil, data = nil, status = nil, status_text = nil;

      
      req = self.$request(uri);
      data = req.responseText;
      status = req.status;
      status_text = req.statusText && req.statusText.errno ? req.statusText.errno : req.statusText;
      if ($truthy(($truthy($a = status['$=='](200)) ? $a : (($b = status['$=='](0)) ? data : status['$=='](0))))) {
        return self.$build_response(req, data, status, status_text)
        } else {
        return self.$raise(Opal.const_get_qualified(Opal.const_get_relative($nesting, 'OpenURI'), 'HTTPError').$new("" + (status) + " " + (status_text), ""))
      };
    }, TMP_OpenURI_open_loop_4.$$arity = 2);
    Opal.defs(self, '$build_response', TMP_OpenURI_build_response_5 = function $$build_response(req, data, status, status_text) {
      var self = this, buf = nil, io = nil, $writer = nil, last_modified = nil;

      
      buf = Opal.const_get_relative($nesting, 'Buffer').$new();
      buf['$<<'](data);
      io = buf.$io();
      
      $writer = ["" + (status) + " " + (status_text)];
      $send(io, 'status=', Opal.to_a($writer));
      $writer[$rb_minus($writer["length"], 1)];;
      io.$meta_add_field("content-type", req.getResponseHeader("Content-Type"));
      last_modified = req.getResponseHeader("Last-Modified");
      if ($truthy(last_modified)) {
        io.$meta_add_field("last-modified", last_modified)};
      return io;
    }, TMP_OpenURI_build_response_5.$$arity = 4);
    Opal.defs(self, '$request', TMP_OpenURI_request_6 = function $$request(uri) {
      var self = this;

      
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', uri, false);
        xhr.send();
        return xhr;
      } catch (error) {
        self.$raise(Opal.const_get_qualified(Opal.const_get_relative($nesting, 'OpenURI'), 'HTTPError').$new(error.message, ""))
      }
    
    }, TMP_OpenURI_request_6.$$arity = 1);
    (function($base, $super, $parent_nesting) {
      function $HTTPError(){};
      var self = $HTTPError = $klass($base, $super, 'HTTPError', $HTTPError);

      var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_HTTPError_initialize_7;

      
      
      Opal.defn(self, '$initialize', TMP_HTTPError_initialize_7 = function $$initialize(message, io) {
        var self = this, $iter = TMP_HTTPError_initialize_7.$$p, $yield = $iter || nil;

        if ($iter) TMP_HTTPError_initialize_7.$$p = null;
        
        $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_HTTPError_initialize_7, false), [message, io], null);
        return (self.io = io);
      }, TMP_HTTPError_initialize_7.$$arity = 2);
      return self.$attr_reader("io");
    })($nesting[0], Opal.const_get_relative($nesting, 'StandardError'), $nesting);
    (function($base, $super, $parent_nesting) {
      function $Buffer(){};
      var self = $Buffer = $klass($base, $super, 'Buffer', $Buffer);

      var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_Buffer_initialize_8, TMP_Buffer_$lt$lt_9, TMP_Buffer_io_10;

      def.io = def.size = nil;
      
      
      Opal.defn(self, '$initialize', TMP_Buffer_initialize_8 = function $$initialize() {
        var self = this;

        
        self.io = Opal.const_get_relative($nesting, 'StringIO').$new();
        return (self.size = 0);
      }, TMP_Buffer_initialize_8.$$arity = 0);
      self.$attr_reader("size");
      
      Opal.defn(self, '$<<', TMP_Buffer_$lt$lt_9 = function(str) {
        var self = this;

        
        self.io['$<<'](str);
        return (self.size = $rb_plus(self.size, str.$length()));
      }, TMP_Buffer_$lt$lt_9.$$arity = 1);
      return (Opal.defn(self, '$io', TMP_Buffer_io_10 = function $$io() {
        var self = this;

        
        if ($truthy(Opal.const_get_relative($nesting, 'Meta')['$==='](self.io))) {
          } else {
          Opal.const_get_relative($nesting, 'Meta').$init(self.io)
        };
        return self.io;
      }, TMP_Buffer_io_10.$$arity = 0), nil) && 'io';
    })($nesting[0], null, $nesting);
    (function($base, $parent_nesting) {
      var $Meta, self = $Meta = $module($base, 'Meta');

      var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_Meta_init_13, TMP_Meta_meta_setup_encoding_14, TMP_Meta_set_encoding_15, TMP_Meta_find_encoding_16, TMP_Meta_meta_add_field2_17, TMP_Meta_meta_add_field_18, TMP_Meta_last_modified_19, TMP_Meta_content_type_parse_20, TMP_Meta_charset_21, TMP_Meta_content_type_22;

      
      Opal.defs(Opal.const_get_relative($nesting, 'Meta'), '$init', TMP_Meta_init_13 = function $$init(obj, src) {
        var TMP_11, TMP_12, self = this, $writer = nil;

        if (src == null) {
          src = nil;
        }
        
        obj.$extend(Opal.const_get_relative($nesting, 'Meta'));
        $send(obj, 'instance_eval', [], (TMP_11 = function(){var self = TMP_11.$$s || this;

        
          self.base_uri = nil;
          self.meta = $hash2([], {});
          return (self.metas = $hash2([], {}));}, TMP_11.$$s = self, TMP_11.$$arity = 0, TMP_11));
        if ($truthy(src)) {
          
          
          $writer = [src.$status()];
          $send(obj, 'status=', Opal.to_a($writer));
          $writer[$rb_minus($writer["length"], 1)];;
          
          $writer = [src.$base_uri()];
          $send(obj, 'base_uri=', Opal.to_a($writer));
          $writer[$rb_minus($writer["length"], 1)];;
          return $send(src.$metas(), 'each', [], (TMP_12 = function(name, values){var self = TMP_12.$$s || this;
if (name == null) name = nil;if (values == null) values = nil;
          return obj.$meta_add_field2(name, values)}, TMP_12.$$s = self, TMP_12.$$arity = 2, TMP_12));
          } else {
          return nil
        };
      }, TMP_Meta_init_13.$$arity = -2);
      self.$attr_accessor("status");
      self.$attr_accessor("base_uri");
      self.$attr_reader("meta");
      self.$attr_reader("metas");
      
      Opal.defn(self, '$meta_setup_encoding', TMP_Meta_meta_setup_encoding_14 = function $$meta_setup_encoding() {
        var self = this, charset = nil, enc = nil;

        
        charset = self.$charset();
        enc = self.$find_encoding(charset);
        return self.$set_encoding(enc);
      }, TMP_Meta_meta_setup_encoding_14.$$arity = 0);
      
      Opal.defn(self, '$set_encoding', TMP_Meta_set_encoding_15 = function $$set_encoding(enc) {
        var self = this;

        if ($truthy(self['$respond_to?']("force_encoding"))) {
          return self.$force_encoding(enc)
        } else if ($truthy(self['$respond_to?']("string"))) {
          return self.$string().$force_encoding(enc)
          } else {
          return self.$set_encoding(enc)
        }
      }, TMP_Meta_set_encoding_15.$$arity = 1);
      
      Opal.defn(self, '$find_encoding', TMP_Meta_find_encoding_16 = function $$find_encoding(charset) {
        var self = this, enc = nil;

        
        enc = nil;
        if ($truthy(charset)) {
          
          try {
            enc = Opal.const_get_relative($nesting, 'Encoding').$find(charset)
          } catch ($err) {
            if (Opal.rescue($err, [Opal.const_get_relative($nesting, 'ArgumentError')])) {
              try {
                nil
              } finally { Opal.pop_exception() }
            } else { throw $err; }
          };};
        if ($truthy(enc)) {
          } else {
          enc = Opal.const_get_qualified(Opal.const_get_relative($nesting, 'Encoding'), 'ASCII_8BIT')
        };
        return enc;
      }, TMP_Meta_find_encoding_16.$$arity = 1);
      
      Opal.defn(self, '$meta_add_field2', TMP_Meta_meta_add_field2_17 = function $$meta_add_field2(name, values) {
        var self = this, $writer = nil;
        if (self.metas == null) self.metas = nil;
        if (self.meta == null) self.meta = nil;

        
        name = name.$downcase();
        
        $writer = [name, values];
        $send(self.metas, '[]=', Opal.to_a($writer));
        $writer[$rb_minus($writer["length"], 1)];;
        
        $writer = [name, values.$join(", ")];
        $send(self.meta, '[]=', Opal.to_a($writer));
        $writer[$rb_minus($writer["length"], 1)];;
        if (name['$==']("content-type")) {
          return self.$meta_setup_encoding()
          } else {
          return nil
        };
      }, TMP_Meta_meta_add_field2_17.$$arity = 2);
      
      Opal.defn(self, '$meta_add_field', TMP_Meta_meta_add_field_18 = function $$meta_add_field(name, value) {
        var self = this;

        return self.$meta_add_field2(name, [value])
      }, TMP_Meta_meta_add_field_18.$$arity = 2);
      
      Opal.defn(self, '$last_modified', TMP_Meta_last_modified_19 = function $$last_modified() {
        var self = this, vs = nil;
        if (self.metas == null) self.metas = nil;

        if ($truthy((vs = self.metas['$[]']("last-modified")))) {
          return Opal.const_get_relative($nesting, 'Time').$at(Date.parse(vs.$join(", ")) / 1000).$utc()
          } else {
          return nil
        }
      }, TMP_Meta_last_modified_19.$$arity = 0);
      
      Opal.defn(self, '$content_type_parse', TMP_Meta_content_type_parse_20 = function $$content_type_parse() {
        var self = this, content_type = nil;
        if (self.metas == null) self.metas = nil;

        
        content_type = self.metas['$[]']("content-type");
        return content_type.$join(", ");
      }, TMP_Meta_content_type_parse_20.$$arity = 0);
      
      Opal.defn(self, '$charset', TMP_Meta_charset_21 = function $$charset() {
        var $a, $b, $c, self = this, type = nil;
        if (self.base_uri == null) self.base_uri = nil;

        
        type = self.$content_type_parse();
        if ($truthy(($truthy($a = ($truthy($b = ($truthy($c = type) ? /^text\//['$=~'](type) : $c)) ? self.base_uri : $b)) ? /^http$/i['$=~'](self.base_uri.$scheme()) : $a))) {
          return "iso-8859-1"
          } else {
          return nil
        };
      }, TMP_Meta_charset_21.$$arity = 0);
      
      Opal.defn(self, '$content_type', TMP_Meta_content_type_22 = function $$content_type() {
        var $a, self = this, type = nil;

        
        type = self.$content_type_parse();
        return ($truthy($a = type) ? $a : "application/octet-stream");
      }, TMP_Meta_content_type_22.$$arity = 0);
    })($nesting[0], $nesting);
    (function($base, $parent_nesting) {
      var $OpenRead, self = $OpenRead = $module($base, 'OpenRead');

      var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_OpenRead_open_23, TMP_OpenRead_read_25;

      
      
      Opal.defn(self, '$open', TMP_OpenRead_open_23 = function $$open($a_rest) {
        var self = this, rest, $iter = TMP_OpenRead_open_23.$$p, block = $iter || nil;

        var $args_len = arguments.length, $rest_len = $args_len - 0;
        if ($rest_len < 0) { $rest_len = 0; }
        rest = new Array($rest_len);
        for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
          rest[$arg_idx - 0] = arguments[$arg_idx];
        }
        if ($iter) TMP_OpenRead_open_23.$$p = null;
        return $send(Opal.const_get_relative($nesting, 'OpenURI'), 'open_uri', [self].concat(Opal.to_a(rest)), block.$to_proc())
      }, TMP_OpenRead_open_23.$$arity = -1);
      
      Opal.defn(self, '$read', TMP_OpenRead_read_25 = function $$read(options) {
        var TMP_24, self = this;

        if (options == null) {
          options = $hash2([], {});
        }
        return $send(self, 'open', [options], (TMP_24 = function(f){var self = TMP_24.$$s || this, str = nil;
if (f == null) f = nil;
        
          str = f.$read();
          Opal.const_get_relative($nesting, 'Meta').$init(str, f);
          return str;}, TMP_24.$$s = self, TMP_24.$$arity = 1, TMP_24))
      }, TMP_OpenRead_read_25.$$arity = -1);
    })($nesting[0], $nesting);
  })($nesting[0], $nesting);
};
