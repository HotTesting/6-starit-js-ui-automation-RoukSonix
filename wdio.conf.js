process.env.TS_NODE_FILES = true
require('ts-node').register()

exports.config = {
	specs: [
		'./tests/**/*.ts'
	],
	port: '9515',
	path: '/',
	services: ['chromedriver'],
	capabilities: [{
		maxInstances: 1,
		browserName: 'chrome'
	}],
	sync: true,
	logLevel: 'silent', // verbose
	coloredLogs: true,
	deprecationWarnings: true,
	baseUrl: 'http://ip-5236.sunline.net.ua:38015',
	framework: 'mocha',
	mochaOpts: {
		ui: 'bdd',
		timeout: 120000 // 2 mins
	},

	/**
	 * Default explicit timeout
	 */
	waitforTimeout: 5000,

	/**
	 * Default implicit timeout
	 */
	beforeTest: () => {
		browser.timeouts("implicit", 500);
	},

	afterTest: () => {
		browser.timeouts("implicit", 500);
	}
}
