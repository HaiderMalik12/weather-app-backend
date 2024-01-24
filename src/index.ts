import app from './server';

app.listen(process.env.PORT, () => {
  console.log('Server is running at port 3001');
});
