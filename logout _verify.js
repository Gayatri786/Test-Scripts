module.exports = {
	"Test on Instagram Browser": function (client)
	{client
	   //check to find if the user is logged in, we need to login firstChild
	    .url("https://www.instagram.com/")
		.waitForElementVisible('body', 10000)
	    .assert.visible('input[type=text]')
		.setValue('input[name="username"]', 'og.hazard55@gmail.com')
		.setValue('input[name="password"]', 'Gamingducks')
		.click('button[type="submit"]')
		//Click on Not Now
		.click("div[class='cmbtv'] button[type='button']") 
		//click on Save Now
		//.click("div[class='JErX0'] button[type='button']")
		.pause(5000)
		//Click on the pop up window to save the information
		.click("div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm")
		.pause(5000)
		.closeWindow("https://www.instagram.com/") 
		//Login again with the same user but navigate to inbox
	    .url("https://www.instagram.com/direct/inbox/?hl=en")
		.waitForElementVisible('body', 10000)
		.assert.visible('input[type=text]')
		.setValue('input[name="username"]', 'og.hazard55@gmail.com')
		.setValue('input[name="password"]', 'Gamingducks')
		.click('button[type="submit"]')
		//Click on Not Now
		.click("div[class='cmbtv'] button[type='button']") 
		//click on Save Now
		//.click("div[class='JErX0'] button[type='button']")
		.pause(1000)
		//click on Not now on save notifications pop up window
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

	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	/*	.url('https://www.instagram.com/accounts/login/?next=/direct/inbox/')
		.waitForElementVisible('body', 10000)
		//click profile icon using css selector
		.click("#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > div:nth-child(6) > span > img")
		.pause(1000)
		//verify Instagram image present on the left side of the page.
		.assert.elementPresent("img[alt='Instagram']")
		//click on Profile icon
		//.verify('xpath', "//div[@id='react-root']/section/nav/div[2]/div/div/div[3]/div/div[5]/span/img")
		// click on Profile icon using xpath
		//.verify(//div[@class='AvhYw nLL4f'][1])
		.pause(50000)
		//.click('xpath', "//div[@id='react-root']/section/nav/div[2]/div/div/div[3]/div/div[5]/span/img")
		//click on Profile icon using xpatg
	//	.click((//div[@class='AvhYw nLL4f'])[1]
		.pause(1000)
		//Click on LogOut button
		//.click('xpath', "//div[contains(text(),'Log Out')]")
		//Navigated to Login page
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
		.end()
	}

}

*/ 