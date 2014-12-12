var postsData = [ 
{ 
	title: 'Introducing teelsecope', 
	author: 'Sacha greif',
	url: 'http://sachagreif.com/introducing-telescope'
}, 

{
	title: 'Meteor', 
	author: 'Tom Coleman',
	url: 'http://meteor.com'
}, 
{
	title: 'The Meteor Book', 
	author: 'Tom coleman',
	url: 'http://themeteorbook.com'
}
];

Template.postsList.helpers({
	posts:postsData
});


