/*
  Alright So Sponsors.js is supposed to find the 

*/

// <script type="text/javascript">
// ;(function() {
//     
//    document.articleGroup = function() {
//      
//      // var articles = document.getElementsByClassName('index-post-summary');
//      
//      /*
//       The Group function returns an array of arrays, in order, based on month.
//      */
//      group = function(elements){
//        
//        // group by month,
//        // assume proper chronological order
//        
//        var groups = [];
//        var lastMonth = elements[0].getAttribute('data-month');
//        var lastYear  = elements[0].getAttribute('data-year');
//        var lastGroupname = lastMonth + " " + lastYear
//        var currentGroup = []; // a.push(objectToPush)
//        currentGroup.push(elements[0]);
//        
//        console.log(lastMonth + " " + lastYear);
//        
//        for (var i = 1; i < elements.length; i++) { 
//          
//          var newGroupFlag = false;
//          var year  = elements[i].getAttribute('data-year');
//          var month = elements[i].getAttribute('data-month');
//          var groupname = month + " " + year
//          
//          console.log(groupname + " != " + lastGroupname );
//          if ( groupname != lastGroupname ) {
//            newGroupFlag = true;
//          }
//          
//          if (newGroupFlag == true) {
//            console.log("we should be pusing a new group now.")
//            groups.push(currentGroup);
//            currentGroup = [];
//          }
//          
//          currentGroup.push(elements[i]);
//          lastMonth = month;
//          lastYear  = year;
//          lastGroupname = lastMonth + " " + lastYear
//          console.log(lastGroupname);
//        }
//        groups.push(currentGroup); // push the last group
//        
//        return groups;
//      }
//      
//       // get all of the article rows.
// 
//       /* setup the fancy type thing */
//       var articles = document.getElementsByClassName('index-post-summary');
// 
//       // ReFilter them based on Month. (modifying HTML)
//       // Find the tags in each article.
//       // Create a tag list.
//       // Add events that will hide and filter the Articles based on the tags 
//       // that they have.
// 
//       // Set changes on load
//       return group(articles);
//    };
//    
//    document.replaceArticles = function(articles) {
//        
//      var articlebox = document.getElementsByClassName('index-articles')[0];
// 
//      var lastGroupname = ""
//      
//      console.log(articles)
//      
//      for (var i = 0; i < articles.length; i++) { 
//        
//       var groupname = articles[0].getAttribute('data-groupname');
//       if (groupname != lastGroupname) {
//         console.log("They Don't Match.")
//         console.log("lastGroupname:"+lastGroupname)
//         console.log("groupname:"+groupname)
//         var newHeader = document.createElement("h2");
//         var textnode = document.createTextNode(groupname);
//         newHeader.appendChild(textnode); 
//         articlebox.appendChild(newHeader)
//       }
//       
//       articlebox.appendChild(articles[0])
//       
//       lastGroupname = groupname;      
//      }
//      
//    }
//    
//    /* Filters the articles based on criteria */
//    document.articleFilter = function() {
//      
//    };
//    
//    function init() {
//      var articles = document.getElementsByClassName('index-post-summary');
//       document.replaceArticles(articles)
//    }
//    
//    init()
//    
// }());
// </script>