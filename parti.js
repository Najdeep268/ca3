const path=require('path');
var express=require('express');
const hbs = require('hbs');

var app = express();
//const pubpath=path.join(__dirname,'./public');
const path1=path.join(__dirname,'./template/views');
const path2=path.join(__dirname,'./template/partials');

app.set('view engine', 'hbs');

app.set('views',path1);

hbs.registerPartials(path2);

//app.use(express.static(pubpath));
app.get('',(req,res) =>{
	res.render('home'
	);
});

app.get('/booking',(req,res) =>{
	res.render('booking');
});
app.get('/status',(req,res) =>{
	res.render('status');
});
app.get('/update',(req,res) =>{
	res.render('update');
});
app.get('/cancel',(req,res) =>{
	res.render('cancel');
});


app.get('/about',(req,res) =>{
	res.render('about');
});

app.get('/help',(req,res) =>{
	res.render('help');
});

app.get('/author',(req,res) =>{
	res.render('author',
	{me:'Dora'});
});

app.get('/home',(req,res) =>{
	res.render('home',
	{me:'Simran'});
});




const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});