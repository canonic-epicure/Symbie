declare( 'SymbieOrg::I18n::en', function (use) {
	
	SymbieOrg.I18n.en = {
		
		language : 'en',
		
		site : {
			title_prefix : 'Symbie: ',
			default_title : 'Symbie.org'
		},
		
		Home : {
			displayName : 'Home page',
			greeting : 'Welcome to Symbie project',
			news : 'news',
			testimonials : 'testimonials',
			learn_more : 'learn more..',
			samples : 'samples',
			
			overview : 'In a nutshell',
			
			newsContent : {
				n1 : {
					title : '2008/11/25 - Initial release of the projects web-site',
					text : 'We proudly presents our site to the external world.'
				},
				n2 : {
					title : '2008/11/25 - Greeting to our first forum member!',
					text : 'Greeting to our first forum member - hendricd!'
				}
			},
			
			zoom_hint : '<span class="lightgray">click to zoom *</span>'
		},
		
		MainLayout : {
			copyright : 'All rights reserved'
		},
		
		mainMenu : {
			home : 'home',
			about : 'about',
			download : 'download',
			forum : 'forum',
			wiki : 'wiki'
		},
		
		accounting : {
			name : 'name',
			password : 'password',
			login : 'login',
			register : 'register',
			forgot : 'forgot password?'
		},
		
		About : {
			title : 'What exactly is Symbie?',
			advantages : 'And what are the advantages of this approach?',
			drawbacks : 'Hm... pure JavaScript, what about SEO then?',
			difference : 'What is the difference from the Ext library itself?'
		}
		
		
		
//		words : {
//			wrote : 'Wrote',
//			about : 'about',
//			place : 'place',
//			photo : 'photo',
//			Place : 'Place',
//			Photo : 'Photo',
//			comments_num : 'Comments',
//			photo_num : 'Photos',
//			place_visited : 'Place visited',
//			place_added : 'Place added',
//			search : 'Search',
//			create_new : 'Add new',
//			added_by : 'Added by',
//			Rating : 'Rating',
//			Details : 'Details...',
//			votes_num : 'votes',
//			Votes_num : 'Votes',
//			from : ' from ',
//			Step : 'Step',
//			till : 'till',
//			
//			StartingFrom : 'From',
//			Message : 'Message',
//			
//			Walker : 'Walker',
//			Country : 'Country'
//		},
//		
//		
//		LanguageChange : 'Language',
//		
//		actionToolBar : {
//			next : 'Next',
//			prev : 'Previous',
//			first : 'First',
//			last : 'Last',
//			refresh : 'Refresh',
//			add : 'Add new' 
//		},
//		
//		AccountMenu : {
//			my_friends : 'My friends',
//			my_messages : 'My messages',
//			my_photos : 'My photos',
//			my_places : 'My places'
//		},
//		
//		Place : {
//			All : {
//				all_world_places : 'All world places',
//				find_place : 'Find place',
//				
//				find_place_hint : 'Restrict the search region with the map, or enter the address of the place',
//				filter_title: 'Filter by place type',
//				
//				Sights : 'Sights',
//				Transport : 'Transport',
//				Food : 'Food',
//				Infrastructure : 'Infrastructure',
//				Organizations : 'Organizations',
//				Entertainment : 'Entertainment',
//				
//				displayName : 'All places'
//			},
//			
//			Single : {
//				description : 'Description',
//				comments : 'Comments',
//				vote_place : 'Vote for place'
//			},
//			
//			Add : {
//				title : 'Adding new place',
//				nextButtonText : 'Next &gt;',
//				prevButtonText : '&lt; Previos',
//				
//				Connection : 'Please point your connection with this place',
//				In_this_place : 'In this place I:',
//				category_title: 'This place can be refer as:',
//				
//				relType : {
//					Vacation : 'Had a vacation',
//					Business : 'Was on business trip',
//					Lived : 'Lived',
//					Dream : 'Dreams to visit',
//					Transit : 'Was in transit',
//					Plan : 'Planning to visit'
//				},
//				
//				title_geo : 'Where is this place geographically',
//				marker_hint : 'Place marker with double click or use the search',
//				place_adr : 'Place address',
//				
//				title_desc : 'Describe the place',
//				description_hint : 'Specify the name of the place and its description.',
//				place_name : 'Place name',
//				short_desc : 'Short description',
//				
//				add_success : 'Place was successfully added',
//				geocode_failed : 'Address not found. You can try to specify the spelling, or find the place manully on the map.'
//			}
//		},
//		
//		People : {
//			send_message : 'send a message',
//			invite_to_friends : 'invite to friends',
//			favorite_places : 'Favorite places',
//			hobbies : 'Hobbies',
//			
//			displayName : 'Our walkers'
//		},
//		
//		
//		UploadDialog : {			
//			photo_name : 'Title',
//			chosen_file : 'Chosen file',
//			title : 'Choose file to upload'
//		},
//		
//		
//		Rating : {
//			your_vote : 'Your vote',
//			add_success : 'Your vote was successfully added'
//		},
//		
//		
//		Actions : {
//			add : 'Add',
//			upload : 'Upload',
//			cancel : 'Cancel',
//			ready : 'Ready!',
//			change : 'change',
//			Choose : 'Choose'
//		},
//		
//		
//		AddComment : {
//			title : 'Post new comment'
//		},
//		
//		
//		User : {
//			Single : {
//				friends : 'Friends',
//				photos : 'Photos',
//				places : 'Places',
//				
//				not_filled : 'not filled',
//				country_city : 'Country, city',
//				full_name : 'Full name',
//				dob : 'Date of birth',
//				phone : 'Phone',
//				blog : 'Blog',
//				hobbies : 'hobbies',
//				
//				Was_on_vacation : 'Was on vacation',
//				Was_on_business_trip : 'Was on business trip',
//				Lived : 'Lived'
//			},
//			
//			Account : {
//				displayName : 'Your account',
//				
//				my_friends : 'My friends',
//				my_messages : 'My messages',
//				my_photos : 'My photos',
//				my_places : 'My places',
//				avatar_hint : 'To change your avatar drag the new photo onto it',
//				
//				edit_hint : 'click to edit'
//			}
//		},
//		
//		DataView : {
//			emptyText : 'not found'
//		},
//		
//		Photo : {
//			Single : {
//				vote_photo : 'Vote for photo'
//			},
//			
//			All : {
//				displayName : 'All photos'
//			}
//		},
//		
//		InviteMenu : {
//			here_can_be : 'Here can be <br>Your photo'
//		},
//		
//		Authentication : {
//			login_success : 'You have successfully logged in',
//			register_success : 'You have successfully registered',
//			Password : 'Password',
//			Password_again : 'Password again',
//			remember_me : 'remember me',
//			
//			already_reged : 'Already registered?',
//			ready : 'Ready!',
//			Nickname : 'Nickname',
//			not_reged_yet : 'Not registered yet?',
//			to_continue : 'To continue please log into your account',
//			
//			welcome : 'Welcome to the World Of Travelling!',
//			
//			invite1 : 'After registration you can fully use this site',
//			invite2 : 'create your own page about each travel',
//			invite3 : 'told everyone about your amazing travels,',
//			invite4 : 'share your travel experience,',
//			invite5 : 'find fellow travellers,',
//			invite6 : 'ask questions and answer on others questions,',
//			invite7 : 'find new interes place, where you definetely should go some day.',
//			
//			enter_email : 'Enter your email',
//			your_nick : 'Your nickname'
//		},
//		
//		PagerInfo : {
//			no_data : 'No data',
//			till : ' till ',
//			from : ' from ',
//			pages : '<br> Pages: '
//		}
		
	};

}); //eof declare