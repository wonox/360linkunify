function parsedom(res, name, namae, baseurl) {
	var dpObj = new DOMParser();
	var xmlText = res["responseText"];
	var xmlDoc = $.parseXML(xmlText);
	console.log(res);
	var xmlcontent=res["responseText"];
	console.log(content+xmlcontent);
	var listdata="";
	// 両方をカンマ区切りで指定してブラウザによる差異を吸収。
	// toDo: <ssopenurl:linkGroup type="holding">がなければスルー
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
		var endDate=$(this).find("ssopenurl\\:endDate, endDate").text();
		//var surl=$(this).find("ssopenurl\\:url").text();
		var jurl=$(this).find("ssopenurl\\:url[type='journal'], url[type='journal']").text();
		var aurl=$(this).find("ssopenurl\\:url[type='article'], url[type='article']").text();
		var vurl=$(this).find("ssopenurl\\:url[type='volume'], url[type='volume']").text();
		var turl=$(this).find("ssopenurl\\:url[type='termsOfUse'], url[type='termsOfUse']").text();

		if ($(this).find("ssopenurl\\:linkGroups, linkGroups").text()) {
			// listdata+="<li><h4>"+title+"</h4><p>source: "+ source + " issn: " + issn + " eissn: " + eissn + " vol: " + volume + " issue: " + issue + " spage: " + spage + " startDate: " + startDate + " endDate: " + endDate + " providerName: " + providerName + " databaseName: " + databaseName + '</p><p><a href="' + vurl + '">' + vurl +'</a><br/><a href="' + jurl + '">' + jurl +'</a><br/><a href="' + aurl + '">' + aurl + '</a><br/><a href="' + turl + '">termsOfUse: ' + turl + '</a></p></li>';
			listdata+="<li><h4>"+title+"</h4><p>source: "+ source + "<br /> issn: " + issn + " eissn: " + eissn + " vol: " + volume + " issue: " + issue + " spage: " + spage + " startDate: " + startDate + " endDate: " + endDate + " providerName: " + providerName + " databaseName: " + databaseName + '</p><p><a href="' + vurl + '">' + vurl +'</a><br/><a href="' + jurl + '">' + jurl +'</a><br/><a href="' + aurl + '">' + aurl + '</a>';
			if (turl) { listdata += '<br/><a href="' + turl + '">termsOfUse: ' + turl + '</a></p></li>' }
				else { listdata += '</p></li>'};
		};
	});

 	//	$(".hyouji2").html("<h4>ここにテキストデータを変換したXMLがでます</h4>"+listdata);
	var name = '.' + name;
	var resolver = baseurl.replace(/\.openurl\.xml\.serialssolutions\.com\/openurlxml/, ".search.serialssolutions.com/");
	// alert(resolver);
	if ( listdata == "" ) listdata = "nodata";
	// $(name).html("<h3><a href=\"" + resolver + "\">"+namae+"</a></h3>"+listdata);
	$("#resolver").append('<br />' + "<h3><a href=\"" + resolver + "\">"+namae+"</a></h3><ol>"+listdata + "</ol>");
}

function ajaxxml(baseurl,name,namae) {
//Javascript変数定義
//var content ="";
	$(document).ready(function(){
		$.ajax({
			url: baseurl,
			type: "GET",
			success: function(res) {
 				parsedom(res, name, namae, baseurl);
 			},
			fail: function() {
				alert(fail);
			}
		});
	});
}

/*base URL of other libraries*/
var portal=[
{"base":"http://ck3cc4bu9u","name":'doshisha',"namae":'同志社大学'},
{"base":"http://mx9kp2xn4f","name":'chuo',"namae":'中央大学'},
{'base':'http://tm3xa4ur3u','name':'waseda','namae':'早稲田大学'},
{'base':'http://ax5kr6fu7r','name':'jochi','namae':'上智大学'},
{'base':'http://cv8kl8wa9k','name':'rikkyo','namae':'立教大学'},
{'base':'http://te8rl7nq6r','name':'kyudai','namae':'九州大学'},
{'base':'http://yj3eg6at9n','name':'shimadai','namae':'島根大学'},
{'base':'http://hy6nh4ag9e','name':'wakayama','namae':'和歌山大学'},
{'base':'http://uj3nm4eq5h','name':'nagaoka','namae':'長岡技術科学大学'},
{'base':'http://qp4wz6vz5k','name':'chiba','namae':'千葉大学'},
{'base':'http://yk2pw4vj9e','name':'hitotsubashi','namae':'一橋大学'},
{'base':'http://vs2ga4mq9g','name':'todai','namae':'東京大学'},
{'base':'http://ec2xm3xr4v','name':'tohoku','namae':'東北大学'},
{'base':'http://jg8gn6xr5x','name':'hokudai','namae':'北海道大学'},
{'base':'http://gk4ku3rq6c','name':'shigaika','namae':'滋賀医科大学'},
{'base':'http://xz9mz9lt2m','name':'gifu','namae':'岐阜大学'},
{'base':'http://sg3jk3se8d','name':'ryukyu','namae':'琉球大学'},
{'base':'http://hz9vd5wl2f','name':'kumamoto','namae':'熊本大学'},
{'base':'http://nw5sg2bn2y','name':'kagoshima','namae':'鹿児島大学'},
{'base':'http://yc6au9sr3t','name':'ochadai','namae':'お茶の水女子大学'},
{'base':'http://xx6ge5xn4a','name':'hirosaki','namae':'弘前大学'},
{'base':'http://jn2xs2wb8u','name':'tukuba','namae':'筑波大学'},
{'base':'http://ek9vk5wf7j','name':'tokushima','namae':'徳島大学'},
{'base':'http://gk4ku3rq6c','name':'shigadai','namae':'滋賀大学'},
{'base':'http://rn4ma3lk7u','name':'dentsu','namae':'電気通信大学'},
{'base':'http://xv4nf5au5d','name':'kochi','namae':'高知大学'},
{'base':'http://bl3bd7tc7s','name':'ikashika','namae':'東京医科歯科大学'},
{'base':'http://wm3qp6kj6d','name':'miyazaki','namae':'宮崎大学'},
{'base':'http://tt2mx4dc7s','name':'kyodai','namae':'京都大学'},
{'base':'http://kx3ry9kp2c','name':'noko','namae':'東京農工大学'},
{'base':'http://qq6az3es8a','name':'kogei','namae':'京都工芸繊維大学'},
{'base':'http://yj3bg6ng2l','name':'hokuriku','namae':'北陸先端科学技術大学院大学'}
  ];

// main
var opurl =	window.location.search;
if (opurl.match(/Z39\.88/)) {
  if ( !opurl.match(/version=1.0/)) opurl = opurl.replace(/(\?)/g, "$1version=1.0&" );
  opurl = opurl.replace("url_ver=Z39.88-2003&", "" );
  main(opurl);
} else {alert("failure")}

function main(opurl) {
  for(i in portal) {
	  ajaxxml( portal[i]['base'] + '.openurl.xml.serialssolutions.com/openurlxml' + opurl,  portal[i]['name'],    portal[i]['namae']);
  }
}

// フォームの値を取得する
function my1() {
	// var keyname = document.getElementById('my-text').value;
	var keyname = $('#my-form [name=my-text]').val(); // jqueryを使った場合
	removeall("resolver");
	if (keyname == '') {removeall("result");};
	if (!keyname.match(/[0-9\-xX]{8}/)) {
		alert("input only valid ISSN");
		return false; // break の代わり
		};
	keyname = '?version=1.0&ctx_ver=Z39.88-2004&ctx_enc=info:ofi/enc:UTF-8&rfr_id=info:sid/summon.serialssolutions.com&rft_val_fmt=info:ofi/fmt:kev:mtx:journal&rft.genre=article&rft.issn=' + keyname;
	main(keyname);
}

function removeall (id){
	var aNode = document.getElementById(id);
	// aNode.parentNode.removeChild(aNode);

	for (var i =aNode.childNodes.length-1; i>=0; i--) {
		aNode.removeChild(aNode.childNodes[i]);
	}
}

// http://mx9kp2xn4f.search.serialssolutions.com/
// sample_url: 'http://vs2ga4mq9g.openurl.xml.serialssolutions.com/openurlxml?version=1.0&ctx_ver=Z39.88-2004&ctx_enc=info:ofi/enc:UTF-8&rfr_id=info:sid/summon.serialssolutions.com&rft_val_fmt=info:ofi/fmt:kev:mtx:journal&rft.genre=article&rft.atitle=Iodine+status+of+UK+schoolgirls:+a+cross-sectional+survey&rft.jtitle=The+Lancet&rft.au=Vanderpump,+Mark+PJ&rft.au=Holder,+Roger+L&rft.au=Lazarus,+John+H&rft.au=Boelaert,+Kristien&rft.au=Laurberg,+Peter&rft.au=Smyth,+Peter+P&rft.au=Franklyn,+Jayne+A&rft.date=2011-06-17&rft.pub=Elsevier+B.V&rft.issn=0140-6736&rft.volume=377&rft.issue=9782&rft.spage=2007&rft.epage=2012&rft_id=info:doi/10.1016/S0140-6736%2811%2960693-4&rft.externalDBID=GLAN&rft.externalDocID=10_1016_S0140_6736_11_60693_4',
// opurl = "?version=1.0&ctx_ver=Z39.88-2004&ctx_enc=info:ofi/enc:UTF-8&rfr_id=info:sid/summon.serialssolutions.com&rft_val_fmt=info:ofi/fmt:kev:mtx:journal&rft.genre=article&rft.atitle=Iodine+status+of+UK+schoolgirls:+a+cross-sectional+survey&rft.jtitle=The+Lancet&rft.au=Vanderpump,+Mark+PJ&rft.au=Holder,+Roger+L&rft.au=Lazarus,+John+H&rft.au=Boelaert,+Kristien&rft.au=Laurberg,+Peter&rft.au=Smyth,+Peter+P&rft.au=Franklyn,+Jayne+A&rft.date=2011-06-17&rft.pub=Elsevier+B.V&rft.issn=0140-6736&rft.volume=377&rft.issue=9782&rft.spage=2007&rft.epage=2012&rft_id=info:doi/10.1016/S0140-6736%2811%2960693-4&rft.externalDBID=GLAN&rft.externalDocID=10_1016_S0140_6736_11_60693_4";
// opurl = "?version=1.0&ctx_ver=Z39.88-2004&ctx_enc=info:ofi/enc:UTF-8&rfr_id=info:sid/summon.serialssolutions.com&rft_val_fmt=info:ofi/fmt:kev:mtx:journal&rft.genre=journal&rfr_dat=SB00050365&rft.issn=00014273&rft.jtitle=The+Academy+of+Management+journal";
// opurl = "?version=1.0&ctx_ver=Z39.88-2004&url_ver=Z39.88-2004&ctx_enc=info%3aofi/enc%3aUTF-8&rft_val_fmt=info%3aofi/fmt%3akev%3amtx%3ajournal&rfr_id=info%3asid/ci.nii.ac.jp%3aCiNii&rfe_dat=naid/110002763494&rft.issn=04478053&rft.eissn=04478053&rft.atitle=3.%e5%ad%a6%e8%a1%93%e6%83%85%e5%a0%b1%e3%82%bb%e3%83%b3%e3%82%bf%e3%83%bc%e3%81%ae%e3%83%87%e3%82%a3%e3%82%b8%e3%82%bf%e3%83%ab%e5%9b%b3%e6%9b%b8%e9%a4%a8%e3%83%97%e3%83%ad%e3%82%b8%e3%82%a7%e3%82%af%e3%83%88+%28%3c%e7%89%b9%e9%9b%86%3e%e3%83%87%e3%82%a3%e3%82%b8%e3%82%bf%e3%83%ab%e5%9b%b3%e6%9b%b8%e9%a4%a8%29&rft.jtitle=%e6%83%85%e5%a0%b1%e5%87%a6%e7%90%86&rft.aulast=%e5%ae%89%e9%81%94&rft.aufirst=%e6%b7%b3&rft.aucorp=%e5%ad%a6%e8%a1%93%e6%83%85%e5%a0%b1%e3%82%bb%e3%83%b3%e3%82%bf%e3%83%bc%e7%a0%94%e7%a9%b6%e9%96%8b%e7%99%ba%e9%83%a8&rft.date=1996&rft.volume=37&rft.issue=9&rft.spage=826&rft.epage=830";
// opurl = "?&ctx_ver=Z39.88-2004&url_ver=Z39.88-2004&ctx_enc=info%3Aofi%2Fenc%3AUTF-8&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&rfr_id=info%3Asid%2Fci.nii.ac.jp%3ACiNii&rfe_dat=info%3Anaid%2F40020506894&rfe_dat=info%3Ancid%2FAA11981769&rft.atitle=女性の地域移動歴と所得の関係について+%3A+有配偶者の学歴に着目した考察&rft.jtitle=一橋大学大学教育研究開発センター年報&rft.aulast=朴澤&rft.aufirst=泰男&rft.date=2014&rft.spage=47&rft.epage=70";
// opurl = "&rft.eissn=04478053&rft.atitle=3.%e5%ad%a6%e8%a1%93%e6%83%85%e5%a0%b1%e3%82%bb%e3%83%b3%e3%82%bf%e3%83%bc%e3%81%ae%e3%83%87%e3%82%a3%e3%82%b8%e3%82%bf%e3%83%ab%e5%9b%b3%e6%9b%b8%e9%a4%a8%e3%83%97%e3%83%ad%e3%82%b8%e3%82%a7%e3%82%af%e3%83%88+%28%3c%e7%89%b9%e9%9b%86%3e%e3%83%87%e3%82%a3%e3%82%b8%e3%82%bf%e3%83%ab%e5%9b%b3%e6%9b%b8%e9%a4%a8%29&rft.jtitle=%e6%83%85%e5%a0%b1%e5%87%a6%e7%90%86&rft.aulast=%e5%ae%89%e9%81%94&rft.aufirst=%e6%b7%b3&rft.aucorp=%e5%ad%a6%e8%a1%93%e6%83%85%e5%a0%b1%e3%82%bb%e3%83%b3%e3%82%bf%e3%83%bc%e7%a0%94%e7%a9%b6%e9%96%8b%e7%99%ba%e9%83%a8&rft.date=1996&rft.volume=37&rft.issue=9&rft.spage=826&rft.epage=830";
//http://nw5sg2bn2y.search.serialssolutions.com/?version=1.0&ctx_ver=Z39.88-2004&ctx_enc=info:ofi/enc:UTF-8&rfr_id=info:sid/summon.serialssolutions.com&rft_val_fmt=info:ofi/fmt:kev:mtx:journal&rft.genre=article&rft.issn=
