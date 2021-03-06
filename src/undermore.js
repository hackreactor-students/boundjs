(function(){

  _.extend(_, {
    raise: function(text){
      throw new Error(text);
    },
    raiseIf: function(condition, text){
      condition && _.raise(text);
    },
    create: function (o) {
      _.raiseIf(arguments.length > 1, 'Object.create implementation only accepts the first parameter.');
      function F() {}
      F.prototype = o;
      return new F();
    }
  });

}());