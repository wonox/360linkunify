function parsedom(res, name, namae) {
	var dpObj = new DOMParser();
	var xmlText = res["responseText"];
	var xmlDoc = $.parseXML(xmlText);
	console.log(res);
	//var xmlcontent=res["responseText"];
	//console.log(content+xmlcontent);
	var listdata="";
	// 両方をカンマ区切りで指定してブラウザによる差異を吸収。
	$(xmlDoc).find("ssopenurl\\:result, result").each(function(){
		var title=$(this).find("dc\\:title, title").text();
		var source=$(this).find("dc\\:source, source").text();
		var issn=$(this).find("ssopenurl\\:issn, issn").text();
		var eissn=$(this).find("ssopenurl\\:eissn, eissn").text();
		var volume=$(this).find("ssopenurl\\:volume, volume").text();
		var issue=$(this).find("ssopenurl\\:issue, issue").text();
		var spage=$(this).find("ssopenurl\\:spage, spage").text();
		var startDate=$(this).find("ssopenurl\\:startDate, startDate").text();
		var providerName=$(this).find("ssopenurl\\:providerName, providerName").text();
		var databaseName=$(this).find("ssopenurl\\:databaseName, databaseName").text();
		var startDate=$(this).find("ssopenurl\\:startDate, startDate").text();
		//var surl=$(this).find("ssopenurl\\:url").text();
		var jurl=$(this).find("ssopenurl\\:url[type='journal'], url[type='journal']").text();
		var aurl=$(this).find("ssopenurl\\:url[type='article'], url[type='article']").text();
		var vurl=$(this).find("ssopenurl\\:url[type='volume'], url[type='volume']").text();
		listdata+="<h4>"+title+"</h4><p>source: "+ source + " issn: " + issn + " eissn: " + eissn + " vol: " + volume + " issue: " + issue + " spage: " + spage + " startDate: " + startDate + " providerName: " + providerName + " databaseName: " + databaseName + '</p><p><a href="' + vurl + '">' + vurl +'</a><br/><a href="' + jurl + '">' + jurl +'</a><br/><a href="' + aurl + '">' + aurl +"</a></p>";
	});
 	//	$(".hyouji2").html("<h4>ここにテキストデータを変換したXMLがでます</h4>"+listdata);
	name = '.' + name;
	if ( listdata == "" ) listdata = "nodata";
	$(name).html("<h3>"+namae+"</h3>"+listdata);
}

function ajaxxml(baseurl,name,namae) {
//Javascript変数定義
//var content ="";
	$(document).ready(function(){
		$.ajax({
    		// url: 'http://natalie.mu/comic/feed/news',
    		// url: 'http://vs2ga4mq9g.openurl.xml.serialssolutions.com/openurlxml?version=1.0&ctx_ver=Z39.88-2004&ctx_enc=info:ofi/enc:UTF-8&rfr_id=info:sid/summon.serialssolutions.com&rft_val_fmt=info:ofi/fmt:kev:mtx:journal&rft.genre=article&rft.atitle=Iodine+status+of+UK+schoolgirls:+a+cross-sectional+survey&rft.jtitle=The+Lancet&rft.au=Vanderpump,+Mark+PJ&rft.au=Holder,+Roger+L&rft.au=Lazarus,+John+H&rft.au=Boelaert,+Kristien&rft.au=Laurberg,+Peter&rft.au=Smyth,+Peter+P&rft.au=Franklyn,+Jayne+A&rft.date=2011-06-17&rft.pub=Elsevier+B.V&rft.issn=0140-6736&rft.volume=377&rft.issue=9782&rft.spage=2007&rft.epage=2012&rft_id=info:doi/10.1016/S0140-6736%2811%2960693-4&rft.externalDBID=GLAN&rft.externalDocID=10_1016_S0140_6736_11_60693_4',
			url: baseurl,
			type: "GET",
			success: function(res) {
        		// content = $(res.responseText).text();//○○.responseTextで取得
 				// $(".hyouji").html("<h4>responseText</h4>"+content);
 				parsedom(res, name, namae);
 			},
			fail: function() {
				alert(fail);
			}
		});
	});
}

/*base URL of other libraries*/
var portal=[
  {"base":"http://vs2ga4mq9g.search.serialssolutions.com/","name":'todai',"namae":'東大'},
  {"base":"http://nw5sg2bn2y.search.serialssolutions.com/","name":'kagoshima',"namae":'鹿児島大'},
  {"base":"http://yk2pw4vj9e.openurl.xml.serialssolutions.com/","name":'hitotsubashi',"namae":'一橋大学'},
  {"base":"http://qp4wz6vz5k.search.serialssolutions.com/","name":'chiba',"name":'千葉大'},
  {"base":"http://mx9kp2xn4f.search.serialssolutions.com/","name":'chuo',"namae":'中央大学'},
  {"base":"http://tt2mx4dc7s.search.serialssolutions.com/","name":'kyoto',"namae":'京都大学'},
  {"base":"http://te8rl7nq6r.search.serialssolutions.com/","name":'kyudai',"namae":'九州大学'},
  {"base":"http://sg3jk3se8d.search.serialssolutions.com/","name":'ryukyu',"namae":'琉球大学'},
  {"base":"http://ck3cc4bu9u.search.serialssolutions.com/","name":'doshisha',"namae":'同志社大学'},
  {"base":"http://jg8gn6xr5x.search.serialssolutions.com/","name":'hokudai',"namae":'北海道大学'}
  ];

// opurl = "?version=1.0&ctx_ver=Z39.88-2004&ctx_enc=info:ofi/enc:UTF-8&rfr_id=info:sid/summon.serialssolutions.com&rft_val_fmt=info:ofi/fmt:kev:mtx:journal&rft.genre=article&rft.atitle=Iodine+status+of+UK+schoolgirls:+a+cross-sectional+survey&rft.jtitle=The+Lancet&rft.au=Vanderpump,+Mark+PJ&rft.au=Holder,+Roger+L&rft.au=Lazarus,+John+H&rft.au=Boelaert,+Kristien&rft.au=Laurberg,+Peter&rft.au=Smyth,+Peter+P&rft.au=Franklyn,+Jayne+A&rft.date=2011-06-17&rft.pub=Elsevier+B.V&rft.issn=0140-6736&rft.volume=377&rft.issue=9782&rft.spage=2007&rft.epage=2012&rft_id=info:doi/10.1016/S0140-6736%2811%2960693-4&rft.externalDBID=GLAN&rft.externalDocID=10_1016_S0140_6736_11_60693_4";
// opurl = "?version=1.0&ctx_ver=Z39.88-2004&ctx_enc=info:ofi/enc:UTF-8&rfr_id=info:sid/summon.serialssolutions.com&rft_val_fmt=info:ofi/fmt:kev:mtx:journal&rft.genre=journal&rfr_dat=SB00050365&rft.issn=00014273&rft.jtitle=The+Academy+of+Management+journal";
// opurl = "?version=1.0&ctx_ver=Z39.88-2004&url_ver=Z39.88-2004&ctx_enc=info%3aofi/enc%3aUTF-8&rft_val_fmt=info%3aofi/fmt%3akev%3amtx%3ajournal&rfr_id=info%3asid/ci.nii.ac.jp%3aCiNii&rfe_dat=naid/110002763494&rft.issn=04478053&rft.eissn=04478053&rft.atitle=3.%e5%ad%a6%e8%a1%93%e6%83%85%e5%a0%b1%e3%82%bb%e3%83%b3%e3%82%bf%e3%83%bc%e3%81%ae%e3%83%87%e3%82%a3%e3%82%b8%e3%82%bf%e3%83%ab%e5%9b%b3%e6%9b%b8%e9%a4%a8%e3%83%97%e3%83%ad%e3%82%b8%e3%82%a7%e3%82%af%e3%83%88+%28%3c%e7%89%b9%e9%9b%86%3e%e3%83%87%e3%82%a3%e3%82%b8%e3%82%bf%e3%83%ab%e5%9b%b3%e6%9b%b8%e9%a4%a8%29&rft.jtitle=%e6%83%85%e5%a0%b1%e5%87%a6%e7%90%86&rft.aulast=%e5%ae%89%e9%81%94&rft.aufirst=%e6%b7%b3&rft.aucorp=%e5%ad%a6%e8%a1%93%e6%83%85%e5%a0%b1%e3%82%bb%e3%83%b3%e3%82%bf%e3%83%bc%e7%a0%94%e7%a9%b6%e9%96%8b%e7%99%ba%e9%83%a8&rft.date=1996&rft.volume=37&rft.issue=9&rft.spage=826&rft.epage=830";
// opurl = "?&ctx_ver=Z39.88-2004&url_ver=Z39.88-2004&ctx_enc=info%3Aofi%2Fenc%3AUTF-8&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&rfr_id=info%3Asid%2Fci.nii.ac.jp%3ACiNii&rfe_dat=info%3Anaid%2F40020506894&rfe_dat=info%3Ancid%2FAA11981769&rft.atitle=女性の地域移動歴と所得の関係について+%3A+有配偶者の学歴に着目した考察&rft.jtitle=一橋大学大学教育研究開発センター年報&rft.aulast=朴澤&rft.aufirst=泰男&rft.date=2014&rft.spage=47&rft.epage=70";
// opurl = "?ctx_ver=Z39.88-2004&url_ver=Z39.88-2004&ctx_enc=info%3aofi%2fenc%3aUTF-8&rft_val_fmt=info%3aofi%2ffmt%3akev%3amtx%3ajournal&rfr_id=info%3asid%2fci.nii.ac.jp%3aCiNii&rfe_dat=naid%2f110002763494&rft.issn=04478053&rft.eissn=04478053&rft.atitle=3.%e5%ad%a6%e8%a1%93%e6%83%85%e5%a0%b1%e3%82%bb%e3%83%b3%e3%82%bf%e3%83%bc%e3%81%ae%e3%83%87%e3%82%a3%e3%82%b8%e3%82%bf%e3%83%ab%e5%9b%b3%e6%9b%b8%e9%a4%a8%e3%83%97%e3%83%ad%e3%82%b8%e3%82%a7%e3%82%af%e3%83%88+%28%3c%e7%89%b9%e9%9b%86%3e%e3%83%87%e3%82%a3%e3%82%b8%e3%82%bf%e3%83%ab%e5%9b%b3%e6%9b%b8%e9%a4%a8%29&rft.jtitle=%e6%83%85%e5%a0%b1%e5%87%a6%e7%90%86&rft.aulast=%e5%ae%89%e9%81%94&rft.aufirst=%e6%b7%b3&rft.aucorp=%e5%ad%a6%e8%a1%93%e6%83%85%e5%a0%b1%e3%82%bb%e3%83%b3%e3%82%bf%e3%83%bc%e7%a0%94%e7%a9%b6%e9%96%8b%e7%99%ba%e9%83%a8&rft.date=1996&rft.volume=37&rft.issue=9&rft.spage=826&rft.epage=830";
// ajaxxml(testurl,"todai");

var opurl =	window.location.search;
if ( !opurl.match(/version=1.0/)) opurl = opurl.replace(/(\?)/g, "$1version=1.0&" );
opurl = opurl.replace("url_ver=Z39.88-2003&", "" );

for(i in portal) {
	  ajaxxml( portal[i]['base'] + 'openurlxml' + opurl,  portal[i]['name'],  portal[i]['namae']);
}
