module.exports = {
	organization_id: "68c1b4380287b3575f2c074a",
	apikey: "bb39ef18-4dbb-4258-a210-ffb552a6c400",
	host: {
		$branch: {
			main: "wss://cocre8tive.com",
			dev: "wss://dev.cocre8tive.com",
			test: "wss://test.cocre8tive.com"
		}
	},
	directories: [
		{
			entry: "./src",
			exclude: ["assets"],
			array: "files",
			languages: ["en", "es", "fr", "pt", "nl", "ht", "gn"],
			object: {
				name: "{{name}}",
				src: "{{source}}",
				host: ["*"],
				directory: "/",
				path: "{{path}}",
				pathname: "{{pathname}}",
				"content-type": "{{content-type}}",
				public: "true"
			}
		}
	]
};
