'use strict';
(function() {
	const icons = [
		/* {
			'panel_url': 'Home URL of the web panel (use of chrome.storage API)',
			'icon_url': "URL of the icon (searched through HTML) "
				+ "WARNING: in the storage, it's source URL, while in the HTML, it's linked to local copy of it",
			'index': 'Index of the web panel (searched through HTML)',
			'st_index': 'Index of the web panel; hidden ones included (uses chrome.storage API)'
			'inn_html': 'HTML you want to insert into the button'
		}, */
		{
			'icon_url': 'chrome://favicon/chrome-extension://mefgmmbdailogpfhfblcnnjfmnpnmdfa/reader.html',
			'inn_html': '<span><svg viewbox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M 8.2 19.4 C 7.426172 19.4 6.8 18.773828 6.8 18 C 6.8 17.226172 7.426172 16.6 8.2 16.6 C 8.973828 16.6 9.6 17.226172 9.6 18 C 9.6 18.773828 8.973828 19.4 8.2 19.4Z M 13.8 19.75 C 13.220313 19.75 12.75 19.279688 12.75 18.7 C 12.75 15.804297 10.395703 13.45 7.5 13.45 C 6.920313 13.45 6.45 12.979688 6.45 12.4 C 6.45 11.820313 6.920313 11.35 7.5 11.35 C 11.552344 11.35 14.85 14.647657 14.85 18.7 C 14.85 19.279688 14.379688 19.75 13.8 19.75Z M 18.7 19.75 C 18.120313 19.75 17.65 19.279688 17.65 18.7 C 17.65 13.102734 13.097266 8.55 7.5 8.55 C 6.920313 8.55 6.45 8.079688 6.45 7.5 C 6.45 6.920313 6.920313 6.45 7.5 6.45 C 14.253907 6.45 19.75 11.946094 19.75 18.7 C 19.75 19.279688 19.279688 19.75 18.7 19.75Z"/></svg></span>'
		},
		{
			'icon_url': 'chrome://favicon/chrome://settings/siteData',
			'inn_html': '<span><svg viewbox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M 13 4.75 C 8.442627125 4.75 4.75 8.442627125 4.75 13 C 4.75 17.557372875 8.442627125 21.25 13 21.25 C 17.557372875 21.25 21.25 17.557372875 21.25 13 C 21.25 12.6669921875 21.22583025 12.339355812500001 21.185546875 12.014404125 C 20.9116214375 12.20239275 20.578613625 12.3125 20.21875 12.3125 C 19.4775390625 12.3125 18.8518068125 11.83984375 18.61010725 11.1845703125 C 18.18041975 11.458496437500001 17.6728515625 11.625 17.125 11.625 C 15.6049808125 11.625 14.375 10.395019875000001 14.375 8.875 C 14.375 8.3701171875 14.520019875 7.902832375 14.759033375 7.49462925 C 14.7456058125 7.4973146250000005 14.7321775625 7.5 14.71875 7.5 C 13.76806675 7.5 13 6.7319339375 13 5.78125 C 13 5.397216625 13.12890625 5.048095875 13.341064625 4.7634275625 C 13.2282713125 4.7580568125 13.1154786875 4.75 13 4.75 Z M 18.15625 4.75 C 17.5869140625 4.75 17.125 5.2119140625 17.125 5.78125 C 17.125 6.3505859375 17.5869140625 6.8125 18.15625 6.8125 C 18.7255859375 6.8125 19.1875 6.3505859375 19.1875 5.78125 C 19.1875 5.2119140625 18.7255859375 4.75 18.15625 4.75 Z M 11.6599119375 6.25390625 C 11.796875 7.1401370625 12.3125 7.902832375 13.0322265625 8.375488625 C 13.0107421875 8.5393068125 13 8.7084964375 13 8.875 C 13 11.149658375 14.850341625 13 17.125 13 C 17.466064625 13 17.80712925 12.95703125 18.134765625 12.87109375 C 18.6047365 13.30078125 19.1982421875 13.5854495625 19.8427734375 13.666015625 C 19.50708025 17.146484375 16.56640625 19.875 13 19.875 C 9.2080078125 19.875 6.125 16.7919921875 6.125 13 C 6.125 9.6672365 8.509765625 6.8796384999999995 11.6599119375 6.25390625 Z M 17.125 8.1875 C 16.7463380625 8.1875 16.4375 8.4963380625 16.4375 8.875 C 16.4375 9.2536619375 16.7463380625 9.5625 17.125 9.5625 C 17.5036619375 9.5625 17.8125 9.2536619375 17.8125 8.875 C 17.8125 8.4963380625 17.5036619375 8.1875 17.125 8.1875 Z M 11.625 8.875 C 11.2463380625 8.875 10.9375 9.1838380625 10.9375 9.5625 C 10.9375 9.9411619375 11.2463380625 10.25 11.625 10.25 C 12.0036619375 10.25 12.3125 9.9411619375 12.3125 9.5625 C 12.3125 9.1838380625 12.0036619375 8.875 11.625 8.875 Z M 20.5625 8.875 C 20.1838380625 8.875 19.875 9.1838380625 19.875 9.5625 C 19.875 9.9411619375 20.1838380625 10.25 20.5625 10.25 C 20.9411619375 10.25 21.25 9.9411619375 21.25 9.5625 C 21.25 9.1838380625 20.9411619375 8.875 20.5625 8.875 Z M 9.5625 10.9375 C 8.8024900625 10.9375 8.1875 11.5524900625 8.1875 12.3125 C 8.1875 13.0725099375 8.8024900625 13.6875 9.5625 13.6875 C 10.3225099375 13.6875 10.9375 13.0725099375 10.9375 12.3125 C 10.9375 11.5524900625 10.3225099375 10.9375 9.5625 10.9375 Z M 13 12.3125 C 12.6213380625 12.3125 12.3125 12.6213380625 12.3125 13 C 12.3125 13.3786619375 12.6213380625 13.6875 13 13.6875 C 13.3786619375 13.6875 13.6875 13.3786619375 13.6875 13 C 13.6875 12.6213380625 13.3786619375 12.3125 13 12.3125 Z M 10.59375 15.0625 C 10.0244140625 15.0625 9.5625 15.5244140625 9.5625 16.09375 C 9.5625 16.6630859375 10.0244140625 17.125 10.59375 17.125 C 11.1630859375 17.125 11.625 16.6630859375 11.625 16.09375 C 11.625 15.5244140625 11.1630859375 15.0625 10.59375 15.0625 Z M 15.40625 15.75 C 14.8369140625 15.75 14.375 16.2119140625 14.375 16.78125 C 14.375 17.3505859375 14.8369140625 17.8125 15.40625 17.8125 C 15.9755859375 17.8125 16.4375 17.3505859375 16.4375 16.78125 C 16.4375 16.2119140625 15.9755859375 15.75 15.40625 15.75 Z"/></svg></span>'
		},
		{
			'panel_url': 'https://www.bing.com/translator/?toWww=1&redig=3EEA4508181F45BAABCD832BACCEBF24',
			'st_index': 4,
			'inn_html': '<span>BB</span>'
		},
		{
			'index': 3,
			'inn_html': '<span>CE</span>'
		}
	];
	setTimeout(function wait() {
		if (document.querySelector('#switch')) {
			icons.forEach(panel => {
				if (!panel.inn_html)
					return;
				let icon_url;
				let nth = -1;
				let props_checked = 0;
				['icon_url', 'index', 'st_index', 'panel_url'].forEach(prop => {
					if (panel[prop] !== undefined) {
						switch (prop) {
							case 'icon_url':
								icon_url = panel[prop];
								props_checked++;
								break;
							case 'index':
								if (nth != -2) {
									if (nth == -1)
										nth = panel[prop];
									else if (nth != panel[prop])
										nth = -2;
								}
								props_checked++;
								break;
							case 'st_index':
								chrome.storage.local.get({'WEB_PANEL_LIST': []}, st => {
									let wpl = st.WEB_PANEL_LIST;
									if (panel[prop] >= wpl.length || nth == -2) {
										nth = -2;
										props_checked++;
										return;
									}
									let wpindex = 0;
									for (let i = 0; i < panel[prop]; i++) {
										if (wpl[i].available)
											wpindex++;
									}
									if (nth == -1 || nth == panel[prop])
										nth = wpindex;
									else
										nth = -2;
									props_checked++;
								});
								break;
							case 'panel_url':
								chrome.storage.local.get({'WEB_PANEL_LIST': []}, st => {
									let wpl = st.WEB_PANEL_LIST;
									let wpindex = 0;
									for (let i = 0; i < wpl.length; i++) {
										if (wpl[i].contentUrl === panel[prop])
											break;
										if (wpl[i].available)
											wpindex++;
									}
									if (nth == -2)
										;
									else if (nth == -1)
										nth = wpindex;
									else if (nth != wpindex)
										nth = -2;
								});
								break;
						}
					} else {
						props_checked++;
					}
				});
				setTimeout(() => {
					if (props_checked < 4)
						console.log('Warning: not all properties of web panel button checked on time', panel);
					if ((!icon_url && nth == -1) || nth == -2) {
						console.log("Couldn't find correct web panel button, sorry", {nth: nth, icon: icon_url}, panel);
						return;
					}
					// Because it's not zero-based
					if (nth > -1) nth++;
					chrome.storage.local.get({'REG_PANEL_LIST':[]}, st => {
						let rpl = st.REG_PANEL_LIST;
						if (nth > 0) {
							rpl.forEach(ip => {
								if (ip.available && ip.resizable && ip.width > -1)
									nth++;
							});
						}
						let sel = 'button';
						if (nth > 0)
							sel += ':nth-of-type(' + nth + ')';
						sel += ' img';
						if (icon_url)
							sel += '[src="' + icon_url + '"]';
						let img = document.querySelector('#switch > ' + sel);
						if (img) {
							let btn = img.parentElement;
							btn.innerHTML = panel.inn_html;
						} else {
							console.log('Button not found', {nth: nth, icon: icon_url, sel: sel}, panel);
						}
					});
				}, 1000);
			});
		} else setTimeout(wait, 300);
	}, 300);
})();
