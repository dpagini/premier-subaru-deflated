module.exports = {
	options: {
		require: ["compass-normalize","susy"],
		sassDir: "<%= paths.src %>/scss",
		cacheDir: "<%= paths.cache %>/scss",
		environment: "development",
		outputStyle: "expanded",
		debugInfo: false,
		// the following is needed to prevent font awesome content boxes from appearing as squares
		raw: 'Encoding.default_external = \'utf-8\'\n'
  },
	local: {
		options: {
			cssDir: "<%= paths.local %>/css" // overwrite config.rb
		}
	},
	build: {
		options: {
			cssDir: "<%= paths.build %>/css", // overwrite config.rb
			environment: "production",
			outputStyle: "compressed"
		}
	}
};
