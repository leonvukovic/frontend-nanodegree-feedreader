/* feedreader.js
 *
 * This project demonstrates web-based application that reads RSS feeds using Jasmine.js library.
 *
 */

$(function() {
    /* RSS feeds test suite */
    describe('RSS Feeds', function() {
         /* This test ensures that allFeed variable has been defined
         * and that it is not empty
         */
        it('are defined', function() {
            /* allFeed variable has been defined */
            expect(allFeeds).toBeDefined();
            /* allFeed variable is not empty */
            expect(allFeeds.length).not.toBe(0);
        });


         /* This test loops through each feed in the allFeeds object and
         * ensures it has a URL defined and that it is not empty
         */
         it('url is not empty', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                /* URL is defined */
                expect(allFeeds[i].url).toBeDefined();
                /* URL is not empty */
                expect(allFeeds[i].url.length).not.toBe(0);
            }
         });


         /* This test loops through each feed in the allFeeds object and
         * ensures it has a name defined and that it is not empty
         */
         it('name is not empty', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                /* Name is defined */
                expect(allFeeds[i].name).toBeDefined();
                /* Name is not empty */
                expect(allFeeds[i].name.length).not.toBe(0);
            }
         });
    });


    /* The menu test suite */
    describe('The menu', function() {
         const body = $('body');
         /* This test ensures that the menu element is hidden by default. */
         it('is hidden', function() {
            /* Ensures that body have class .menu-hidden which means that
            * the menu element is hidden by default.
            */
            expect(body.hasClass('menu-hidden')).toBe(true);
         });


          /* This test ensures that the menu changes visibility when
          * menu icon is clicked.
          */
          it('changes visibility', function() {
            /* When menu icon is clicked, menu displays */
            $('.menu-icon-link').click();
            expect(body.hasClass('menu-hidden')).toBe(false);

            /* When menu icon is clicked again, menu hides */
            $('.menu-icon-link').click();
            expect(body.hasClass('menu-hidden')).toBe(true);
          });
    });


    /* Initial Entries test suite */
    describe('Initial Entries', function() {
      /* The loadFeed function is called and completes its work */
      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
      });

      /* There is at least a single .entry element within the .feed container */
      it('aren\'t empty', function() {
        expect($('.feed .entry').length).not.toBe(0);
      });
    });


    /* New Feed Selection test suite */
    describe('New Feed Selection', function() {
      /* A new feed is loaded by the loadFeed function */
      let firstFeed;
      let secondFeed;
      beforeEach(function(done) {
        loadFeed(0, function() {
          firstFeed = $('.feed').html();
          loadFeed(1, function() {
            secondFeed = $('.feed').html();
            done();
          });
        });
      });

      /* The content changes */
      it('content changes', function() {
        expect(secondFeed).not.toEqual(firstFeed);
      });
    });

}());
