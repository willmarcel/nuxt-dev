// Redirect vem do objeto context
export default ({ redirect }) => {
  console.log('teste midd nomeado');

  const loggedIn = false;

  if(!loggedIn) {
   return redirect('/');
  }
}
