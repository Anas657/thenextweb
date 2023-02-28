export default function Header(props) {
    console.log ("props" , props);
    
    
    return (
        <header id='Header'>
            
            <hr />
                <h1>Header</h1>
                <div className={"Company_Name"}>TheNextWeb.com</div>
               {props.userinfo && (
                <>

                <h3>This is the user info from props</h3>
                <p>Full Name:{props.userinfo.FullName}</p>
                <p>Age:{props.userinfo.Age}</p>
                <p>Company:{props.userinfo.Company}</p>
                 <h4>friendlist</h4>
                {props.userinfo.friendlist.map((friend) => {
                     return <div>friend name: {friend.name}</div>;
                 })}    
                </>
               )}
              <hr />
              </header>
    
    );
}
