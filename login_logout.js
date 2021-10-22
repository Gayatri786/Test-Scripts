module.exports = {
	"Test on Instagram Browser": function (client)
	{client
		.url("https://www.instagram.com/")
		.waitForElementVisible('body', 10000)
		//verify the title.
		.assert.title('Instagram')
		// the Phone image using CSS selector.
		.assert.elementPresent('div.yOZjD._80tAB')
		 //Verify the header in the Instagram form.
		.assert.elementPresent("div:nth-child(1) h1:nth-child(1)")
		.pause(5000)
		//Verify that the Facebook link is loaded correctly.
		.assert.elementPresent("span.KPnG0")
		.pause(5000)
		//Verify that the Forgot password link is loaded correctly.
		.assert.elementPresent("a._2Lks6")
		.pause(5000)
		//click on forgot password will Navigate to forgot password page.
		.click("a._2Lks6")
		.pause(5000)
		.url("https://www.instagram.com/accounts/password/reset/")
		//click on Back to Login page will Navigate to Login page.
		.click("div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.aAhnZ.O1flK.D8xaz.TxciK > div > a")
		.pause(5000)
		//Verify that the AppStore Image is loaded correctly.
		.assert.elementPresent("img[alt='Available on the App Store']")
		.pause(5000)
		//Verify that the AppStore Image is loaded correctly.
		.verify.elementPresent("img[alt='Available on Google Play']")
		//.pause(5000)
		.assert.visible('input[type=text]')
		.setValue('input[name="username"]', 'og.hazard55@gmail.com')
		.setValue('input[name="password"]', 'Gamingducks')
		.click('button[type="submit"]')
		//Click on Not Now
		.click("div[class='cmbtv'] button[type='button']") 
		//click on Save Now
		//.click("div[class='JErX0'] button[type='button']")
		.pause(1000)
		.click("div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm")
		.pause(1000)
		//click profile icon using css selector
		.click("#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > div:nth-child(6) > span > img")
		.pause(1000)
		//Click on LogOut button Xpath
		.click('xpath', "//div[contains(text(),'Log Out')]")
		.end()
	}
} 