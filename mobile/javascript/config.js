	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionFontSize="20";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#323232";bookConfig.loadingPictureHeight="150";bookConfig.showLoadingGif="Yes";bookConfig.loadingDisplayTime="0";bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#C6C6C6";bookConfig.toolbarAlwaysShow="No";bookConfig.ToolBarVisible="Yes";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#27181A";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";shareObj = [];bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.ThumbnailSize="small";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.bgSoundVol="50";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="1000";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="Hide";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.pageHighlightType="magazine";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.phoneFlipShortcutButton="Hide";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.DoubleSinglePageButtonVisible="hide";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.passwordTips="Please contact the <a href=mailto:author@sample.com><u>author</u></a> to access the web";bookConfig.OnlyOpenInIframe="No";bookConfig.OnlyOpenInIframeInfo="No reading rights";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#153168";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=28;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2554;;bookConfig.securityType="1";bookConfig.CreatedTime ="230622013536";bookConfig.bookTitle="komik tebaru rita (rilis)";bookConfig.bookmarkCR="e2469eaa19dfd78e6166ecfb880c672f27bc1816";bookConfig.productName="";bookConfig.homePage="";bookConfig.searchPositionJS="javascript/text_position[1].js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [];; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx     I'm going to buy below product(s):      ${shopping}  Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[{"annotype":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","annoId":"202322133184311","alpha":"1","location":{"tannoName":"sound1","x":"0.708402754182649","y":"0.6514069130992765","width":"0.30511060259344014","height":"0.21501041456695558","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"419.52","pageHeight":"595.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.sound.TAnnoBackgroundSound","H5Replay":"false","H5PlaybackNumber":"1","soundURL":"./files/pageConfig/sound.mp3","volume":"1","replay":"1"},{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoText","annoId":"202322133183828","alpha":"1","location":{"tannoName":"text5","x":"0.3369232611356501","y":"0.945656141757828","width":"0.3513216910987121","height":"0.04545643256518315","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"419.52","pageHeight":"595.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","selectable":"false","auto":"false","textStr":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Arial\" SIZE=\"11\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">TAHUN 2023<FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\"></FONT></FONT></P></TEXTFORMAT>","lineHeightRation":"0.045696999999999995","formats":{"defaultFormat":{"htmlText":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Arial\" SIZE=\"11\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">TAHUN 2023<FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\"></FONT></FONT></P></TEXTFORMAT>","pageH":"595.32","pageW":"419.52"}},"background":{"alpha":"0.7","fillBg":"false","color":"16777215"}}],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202322133183989","alpha":"1","location":{"tannoName":"button1","x":"0.10654838172665858","y":"0.12175830151388342","width":"0.3694698703279939","height":"0.04703352818652153","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"419.52","pageHeight":"595.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","url":"./files/pageConfig/button_watermark03.swf","buttonCaption":"KOMPETENSI DASAR","captionY":"18.82","HRate":"0.036955","Format":{"font":"Tahoma","size":"10.8","bold":"false","italic":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"false","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/Kompetensi Dasar.mp3","H5Replay":"false","H5PlaybackNumber":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202322133187754","alpha":"1","location":{"tannoName":"button2","x":"0.10654838172665858","y":"0.18466675729605658","width":"0.37221109839816935","height":"0.045353759322717194","rotation":"NaN","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"419.52","pageHeight":"595.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","url":"./files/pageConfig/button_watermark03.swf","buttonCaption":"TUJUAN PEMBELAJARAN","captionY":"9.91","HRate":"0.041994","Format":{"font":"Tahoma","size":"12.76","bold":"false","italic":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"false","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/Tujuan pembelajaran.mp3","H5Replay":"false","H5PlaybackNumber":"0"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202322133188253","alpha":"1","location":{"tannoName":"button4","x":"0.10942806771927098","y":"0.2414872980025354","width":"0.3680396643783372","height":"0.04795740106161392","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"419.52","pageHeight":"595.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","url":"./files/pageConfig/button_watermark03.swf","buttonCaption":"MATERI","captionY":"4.96","HRate":"0.050393","Format":{"font":"Tahoma","size":"16.68","bold":"false","italic":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"false","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/Materi Pelajaran.mp3","H5Replay":"false","H5PlaybackNumber":"0"}}],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202322133182908","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube1","x":"0.02145308924485126","y":"0.5408855741449976","width":"0.944651029748284","height":"0.4123832560639656","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"419.52","pageHeight":"595.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"Ph7XQjWeeqc","playerParameters":"autoplay=0&loop=0"},{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoText","annoId":"202322133181722","alpha":"1","location":{"tannoName":"text2","x":"0.1263348588863463","y":"0.4854532016394544","width":"0.7556254767353165","height":"0.04871329705032587","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"419.52","pageHeight":"595.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","selectable":"false","auto":"true","textStr":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">video pembelajaran titik hilang</FONT></P></TEXTFORMAT>","lineHeightRation":"0.045696999999999995","formats":{"defaultFormat":{"htmlText":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">video pembelajaran titik hilang</FONT></P></TEXTFORMAT>","pageH":"595.32","pageW":"419.52"}},"background":{"alpha":"0.7","fillBg":"false","color":"16777215"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202322133185989","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube2","x":"0.04052250190694127","y":"0.07726936773499966","width":"0.9233171243325706","height":"0.3997010011422428","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"419.52","pageHeight":"595.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"iUC5Z7aI65E","playerParameters":"autoplay=0&loop=0"},{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoText","annoId":"202322133187090","alpha":"1","location":{"tannoName":"text3","x":"0.11918382913806257","y":"0.008398844319021702","width":"0.7274980930587338","height":"0.04871329705032587","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"419.52","pageHeight":"595.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","selectable":"false","auto":"true","textStr":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">video pembelajaran 2 titik hilang</FONT></P></TEXTFORMAT>","lineHeightRation":"0.045696999999999995","formats":{"defaultFormat":{"htmlText":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">video pembelajaran 2 titik hilang</FONT></P></TEXTFORMAT>","pageH":"595.32","pageW":"419.52"}},"background":{"alpha":"0.7","fillBg":"false","color":"16777215"}}],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202322133186416","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube3","x":"0.01906941266209001","y":"0.5492844184640193","width":"0.9563310450038142","height":"0.44043539608949805","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"419.52","pageHeight":"595.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"UE1VNKw_tPE","playerParameters":"autoplay=0&loop=0"},{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoText","annoId":"202322133184300","alpha":"1","location":{"tannoName":"text1","x":"0.22644927536231885","y":"0.49721158368608487","width":"0.560163996948894","height":"0.04871329705032587","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"419.52","pageHeight":"595.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","selectable":"false","auto":"true","textStr":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#CCCCCC\" LETTERSPACING=\"0\" KERNING=\"0\">cara membuat gambar cangkir</FONT></P></TEXTFORMAT>","lineHeightRation":"0.045696999999999995","formats":{"defaultFormat":{"htmlText":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#CCCCCC\" LETTERSPACING=\"0\" KERNING=\"0\">cara membuat gambar cangkir</FONT></P></TEXTFORMAT>","pageH":"595.32","pageW":"419.52"}},"background":{"alpha":"0.7","fillBg":"false","color":"16777215"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202322133181693","alpha":"1","mouseOverEffect":"2","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image1","x":"0.011918382913806255","y":"0.24020694752402064","width":"0.9773073989321128","height":"0.562722569374454","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"419.52","pageHeight":"595.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"1200","imgOriginalHeight":"1200","url":"./files/pageConfig/pngtree-pop-quiz-clipart-images-png-image_9095199.png","originalURL":"./files/pageConfig/pngtree-pop-quiz-clipart-images-png-image_9095199.png","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionQuiz","swfURL":"./files/pageConfig/quiz.swf","guizTxt":"","guizEndTxt":"","guizURL":"","score":"","quiz":[{"title":"Gambar yang beramsumsi bahwa mata penggambar bertemu dalam satu titik,meski garis tersebut terkesan sejajar.Hingga sebuah gambar benda/ruang terkesan tiga dimensi adalah pengertian dari?","media":"","rightTxt":"You're right.","wrongTxt":"Sorry, your answer is wrong.","answer1":{"value":"Gambar Perspektif","dataRight":"false"},"answer2":{"value":"Gambar Model","dataRight":"false"},"answer3":{"value":"Gambar Teknik","dataRight":"true"},"answer4":{"value":"Gambar Bentuk","dataRight":"false"}},{"title":"Tiga unsur utama dari perspektif adalah?","media":"","rightTxt":"You're right.","wrongTxt":"Sorry, your answer is wrong.","answer1":{"value":"panjang,lebar,dan jauh","dataRight":"false"},"answer2":{"value":"panjang,lebar,dan kedalam","dataRight":"true"},"answer3":{"value":"panjang,jauh,dan kedalam","dataRight":"false"},"answer4":{"value":"benar semua","dataRight":"false"}},{"title":"Titik pandang pengamat,Objek yang akan di amati ,Bidang gambar atau bidang proyeksi,Garis proyeksi dari mata pengamat keseluruh titik pada objek gambar perspektif termasuk dalam?","media":"","rightTxt":"You're right.","wrongTxt":"Sorry, your answer is wrong.","answer1":{"value":"unsur-unsur gambar perspektif","dataRight":"true"},"answer2":{"value":"pengertian gambar perspektif","dataRight":"false"},"answer3":{"value":"tipe gambar perspektif","dataRight":"false"},"answer4":{"value":"jenis gambar perspektif","dataRight":"false"}},{"title":"Berikut yang mempunyai fungsi hampir sama dengan gambar perspektif adalah?","media":"","rightTxt":"You're right.","wrongTxt":"Sorry, your answer is wrong.","answer1":{"value":"lukis","dataRight":"true"},"answer2":{"value":"ukir","dataRight":"false"},"answer3":{"value":"batik","dataRight":"false"},"answer4":{"value":"fotografi","dataRight":"false"}},{"title":"Salah satu muka utama sejajar dengan bidang gambar dan merupakan perspektifnya sendiri (semua garis vertikal dan mendatar menjauh dan mengerucut ke belakang hingga menjadi titik hilang tunggal adalah ciri-ciri dari?","media":"","rightTxt":"You're right.","wrongTxt":"Sorry, your answer is wrong.","answer1":{"value":"perspektif dua titik lenyap","dataRight":"false"},"answer2":{"value":"perspektif tiga titik lenyap","dataRight":"false"},"answer3":{"value":"perspektif satu titik lenyap","dataRight":"true"},"answer4":{"value":"perspektif sejajar","dataRight":"false"}},{"title":"Objek didefinisikan terutama oleh tepi-tepi yang berupa garis lurus,penggambaran perspektif menjadikan pengambaran garis,Dan akan dapat menggambar perspektif obyek apapun dan bagaimana rumitnya merupakan ciri dari?","media":"","rightTxt":"You're right.","wrongTxt":"Sorry, your answer is wrong.","answer1":{"value":"perspektif dua titik lenyap","dataRight":"true"},"answer2":{"value":"perspektif tiga titik lenyap","dataRight":"false"},"answer3":{"value":"perspektif satu titik lenyap","dataRight":"false"},"answer4":{"value":"perspektif sejajar","dataRight":"false"}},{"title":"Perspektif satu ,dua,tiga titik hilang merupakan?","media":"","rightTxt":"You're right.","wrongTxt":"Sorry, your answer is wrong.","answer1":{"value":"pengertian","dataRight":"false"},"answer2":{"value":"jenis","dataRight":"false"},"answer3":{"value":"teknik","dataRight":"true"},"answer4":{"value":"unsur","dataRight":"false"}},{"title":"Gambar di tempatkan sejajar dengan bidang proyeksi dan seolah-olah gambar terfokus kesatu titik tertentu,baik dai dalam maupun di luar bidang gambar atau titik hilang yang dibutuhkan adalah jenis perspektif?","media":"","rightTxt":"You're right.","wrongTxt":"Sorry, your answer is wrong.","answer1":{"value":"perspektif satu titik hilang","dataRight":"true"},"answer2":{"value":"perspektif tiga titik hilang","dataRight":"false"},"answer3":{"value":"perspektif dua titik hilang","dataRight":"false"},"answer4":{"value":"perspektif lima titik hilang","dataRight":"false"}},{"title":"Gambar yang mempunyai satu pasang tepi sejajar tegak dan tidak memiliki titik hilang,sementara di kedua pasang lain memiliki titik hilang atau gambar seolah-olah terfokus kepada kedua titik tertentu, baik di dalam maupun di luar bidang gambar atau terdapat dua titik hilang yang di butuhkan adalah jenis perspektif.....","media":"","rightTxt":"You're right.","wrongTxt":"Sorry, your answer is wrong.","answer1":{"value":"perspektif lima titik hilang","dataRight":"true"},"answer2":{"value":"perspektif empat titik hilang","dataRight":"false"},"answer3":{"value":"perspektif tiga tiitk hilang","dataRight":"false"},"answer4":{"value":"perspektif dua titik hilang","dataRight":"false"}},{"title":"Gambar dilihat dari sudut yang lebih tinggi atau rendah,sehingga tidak satupun dari tepi utamanya sejajar dengan bidang gambar.Maka setiap pasangan tepi sejajar dari ketiga pasangan itu akan memiliki tiga titik hilang adalah jenis perspektif?","media":"","rightTxt":"You're right.","wrongTxt":"Sorry, your answer is wrong.","answer1":{"value":"perspektif satu titik hilang","dataRight":"false"},"answer2":{"value":"perspektif dua titik hilang","dataRight":"false"},"answer3":{"value":"perspektif tiga titik hilang","dataRight":"false"},"answer4":{"value":"perspektif empat titik hilang","dataRight":"true"}}]},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}},{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoText","annoId":"202322133184304","alpha":"1","location":{"tannoName":"text1","x":"0.04052250190694127","y":"0.16293757978902101","width":"0.9200991609458428","height":"0.04871329705032587","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"419.52","pageHeight":"595.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","selectable":"false","auto":"true","textStr":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">KLIK GAMBAR DI BAWAH!!!</FONT></P></TEXTFORMAT>","lineHeightRation":"0.045696999999999995","formats":{"defaultFormat":{"htmlText":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">KLIK GAMBAR DI BAWAH!!!</FONT></P></TEXTFORMAT>","pageH":"595.32","pageW":"419.52"}},"background":{"alpha":"0.7","fillBg":"false","color":"16777215"}}],[],[]]}; bookConfig.isFlipPdf=true; var pages_information =[{pageColor:"8342819",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"12297605",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"14137497",pageIsStrech:"no"},{pageColor:"15061961",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"}];	
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}