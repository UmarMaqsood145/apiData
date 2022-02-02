const express = require('express');
const app = express();
const port = 80;
const path = require('path');
app.use(express.static('./newFolder'));

app.get('/', (req, res)=>{
	res.sendFile(index.html);
});

app.get('/services', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './newFolder/services.html'));
});

app.get('/news',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './newFolder/news.html'));
});

app.get('/us_universities',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './newFolder/uni.html'));
});

app.get('/weather',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './newFolder/weather.html'));
});

app.all('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './newFolder/errorPage.html'));
});

app.listen(port, ()=>{
	console.log(`Server is running at http://localhost:${port}`);
});