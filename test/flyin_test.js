(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#flyin', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();

      this.container = $('<div id="flyin"></div>');
      this.mycontent = $('<div id="content">Hello</div>');
      this.fakeBody = $('<div id="fake-body"></div>');

      this.flyinElement = this.container.flyin(this.mycontent, this.fakeBody, 'left'); 
    }
  });

  test('is true', function() {
    expect(1);
    ok(true, 'true should be true');
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.flyinElement, this.container, 'should be chainable');
  });

  test('holds content', function() {
    expect(1);
    equal(this.flyinElement.children().text(), 'Hello', 'should contain text Hello');
  });

  test('added to body', function() {
    expect(1);
    ok(this.fakeBody.find('#flyin').length, 'should find flyin on parent');
  });

  /*module('jQuery.awesome');

  test('is awesome', function() {
    expect(2);
    strictEqual($.awesome(), 'awesome.', 'should be awesome');
    strictEqual($.awesome({punctuation: '!'}), 'awesome!', 'should be thoroughly awesome');
  });

  module(':awesome selector', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is awesome', function() {
    expect(1);
    // Use deepEqual & .get() when comparing jQuery objects.
    deepEqual(this.elems.filter(':awesome').get(), this.elems.last().get(), 'knows awesome when it sees it');
  });*/

}(jQuery));
