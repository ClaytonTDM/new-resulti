// Forked & modified from https://github.com/clickette/main under CC-BY-SA 4.0
function checkForBangs(bangQuery) {
    const bangsMap = [
      ["+g%21", "https://www.google.com/search?q="],
      ["+g!", "https://www.google.com/search?q="],
      ["+%21g", "https://www.google.com/search?q="],
      ["+!g", "https://www.google.com/search?q="],
      ["+b%21", "https://www.bing.com/search?q="],
      ["+b!", "https://www.bing.com/search?q="],
      ["+%21b", "https://www.bing.com/search?q="],
      ["+!b", "https://www.bing.com/search?q="],
      ["+d%21", "https://duckduckgo.com/?q="],
      ["+d!", "https://duckduckgo.com/?q="],
      ["+%21d", "https://duckduckgo.com/?q="],
      ["+!d", "https://duckduckgo.com/?q="],
      ["+w%21", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["+w!", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["+%21w", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["+!w", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["+e%21", "https://www.ecosia.org/search?method=index&q="],
      ["+e!", "https://www.ecosia.org/search?method=index&q="],
      ["+%21e", "https://www.ecosia.org/search?method=index&q="],
      ["+!e", "https://www.ecosia.org/search?method=index&q="],
      ["g%21+", "https://www.google.com/search?q="],
      ["g!+", "https://www.google.com/search?q="],
      ["%21g+", "https://www.google.com/search?q="],
      ["!g+", "https://www.google.com/search?q="],
      ["b%21+", "https://www.bing.com/search?q="],
      ["b!+", "https://www.bing.com/search?q="],
      ["%21b+", "https://www.bing.com/search?q="],
      ["!b+", "https://www.bing.com/search?q="],
      ["d%21+", "https://duckduckgo.com/?q="],
      ["d!+", "https://duckduckgo.com/?q="],
      ["%21d+", "https://duckduckgo.com/?q="],
      ["!d+", "https://duckduckgo.com/?q="],
      ["w%21+", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["w!+", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["%21w+", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["!w+", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["e%21+", "https://www.ecosia.org/search?method=index&q="],
      ["e!+", "https://www.ecosia.org/search?method=index&q="],
      ["%21e+", "https://www.ecosia.org/search?method=index&q="],
      ["!e+", "https://www.ecosia.org/search?method=index&q="],
      ["+g%21", "https://www.google.com/search?q="],
      ["+g!", "https://www.google.com/search?q="],
      ["+%21g", "https://www.google.com/search?q="],
      ["+!g", "https://www.google.com/search?q="],
      ["+b%21", "https://www.bing.com/search?q="],
      ["+b!", "https://www.bing.com/search?q="],
      ["+%21b", "https://www.bing.com/search?q="],
      ["+!b", "https://www.bing.com/search?q="],
      ["+d%21", "https://duckduckgo.com/?q="],
      ["+d!", "https://duckduckgo.com/?q="],
      ["+%21d", "https://duckduckgo.com/?q="],
      ["+!d", "https://duckduckgo.com/?q="],
      ["+w%21", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["+w!", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["+%21w", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["+!w", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["+e%21", "https://www.ecosia.org/search?method=index&q="],
      ["+e!", "https://www.ecosia.org/search?method=index&q="],
      ["+%21e", "https://www.ecosia.org/search?method=index&q="],
      ["+!e", "https://www.ecosia.org/search?method=index&q="],
      ["+yt%21", "https://www.youtube.com/results?search_query="],
      ["+yt!", "https://www.youtube.com/results?search_query="],
      ["+%21yt", "https://www.youtube.com/results?search_query="],
      ["+!yt", "https://www.youtube.com/results?search_query="],
      ["google%21+", "https://www.google.com/search?q="],
      ["google!+", "https://www.google.com/search?q="],
      ["%21google+", "https://www.google.com/search?q="],
      ["!google+", "https://www.google.com/search?q="],
      ["bing%21+", "https://www.bing.com/search?q="],
      ["bing!+", "https://www.bing.com/search?q="],
      ["%21bing+", "https://www.bing.com/search?q="],
      ["!bing+", "https://www.bing.com/search?q="],
      ["duckduckgo%21+", "https://duckduckgo.com/?q="],
      ["duckduckgo!+", "https://duckduckgo.com/?q="],
      ["%21duckduckgo+", "https://duckduckgo.com/?q="],
      ["!duckduckgo+", "https://duckduckgo.com/?q="],
      ["wikipedia%21+", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["wikipedia!+", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["%21wikipedia+", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["!wikipedia+", "https://en.wikipedia.org/wiki/Special:Search?search="],
      ["ecosia%21+", "https://www.ecosia.org/search?method=index&q="],
      ["ecosia!+", "https://www.ecosia.org/search?method=index&q="],
      ["%21ecosia+", "https://www.ecosia.org/search?method=index&q="],
      ["+youtube%21", "https://www.youtube.com/results?search_query="],
      ["+youtube!", "https://www.youtube.com/results?search_query="],
      ["+%21youtube", "https://www.youtube.com/results?search_query="],
      ["+!youtube", "https://www.youtube.com/results?search_query="],
    ];
    for (let ix = 0; ix < bangsMap.length; ix++) {
      const bang = bangsMap[ix][0];
      const searchUrl = bangsMap[ix][1];
      if (bangQuery.includes(bang)) {
        let queryStr = bangQuery.replace(bang, "");
        document.location.replace(searchUrl + queryStr);
        return true; 
      }
    }
    console.warn('No bang query defined');
    return false;
  }

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
      var sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] == sParam) {
        return sParameterName[1];
      }
    }
  }
  var q = getUrlParameter('q');
  if (!q) {
    history.back();
  }
  const qf = q.replaceAll('+', '%20');
  const qfc = decodeURIComponent(qf);
  checkForBangs(q);
  document.getElementById('default-search').value = qfc;
  window.addEventListener('popstate', function (event) {
    q = getUrlParameter('q');
    qf = q.replaceAll('+', '%20');
    qfc = decodeURIComponent(qf);
    checkForBangs(q);
    document.getElementById('searchbox').value = qfc;
  });
  document.title = qfc + " - Prizmarine Search";
  const queryString = window.location.search;
