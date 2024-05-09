systemutil.Run "chrome.exe", "www.advantageonlineshopping.com"
Browser("Advantage Shopping").Sync
Browser("Advantage Shopping").Page("Advantage Shopping").Link("My account My Orders Sign").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Username").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set "aidemo" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").Set "AIdemo1" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btnundefined").Click
 @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebElement("aidemo").Check CheckPoint("aidemo") @@ script infofile_;_ZIP::ssf7.xml_;_

