SystemUtil.CloseProcessByName "iexplore.exe" 
Dim objIE
Set objIE = CreateObject("InternetExplorer.Application")
objIE.visible = True
objIE.navigate "http://www.google.com"
objIE.statusbar = 1
