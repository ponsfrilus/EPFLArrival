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
      let tT = 'EPFL';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'www.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'Official EPFL website')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('http://www.epfl.ch');
    });

    it('uses BDD to run test on tile: GO', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'GO';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'go.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'URLs shortener service')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('http://go.epfl.ch');
    });

    it('uses BDD to run test on tile: IT', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'IT';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT, client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'it.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'Main IT website')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('http://it.epfl.ch');
    });

    it('uses BDD to run test on tile: EPNET', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'EPNET';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'epnet.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'EPNET - EPFL Network')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('http://epnet.epfl.ch');
    });

    it('uses BDD to run test on tile: Repro', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'Repro';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'repro.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'Print center')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('http://repro.epfl.ch');
    });

    it('uses BDD to run test on tile: Camipro', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'Camipro';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'camipro.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'Your multifunction campus card')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('http://camipro.epfl.ch');
    });

    it('uses BDD to run test on tile: EWA', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'EWA';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'ewa.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'EPFL Web Mail')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('http://ewa.epfl.ch');
    });

    it('uses BDD to run test on tile: NAS', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'NAS';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'nas.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'File storage services')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('http://nas.epfl.ch');
    });

    it('uses BDD to run test on tile: Mailcleaner', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'Mailcleaner';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'mailcleaner.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'Business anti spam gateway')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('http://mailcleaner.epfl.ch');
    });

    it('uses BDD to run test on tile: Gaspar', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'Gaspar';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'gaspar.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'Password and authentication manager')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('https://gaspar.epfl.ch');
    });

    it('uses BDD to run test on tile: Poseidon', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'Poseidon';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'poseidon.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'Troubleshooting and counseling service for private laptop')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('http://poseidon.epfl.ch');
    });

    it('uses BDD to run test on tile: VPN', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'VPN';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'vpn.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'Virtual Private Network')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('https://vpn.epfl.ch');
    });

    it('uses BDD to run test on tile: Tremplin', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'Tremplin';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'tremplin.epfl.ch/ssh.html')
        .assert.containsText('p[class="tile-description"]', 'SSH gateway')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('http://tremplin.epfl.ch/ssh.html');
    });

    it('uses BDD to run test on tile: DynDNS', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'DynDNS';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'network.epfl.ch/epnet/dyn')
        .assert.containsText('p[class="tile-description"]', 'Dynamic DNS')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('https://network.epfl.ch/epnet/dyndns.pl');
    });

    it('uses BDD to run test on tile: rAuth', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'rAuth';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'rauth.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'Registration Authority SwitchPKI@EPFL')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('http://rauth.epfl.ch');
    });

    it('uses BDD to run test on tile: Doodle', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'Doodle';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'epfl.doodle.com')
        .assert.containsText('p[class="tile-description"]', 'Control of your appointments')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('https://epfl.doodle.com');
    });

    it('uses BDD to run test on tile: Infowww', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'Infowww';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'infowww.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'Expense report')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('https://infowww.epfl.ch');
    });

    it('uses BDD to run test on tile: Pocket Campus', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'Pocket Campus';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'pocketcampus.org/epfl-en/')
        .assert.containsText('p[class="tile-description"]', 'Smartphone app EPFL')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('http://pocketcampus.org/epfl-en/');
    });

    it('uses BDD to run test on tile: 1234', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = '1234';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', '1234.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'Official Helpdesk VPSI')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('http://1234.epfl.ch');
    });

    it('uses BDD to run test on tile: SDF', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'SDF';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'studevf.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'Students Development Factory')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('http://studevf.epfl.ch');
    });

    it('uses BDD to run test on tile: STI', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'STI';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'sti.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'School of Engineering')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('http://sti.epfl.ch');
    });

    it('uses BDD to run test on tile: UC', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'UC';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'uc.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'Unified Communications')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('http://uc.epfl.ch');
    });

    it('uses BDD to run test on tile: gitlab', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'Gitlab';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'gitlab.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'GIT Repo Hosting')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('https://gitlabs.epfl.ch');
    });

    it('uses BDD to run test on tile: Jobs', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'Jobs';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'emploi.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'The jobs at EPFL')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('http://emploi.epfl.ch');
    });

    /** YOUR TILE'S TEST
    it('uses BDD to run test on tile: XXXX', function(client) {
      client
        .url(client.globals.devServerURL)
        .expect.element('body').to.be.present.before(1000);

      // Tile's Title
      let tT = 'XXXX';
      let tTid = tT.replace(/\s+/g, '-').toLowerCase();

      // Search for the tile's tile in lowercase
      client.setValue('input[type=text]', [tT.toLowerCase(), client.Keys.ENTER])
        .pause(2000);

      // Test contents of the tile
      client
        .assert.containsText('h2', tT)
        .assert.containsText('a[id="tile-link-'+tTid+'"]', 'XXXX.epfl.ch')
        .assert.containsText('p[class="tile-description"]', 'XXXX')
        .expect.element('#tile-link-'+tTid).to.have.attribute('title').which.contains('http://XXXX.epfl.ch');
    });
    **/
  });
});
