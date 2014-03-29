if(!this.chai) { chai = require("chai"); }
var expect = chai.expect;

(function($) {
	var cleanupDom = function(){
		$('body >:not(#mocha)').remove()
	};
	$.fx.off = true;
	describe('Featherlight', function() {
		afterEach(cleanupDom);

		it ('works on items with data-featherlight by default', function() {
			var $bound = $('#auto-bound')
			expect($('img').length).to.equal(0);
			$bound.click();
			expect($('.featherlight img')).to.be.visible;
			expect($('.featherlight img')).to.have.attr('src').equal('fixtures/photo.jpeg');
			$('.featherlight').click();
			expect($('img')).to.not.be.visible;
		});

		describe('jQuery#featherlight', function() {

			it('is chainable', function() {
				// Not a bad test to run on collection methods.
				var $all_links = $('a')
				expect($all_links.featherlight()).to.equal($all_links);
			});

		});

		describe('jQuery.featherlight', function() {

			it('opens a dialog box', function() {
				$.featherlight('<p class="testing">This is a test<p>');
				expect($('.featherlight p.testing')).to.be.visible;
			});

		});

	});
}(jQuery));
