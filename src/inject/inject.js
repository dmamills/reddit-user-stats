console.log("Reddit User Information Activated!");

var tags = document.getElementsByClassName("author");


function createButton(el) {

  var author = el.href;
  var btn = document.createElement('button');

  btn.innerText = "Recent Subreddits";
  btn.addEventListener('click', function(e) {
    console.log("fetching info for user : " + author);
    fetch(`${author}.json`)
    .then(res => res.json())
    .then(res => res.data.children)
    .then(posts => {
      return posts.map(p => p.data)
    })
    .then(posts => {
      var uniqueSubreddits = new Set();
      posts.forEach(p => {
        uniqueSubreddits.add(p.subreddit);
      });


      var result = '';
      uniqueSubreddits.forEach(function(s) {
        result = `${result} ${s},`;
      });

      result = result.substr(0, result.length-1);
      alert(result);
    });
  })

  return btn;
}

Array.prototype.forEach.call(tags, function(el) {
  el.parentElement.appendChild(createButton(el));
});
