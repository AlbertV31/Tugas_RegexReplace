function panggilRegexp() {
 let data = "Belajar-Satu-Tahun-Bersama-Niomic";
 for (var i = 0; i < 4; i++) {
   data = data.replace(/-/," ") ;
 }
 console.log(data);
}

panggilRegexp()
