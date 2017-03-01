describe('Testing EPFLArrival\'s tiles', function() {
  describe('with Nightwatch', function(client) {

    before(function(client, done) {
      done();
    });

    after(function(client, done) {
      client.end(function() {
        done();
      });
    });

    afterEach(function(client, done) {
      done();
    });

    beforeEach(function(client, done) {
      done();
    });

    it('uses BDD to run test on tile: EPFL', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = "EPFL";

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tT+'"]', 'www.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'Official EPFL website')
        .expect.element('#tile-link-'+tT).to.have.attribute('title').which.contains('http://www.epfl.ch');
    });

    it('uses BDD to run test on tile: GO', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = "GO";

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tT+'"]', 'go.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'URLs shortener service')
        .expect.element('#tile-link-'+tT).to.have.attribute('title').which.contains('http://go.epfl.ch');
    });

    it('uses BDD to run test on tile: IT', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = "IT";

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT, client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tT+'"]', 'it.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'Main IT website')
        .expect.element('#tile-link-'+tT).to.have.attribute('title').which.contains('http://it.epfl.ch');
    });

    it('uses BDD to run test on tile: EPNET', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = "EPNET";

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tT+'"]', 'epnet.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'EPNET - EPFL Network')
        .expect.element('#tile-link-'+tT).to.have.attribute('title').which.contains('http://epnet.epfl.ch');
    });

    it('uses BDD to run test on tile: Repro', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = "Repro";

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tT+'"]', 'repro.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'Print center')
        .expect.element('#tile-link-'+tT).to.have.attribute('title').which.contains('http://repro.epfl.ch');
    });

    it('uses BDD to run test on tile: Camipro', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = "Camipro";

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tT+'"]', 'camipro.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'Your multifunction campus card')
        .expect.element('#tile-link-'+tT).to.have.attribute('title').which.contains('http://camipro.epfl.ch');
    });

    it('uses BDD to run test on tile: EWA', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = "EWA";

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tT+'"]', 'ewa.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'EPFL Web Mail')
        .expect.element('#tile-link-'+tT).to.have.attribute('title').which.contains('http://ewa.epfl.ch');
    });

    /** YOUR TILE'S TEST
    it('uses BDD to run test on tile: XXXX', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = "XXXX";

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tT+'"]', 'XXXX.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'XXXX')
        .expect.element('#tile-link-'+tT).to.have.attribute('title').which.contains('http://XXXX.epfl.ch');
    });
    **/
  });
});
