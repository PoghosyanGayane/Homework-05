const express = require('express');
const url = require('url');
const app = express();
 var cat = {
  down: 0,
  right:0,
 };
 app.get('/', function (req, res){
  var html, i=1, j=1;
  var m=url.parse(req.url,true).query; // returns { down: 'x', right: 'y' }
  cat.down+=parseInt(m.down);
  cat.right+=parseInt(m.right);
   html+='<html><head><style> tr, td {border:1px solid black;width:100px;height:100px;}</style></head>';
   html+='<body><table width="800px" height="800px">';
   for(i;i<5;i++){
    html+='<tr>';
    for(j;j<5;j++){
      html+='<td>';
      if (i==cat.down && j==cat.right){
        html+=' <img src="https://cdn4.vectorstock.com/i/thumb-large/27/98/cute-smiling-cartoon-kitten-cat-standing-vector-23012798.jpg" alt="cat image" height="99px" width="99px"> ';
      };
      html+='</td>';
     };
     j=1;
    html+='</tr>';
   };
   html+='</table></body></html>';
   res.send(html);
    });
 
 app.listen(8000, function (req, res ){
   console.log('Running ccc...')
 });