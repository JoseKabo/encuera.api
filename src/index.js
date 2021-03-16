import app from './app';
import './connection';


app.listen(app.get('port'));
console.log('server on port', app.get('port'));