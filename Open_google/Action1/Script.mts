SystemUtil.CloseProcessByName "iexplore.exe" 
Dim objIE
Set objIE = CreateObject("InternetExplorer.Application")
objIE.visible = True
objIE.navigate "http://www.google.com"
objIE.statusbar = 1
Browser("Google").Page("Google").WebElement("UK").Check CheckPoint("UK") @@ hightlight id_;_Browser("Google").Page("Google").WebElement("UK")_;_script infofile_;_ZIP::ssf1.xml_;_
SystemUtil.CloseProcessByName "iexplore.exe" 