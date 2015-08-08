Parse.initialize("tkNyyBE2xFwxB2SyIHXJF2nlJjcXlnRbzzivVMyx", "Dd5ERWrbHHsWgWAq7xJTpyh4WyEs2euM5dtgN7Rp");
if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};
(function(){
	Router = (function(){
		var $router;
		$router = void 0;
		function Router(){
			$router=$('#switchView');
		}
		Router.prototype.switchView ={
					index:function(){
				 	 	return  '<p style="font-size:30px;">Welcome</p>'
						       +'</br><p>Proposed Dates of Event:	14-16 December 2015</p>'
						       +'<p>Event Venue:	National Chengchi University, Taiwan</p>';
			     	},
				 	theme:function(){
				  
				  		return  '<p style="font-size:30px;">Event Themes</p>'
						       +'</br><table class="table table-hover infTab">'
						              +'<tr><td style="font-weight: bold;">Title of the Event:</td>'
						                  +'<td>Advances in global DEMs and Tools for assessing their quality, useability and interoperability</td></tr>'
						              +'<tr><td style="font-weight: bold;">Proposed Dates of Event: </td><td>14-16 December 2015</td></tr>'
						              +'<tr><td style="font-weight: bold;">Event Venue:</td><td>National Chengchi University, Taiwan</td></tr>'
						              +'<tr><td style="font-weight: bold;">Themes of Event:</td>'
						                  +'<td><p style="font-weight: bold;">Global DEMs</p>SRTM 3.0 and NASADEM</br>ASTER GDEM 3.0</br>ALOS PRISM</br>IRS-5P</br>Airbus DS WorldDEM </br></br>'
						                      +'<p style="font-weight: bold;">Assessment of Global DEMs</p>Assessments of TanDEM-X i-DEM</br>CEOS-WGCV test site assessments</br>Statistical tools for DEM QA</br>Global assessments using altimetry</br></br>'
						                      +'<p style="font-weight: bold;">Tools for working with global DEMs and exploring interoperability</p>ESRI</br>Google</br>Bing</br>Baidu</br>Open source</br></br>'
						                      +'<p style="font-weight: bold;">Working with Global DEMs</p>Georadiometric correction </br>CSIRO</br>USGS</br>US Hydrology</br>GEO</br>Disasters</br></br>'
						                      +'<p style="font-weight: bold;">Hands on tutorials on iPads & Androids</p>Open source </br>Google</br>ArcGis</br>Apps</br>'
						                  +'</td>'
						              +'</tr>'
						       +'</table>';
			        },
			  		date:function(){

				   	 	return '<div>date</div>';
			     	},
				 	transportation:function(){
			 
						return  '<p style="font-size:30px;">Transportation</p></br>'
						       +'<p style="font-weight: bold;">From Taiwan Taoyuan International Airport to NCCU</p>'
						       +'<iframe src="http://www.dr2ooo.com/tools/maps/maps.php?zoom=16&width=500&height=266&ll=24.986272,-238.424186&ctrl=true&" width="500" height="266"></iframe></br></br>'
							   +'<p style="font-weight: bold;">By Taxi</p><p>There is a taxi pickup area by the Terminal Arrival area at Taiwan Taoyuan International Airport. Airport taxies provide 24-hour transportation services. For a one way trip from Taoyuan International Airport to Taipei City, the taxi cost falls in the range of $1,100 - 1,700 approximately, depending on the numbers of passengers, luggages, and the size of the car.</p>'
							   +'<p>Terminal 1 Taxi Service Center s phone number:+886-3-398-2832</p>'
							   +'<p>Terminal 2 Taxi Service Center s phone number:+886-3-398-3599</p></br>'
							   +'<p style="font-weight: bold;">By Public Transportation</p>'
							   +'<p>From the airport arrival area, take the airport bus to Zhongxiao Fuxing MRT Station. Then, take the MRT (Taipei Rapid Transit System) brown line, to MRT Taipei Zoo. Then, take the bus (#236, 237, 611, 282, BR11 , or BR6) across the street from MRT Taipei Zoo Station to NCCU. Total cost is about NT$200.</p>'
							   +'<a href="http://www.nccu.edu.tw/uploads/asset/data/54edfcc875627509e09c0b00/06NCCU_Traffic_Map_en.jpg"><img src="http://www.nccu.edu.tw/uploads/asset/data/54edfcc875627509e09c0b00/06NCCU_Traffic_Map_en.jpg" style="width:400px;"></a>';
			  	 	},
					accommdation:function(){
				
			            return  '<p style="font-size:30px;">Accommodation</p>'
						       +'<p style="font-size:20px;">On-site residence</p>'
						       +'<p>NCCU I-House features various kinds of twin rooms, double rooms, triple rooms, and suites with special rates for conference participants. NCCU has made special arrangements with several partner hotels for participants of conferences with corporate rates. NCCU I-House and some partner hotels near NCCU campus are given below.</p>'
						       +'<p>(1)	NCCU international house (NTD 1,600 and up) (政治大學學人會館)</p><p>Web: http://101207243.wix.com/ihousenccu</p><p>Address: No.17, Ln. 112, Sec. 2, Xiuming Rd., Wenshan Dist., Taipei City 116, Taiwan</p><p>Telephone: +886-2-2936-8869</p><p>Fax: +886-2-2936-7769</p><p>Description: NCCU I-House provides accommodation for short term stays within the period of a month. Between the 6th and 7th floor there are 19 rooms, including 14 twin rooms and 5 family suites.</p></br><p style="font-size:20px;">Nearby hotels</p><p>All prices are listed prices for a night.</p><p>(2)	Howard Civil Service International House (NTD 1,920 and up) (福華國際文教會館)</p><p>English Web: http://intl-house.howard-hotels.com/?Lsn=2</p><p>Address: No.30, Sec. 3, Xinsheng S. Rd., Da’an Dist., Taipei City 106, Taiwan</p><p>Telephone: +886-2-7712-2323</p><p>Fax: +886-2-7712-23333</p></br><p>(3)	Chinatrust Executive House Hsin-Tien (NTD 1,900 and up) (新店中信大飯店)</p><p>English Web: http://hsintien.chinatrust-hotel.com/</p><p>Address: No. 219-2, Chung Shing Rd., Sec. 3, Hsin-Tien Dist., New Taipei City 231, Taiwan</p><p>Telephone: +886-2-2910-6600</p><p>Fax: +886-2-2910-5522</p></br><p>(4)	Taipei Fullerton Hotel (NTD 3,630 and up) (台北馥敦飯店)</p><p>English Web: http://www.taipeifullerton.com.tw/html/eng_south/about_us.htm</p><p>Address: No.41, Sec. 2, Fusing S. Rd., Da-an District, Taipei City 106, Taiwan</p><p>Telephone: +886-2-2703-1234</p><p>Fax: +886-2-2705-6161</p></br><p>(5)	Holliday Inn (NTD 2,700 and up) (台北深坑假日飯店)</p><p>English Web: http://www.holidayinntpe.com.tw/eng/news.php</p><p>Address: No.265, Sec.3, Beishen Rd., Shenkeng Dist., New Taipei City, 222, Taiwan</p><p>Telephone: +886-2-2662-8000</p><p>Fax: +886-2-2662-7428</p></br><p>(6)	Fullon Hotel (NTD 3,328 and up) (深坑福容飯店)</p><p>English Web: http://shenkeng.fullon-hotels.com/</p><p>Address: No. 236, Sec. 3, Beishen Rd., Shenkeng Dist., New Taipei City 222, Taiwan</p><p>Telephone: +886-2-2662-0088</p><p>Fax: +886-2-2662-1669</p></br><p>(7)	Taipei Cosmos Hotel (NTD 3,300 and up) (天成大飯店)</p><p>English Web: http://www.cosmos-hotel.com.tw/en/</p><p>Address: No. 43, Sec. 1, Chung Hsiao West Road.,Taipei City 100, Taiwan</p><p>Telephone: +886-2-2361-7856</p><p>Fax: +886-2-2311-8921</p></br><p>(8)	Brother Hotel (NTD 2,800 and up) (兄弟大飯店)</p><p>English Web: http://www.brotherhotel.com.tw/en/aboutus.php</p><p>Address: No. 255, Sect. 3, Nanjing E. Road, Songshan District, Taipei City, Taiwan</p><p>Telephone: +886-2-2712-3456</p><p>Fax: +886-2-2717-3334</p></br><p>(9)	Just Sleep @ NTU (NTD 3,000 and up) (捷絲旅商務會館-臺大尊賢館)</p><p>English Web: http://www.justsleep.com.tw/NTU/en</p><p>Address: No. 83, Sec. 4, Roosevelt Rd., Taipei, Taiwan</p><p>Telephone: +886-2-7735-5088</p><p>Fax: +886-2-7735-5068</p>';
			        },
			        contact:function(){
						
						return  '<p style="font-size:30px;">Contact Us</p>'
						       +'<p>Name: Dr. Shih-Yuan Lin</p>'
						       +'<p>E-mail: syl@nccu.edu.tw</p>';
					},
					signup:function(){
						if(checkLog()){
			     	  	    window.location.href = 'index.html#profile';
						}
						else{
							return  '<h1>Sign up</h1>'
							       +'<div class="acrs_login">'
							          +'<label style="margin-left:42px;" for="acrs_username">User</label><input id="acrs_username" type="text">'
							          +'<label for="acrs_password">Password</label><input id="acrs_password" type="password">'
							          +'<label style="padding-left:22px;" for="acrs_email">E-mail</label><input id="acrs_email" type="email">'
							          +'<button style="margin:45px 0 0 105px;" class="acrs_btn" onclick="signup()">submit</button>'
							       +'</div>';
						}
					},
					login:function(){
						if(checkLog()){
			     	  	    window.location.href = 'index.html#profile';
						}
						else{
						    return  '<h1>Login</h1>'
							         +'<div class="acrs_login">'
							            +'<label style="margin-left:42px;" for="acrs_username">User</label><input id="acrs_username" type="text">'
							            +'<label for="acrs_password">Password</label><input id="acrs_password" type="password">'
							            +'<button style="margin:45px 0 0 105px;" class="acrs_btn" onclick="login()">submit</button>'
							         +'</div>';
						}
					},
					profile:function(){
						if(checkLog()){
							var current = Parse.User.current();
							return  '<h3>Profile</h3>'
							       +'<div class="acrs_profile">'
							          +'<label style="margin-left:10px;" for="acrs_name">Name</label><input id="acrs_name" type="text" value="'+current.get("name")+'">'
							          +'<label style="padding-left:33px;" for="acrs_tel">Tel</label><input id="acrs_tel" type="text" value="'+current.get("tel")+'">'
							          +'<label style="padding-left:3px;" for="acrs_email">e-mail</label><input id="acrs_email" value="'+current.get('email')+'" readonly>'
							          +'<label style="margin-left:-25px;" for="acrs_affiliation">Affiliation</label><input id="acrs_affiliation" type="text" value="'+current.get("affiliation")+'">'
							          +'<label style="padding-left:22px;" for="acrs_title">Title</label><input id="acrs_title" type="text" value="'+current.get("title")+'">'
							          +'<label style="margin-left:-33px" for="acrs_attendance">Attendance</label><input id="acrs_attendance" type="text" value="'+current.get("attendance")+'">'
							       +'</div>'
							       +'<br><center style="margin-top:15px;"><button class="acrs_btn" onclick="update()">update</button></center>';

						}
						else{
				     	  	window.location.href = 'index.html#login';
						}
					},
					upload:function(){
						if(checkLog()){
							var text = '<h3>PDF</h3>'
							          +'<label style="margin:8px 10px 8px 180px; font-size:16px;" for="acrs_file">upload PDF</label><input id="acrs_file" type="file">'
							          +'<br><center style="margin-top:15px;"><button class="acrs_btn" onclick="updateObj()">upload</button></center>';
							var pdfFile = Parse.Object.extend("File");
							var query = new Parse.Query(pdfFile);
							var current = Parse.User.current();
							query.equalTo("user",current);
							query.find({
								success:function(data){
								    text += '<div class="acrs_uploaded_pdf">'
									         +'<h4>Uploaded PDF</h4>'
									         +'<div class="acrs_uploaded_pdf_list"><div class="acrs_uploaded_pdf_list_title">Title</div>'
									         +'<div class="acrs_uploaded_pdf_list_delete">Manage</div>'
									       +'</div>';
									for(var i=0;i<data.length;i++){
										text += '<div class="acrs_uploaded_pdf_list">'
										          +'<div class="acrs_uploaded_pdf_list_title"><a href="'+data[i].get("file").url()+'">'+data[i].get("file").name().split("-").last()+'</a></div>'
										          +'<div class="acrs_uploaded_pdf_list_delete"><button class="acrs_btn" onclick="deleteObj(\''+data[i].id+'\')">delete</button></div>'
										       +'</div>';
									}
									Router.prototype.setView(text+'</div>');
								},
								error:function(data,error){
									alert('Find error');
								}
							});
						}
						else{
				     	    window.location.href = 'index.html#login';
						}
					},
					logout:function(){
						if(checkLog()){
						   Parse.User.logOut();
						}
			     	  	window.location.href = 'index.html#login';
					}
		};
		Router.prototype.page = function(){
		    var tag = (window.location.href.match(/#[a-zA-Z]*/g)==null?null:window.location.href.match(/#[a-zA-Z]*/g)[0].substr(1));
			(this.switchView.hasOwnProperty(tag) ? this.setView(this.switchView[tag]()) : this.setView(this.switchView['index']()));
		};
		Router.prototype.currentPage = function(){
		    return (window.location.href.match(/#[a-zA-Z]*/g)==null?null:window.location.href.match(/#[a-zA-Z]*/g)[0].substr(1));
		};
		Router.prototype.setView = function(text){
			$router.fadeOut('slow',function(){			        
					$router.fadeIn('slow').html(text);	
			});
		};	
		return Router;
	})();
	
    $(function() {
		window.router = new Router();			
	});
}).call(this);

$(document).ready(function(){
	checkLog();
    router.page();
});
$(window).on('hashchange', function() {
 	router.page();
});

function checkLog(){
  var current = Parse.User.current();
  if(current){
	  $('.unlogged').hide(function(){
		  $('.logged').fadeIn();
	  });
	  return true;
  }
  else{
	  $('.logged').hide(function(){
		  $('.unlogged').fadeIn();
	  	
	  });
	  return false;
  }	
}
function login(){
    Parse.User.logIn($('#acrs_username').val(),$('#acrs_password').val(),{
   	  success:function(data){
   	  	  window.location.href = 'index.html#profile';
   	  },
   	  error:function(data,error){
   		  alert("Login fail ");
   	  }
     });
}
function signup(){
	console.log($('#acrs_email').val());
    var user = new Parse.User();
     user.set("username",$('#acrs_username').val());
     user.set("password",$('#acrs_password').val());
     user.set("email",$('#acrs_email').val());
     user.signUp(null,{
   	  success: function(user){
		  alert("Success !!");
   	  	  window.location.href = 'index.html#login';
   	  },
   	  error: function(data,error){
   		  alert("Signup fail, REMEMBER one email account can ONLY signup ONCE");
   	  }
     }); 
}
function update(){
	var current = Parse.User.current();
	    current.set("name",$('#acrs_name').val());
	    current.set("tel",$('#acrs_tel').val());
	    current.set("affiliation",$('#acrs_affiliation').val());
	    current.set("title",$('#acrs_title').val());
	    current.set("attendance",parseInt($('#acrs_attendance').val()));
		current.save(null,{
			success:function(data){
				alert('profile update success');
			},
			error:function(data,error){
				alert('update error');
			}
		});		
}
function updateObj(){
	var current = Parse.User.current();
	if($("#acrs_file")[0].files.length > 0){
		var PdfFile = Parse.Object.extend("File");
		var file = new PdfFile();
		if($("#acrs_file")[0].files[0].name.split(".")[1]=="pdf"){
			file.set("user",current);
			file.set("file",new Parse.File($("#acrs_file")[0].files[0].name.split(".")[0], $("#acrs_file")[0].files[0]));
			file.save(null,{
				success:function(data){
					alert('file upload success');
					location.reload();
				},
				error:function(data,error){

		 	   		alert('update file error');
	    		}
	   		});
	   }
	   else{
		   alert('PDF file only !!');
	   } 
    }	
}
function deleteObj(objId){
	var pdfFile = Parse.Object.extend("File");
	var query = new Parse.Query(pdfFile);
	query.equalTo("objectId",objId);
	query.find({
		success:function(data){
			data[0].destroy({
				success:function(data){
					alert('delete success');
					location.reload();
				},
				error:function(data,error){
					alert('delete fail');
				}
			});
		},
		error:function(data,error){
			alert('find error');
		}
	});
}