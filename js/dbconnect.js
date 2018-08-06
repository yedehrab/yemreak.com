/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mysql = require('mysql');
var baglanti = mysql.createConnection({
    host : '94.73.144.45',
    user : 'root',
    password : '',
    database : 'nodejs-test'
    });
 
connection.connect(function(err) {
  if (err) {
    console.error('Veri tabanına bağlanırken hata : ' + err.stack);
    return;
  }
}
