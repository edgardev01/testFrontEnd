const app = express();

app.use(express.static(__dirname+'/dist/testFrontEnd'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/testFrontEnd/index.html'));
});

app.listen(process.env.PORT || 8080);