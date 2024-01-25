import app from './server';
const PORT = process.env.PORT || 3001;
app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
