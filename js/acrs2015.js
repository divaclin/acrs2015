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
				 	 	return '<div>index</div>';
			     	},
				 	theme:function(){
				  
				  		return '<div>theme</div>';
			        },
			  		date:function(){

				   	 	return '<div>date</div>';
			     	},
				 	transportation:function(){
			 
						return '<div>transportation</div>';
			  	 	},
					accommdation:function(){
				
			            return '<div>accommdation</div>';
			        },
			        contact:function(){
						
						return '<div>contact us</div>';
					},
					signup:function(){
						if(checkLog()){
			     	  	    window.location.href = 'index.html#profile';
						}
						else{
							return '<h1>Sign up</h1><div class="acrs_login"><label style="margin-left:10px;" for="acrs_username">Account</label><input id="acrs_username" type="text"><label for="acrs_password">Password</label><input id="acrs_password" type="password"><label style="padding-left:22px;" for="acrs_email">E-mail</label><input id="acrs_email" type="email"><button style="margin:45px 0 0 105px;" class="acrs_btn" onclick="signup()">submit</button></div>';
						}
					},
					login:function(){
						if(checkLog()){
			     	  	    window.location.href = 'index.html#profile';
						}
						else{
						    return '<h1>Login</h1><div class="acrs_login"><label style="margin-left:10px;" for="acrs_username">Account</label><input id="acrs_username" type="text"><label for="acrs_password">Password</label><input id="acrs_password" type="password"><button style="margin:45px 0 0 105px;" class="acrs_btn" onclick="login()">submit</button></div>';
						}
					},
					profile:function(){
						if(checkLog()){
							var current = Parse.User.current();
							var text = "";
							text  = '<div class="acrs_profile"><label style="margin-left:10px;" for="acrs_name">Name</label><input id="acrs_name" type="text" value="'+current.get("name")+'"><label style="padding-left:33px;" for="acrs_tel">Tel</label><input id="acrs_tel" type="text" value="'+current.get("tel")+'"><label style="padding-left:3px;" for="acrs_email">e-mail</label><input id="acrs_email" value="'+current.get('email')+'" readonly></div>';
							text += '<label style="margin:8px 10px 8px 180px; font-size:16px;" for="acrs_file">upload PDF</label><input id="acrs_file" type="file">';
							text += '<br><center style="margin-top:15px;"><button class="acrs_btn" onclick="update()">update</button></center>';
							var pdfFile = Parse.Object.extend("File");
							var query = new Parse.Query(pdfFile);
							query.equalTo("user",current);
							query.find({
								success:function(data){
								    text += '<div class="acrs_uploaded_pdf"><h4>Uploaded PDF</h4><div class="acrs_uploaded_pdf_list"><div class="acrs_uploaded_pdf_list_title">Title</div><div class="acrs_uploaded_pdf_list_delete">Manage</div></div>';
									for(var i=0;i<data.length;i++){
										text += '<div class="acrs_uploaded_pdf_list"><div class="acrs_uploaded_pdf_list_title"><a href="'+data[i].get("file").url()+'">'+data[i].get("file").name().split("-").last()+'</a></div><div class="acrs_uploaded_pdf_list_delete"><button class="acrs_btn" onclick="deleteObj(\''+data[i].id+'\')">delete</button></div></div>';
									}
									Router.prototype.setView('<h4>Profile</h4>'+text+'</div>');
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
		current.save(null,{
			success:function(data){
				alert('profile update success');
			},
			error:function(data,error){
				alert('update error');
			}
		});	
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