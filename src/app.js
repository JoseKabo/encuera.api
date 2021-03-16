import express from 'express'
import IndexRoutes from './routes/index';

// auth routs
import SignInRoute from './routes/shared/signin';

const app = express();
app.use(express.json());
// settings
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.json({ msg: 'hi' });
});

app.use('/encuerapi/auth', SignInRoute);

export default app;