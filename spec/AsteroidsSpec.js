describe("Asteroids - the game", function() {

    describe("game", function() {

        it("Should be an object", function() {
            expect(game).toEqual(jasmine.any(Object));
        });

        describe("methods", function() {

            it("Should have an init method", function() {
                expect(typeof(game.init)).toBe('function');
            });

            describe("start", function() {

                it("Should be a method", function() {
                    expect(typeof(game.start)).toBe('function');
                });

                it("Should call reset", function() {
                    spyOn(game.reset, 'reset').and.callThrough();
                    expect(game.reset).toHaveBeenCalled();
                });

                it("Should reset the score", function() {
                    expect(game.frames).toBe(0);
                });

                it("Should reset the score", function() {
                    expect(asteroidField).toEqual([]);
                });


                it("Should call updateGame", function() {
                    spyOn(game.updateGame, 'reset').and.callThrough();
                    expect(game.updateGame).toHaveBeenCalled();
                });

            }); // game.start


            it("Should have a game over method", function() {
                expect(typeof(game.over)).toBe('function');
            });

            it("Should have a game reset method", function() {
                expect(typeof(game.reset)).toBe('function');
            });

            describe("hasCollided", function() {
                it("Should be a  method", function() {
                    expect(typeof(game.hasCollided)).toBe('function');
                });
            });

            it("Should have a drawBackground method", function() {
                expect(typeof(game.drawBackground)).toBe('function');
            });

            it("Should have a drawScoreboard method", function() {
                expect(typeof(game.drawScoreboard)).toBe('function');
            });

            it("Should have a moveAll method", function() {
                expect(typeof(game.moveAll)).toBe('function');
            });

            it("Should have a drawAll method", function() {
                expect(typeof(game.drawAll)).toBe('function');
            });

        }); // game object methods

        it("Should have a listener function", function() {
            expect(typeof(game.setEventListeners)).toBe('function');
        });

    }); // game

    describe("spaceship", function() {

        it("Should have a draw", function() {
            expect(typeof(spaceship.draw)).toBe('function');
        });

        it("Should have a move method", function() {
            expect(typeof(spaceship.move)).toBe('function');
        });

        it("Should have a burn method", function() {
            expect(typeof(spaceship.burn)).toBe('function');
        });

    }); // spaceship

    describe("Asteroids class", function() {

        beforeEach(function() {
            var comet = new Asteroid();
        });

        it("Should have a draw", function() {
            expect(typeof(comet.draw)).toBe('function');
        });

        it("Should have a move method", function() {
            expect(typeof(comet.move)).toBe('function');
        });

        it("Should have a renewAsteroid method", function() {
            expect(typeof(comet.renewAsteroid)).toBe('function');
        });
    }); // asteroid

}); // Asteroids - the game


// expect(spaceship).toEqual(jasmine.any(Object));
// expect(SOMETHING).toBeDefined();
// expect(SOMETHING).toBeUndefined();
// expect(SOMETHING).toBeTruthy();
// expect(a).toBeFalsy();
// expect(a).toContain("bar");
// expect(a).not.toContain("quux");
// expect(e).toBeLessThan(pi);
// expect(pi).toBeGreaterThan(e);
// expect(SOMETHING).toBe(true);
// expect(SOMETHING).toBe('number');
// expect(SOMETHING).toBe(1);
// expect(stack.stackControl).toEqual([19, 88]); // insert the elements in the received order
// beforeEach(function() {
// afterEach(function() {
// beforeAll(function() {
// afterAll(function() {
// xdescribe("A group of tests - not executed", function() {});
// it("can have more than one expectation", function() {
//     expect(foo).toEqual(1);
//     expect(true).toEqual(true);
// });
// xit("Is marked as pending", function() {});
// describe("A nested group of tests", function() {
//     // Before a spec is executed, Jasmine walks down the tree executing each beforeEach function in order.
//     // After the spec is executed, Jasmine walks through the afterEach functions similarly.