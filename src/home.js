

function HomePage(){
     return (
    <div className="App">
    {(user.email !== "") ? 
    ( 
      <div className="welcome">
        <h2>Welcome <span>{user.name}</span> </h2>
        <button onClick = {Logout}>Logout</button>
         </div>
    ) : 
    (
      <LoginForm Login = {Login} error = {error}/>
    )}
    </div>
  );
}